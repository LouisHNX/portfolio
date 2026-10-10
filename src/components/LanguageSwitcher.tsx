import { locales, type Locale } from '../lib/i18n'

/** The section the reader is currently looking at, so switching language keeps their place. */
function currentSectionId(): string | null {
  let current: string | null = null
  for (const section of document.querySelectorAll<HTMLElement>('main section[id]')) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) current = section.id
  }
  return current
}

type Props = {
  lang: Locale
  label: string
  switchLabel: string
}

export function LanguageSwitcher({ lang, label, switchLabel }: Props) {
  return (
    <div role="group" aria-label={label} className="label flex items-center gap-1.5">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 && <span aria-hidden="true">/</span>}
          {locale === lang ? (
            <span aria-current="true" className="font-medium text-ink">
              {locale}
            </span>
          ) : (
            <a
              href={`/${locale}/`}
              hrefLang={locale}
              lang={locale}
              className="px-1 py-2 hover:text-ink"
              onClick={(event) => {
                const id = currentSectionId()
                if (id) event.currentTarget.href = `/${locale}/#${id}`
              }}
            >
              {locale}
              <span className="sr-only"> – {switchLabel}</span>
            </a>
          )}
        </span>
      ))}
    </div>
  )
}
