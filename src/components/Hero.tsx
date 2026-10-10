import type { Dictionary } from '../i18n'
import { site } from '../content/site'
import type { Locale } from '../lib/i18n'

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <div className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-16 sm:px-8 sm:py-24">
        <p className="label">{site.location[lang]}</p>
        <h1 className="font-serif text-6xl leading-none tracking-tight sm:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="font-serif text-2xl italic text-accent sm:text-3xl">{site.title[lang]}</p>
        <p className="max-w-[44ch] text-lg">{site.pitch[lang]}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-sm border border-accent bg-accent px-5 py-2.5 font-medium text-accent-ink hover:opacity-90"
          >
            {dict.hero.contact}
          </a>
          <a
            href={site.cv[lang]}
            download
            className="flex items-baseline gap-2 rounded-sm border border-ink px-5 py-2.5 font-medium hover:bg-ink hover:text-paper"
          >
            {dict.hero.cv}{' '}
            <span className="font-mono text-xs opacity-70">{dict.hero.cvHint}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
