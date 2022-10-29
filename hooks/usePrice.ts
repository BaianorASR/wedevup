import { useCallback, useMemo, useState } from 'react';

import { useAppContext } from '../context';
import { CarsApi } from '../services/api';

export function usePrice() {
  const [day, setDay] = useState(1);
  const [km, setKm] = useState(5);

  const { setCars, setLoading } = useAppContext();

  const fetchReloadDataWithNewPrices = useCallback(async () => {
    setLoading(true);
    await CarsApi.post('/cars', { day, km })
      .then(({ data }) => setCars(data))
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [day, km, setCars, setLoading]);

  const hookValue = useMemo(
    () => ({ day, km, setDay, setKm, fetchReloadDataWithNewPrices }),
    [day, fetchReloadDataWithNewPrices, km]
  );

  return hookValue;
}
