import type { NextApiRequest, NextApiResponse } from 'next';

import type { ICar } from '../../interfaces/car.interface';
import { addIncrementId } from '../../util/add-increment-id';
import CarsData from './db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<ICar[]>) {
  if (req.method === 'GET') {
    const { distance, duration } = req.query;
    let data = addIncrementId(CarsData);

    if (duration) {
      data = data.filter(item => item.availability.maxDuration <= Number(duration));
    }

    if (distance) {
      console.log('distance', distance);
      data = data.filter(item => item.availability.maxDistance <= Number(distance));
    }

    return res.json(data);
  }
}
