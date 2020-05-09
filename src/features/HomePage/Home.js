import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./home.module.scss";
import messages from "./messages";

function Home() {
  const intl = useIntl();
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Logo className={styles.AppLogo} />
        <p>
          {intl.formatMessage(messages.checkOutCounter, {
            // eslint-disable-next-line react/display-name
            a: (...chunks) => (
              <Link to={"/counter"} className={styles.AppLink}>
                {chunks}
              </Link>
            ),
          })}
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage(messages.learnReact)}
        </a>
      </header>
    </div>
  );
}

export default Home;
