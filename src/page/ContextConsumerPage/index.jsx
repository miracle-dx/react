import React, { Component } from "react";
import { ThemeContext, UserContext } from "../../Context";
import "./index.scss";

class ContextTypePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(themeContext) => (
            <>
              <h3 className={themeContext.themeColor}>ContextCusmerPage</h3>
              <UserContext.Consumer>
                {(userContext) => (
                  <>
                    <p>{userContext.name}</p>
                  </>
                )}
              </UserContext.Consumer>
            </>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default ContextTypePage;
