import React from "react";
import PropTypes from "prop-types";

import Navigation from "../Navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
