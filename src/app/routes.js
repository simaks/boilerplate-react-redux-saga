const routes = {
  home: {
    path: "/",
    getComponent: () => import("features/HomePage"),
  },
  counter: {
    path: "/counter",
    getComponent: () => import("features/CounterPage"),
  },
  intlDemo: {
    path: "/intl-demo",
    getComponent: () => import("features/IntlDemoPage"),
  },
  npmApi: {
    path: "/npm-api",
    getComponent: () => import("features/NpmRegistryPage"),
  },
  npmApiPackage: {
    path: "/npm-api/:package",
    getComponent: () => import("features/NpmRegistryPage"),
  },
};

export default routes;
