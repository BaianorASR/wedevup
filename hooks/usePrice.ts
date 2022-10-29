import { useCallback, useMemo, useState } from 'react';

import { useAppContext } from '../context';
import { CarsApi } from '../services/api';

export function usePrice() {
  const [days, setDays] = useState(1);
  const [km, setKm] = useState(5);

  const { setCars, setLoading } = useAppContext();

  const fetchReloadDataWithNewPrices = useCallback(async () => {
    setLoading(true);
    await CarsApi.post('/cars', { days, km })
      .then(({ data }) => setCars(data))
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [days, km, setCars, setLoading]);

  const hookValue = useMemo(
    () => ({ days, km, setDays, setKm, fetchReloadDataWithNewPrices }),
    [days, fetchReloadDataWithNewPrices, km]
  );

  return hookValue;
}
