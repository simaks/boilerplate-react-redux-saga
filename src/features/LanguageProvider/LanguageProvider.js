import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { childrenShape } from "app/shapes";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "features/LoadingPage";
import { DEFAULT_LOCALE } from "./constants";
import { loadMessages } from "./slice";
import {
  selectLocale,
  selectLocaleMessages,
  selectLocaleError,
} from "./selectors";

function LanguageProvider({ children }) {
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();
  const messages = useSelector(selectLocaleMessages);
  const error = useSelector(selectLocaleError);

  useEffect(() => {
    if (!messages) {
      dispatch(loadMessages(locale));
    }
  }, [locale, messages, dispatch]);

  if (!messages && !error) {
    return <LoadingPage />;
  }

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={DEFAULT_LOCALE}
      messages={messages}
    >
      {children}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  children: childrenShape,
};

export default LanguageProvider;
