// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import IntlPolyfill from "intl";
import { IntlProvider } from "react-intl";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from "app/../../tools/intl/locales";
import enMessages from "translations/en.json";
import defaultStore from "app/store";
import "@formatjs/intl-displaynames";

function polyfillIntl() {
  const locales = Object.values(SUPPORTED_LOCALES);
  if (global.Intl) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  } else {
    global.Intl = IntlPolyfill;
  }

  if (!Intl.NumberFormat) {
    require("@formatjs/intl-pluralrules/polyfill");
    locales.forEach((locale) => {
      require(`@formatjs/intl-unified-numberformat/dist/locale-data/${locale}`);
    });
  }

  if (!Intl.PluralRules) {
    require("@formatjs/intl-pluralrules/polyfill");
    locales.forEach((locale) => {
      require(`@formatjs/intl-pluralrules/dist/locale-data/${locale}`);
    });
  }

  if (!Intl.RelativeTimeFormat) {
    require("@formatjs/intl-relativetimeformat/polyfill");
    locales.forEach((locale) => {
      require(`@formatjs/intl-relativetimeformat/dist/locale-data/${locale}`);
    });
  }

  if (!Intl.DisplayNames) {
    require("@formatjs/intl-displaynames/polyfill");
    locales.forEach((locale) => {
      require(`@formatjs/intl-displaynames/dist/locale-data/${locale}`);
    });
  }
}

polyfillIntl();

function render(
  ui,
  {
    store = defaultStore,
    locale = DEFAULT_LOCALE,
    messages = enMessages,
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <IntlProvider
            locale={locale}
            defaultLocale={DEFAULT_LOCALE}
            messages={messages}
            wrapRichTextChunksInFragment
          >
            {children}
          </IntlProvider>
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
