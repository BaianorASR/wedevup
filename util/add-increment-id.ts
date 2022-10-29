import { ICar } from "../interfaces/car.interface";

export function addIncrementId(data: Omit<ICar, "id">[]): ICar[] {
  return data.map((item, index) => ({ ...item, id: index + 1 }));
}
