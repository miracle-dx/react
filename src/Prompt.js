/*
 * @Author: miracle
 * @Date: 2020-12-05 10:49:01
 * @Description: 
 */
// 暗号：哈密瓜
import React from "react";
import Lifecycle from "./Lifecycle.js";
import RouterContext from "./RouterContext.js";

function Prompt({ message, when = true }) {
    return (
      <RouterContext.Consumer>
        {context => {
  
          if (!when) return null;
  
          const method = context.history.block;
  
          return (
            <Lifecycle
              onMount={self => {
                self.release = method(message);
              }}
              onUnmount={self => {
                self.release();
              }}
              message={message}
            />
          );
        }}
      </RouterContext.Consumer>
    );
  }
  export default Prompt;