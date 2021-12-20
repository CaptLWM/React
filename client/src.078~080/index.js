import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers); //store 생성

const listener = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

store.subscribe(listener);
listener();
