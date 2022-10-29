import { ICar } from '../interfaces/car.interface';

export const calculeCarPrice = (car: ICar, day: number, km: number) => {
  let price = 0;

  if (day) {
    price += day * car.pricePerDay;

    switch (true) {
      case day > 10:
        price = price * 0.5;
        break;
      case day > 4:
        price = price * 0.7;
        break;
      case day > 1:
        price = price * 0.9;
    }
  }

  if (km) {
    price += km * car.pricePerKm;
  }

  //   - price per day decreases by 10% after 1 day
  // - price per day decreases by 30% after 4 days
  // - price per day decreases by 50% after 10 days

  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
