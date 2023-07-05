import { Brand, Environment } from "./config";

declare global {
  interface Window {
    BRAND: Brand;
    ENVIRONMENT: Environment;
    PUBLIC_APP_SETTING_WEBSHOP_API: string;
    PUBLIC_APP_SETTING_WEBSHOP_CHECKOUT_API: string;
  }
}
