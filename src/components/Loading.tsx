import type { CopyKey } from '../i18n/copy';

interface Props {
  t: Record<CopyKey, string>;
}

export function Loading({ t }: Props) {
  return (
    <div className="cp-loading">
      <div className="cp-spinner" />
      <p className="cp-loading-text">{t.loadingText}</p>
    </div>
  );
}
