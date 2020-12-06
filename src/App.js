/*
 * @Author: miracle
 * @Date: 2020-12-04 01:59:38
 * @Description:
 */
import React from "react";
import "./App.scss";
import Mobx from "./page/Mobx";
import ContextPage from "./page/ContextPage";
import RouterPage from "./page/RouterPage";

const App = () => {
  return (
    <div>
      <Mobx />
      <ContextPage />
      <RouterPage />
    </div>
  );
};

export default App;
