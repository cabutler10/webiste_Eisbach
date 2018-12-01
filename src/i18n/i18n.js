import i18n from "i18next";
import en from "./languages/en.json";
import de from "./languages/de.json";

const options = {
  fallbackLng: "en",
  resources: {
    en: en,
    de: de
  },
  ns: ["translations"],
  defaultNS: "translations",
  load: "languageOnly",
  keySeparator: ".",
  interpolation: {
    formatSeparator: ","
  },
  react: {
    wait: true,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default"
  },
  debug: false
};

export default () => {
  i18n.init(options);
  return i18n;
};
