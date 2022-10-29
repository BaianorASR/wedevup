import { use, useEffect, useMemo, useState } from 'react';

import { ICar } from '../interfaces/car.interface';
import { AppContext } from '.';

type TAppContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

async function loaderFetchCars() {}

export function AppContextProvider({ children }: TAppContextProviderProps) {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api/cars');
      const json = await res.json();
      setCars(json);
    })();
  }, []);

  const value = useMemo(
    () => ({
      cars,
      setCars,
    }),
    [cars, setCars]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
