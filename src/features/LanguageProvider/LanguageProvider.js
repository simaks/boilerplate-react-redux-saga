import React from "react";
import { IntlProvider } from "react-intl";
import { childrenShape } from "app/shapes";
import { useSelector } from "react-redux";
import { selectLocale } from "./selectors";

function LanguageProvider({ children }) {
  const locale = useSelector(selectLocale);
  return <IntlProvider locale={locale}>{children}</IntlProvider>;
}

LanguageProvider.propTypes = {
  children: childrenShape,
};

export default LanguageProvider;
