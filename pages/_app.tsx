import '../node_modules/flowbite/dist/flowbite.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { AppContextProvider } from '../context/provider';
import { MainLayout } from '../layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContextProvider>
  );
}
