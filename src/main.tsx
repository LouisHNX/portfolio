import '@fontsource/newsreader/latin-400.css'
import '@fontsource/newsreader/latin-400-italic.css'
import '@fontsource-variable/figtree/wght.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { defaultLocale, hasLocale } from './lib/i18n'

// The language comes from the page that loaded the app: en/index.html or fr/index.html.
const htmlLang = document.documentElement.lang
const lang = hasLocale(htmlLang) ? htmlLang : defaultLocale

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App lang={lang} />
  </StrictMode>,
)
