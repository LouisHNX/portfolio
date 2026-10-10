# louisgarrido.xyz

Personal site of Louis Garrido, full-stack developer. One page, in English (`/en/`) and French (`/fr/`), with light and dark themes.

Live: https://louisgarrido-xyz-v2.vercel.app/

Built with React 19, Vite, TypeScript and Tailwind CSS 4. No framework and no router: the build produces three static HTML pages (`/`, `/en/`, `/fr/`) and one JavaScript bundle.

## Run it locally

You need Node.js 20.19 or newer (22.12+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:5173. The root page sends you to `/en/` or `/fr/` depending on your browser language (English is the fallback).

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type check, then production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check only |

## Edit the content

Everything you read on the page comes from two places. You never need to touch a component to change text.

### 1. `src/content/site.ts`: your content

Experience, projects, teaching topics, education, skills, languages, the About text, contact links and the hero pitch.

Every text has an English and a French value side by side:

```ts
role: { en: 'Full-Stack Developer', fr: 'Développeur full-stack' },
```

Always fill in both. If you forget one, `npm run build` fails and tells you where.

Common edits:

- **Add a job:** copy one block in `experience` and put it first in the list (newest first).
- **Add a project:** copy one block in `projects.featured` (large cards) or `projects.other` (small cards). `kind` and `link` are optional; leave `link` out when there is no public URL.
- **Change email or LinkedIn:** edit `contact`.
- **Change the site address** (for example when you add a custom domain): edit `url`. It is used for the canonical URL, sitemap, Open Graph tags and structured data.

### 2. `src/i18n/en.json` and `src/i18n/fr.json`: interface labels

Menu items, section titles, button labels, and the page title and description used by search engines and link previews. The two files must have the same keys.

## Replace the CV PDFs

The "Download CV" button links to:

- `public/cv/louis-garrido-cv-en.pdf` on the English site
- `public/cv/louis-garrido-cv-fr.pdf` on the French site

To update a CV, overwrite the file and keep the same name. Before you commit:

1. Check that the PDF contains no phone number or postal address, since the file is public.
2. Compress it if it is large. With Ghostscript (`brew install ghostscript`):

   ```bash
   gs -q -dNOPAUSE -dBATCH -dSAFER -sDEVICE=pdfwrite -dPDFSETTINGS=/printer \
     -dPrinted=false -sOutputFile=public/cv/louis-garrido-cv-en.pdf "My new CV.pdf"
   ```

   `-dPrinted=false` keeps the clickable links.
3. Open the result and check that text is still selectable and the links work.

If you rename the files, update the paths in `cv` in `src/content/site.ts`.

## How languages work

- `en/index.html` and `fr/index.html` are the two real pages. Each sets `<html lang>` and loads the same React app, which reads that language and shows the matching content.
- `index.html` (the root) only redirects to `/en/` or `/fr/` from the browser language.
- At build time, `vite.config.ts` fills the `<head>` of each page from the content files: title, description, canonical URL, `hreflang` links, Open Graph tags and JSON-LD. It also writes `robots.txt` and `sitemap.xml`. These tags are in the HTML itself, so link previews work without JavaScript. The page body is rendered by React in the browser.
- The language switcher keeps the section you are reading.

To add a language: add it to `locales` in `src/lib/i18n.ts`, add a JSON file in `src/i18n/` and register it in `src/i18n/index.ts`, create `xx/index.html`, add it to `build.rollupOptions.input` in `vite.config.ts`, then follow the type errors in `src/content/site.ts`.

## Link preview images

`public/og-en.png` and `public/og-fr.png` (1200 × 630) are the images shown when the site is shared on LinkedIn and elsewhere. They are plain image files: if you change your name, title or pitch, replace them with new images of the same size and name.

## Project structure

```
index.html           root page: language redirect
en/index.html        English page
fr/index.html        French page
src/
  main.tsx, App.tsx  entry point and page layout
  components/        one file per section, plus header, language switcher, theme toggle
  content/site.ts    all content, in both languages
  i18n/              interface labels, one JSON file per language
  lib/               language list, structured data (JSON-LD)
  index.css          colours (light and dark), fonts, shared styles
public/
  cv/                CV PDFs
  og-en.png, og-fr.png, favicon.svg, 404.html
vite.config.ts       build config and <head> generation
vercel.json          Vercel settings and the redirect for old /Projects/... links
```

Colours are defined once at the top of `src/index.css`, for light and dark.

## Deploy

The site is a static build (`dist/`) hosted on Vercel.

- `vercel.json` tells Vercel to build with Vite, so no dashboard setting is needed beyond connecting the repository.
- Pushing a branch creates a preview deployment; merging into `main` deploys to production.

No environment variables are needed.
