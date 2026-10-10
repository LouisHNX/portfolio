import type { Dictionary } from '../i18n'
import { site } from '../content/site'

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <>
      <p className="max-w-[62ch]">{dict.contact.intro}</p>
      <dl className="flex flex-col gap-4">
        <div className="grid gap-x-6 gap-y-1 md:grid-cols-[11rem_minmax(0,1fr)]">
          <dt className="label md:pt-1.5">{dict.contact.email}</dt>
          <dd>
            <a href={`mailto:${site.contact.email}`} className="text-link text-lg break-all">
              {site.contact.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-x-6 gap-y-1 md:grid-cols-[11rem_minmax(0,1fr)]">
          <dt className="label md:pt-1.5">{dict.contact.linkedin}</dt>
          <dd>
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-lg"
            >
              {dict.contact.linkedinLabel}
              <span aria-hidden="true"> ↗</span>
              <span className="sr-only"> ({dict.a11y.newTab})</span>
            </a>
          </dd>
        </div>
      </dl>
    </>
  )
}
