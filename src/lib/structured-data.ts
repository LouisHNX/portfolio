import { site } from '../content/site.ts'
import type { Locale } from './i18n.ts'

/** schema.org Person description of the site owner, in the page's language. */
export function personJsonLd(lang: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: `${site.url}/${lang}/`,
    jobTitle: site.title[lang],
    description,
    email: `mailto:${site.contact.email}`,
    sameAs: [site.contact.linkedin],
    worksFor: { '@type': 'Organization', name: site.experience[0].company },
    alumniOf: site.education.map((item) => ({
      '@type': 'EducationalOrganization',
      name: item.school[lang].split(' · ')[0],
    })),
    knowsAbout: site.skills.flatMap((group) => group.items),
    knowsLanguage: ['fr', 'en', 'es'],
    homeLocation: [
      { '@type': 'City', name: 'Montpellier' },
      { '@type': 'City', name: 'Lyon' },
    ],
    nationality: { '@type': 'Country', name: 'France' },
  }
}
