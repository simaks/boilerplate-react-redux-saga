import React from "react";
import Navigation from "../Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
