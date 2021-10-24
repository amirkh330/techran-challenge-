import React from "react";
import LayoutApp from "./libs/Layout/LayoutApp";
import Routes from "./libs/Component/Routes/Routes";
import store from "./libs/StateManegment/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <LayoutApp>
        <Routes />
      </LayoutApp>
      </Provider>
    </>
  );
}
