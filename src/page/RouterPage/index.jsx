import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import RenderComp from "./RenderComp";
import Product from "./Product";
import "./index.scss";

class RouterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Route</h2>
        <Router>
          <nav>
            <Link to="/">首页</Link>
            <Link to="/user">用户中心</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route render={() => <h3>404</h3>} />
          </Switch>
        </Router>
        <hr />
        <h2>RouteChildren</h2>
        <Router>
          <ul>
            <ListItemLink to="/a" name="a page" />
            <ListItemLink to="/b" name="b page" />
          </ul>
        </Router>
        <h2>RouteRender</h2>
        <Router>
          <nav>
            <Link to="/c">简单的内联渲染</Link>
            <Link to="/d">渲染组件</Link>
          </nav>
          <Route path="/c" render={() => <div>routeRender</div>} />
          <Route path="/d" render={() => <RenderComp />} />
        </Router>
        <h3>动态路由</h3>
        <Router>
          <Link to={"/product/123"}>搜索</Link>
          <Route path="/product/:id" component={Product} />
        </Router>
        <h3>API</h3>
        <Router>
          <Link
            to={{
              pathname: "/courses",
              search: "?sort=name",
              hash: "#the-hash",
              state: {
                redirect: "/login",
              },
            }}
          >
            Link
          </Link>
          {/* <Redirect
            to={{
              pathname: "/login",
              search: "?utm=your+face",
              state: {
                referrer: "currentLocation",
              },
            }}
          >
            Ridirect
          </Redirect> */}
        </Router>
      </div>
    );
  }
}
function ListItemLink({ to, name, ...res }) {
  return (
    <Route
      children={({ location }) => {
        return (
          <li className={location.pathname === to ? "active" : null}>
            <Link to={to} {...res}>
              {name}
            </Link>
          </li>
        );
      }}
    />
  );
}

export default RouterPage;
