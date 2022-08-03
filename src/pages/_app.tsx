import React from "react";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { FavouriteTownStore } from "../store/FavouriteTownStore";
import { ICoords } from "../models/Coords";
import { store } from "../store/store";
export const Context = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={store}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
