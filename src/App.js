import Layout from "./features/Layout";
import React from "react";
import routes from "./app/routes";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./features/NotFoundPage";

function App() {
  return (
    <Layout>
      <Switch>
        {Object.values(routes).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            render={(props) => <route.component {...props} />}
          />
        ))}
        <Route path={"/"} render={(props) => <NotFoundPage {...props} />} />
      </Switch>
    </Layout>
  );
}

export default App;
