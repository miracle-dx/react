/*
 * @Author: miracle
 * @Date: 2020-12-04 01:59:38
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import myFirstStore from "./mobxStore";
import { Provider } from "mobx-react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myFirstStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
