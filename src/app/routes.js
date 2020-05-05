import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
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
    </Router>
  );
}

export default Routes;
