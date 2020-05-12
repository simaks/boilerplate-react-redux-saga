import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider, useIntl } from "react-intl";
import routes from "app/routes";
import { ReactComponent as Logo } from "assets/logo.svg";
import { SUPPORTED_LOCALES } from "features/LanguageProvider/constants";
import { setLocale } from "features/LanguageProvider/slice";
import { selectCount } from "features/CounterPage/selectors";
import LanguageOption from "features/LanguageOption";
import styles from "./navigation.module.scss";
import messages from "./messages";

function Navigation() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const intl = useIntl();
  const handleLocaleChange = ({ target: { value } }) => {
    dispatch(setLocale(value));
  };

  const NAV_ITEMS = {
    counter: {
      link: routes.counter.path,
      text: intl.formatMessage(messages.linkCounter, { count }),
    },
    npmApi: {
      link: routes.npmApi.path,
      text: intl.formatMessage(messages.linkNpm),
    },
  };

  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to={routes.home.path}
        className={styles.logoLink}
        activeClassName={styles.isActive}
        title={intl.formatMessage(messages.linkHome)}
      >
        <Logo className={styles.logoSvg} />
      </NavLink>
      <ul className={styles.navigationMenu}>
        {Object.entries(NAV_ITEMS).map(([key, { link, text }]) => (
          <li key={key} className={styles.navigationMenuItem}>
            <NavLink
              className={styles.navigationLink}
              activeClassName={styles.isActive}
              to={link}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.languageMenu}>
        {/* eslint-disable jsx-a11y/no-onchange */}
        <select value={intl.locale} onChange={handleLocaleChange}>
          {Object.entries(SUPPORTED_LOCALES).map(([key, loc]) => {
            return (
              <IntlProvider key={loc} locale={loc}>
                <LanguageOption locale={loc} />
              </IntlProvider>
            );
          })}
        </select>
      </div>
    </nav>
  );
}

export default Navigation;
