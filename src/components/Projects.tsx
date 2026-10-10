import type { Dictionary } from '../i18n'
import { site, type Project } from '../content/site'
import type { Locale } from '../lib/i18n'
import { TagList } from './TagList'

type CardProps = {
  project: Project
  lang: Locale
  dict: Dictionary
  featured?: boolean
}

function ProjectCard({ project, lang, dict, featured = false }: CardProps) {
  return (
    <li className="flex flex-col gap-2.5 border-t border-line py-6">
      {project.kind && <p className="label">{project.kind[lang]}</p>}
      <h3 className={featured ? 'font-serif text-2xl' : 'text-lg font-semibold'}>
        {project.name}
      </h3>
      <p className="text-soft">{project.description[lang]}</p>
      <TagList items={project.stack} label={dict.a11y.stack} />
      {project.link && (
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-1 self-start"
        >
          <span className="sr-only">
            {project.name}:{' '}
          </span>
          {project.link.label[lang]}
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> ({dict.a11y.newTab})</span>
        </a>
      )}
    </li>
  )
}

export function Projects({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <>
      <ul className="grid gap-x-10 md:grid-cols-3">
        {site.projects.featured.map((project) => (
          <ProjectCard key={project.name} project={project} lang={lang} dict={dict} featured />
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <h3 className="label">{dict.projects.other}</h3>
        <ul className="grid gap-x-10 md:grid-cols-2">
          {site.projects.other.map((project) => (
            <ProjectCard key={project.name} project={project} lang={lang} dict={dict} />
          ))}
        </ul>
      </div>
    </>
  )
}
