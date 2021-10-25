import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Route component={Home} exact path="/" />
    </Provider>
  );
}

export default App;
