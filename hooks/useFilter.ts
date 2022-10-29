import { useCallback, useMemo, useState } from 'react';

import { useAppContext } from '../context';
import { CarsApi } from '../services/api';

export function useFilter() {
  const [distance, setDistance] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hasFilter, setHasFilter] = useState<boolean>(false);

  const { setCars, setLoading } = useAppContext();

  const fetchFilteredData = useCallback(async () => {
    setLoading(true);

    let queryString = '';
    if (distance) queryString += `distance=${distance}`;
    if (duration) {
      if (queryString) queryString += '&';
      queryString += `duration=${duration}`;
    }

    await CarsApi.get(`/cars?${queryString}`)
      .then(({ data }) => {
        setCars(data);
        setHasFilter(true);
      })
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [distance, duration, setCars, setLoading]);

  const reFetchData = useCallback(async () => {
    setLoading(true);

    return CarsApi.get(`/cars`)
      .then(({ data }) => {
        setCars(data);
        setHasFilter(false);
      })
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [setCars, setLoading]);

  const hookValue = useMemo(
    () => ({
      fetchFilteredData,
      distance,
      duration,
      hasFilter,
      reFetchData,
      setHasFilter,
      setDistance,
      setDuration,
    }),
    [distance, duration, fetchFilteredData, hasFilter, reFetchData]
  );

  return hookValue;
}
