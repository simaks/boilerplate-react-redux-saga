import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "features/Home";
import Counter from "features/Counter";

export const routes = {
  home: {
    path: "/",
    component: Home,
  },
  counter: {
    path: "/counter",
    component: Counter,
  },
};

function Routes() {
  return (
    <Switch>
      {Object.values(routes).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          render={(props) => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
}

export default Routes;
