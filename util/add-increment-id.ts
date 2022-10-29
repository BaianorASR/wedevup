import { ICar } from '../interfaces/car.interface';
import { calculeCarPrice } from './calcule-car-price';

export function addIncrementId(data: Omit<ICar, 'id' | 'price'>[]): ICar[] {
  return data.map((item, index) => ({
    ...item,
    price: calculeCarPrice(item, 1, 5),
    id: index + 1,
  }));
}
