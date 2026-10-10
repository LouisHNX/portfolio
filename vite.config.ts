import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import { site } from './src/content/site.ts'
import { dictionaries } from './src/i18n/index.ts'
import { locales, type Locale } from './src/lib/i18n.ts'
import { personJsonLd } from './src/lib/structured-data.ts'

// Applies the saved theme (or the system preference) before the first paint.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`

const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({
  tag: 'meta',
  attrs,
  injectTo: 'head',
})
const link = (attrs: Record<string, string>): HtmlTagDescriptor => ({
  tag: 'link',
  attrs,
  injectTo: 'head',
})

/**
 * Fills the <head> of index.html, en/index.html and fr/index.html from the content files
 * (title, description, canonical, hreflang, Open Graph, JSON-LD), and writes robots.txt and
 * sitemap.xml at build time. Link previews (LinkedIn, etc.) read these tags without running JS.
 */
function localizedHead(): Plugin {
  return {
    name: 'localized-head',
    transformIndexHtml: {
      order: 'pre',
      handler(_html, ctx) {
        const isLocalePage = locales.some((locale) => ctx.path.startsWith(`/${locale}/`))
        const lang: Locale = ctx.path.startsWith('/fr/') ? 'fr' : 'en'
        const other: Locale = lang === 'fr' ? 'en' : 'fr'
        const dict = dictionaries[lang]
        const url = `${site.url}/${lang}/`
        const image = `${site.url}/og-${lang}.png`

        const tags: HtmlTagDescriptor[] = [
          { tag: 'title', children: dict.meta.title, injectTo: 'head' },
          meta({ name: 'description', content: dict.meta.description }),
          meta({ name: 'author', content: site.name }),
          link({ rel: 'canonical', href: url }),
          ...locales.map((locale) =>
            link({ rel: 'alternate', hreflang: locale, href: `${site.url}/${locale}/` }),
          ),
          link({ rel: 'alternate', hreflang: 'x-default', href: `${site.url}/en/` }),
          link({ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }),
          meta({ property: 'og:type', content: 'profile' }),
          meta({ property: 'og:site_name', content: site.name }),
          meta({ property: 'og:title', content: dict.meta.title }),
          meta({ property: 'og:description', content: dict.meta.description }),
          meta({ property: 'og:url', content: url }),
          meta({ property: 'og:locale', content: lang === 'fr' ? 'fr_FR' : 'en_US' }),
          meta({ property: 'og:locale:alternate', content: other === 'fr' ? 'fr_FR' : 'en_US' }),
          meta({ property: 'og:image', content: image }),
          meta({ property: 'og:image:width', content: '1200' }),
          meta({ property: 'og:image:height', content: '630' }),
          meta({ property: 'og:image:alt', content: dict.meta.ogAlt }),
          meta({ name: 'twitter:card', content: 'summary_large_image' }),
          meta({ name: 'twitter:title', content: dict.meta.title }),
          meta({ name: 'twitter:description', content: dict.meta.description }),
          meta({ name: 'twitter:image', content: image }),
        ]

        if (isLocalePage) {
          tags.push(
            { tag: 'script', children: themeScript, injectTo: 'head-prepend' },
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: JSON.stringify(personJsonLd(lang, dict.meta.description)).replace(
                /</g,
                '\\u003c',
              ),
              injectTo: 'head',
            },
          )
        }

        return tags
      },
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
      })
      const alternates = locales
        .map(
          (locale) =>
            `    <xhtml:link rel="alternate" hreflang="${locale}" href="${site.url}/${locale}/" />`,
        )
        .join('\n')
      const urls = locales
        .map((locale) => `  <url>\n    <loc>${site.url}/${locale}/</loc>\n${alternates}\n  </url>`)
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  // Several real HTML pages (/, /en/, /fr/), no single-page fallback.
  appType: 'mpa',
  plugins: [react(), tailwindcss(), localizedHead()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(import.meta.dirname, 'index.html'),
        en: resolve(import.meta.dirname, 'en/index.html'),
        fr: resolve(import.meta.dirname, 'fr/index.html'),
      },
    },
  },
})
