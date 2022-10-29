import { createContext, useContext } from 'react';

import type { ICar } from '../interfaces/car.interface';

type TAppContext = {
  cars: ICar[];
  setCars: (cars: ICar[]) => void;
  loading: boolean;
  setLoading: (cars: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

export const AppContext = createContext<TAppContext>(null!);
export const useAppContext = () => useContext(AppContext);
