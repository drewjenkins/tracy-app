"use es6";

import React from "react";

type AppProps = {};

const App = (props: AppProps) => {
  const [foo, useFoo] = React.useState();
  React.useEffect(() => {}, []);

  return <div>Hey Tracy!</div>;
};

export default App;
