import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import { useSelector } from "react-redux";
import { selectCount } from "features/Counter/selectors";

function Navigation() {
  const count = useSelector(selectCount);

  const NAV_ITEMS = {
    home: {
      link: "/",
      text: "Home",
    },
    counter: {
      link: "/counter",
      text: `Counter (${count})`,
    },
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {Object.entries(NAV_ITEMS).map(([key, { link, text }]) => (
          <li key={key} className={styles.navigationListItem}>
            <NavLink
              className={styles.navigationLink}
              activeClassName={styles.isActive}
              to={link}
              exact
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
