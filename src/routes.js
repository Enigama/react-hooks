import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "../src/pages/globalFeed";
import Article from "../src/pages/article";
import Authentification from "../src/pages/authentification";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/login" component={Authentification} />
      <Route path="/register" component={Authentification} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
