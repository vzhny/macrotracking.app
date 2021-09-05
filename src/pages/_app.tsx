import { AppProps } from 'next/app';

import AppHeader from '@/layout/AppHeader';

import '@/styles/main.scss';
import 'bootswatch/dist/lumen/bootstrap.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
