import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Logo className={styles.AppLogo} />
        <p>
          Check out counter implemented with redux-saga{" "}
          <Link to={"/counter"} className={styles.AppLink}>
            here
          </Link>
          .
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
