import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./index.scss";

export default function UseContextPage(params) {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h3 className={themeContext.themeColor}>useContextPage</h3>
    </div>
  );
}
