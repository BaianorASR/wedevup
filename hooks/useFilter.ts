import queryString from 'query-string';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useAppContext } from '../context';
import { CarsApi } from '../services/api';

export function useFilter() {
  const [distance, setDistance] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hasFilter, setHasFilter] = useState<boolean>(false);

  const { setQuery, query } = useAppContext();

  const fetchFilteredData = useCallback(async () => {
    const Q = queryString.parse(query);
    setQuery(
      queryString.stringify(
        { ...Q, distance: distance || '', duration: duration || '' },
        { skipEmptyString: true, skipNull: true }
      )
    );

    setHasFilter(!!distance || !!duration);
  }, [distance, duration, query, setQuery]);

  const reFetchData = useCallback(async () => {
    const { distance, duration, ...q } = queryString.parse(query);
    setQuery(queryString.stringify({ ...q }, { skipEmptyString: true, skipNull: true }));
    setHasFilter(false);
  }, [query, setQuery]);

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
