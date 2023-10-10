import enUS from "./locales/en_us.json";
import zhCN from "./locales/zh_cn.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en-US",
  globalInjection: true,
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "zh-CN": zhCN,
    "nbr-NBR": enUS,
  },
}));
