import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./navigation.module.scss";
import { NAVIGATION_ITEMS } from "./constants";

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {NAVIGATION_ITEMS.map(({ link, text }) => (
          <li key={link} className={styles.navigationListItem}>
            <Link
              className={clsx(styles.navigationLink, {
                [styles.isActive]: currentPath === link,
              })}
              to={link}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
