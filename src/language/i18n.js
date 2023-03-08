import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import languageEN from './en'
import languageZH from './zh'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import { getUrlParam } from '@/utils/utils'
var language = getUrlParam('language')

Vue.use(VueI18n)

const messages = {
  en: Object.assign(languageEN, enLocale),
  zh: Object.assign(languageZH, zhLocale)
}
let locales = ''
// console.log(messages.zh)
if (language !== undefined && language !== null && language !== '' && language === 'en') {
  locales = 'en'
} else {
  locales = 'zh'
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || locales,
  messages
})

locale.i18n((key, value) => i18n.t(key, value)) // 为了实现element插件的多语言切换

export default i18n
