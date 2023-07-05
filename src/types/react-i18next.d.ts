import "react-i18next";
import { Translations } from "./messages";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translations";
    resources: {
      translations: Translations;
    };
  }
}
