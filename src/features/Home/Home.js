import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Logo className={styles.AppLogo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
