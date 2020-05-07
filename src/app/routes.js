const routes = {
  home: {
    path: "/",
    getComponent: () => import("features/Home"),
  },
  counter: {
    path: "/counter",
    getComponent: () => import("features/Counter"),
  },
};

export default routes;
