import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translations via http (for /public/locales)
  .use(HttpBackend)
  // detect user language from browser/localStorage
  .use(LanguageDetector)
  // pass i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // default language
    debug: false, // set true in dev
    interpolation: {
      escapeValue: false, // React already escapes
    },
    supportedLngs: ['en', 'ms', 'ta'], // add your supported langs
  });

export default i18n;
