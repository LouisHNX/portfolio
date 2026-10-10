import type { Dictionary } from '../i18n'
import { site } from '../content/site'
import type { Locale } from '../lib/i18n'

export function EducationSkills({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h3 className="label">{dict.education.education}</h3>
        <ol className="flex flex-col gap-5">
          {site.education.map((item) => (
            <li key={item.period} className="flex flex-col gap-0.5">
              <p className="font-semibold">{item.degree[lang]}</p>
              <p className="text-soft">{item.school[lang]}</p>
              <p className="label">{item.period}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="label">{dict.education.skills}</h3>
          <dl className="flex flex-col gap-3">
            {site.skills.map((group) => (
              <div key={group.label.en}>
                <dt className="font-semibold">{group.label[lang]}</dt>
                <dd className="text-soft">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="label">{dict.education.languages}</h3>
          <ul className="flex flex-col gap-1">
            {site.languages[lang].map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
