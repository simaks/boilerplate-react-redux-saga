import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { ReactComponent as Logo } from "assets/logo.svg";
import { selectLocale } from "features/LanguageProvider/selectors";
import { SUPPORTED_LOCALES } from "features/LanguageProvider/constants";
import { setLocale } from "features/LanguageProvider/slice";
import { selectCount } from "features/CounterPage/selectors";
import styles from "./navigation.module.scss";
import messages from "./messages";

function Navigation() {
  const count = useSelector(selectCount);
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();
  const intl = useIntl();
  const handleLocaleChange = ({ target: { value } }) => {
    dispatch(setLocale(value));
  };

  const NAV_ITEMS = {
    counter: {
      link: "/counter",
      text: intl.formatMessage(messages.linkCounter, { count }),
    },
    intlDemo: {
      link: "/intl-demo",
      text: intl.formatMessage(messages.linkIntl),
    },
  };

  return (
    <nav className={styles.navigation}>
      <NavLink exact to="/" className={styles.logoLink}>
        <Logo className={styles.logoSvg} />
      </NavLink>
      <ul className={styles.navigationMenu}>
        {Object.entries(NAV_ITEMS).map(([key, { link, text }]) => (
          <li key={key} className={styles.navigationMenuItem}>
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
      <div className={styles.languageMenu}>
        {/* eslint-disable jsx-a11y/no-onchange */}
        <select value={locale} onChange={handleLocaleChange}>
          {Object.entries(SUPPORTED_LOCALES).map(([key, currentLocale]) => (
            <option key={key}>{currentLocale}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navigation;
