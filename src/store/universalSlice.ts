import create, { StateCreator } from 'zustand';

export interface UniversalSlice {
  foo: string;
}

export const createUniversalSlice: StateCreator<
  UniversalSlice,
  [],
  [],
  UniversalSlice
> = (setState, getState) => ({
  foo: 'bar',
});
