import { ICar } from '../interfaces/car.interface';

export function calculeCarPrice(car: any, day = 1, km = 5) {
  let price = car.pricePerDay * day;
  console.log(car.pricePerDay, day);

  switch (true) {
    case day > 10:
      price = price * 0.5;
      break;
    case day > 4:
      price = price * 0.7;
      break;
    default:
      price = price * 0.9;
  }

  price += km * car.pricePerKm;

  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
