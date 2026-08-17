import type { CopyKey } from '../i18n/copy';
import { ClockIcon, CloseIcon } from './icons';

export interface SheetSpot {
  id: string;
  street: string;
  zone: string;
  statusLabel: string;
  tagClass: string;
  categoryLabel: string;
}

interface Props {
  t: Record<CopyKey, string>;
  spot: SheetSpot;
  onClose: () => void;
}

export function SpotSheet({ t, spot, onClose }: Props) {
  return (
    <div className="cp-sheet-layer">
      <button type="button" aria-label="Close" className="cp-sheet-backdrop" onClick={onClose} />
      <div className="cp-sheet">
        <div className="cp-sheet-handle" />
        <div className="cp-sheet-header">
          <div>
            <div className="cp-sheet-title">Spot {spot.id}</div>
            <div className="cp-sheet-subtitle">{spot.street} · {spot.zone}</div>
          </div>
          <button type="button" aria-label="Close" className="cp-sheet-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="cp-sheet-tags">
          <span className={`tag ${spot.tagClass}`}>{spot.statusLabel}</span>
          <span className="tag tag-neutral">{spot.categoryLabel}</span>
        </div>
        <div className="cp-updated">
          <ClockIcon />
          {t.updated}
        </div>
        <p className="cp-sheet-privacy">{t.sheetPrivacy}</p>
        <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
          {t.gotIt}
        </button>
      </div>
    </div>
  );
}
