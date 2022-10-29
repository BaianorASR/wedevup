import queryString from 'query-string';
import { useEffect, useMemo, useRef, useState } from 'react';

import { ICarResponse } from '../interfaces/car-response.interface';
import { ICar } from '../interfaces/car.interface';
import { CarsApi } from '../services/api';
import { AppContext } from '.';

type TAppContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function AppContextProvider({ children }: TAppContextProviderProps) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState('page=1');
  const lastQuery = useRef(query);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await CarsApi.get('/cars?page=1')
        .then(({ data }) => {
          setCars(data.items);
          setTotalPage(data.totalPage);
        })
        .catch(console.warn);
      // .finally(() => setLoading(false));
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (query === lastQuery.current) return;

    (async () => {
      await CarsApi.get<ICarResponse>(`/cars?${query}`)
        .then(({ data }) => {
          setCars(data.items);
          setTotalPage(data.totalPage);
          lastQuery.current = query;
        })
        .catch(console.warn)
        .finally(() => setLoading(false));
    })();
  }, [query]);

  useEffect(() => {
    const { page: p, ...q } = queryString.parse(query);
    setQuery(
      queryString.stringify(
        { ...q, page: page },
        { skipEmptyString: true, skipNull: true }
      )
    );
  }, [page]);

  const value = useMemo(
    () => ({
      cars,
      loading,
      setCars,
      setLoading,
      query,
      setQuery,
      page,
      setPage,
      totalPage,
    }),
    [cars, loading, page, query, totalPage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
