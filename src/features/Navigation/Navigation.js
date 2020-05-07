import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./navigation.module.scss";
import { useSelector } from "react-redux";
import { selectCount } from "../Counter/selectors";

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
  const location = useLocation();
  const count = useSelector(selectCount);
  const currentPath = location.pathname;
  const getIsActive = (item) => item.link === currentPath;
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <Link
            className={clsx(styles.navigationLink, {
              [styles.isActive]: getIsActive(NAV_ITEMS.home),
            })}
            to={NAV_ITEMS.home.link}
          >
            {NAV_ITEMS.home.text}
          </Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link
            className={clsx(styles.navigationLink, {
              [styles.isActive]: getIsActive(NAV_ITEMS.counter),
            })}
            to={NAV_ITEMS.counter.link}
          >
            {`${NAV_ITEMS.counter.text} (${count})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
