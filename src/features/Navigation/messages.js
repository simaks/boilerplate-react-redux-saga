import { defineMessages } from "react-intl";
const scope = "features.navigation.";

export default defineMessages({
  linkHome: {
    id: `${scope}linkHome`,
    defaultMessage: "Home",
  },
  linkCounter: {
    id: `${scope}linkCounter`,
    defaultMessage: "Counter ({count})",
  },
  linkIntl: {
    id: `${scope}linkIntl`,
    defaultMessage: "Intl demo",
  },
  langEn: {
    id: `${scope}langEn`,
    defaultMessage: "English",
  },
  langLt: {
    id: `${scope}langLt`,
    defaultMessage: "Lithuanian",
  },
});
