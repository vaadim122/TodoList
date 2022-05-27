import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_fr from "./translate/fr/common.json";
import common_en from "./translate/en/common.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    fr: {
      common: common_fr,
    },
  },
});
export default i18n;
