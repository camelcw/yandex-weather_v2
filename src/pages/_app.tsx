import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { store } from "../store/store";
import Router from "next/router";
import MyLoader from "../components/layout/loader/MyLoader";
/** Контекст приложения */
export const Context = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <Context.Provider value={store}>
          <Component {...pageProps} />
        </Context.Provider>
      )}
    </>
  );
}
