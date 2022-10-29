import { ICar } from './car.interface';

export interface ICarResponse {
  items: ICar[];
  total: number;
  perPage: number;
  totalPage: number;
}
