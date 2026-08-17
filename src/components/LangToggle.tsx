import type { Lang } from '../i18n/copy';

interface Props {
  lang: Lang;
  onChange: (lang: Lang) => void;
}

export function LangToggle({ lang, onChange }: Props) {
  return (
    <div className="cp-lang-toggle">
      <button
        type="button"
        className={`cp-lang-btn${lang === 'en' ? ' is-active' : ''}`}
        onClick={() => onChange('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`cp-lang-btn${lang === 'ro' ? ' is-active' : ''}`}
        onClick={() => onChange('ro')}
      >
        RO
      </button>
    </div>
  );
}
