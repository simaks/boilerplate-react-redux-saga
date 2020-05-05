import React from "react";
import { Switch, Route } from "react-router-dom";
import indexPage from "pages";
import counterPage from "pages/counter";

export const routes = {
  home: {
    path: "/",
    component: indexPage,
  },
  counter: {
    path: "/counter",
    component: counterPage,
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
