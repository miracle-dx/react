import React from "react";
import { Route, Link } from "react-router-dom";
import Detail from "./Detail";

const Product = ({ match, location, history }) => {
  console.info(match, location, history);
  const { id } = match.params;
  const { url } = match;
  return (
    <div>
      <h3>Product-{id}</h3>
      <h3>嵌套路由</h3>
      <Link to={url + "/detail"}>detail</Link>
      <Route path={url + "/detail"} component={Detail} />
    </div>
  );
};

export default Product;
