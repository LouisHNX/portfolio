import { site } from '../content/site'
import type { Dictionary } from '../i18n'
import type { Locale } from '../lib/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
        <a href={`/${lang}/`} className="font-serif text-xl">
          {site.name}
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            lang={lang}
            label={dict.a11y.language}
            switchLabel={dict.a11y.switchLanguage}
          />
          <ThemeToggle label={dict.a11y.toggleTheme} />
        </div>
      </div>
    </header>
  )
}
