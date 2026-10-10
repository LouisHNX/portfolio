import { site } from '../content/site'
import type { Locale } from '../lib/i18n'

export function Teaching({ lang }: { lang: Locale }) {
  return (
    <>
      <p className="max-w-[62ch]">{site.teaching.intro[lang]}</p>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {site.teaching.topics[lang].map((topic) => (
          <li key={topic} className="flex items-baseline gap-3 border-b border-line py-3">
            <span aria-hidden="true" className="text-[0.6rem] text-accent">
              ▲
            </span>
            {topic}
          </li>
        ))}
      </ul>
      <p className="max-w-[62ch]">
        {site.teaching.cta[lang]}{' '}
        <a href={`mailto:${site.contact.email}`} className="text-link">
          {site.contact.email}
        </a>
      </p>
    </>
  )
}
