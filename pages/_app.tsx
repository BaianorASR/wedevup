import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { HeaderOrganism } from '../components/Header';
import { AppContextProvider } from '../context/provider';
import { MainLayout } from '../layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <HeaderOrganism />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContextProvider>
  );
}
