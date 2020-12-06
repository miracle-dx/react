import React, { Component } from "react";
import { ThemeContext, UserContext } from "../../Context";
import ContextTypePage from "../CondextTypePage";
import ContextConsumerPage from "../ContextConsumerPage";
import UseContextPage from "../UseContextPage";

class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
      user: {
        name: "context consumer",
      },
    };
    this.changeThemeColor = this.changeThemeColor.bind(this);
  }
  changeThemeColor() {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "green" : "red",
      },
    });
  }
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <button onClick={this.changeThemeColor}>改变子组件的字体颜色</button>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <ContextConsumerPage />
            <UseContextPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ContextPage;
