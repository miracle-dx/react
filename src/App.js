/*
 * @Author: miracle
 * @Date: 2020-12-04 01:59:38
 * @Description:
 */
import React from "react";
import "./App.scss";
import Mobx from "./page/Mobx";
import ContextPage from "./page/ContextPage";

const App = () => {
  return (
    <div>
      <Mobx />
      <ContextPage />
    </div>
  );
};

export default App;
