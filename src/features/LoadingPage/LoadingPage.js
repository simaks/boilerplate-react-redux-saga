import React from "react";
import styles from "./loading-page.module.scss";
import { useLocation } from "react-router-dom";

function LoadingPage() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <h2 className={styles.title}>
      <span role="img" aria-label={`Loading page "${currentPath}".`}>
        ⏳
      </span>
    </h2>
  );
}

export default LoadingPage;
