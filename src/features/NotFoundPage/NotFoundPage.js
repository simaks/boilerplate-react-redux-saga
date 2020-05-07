import React from "react";
import styles from "./not-found-page.module.scss";
import { useLocation } from "react-router-dom";

function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <h2 className={styles.title}>
      Page not found &quot;{currentPath}&quot;{" "}
      <span role="img" aria-label="sad">
        😟
      </span>
    </h2>
  );
}

export default NotFoundPage;
