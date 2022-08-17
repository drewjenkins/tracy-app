import { lens } from '@dhmk/zustand-lens';

export interface UniversalSlice {
  foo: string;
}

export const universalSlice: UniversalSlice = lens((setState, getState) => ({
  foo: 'bar',
}));
