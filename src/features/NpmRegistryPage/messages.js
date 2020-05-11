import { defineMessages } from "react-intl";
const scope = "features.npmRegistryPage.";

export default defineMessages({
  inputPackage: {
    id: `${scope}inputPackage`,
    defaultMessage: "Package",
  },
  buttonSearch: {
    id: `${scope}buttonSearch`,
    defaultMessage: "Search",
  },
  loading: {
    id: `${scope}loading`,
    defaultMessage: "Loading...",
  },
  name: {
    id: `${scope}name`,
    defaultMessage: "Name",
  },
  description: {
    id: `${scope}description`,
    defaultMessage: "Description",
  },
  keywords: {
    id: `${scope}keywords`,
    defaultMessage: "Keywords",
  },
  homepage: {
    id: `${scope}homepage`,
    defaultMessage: "Homepage",
  },
  creationDate: {
    id: `${scope}creationDate`,
    defaultMessage: "Creation date",
  },
});
