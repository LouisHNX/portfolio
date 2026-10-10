import type { Dictionary } from '../i18n'
import { site } from '../content/site'
import type { Locale } from '../lib/i18n'
import { TagList } from './TagList'

export function Experience({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <ol className="flex flex-col gap-10">
      {site.experience.map((job) => (
        <li key={job.company} className="grid gap-x-6 gap-y-2 md:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="label md:pt-1">{job.period[lang]}</p>
          <div className="flex flex-col gap-2.5">
            <div>
              <h3 className="text-lg font-semibold">{job.role[lang]}</h3>
              <p className="text-soft">
                {job.company} · {job.meta[lang]}
              </p>
            </div>
            <ul className="flex max-w-[62ch] list-disc flex-col gap-1 pl-5 marker:text-accent">
              {job.highlights[lang].map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <TagList items={job.stack} label={dict.a11y.stack} />
          </div>
        </li>
      ))}
    </ol>
  )
}
