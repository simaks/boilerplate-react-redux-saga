import React from "react";
import { childrenShape } from "app/shapes";
import Navigation from "features/Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: childrenShape,
};

export default Layout;
