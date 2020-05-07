import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import { useSelector } from "react-redux";
import { selectCount } from "features/Counter/selectors";

const NAV_ITEMS = {
  home: {
    link: "/",
    text: "Home",
  },
  counter: {
    link: "/counter",
    text: "Counter",
  },
};

function Navigation() {
  const count = useSelector(selectCount);
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <NavLink
            className={styles.navigationLink}
            activeClassName={styles.isActive}
            to={NAV_ITEMS.home.link}
            exact
          >
            {NAV_ITEMS.home.text}
          </NavLink>
        </li>
        <li className={styles.navigationListItem}>
          <NavLink
            className={styles.navigationLink}
            activeClassName={styles.isActive}
            to={NAV_ITEMS.counter.link}
            exact
          >
            {`${NAV_ITEMS.counter.text} (${count})`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
