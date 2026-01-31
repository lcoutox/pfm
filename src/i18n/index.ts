import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptbr from "./locales/ptbr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

export const DEFAULT_LANGUAGE = "ptbr" as const;
export const SUPPORTED_LANGUAGES = ["ptbr", "pt", "en", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const resources = {
  ptbr: { translation: ptbr },
  pt: { translation: ptbr },
  en: { translation: en },
  es: { translation: es },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
