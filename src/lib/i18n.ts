export const locales = ['en', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

/** A value that exists once per language. Forgetting a language is a type error. */
export type Localized<T = string> = Record<Locale, T>
