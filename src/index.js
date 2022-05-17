import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Apps from "./realTask/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Age from "./age/age";
import Calci from "./calculator/calci";
import Table from "./table/table";
import Api from "./api/api";
import { TypeTest } from "./typeTest/typeTest";
import { LetsCode } from "./learnings/letsCode";

export const positive = () => ({ type: "positive" });
export const negative = () => ({ type: "negative" });

//Reducer
const counter = (state = false, action) => {
  switch (action.type) {
    case "positive":
      return (state = true);
    case "negative":
      return (state = false);
    default:
      return state;
  }
};

// Store
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// Dispath

// store.dispatch(increm());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Apps /> */}
        {/* <Age /> */}
        {/* <Calci /> */}
        {/* <Table /> */}
        {/* <Api /> */}
        <TypeTest />
        {/* <LetsCode /> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
