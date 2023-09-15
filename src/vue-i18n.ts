/**
 * vue-i18n
 * see more : https://vue-i18n.intlify.dev/guide/advanced/lazy.html
 */
import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { app } from '@/vue-pinia'
import Axios from 'axios'

import messages from '@/i18n/enUS'

let DEFAULT_LANG: string
let I18N: any

const SUPPORT_LOCALES = ['enUS']

async function setI18nLanguage(lang: any): Promise<string> {
  I18N.global.locale.value = lang
  if (I18N.mode === 'legacy') {
    I18N.global.locale = lang
  } else {
    I18N.global.locale.value = lang
  }
  Axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html')?.setAttribute('lang', lang)
  app().language = lang
  return lang
}

export async function loadLocaleMessages(lang: string): Promise<string> {
  if (I18N.global.locale !== lang) {
    if (!SUPPORT_LOCALES.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/${lang}`).then(msgs => {
        I18N.global.setLocaleMessage(lang, msgs.default[lang])
        SUPPORT_LOCALES.push(lang)
        return setI18nLanguage(lang)
      })
    }
    console.log('setI18nLanguage(' + lang + ')')
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export default {
  install(vueApp: App) {
    DEFAULT_LANG = app().language
    if (!DEFAULT_LANG) {
      DEFAULT_LANG = window.navigator.language.split('-').join('')
      app().language = DEFAULT_LANG
    }
    I18N = createI18n({
      legacy: false,
      locale: DEFAULT_LANG,
      default: 'enUS',
      fallbackLocale: 'enUS',
      silentTranslationWarn: false,
      globalInjection: true,
      messages
    })
    vueApp.use(I18N)
    loadLocaleMessages(DEFAULT_LANG)
  },
  t: (v: string) => I18N.global.t(v)
}
