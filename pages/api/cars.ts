import type { NextApiRequest, NextApiResponse } from 'next';

import CarsData from '../../data/db.json';
import type { ICar } from '../../interfaces/car.interface';
import { addIncrementId } from '../../util/add-increment-id';
import { calculeCarPrice } from '../../util/calcule-car-price';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  let data = addIncrementId(CarsData);

  if (req.method === 'POST') {
    const { day, km } = req.body;
    console.log(day);

    data = data.map((item) => {
      return {
        ...item,
        price: calculeCarPrice(item, day, km),
      };
    });

    res.json(data);
  } else {
    const { distance, duration } = req.query;
    if (duration) {
      data = data.filter((item) => item.availability.maxDuration <= Number(duration));
    }
    if (distance) {
      data = data.filter((item) => item.availability.maxDistance <= Number(distance));
    }
    res.json(data);
  }
}
