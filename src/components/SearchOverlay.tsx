import type { ChangeEvent } from 'react';
import type { CopyKey } from '../i18n/copy';
import type { StreetHint } from '../data/spots';
import { ChevronLeftIcon, SearchIcon } from './icons';

export interface SearchResult {
  id: string;
  street: string;
  statusLabel: string;
  tagClass: string;
}

interface Props {
  t: Record<CopyKey, string>;
  query: string;
  onQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  streetHints: StreetHint[];
  onPickStreet: (name: string) => void;
  results: SearchResult[];
  onPickResult: (id: string) => void;
}

export function SearchOverlay({ t, query, onQueryChange, onClose, streetHints, onPickStreet, results, onPickResult }: Props) {
  const q = query.trim();
  const showHints = q.length === 0;
  const hasResults = q.length > 0 && results.length > 0;
  const showEmpty = q.length > 0 && results.length === 0;

  return (
    <div className="cp-search-overlay">
      <div className="cp-search-header">
        <button type="button" aria-label="Back" className="cp-back-btn" onClick={onClose}>
          <ChevronLeftIcon />
        </button>
        <div className="field" style={{ flex: 1 }}>
          <input
            className="input"
            autoFocus
            placeholder={t.searchInputPlaceholder}
            value={query}
            onChange={onQueryChange}
          />
        </div>
      </div>
      <div className="cp-search-results">
        {showHints && (
          <>
            <div className="cp-section-header">{t.streetsHeader}</div>
            {streetHints.map((hint) => (
              <button
                key={hint.name}
                type="button"
                className="card elev-sm cp-result-card"
                onClick={() => onPickStreet(hint.name)}
              >
                <div className="card-title" style={{ fontSize: 14.5 }}>{hint.name}</div>
                <div className="card-meta" style={{ marginTop: 2 }}>{hint.count} {t.numberedSpots}</div>
              </button>
            ))}
          </>
        )}
        {hasResults &&
          results.map((r) => (
            <button
              key={r.id}
              type="button"
              className="card elev-sm cp-result-card cp-result-row"
              onClick={() => onPickResult(r.id)}
            >
              <div>
                <div className="card-title" style={{ fontSize: 14.5 }}>Spot {r.id}</div>
                <div className="card-meta" style={{ marginTop: 2 }}>{r.street}</div>
              </div>
              <span className={`tag ${r.tagClass}`} style={{ flex: 'none' }}>{r.statusLabel}</span>
            </button>
          ))}
        {showEmpty && (
          <div className="cp-empty-state">
            <SearchIcon size={30} color="var(--color-neutral-400)" />
            <p>{t.noSpotsFound} &ldquo;{query}&rdquo;</p>
          </div>
        )}
      </div>
    </div>
  );
}
