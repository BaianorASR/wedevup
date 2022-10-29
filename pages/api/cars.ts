import type { NextApiRequest, NextApiResponse } from 'next';

import CarsData from '../../data/db.json';
import { addIncrementId } from '../../util/add-increment-id';
import { calculeCarPrice } from '../../util/calcule-car-price';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  let data = addIncrementId(CarsData);

  const perPage = 8;

  const { distance, duration, page, day = 1, km = 5 } = req.query;
  data = data.map((item) => {
    return {
      ...item,
      price: calculeCarPrice(item, +day, +km),
    };
  });

  if (duration) {
    data = data.filter((item) => item.availability.maxDuration <= Number(duration));
  }
  if (distance) {
    data = data.filter((item) => item.availability.maxDistance <= Number(distance));
  }

  const total = data.length;
  const start = (Number(page) - 1) * perPage;
  const end = start + perPage;
  data = data.slice(start, end);

  res.json({
    total,
    perPage,
    items: data,
    totalPage: Math.ceil(total / perPage),
  });
}
