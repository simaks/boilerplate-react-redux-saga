import Layout from "./features/Layout";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "app/routes";
import LanguageProvider from "features/LanguageProvider";
import NotFoundPage from "features/NotFoundPage";
import LoadingPage from "features/LoadingPage";

function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
