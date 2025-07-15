import Vue from "vue";
import VueI18n from "vue-i18n";
import zh_CN from "./langs/zh_CN/zh_CN.js";
import en_US from "./langs/en/en_US.js";
import enLocale from "../../node_modules/element-plus/lib/locale/lang/en";
import zhLocale from "../../node_modules/element-plus/lib/locale/lang/zh-CN";

Vue.use(VueI18n);

const messages = {
  en_US: {
    ...en_US,
    ...enLocale,
  },
  zh_CN: {
    ...zh_CN,
    ...zhLocale,
  },
};
const i18n = new VueI18n({
  locale: localStorage.lang || "zh_CN",
  messages,
});

export default i18n;
