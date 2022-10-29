import queryString from 'query-string';
import { useCallback, useMemo, useState } from 'react';

import { useAppContext } from '../context';

export function usePrice() {
  const [day, setDay] = useState(1);
  const [km, setKm] = useState(5);

  const { query, setQuery } = useAppContext();

  const fetchReloadDataWithNewPrices = useCallback(async () => {
    const q = queryString.parse(query);
    setQuery(
      queryString.stringify({ ...q, day, km }, { skipEmptyString: true, skipNull: true })
    );
  }, [day, km, query, setQuery]);

  const hookValue = useMemo(
    () => ({ day, km, setDay, setKm, fetchReloadDataWithNewPrices }),
    [day, fetchReloadDataWithNewPrices, km]
  );

  return hookValue;
}
