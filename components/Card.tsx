import { Badge, Card as C } from 'flowbite-react';
import { Coins } from 'phosphor-react';

import { ICar } from '../interfaces/car.interface';

type CardProps = {
  car: ICar;
};

export function Card({ car }: CardProps) {
  return (
    <div className="max-w-xs">
      <C
        imgSrc={`/pictures/${car.id}.jpg`}
        className="hover:border-we-green hover:scale-105 transition-all"
      >
        <h5 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900">
          {car.model}
        </h5>
        <p className="dark:text-gray-400 font-normal text-gray-700">{car.brand}</p>
        <Badge icon={Coins as any} className="w-fit gap-3 px-4" color="success">
          {car.price}
        </Badge>
      </C>
    </div>
  );
}
