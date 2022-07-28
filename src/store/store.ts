import { UniversalSlice, createUniversalSlice } from './universalSlice';
import create from 'zustand';
import debounce from 'lodash/debounce';

const store = create<UniversalSlice>()(
  (setState, getState, storeAPI, storeMutations) => ({
    ...createUniversalSlice(setState, getState, storeAPI, storeMutations),
  })
);

store.subscribe(
  debounce((state) => {
    (window as any).PL = state;
  }, 1000)
);
(window as any).PL = store.getState();

export default store;
