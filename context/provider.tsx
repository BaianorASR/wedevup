import { use, useEffect, useMemo, useState } from 'react';

import { ICar } from '../interfaces/car.interface';
import { CarsApi } from '../services/api';
import { AppContext } from '.';

type TAppContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

async function loaderFetchCars() {}

export function AppContextProvider({ children }: TAppContextProviderProps) {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    (async () => {
      CarsApi.get('/cars').then(({ data }) => setCars(data));
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
