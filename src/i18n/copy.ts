import type { SpotCategory, SpotStatus } from '../data/spots';

export type Lang = 'en' | 'ro';

type Localized = Record<Lang, string>;

export const STATUS_TAG_CLASS: Record<SpotStatus, string> = {
  assigned: 'tag-accent',
  free: 'tag-accent-2',
  unknown: 'tag-neutral',
};

export const STATUS_PIN_COLOR: Record<SpotStatus, string> = {
  assigned: 'var(--color-accent-500)',
  free: 'var(--color-accent-2-500)',
  unknown: 'var(--color-neutral-400)',
};

export const STATUS_LABEL: Record<SpotStatus, Localized> = {
  assigned: { en: 'Assigned', ro: 'Ocupat' },
  free: { en: 'Free', ro: 'Liber' },
  unknown: { en: 'Unknown', ro: 'Necunoscut' },
};

export const CATEGORY_LABEL: Record<SpotCategory, Localized> = {
  riveran: { en: 'Resident permit · Riveran', ro: 'Abonament riveran' },
  juridic: { en: 'Business permit · Juridic', ro: 'Abonament juridic' },
  terasa: { en: 'Terrace · Terasă', ro: 'Terasă' },
  unknown: { en: 'Unassigned category', ro: 'Categorie neatribuită' },
};

export const COPY = {
  heroSubtitle: {
    en: "A lookup tool for Cluj-Napoca's 48,000 numbered street spots — check whether a spot is already held under a resident or business permit before you park. No accounts, no personal data, no booking — just status.",
    ro: 'Un instrument de verificare pentru cele peste 48.000 de locuri de parcare numerotate din Cluj-Napoca — vezi dacă un loc este deja alocat unui abonament riveran sau juridic înainte să parchezi. Fără cont, fără date personale, fără rezervare — doar starea locului.',
  },
  onboardSubtitle: {
    en: 'See which numbered spots are already reserved, before you park.',
    ro: 'Vezi ce locuri numerotate sunt deja rezervate, înainte să parchezi.',
  },
  enableLocation: { en: 'Enable location', ro: 'Activează locația' },
  notNow: { en: 'Not now', ro: 'Nu acum' },
  privacyOnboard: {
    en: 'No account needed. We never show who holds a permit — only whether a spot is free.',
    ro: 'Nu ai nevoie de cont. Nu arătăm niciodată cine deține abonamentul — doar dacă locul este liber.',
  },
  loadingText: { en: 'Finding spots near you…', ro: 'Se caută locuri în apropiere…' },
  searchBarPlaceholder: { en: 'Search street or spot number', ro: 'Caută stradă sau număr de loc' },
  offlineBanner: {
    en: "Can't reach city sync — showing last saved data from Mar 28, 2026.",
    ro: 'Sincronizarea cu orașul a eșuat — se afișează ultimele date salvate din 28 mar. 2026.',
  },
  legendFree: { en: 'Free', ro: 'Liber' },
  legendAssigned: { en: 'Assigned', ro: 'Ocupat' },
  legendUnknown: { en: 'Unknown', ro: 'Necunoscut' },
  updated: { en: 'Updated Mar 31, 2026', ro: 'Actualizat 31 mar. 2026' },
  searchInputPlaceholder: { en: 'Street or spot number', ro: 'Stradă sau număr de loc' },
  streetsHeader: { en: 'Streets', ro: 'Străzi' },
  numberedSpots: { en: 'numbered spots', ro: 'locuri numerotate' },
  noSpotsFound: { en: 'No spots found for', ro: 'Niciun loc găsit pentru' },
  sheetPrivacy: {
    en: 'Status only — permit holder identity and plate number are never shown.',
    ro: 'Doar starea locului — identitatea deținătorului și numărul de înmatriculare nu sunt niciodată afișate.',
  },
  gotIt: { en: 'Got it', ro: 'Am înțeles' },
} satisfies Record<string, Localized>;

export type CopyKey = keyof typeof COPY;

export function translate(lang: Lang): Record<CopyKey, string> {
  const out = {} as Record<CopyKey, string>;
  (Object.keys(COPY) as CopyKey[]).forEach((k) => {
    out[k] = COPY[k][lang];
  });
  return out;
}
