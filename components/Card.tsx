import { Card as C } from 'flowbite-react';

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
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {car.model}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{car.brand}</p>
      </C>
    </div>
  );
}
