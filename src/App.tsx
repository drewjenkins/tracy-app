'use es6';

import React from 'react';
import './index.css';
import useStore from './store/store';

type AppProps = {};

const App = (props: AppProps) => {
  const foo = useStore((s) => s.universalSlice.foo);

  return <div className="text-cyan-400">{foo}</div>;
};

export default App;
