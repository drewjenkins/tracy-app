import { UniversalSlice, universalSlice } from './universalSlice';
import create from 'zustand';
import debounce from 'lodash/debounce';
import { withLenses } from '@dhmk/zustand-lens';

export type Store = {
  universalSlice: UniversalSlice;
};

const store = create<Store>(
  withLenses({
    universalSlice,
  })
);

store.subscribe(
  debounce((state) => {
    (window as any).PL = state;
  }, 1000)
);
(window as any).PL = store.getState();

export default store;
