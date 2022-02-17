"use es6";

import React from "react";
import "./index.css";

type AppProps = {};

const App = (props: AppProps) => {
  const [foo, useFoo] = React.useState();
  React.useEffect(() => {}, []);

  return <div className="text-cyan-400">Hey Tracy!</div>;
};

export default App;
