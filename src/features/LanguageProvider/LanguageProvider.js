import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { childrenShape } from "app/shapes";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "features/LoadingPage";
import { DEFAULT_LOCALE } from "./constants";
import { loadMessages } from "./slice";
import { selectLocale, selectMessages } from "./selectors";

function LanguageProvider({ children }) {
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();
  const allMessages = useSelector(selectMessages);
  const messages = allMessages[locale]?.messages;
  const loading = allMessages[locale]?.loading ?? true;

  useEffect(() => {
    dispatch(loadMessages(locale));
  }, [dispatch, locale]);

  if (loading) {
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
