/*
 * @Author: miracle
 * @Date: 2020-12-05 10:52:25
 * @Description: 
 */
// 暗号：哈密瓜
import React from "react";
class Lifecycle extends React.Component {
    componentDidMount() {
      if (this.props.onMount) 
      this.props.onMount.call(this, this);
    }
    componentWillUnmount() {
      if (this.props.onUnmount)
      this.props.onUnmount.call(this, this);
    }
  
    render() {
      return null;
    }
  }
  export default Lifecycle;