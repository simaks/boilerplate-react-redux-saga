import React from "react";
import { Link } from "react-router-dom";

function HeaderNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/counter"}>Counter</Link>
        </li>
      </ul>
    </nav>
  );
}

export { HeaderNavigation };
