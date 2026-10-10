import type { Localized } from '../lib/i18n.ts'
import en from './en.json' with { type: 'json' }
import fr from './fr.json' with { type: 'json' }

export type Dictionary = typeof en

/** Interface labels per language. Both JSON files must have the same keys. */
export const dictionaries: Localized<Dictionary> = { en, fr }
