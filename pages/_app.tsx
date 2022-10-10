import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";
import { store } from "@redux/app/store";

import "@styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>El Tiempo</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
