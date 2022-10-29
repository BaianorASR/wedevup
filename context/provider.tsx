import { use, useEffect, useMemo, useState } from 'react';

import { ICar } from '../interfaces/car.interface';
import { CarsApi } from '../services/api';
import { AppContext } from '.';

type TAppContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function AppContextProvider({ children }: TAppContextProviderProps) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await CarsApi.get('/cars')
        .then(({ data }) => setCars(data))
        .catch(console.warn)
        .finally(() => setLoading(false));
    })();
  }, []);

  const value = useMemo(
    () => ({
      cars,
      loading,
      setCars,
      setLoading,
    }),
    [cars, loading]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
