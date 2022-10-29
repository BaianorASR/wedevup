import type { NextApiRequest, NextApiResponse } from 'next';

import type { ICar } from '../../interfaces/car.interface';
import { addIncrementId } from '../../util/add-increment-id';
import { calculeCarPrice } from '../../util/calcule-car-price';
import CarsData from './db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<ICar[]>) {
  let data = addIncrementId(CarsData);

  if (req.method === 'GET') {
    const { distance, duration } = req.query;

    if (duration) {
      data = data.filter(item => item.availability.maxDuration <= Number(duration));
    }

    if (distance) {
      console.log('distance', distance);
      data = data.filter(item => item.availability.maxDistance <= Number(distance));
    }

    return res.json(data);
  }

  if (req.method === 'POST') {
    const { day, km } = req.body;

    data = data.map(item => {
      return {
        ...item,
        price: calculeCarPrice(item, day, km),
      };
    });

    return res.json(data);
  }
}
