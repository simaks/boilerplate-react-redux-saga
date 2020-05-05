import Layout from "./components/Layout";
import React from "react";
import routes from "./app/routes";
import { Switch, Route } from "react-router-dom";

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
      </Switch>
    </Layout>
  );
}

export default App;
