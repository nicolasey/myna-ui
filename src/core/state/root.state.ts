import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';

class RootStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const root = new RootStore();
export const RootContext = createContext<RootStore>(root);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGlobalContext = () => useContext(RootContext);
