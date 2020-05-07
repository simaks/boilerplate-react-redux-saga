import Layout from "./features/Layout";
import React, { lazy, Suspense } from "react";
import routes from "./app/routes";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./features/NotFoundPage";
import LoadingPage from "./features/LoadingPage";

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          {Object.values(routes).map(({ path, getComponent }) => {
            const LazyRouteComponent = lazy(getComponent);
            return (
              <Route
                key={path}
                path={path}
                exact
                component={LazyRouteComponent}
              />
            );
          })}
          <Route path={"/"} component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
