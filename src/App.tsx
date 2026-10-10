import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { EducationSkills } from './components/EducationSkills'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Section } from './components/Section'
import { SectionNav } from './components/SectionNav'
import { Teaching } from './components/Teaching'
import { site } from './content/site'
import { dictionaries } from './i18n'
import type { Locale } from './lib/i18n'

const sectionIds = ['about', 'experience', 'projects', 'teaching', 'education', 'contact'] as const

export function App({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang]
  const sections = sectionIds.map((id) => ({ id, label: dict.nav[id] }))

  // The page is rendered after load, so the browser's own jump to #section happens too early.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {dict.a11y.skip}
      </a>
      <Header lang={lang} dict={dict} />
      <main id="content">
        <Hero lang={lang} dict={dict} />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <SectionNav label={dict.a11y.sections} items={sections} />
          <div className="min-w-0">
            <Section id="about" title={dict.nav.about}>
              <div className="flex max-w-[62ch] flex-col gap-4 text-lg">
                {site.about[lang].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Section>
            <Section id="experience" title={dict.nav.experience}>
              <Experience lang={lang} dict={dict} />
            </Section>
            <Section id="projects" title={dict.nav.projects}>
              <Projects lang={lang} dict={dict} />
            </Section>
            <Section id="teaching" title={dict.nav.teaching}>
              <Teaching lang={lang} />
            </Section>
            <Section id="education" title={dict.nav.education}>
              <EducationSkills lang={lang} dict={dict} />
            </Section>
            <Section id="contact" title={dict.nav.contact}>
              <Contact dict={dict} />
            </Section>
          </div>
        </div>
      </main>
      <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="label">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </>
  )
}
