const routes = {
  home: {
    path: "/",
    getComponent: () => import("features/HomePage"),
  },
  counter: {
    path: "/counter",
    getComponent: () => import("features/CounterPage"),
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
