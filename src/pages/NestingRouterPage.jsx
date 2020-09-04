import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";

export default function NestingRouterPage(props) {
  return (
    <div>
      <BrowserRouter>
        <Link to="/product/123">搜索</Link>
        <Link to="/product1/Detail">Detail</Link>
        <Switch>
          <Route path="/product/:id" component={Product} />
          <Route path="/product1/Detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
function Product({ match }) {
  console.log("match", match); //sy-log
  const { params, url } = match;
  const { id } = params;
  return (
    <div>
      <h1>Search-{id}</h1>
      <Link to={url + "/detail"}>详情</Link>
      <Route path={url + "/detail"} component={Detail} />
    </div>
  );
}
function Detail() {
  return (
    <div>
      <h1>detail1111</h1>
    </div>
  );
}