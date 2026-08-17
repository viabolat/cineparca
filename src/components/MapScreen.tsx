import type { Spot } from '../data/spots';
import type { CopyKey } from '../i18n/copy';
import { STATUS_PIN_COLOR } from '../i18n/copy';
import { AlertIcon, ClockIcon, SearchIcon, WifiIcon, WifiOffIcon } from './icons';

interface StreetLabel {
  left: string;
  top: string;
  rotate: number;
  labelLeft: string;
  labelTop: string;
  name: string;
}

const STREET_LABELS: StreetLabel[] = [
  { left: '5%', top: '10%', rotate: 41, labelLeft: '6%', labelTop: '8%', name: 'Str. Memorandumului' },
  { left: '82%', top: '2%', rotate: 98, labelLeft: '84%', labelTop: '2%', name: 'Str. Iuliu Maniu' },
  { left: '4%', top: '87%', rotate: -8, labelLeft: '6%', labelTop: '81%', name: 'Bd. Eroilor' },
];

interface Props {
  t: Record<CopyKey, string>;
  spots: Spot[];
  offline: boolean;
  showYouAreHere: boolean;
  onToggleOffline: () => void;
  onOpenSearch: () => void;
  onSelectSpot: (id: string) => void;
}

export function MapScreen({ t, spots, offline, showYouAreHere, onToggleOffline, onOpenSearch, onSelectSpot }: Props) {
  return (
    <div className="cp-map-screen">
      <div className="cp-topbar">
        <button type="button" className="cp-search-trigger" onClick={onOpenSearch}>
          <SearchIcon />
          {t.searchBarPlaceholder}
        </button>
        <button
          type="button"
          aria-label="Toggle connection (demo)"
          className="cp-icon-btn"
          onClick={onToggleOffline}
        >
          {offline ? <WifiOffIcon /> : <WifiIcon />}
        </button>
      </div>

      <div className="cp-map-area">
        {STREET_LABELS.map((s) => (
          <div key={s.name}>
            <div
              className="cp-street-line"
              style={{ left: s.left, top: s.top, transform: `rotate(${s.rotate}deg)` }}
            />
            <div
              className="cp-street-name"
              style={{ left: s.labelLeft, top: s.labelTop, transform: `rotate(${s.rotate}deg)` }}
            >
              {s.name}
            </div>
          </div>
        ))}

        {showYouAreHere && <div className="cp-you-are-here" />}

        {spots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            className="cp-pin"
            style={{ left: `${spot.x}%`, top: `${spot.y}%`, background: STATUS_PIN_COLOR[spot.status] }}
            onClick={() => onSelectSpot(spot.id)}
          >
            {spot.id}
          </button>
        ))}
      </div>

      {offline ? (
        <div className="cp-offline-banner">
          <AlertIcon />
          <p>{t.offlineBanner}</p>
        </div>
      ) : (
        <div className="cp-status-panel">
          <div className="cp-legend">
            <span className="cp-legend-item">
              <span className="cp-legend-dot" style={{ background: 'var(--color-accent-2-500)' }} />
              {t.legendFree}
            </span>
            <span className="cp-legend-item">
              <span className="cp-legend-dot" style={{ background: 'var(--color-accent-500)' }} />
              {t.legendAssigned}
            </span>
            <span className="cp-legend-item">
              <span className="cp-legend-dot" style={{ background: 'var(--color-neutral-400)' }} />
              {t.legendUnknown}
            </span>
          </div>
          <div className="cp-updated">
            <ClockIcon />
            {t.updated}
          </div>
        </div>
      )}
    </div>
  );
}
