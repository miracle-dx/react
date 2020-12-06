import React, { Component } from "react";
import { ThemeContext } from "../../Context";
import "./index.scss";

class ContextTypePage extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { themeColor } = this.context;
    return (
      <div>
        <h3 className={themeColor}>contextTypePage</h3>
      </div>
    );
  }
}

export default ContextTypePage;
