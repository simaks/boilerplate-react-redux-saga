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
};

export default routes;
