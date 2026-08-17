import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { buildSpots, STREET_HINTS } from './data/spots';
import { CATEGORY_LABEL, STATUS_LABEL, STATUS_TAG_CLASS, translate, type Lang } from './i18n/copy';
import { LangToggle } from './components/LangToggle';
import { Onboarding } from './components/Onboarding';
import { Loading } from './components/Loading';
import { MapScreen } from './components/MapScreen';
import { SearchOverlay } from './components/SearchOverlay';
import { SpotSheet } from './components/SpotSheet';

type Screen = 'onboarding' | 'loading' | 'map';

const SPOTS = buildSpots();

function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');
  const [locationGranted, setLocationGranted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (loadingTimer.current) clearTimeout(loadingTimer.current);
  }, []);

  const t = useMemo(() => translate(lang), [lang]);

  const enableLocation = () => {
    setLocationGranted(true);
    setScreen('loading');
    loadingTimer.current = setTimeout(() => setScreen('map'), 1100);
  };
  const skipLocation = () => {
    setLocationGranted(false);
    setScreen('map');
  };
  const selectSpot = (id: string) => {
    setSelectedId(id);
    setSearchOpen(false);
  };

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return SPOTS.filter((spot) => spot.id.includes(q) || spot.street.toLowerCase().includes(q))
      .slice(0, 12)
      .map((spot) => ({
        id: spot.id,
        street: spot.street,
        statusLabel: STATUS_LABEL[spot.status][lang],
        tagClass: STATUS_TAG_CLASS[spot.status],
      }));
  }, [q, lang]);

  const selectedSpot = selectedId ? SPOTS.find((sp) => sp.id === selectedId) ?? null : null;
  const sheetSpot = selectedSpot
    ? {
        id: selectedSpot.id,
        street: selectedSpot.street,
        zone: selectedSpot.zone,
        statusLabel: STATUS_LABEL[selectedSpot.status][lang],
        tagClass: STATUS_TAG_CLASS[selectedSpot.status],
        categoryLabel: CATEGORY_LABEL[selectedSpot.category][lang],
      }
    : null;

  return (
    <div className="cp-app">
      <div className="cp-top-strip">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {screen === 'onboarding' && (
        <Onboarding t={t} onEnableLocation={enableLocation} onSkip={skipLocation} />
      )}

      {screen === 'loading' && <Loading t={t} />}

      {screen === 'map' && (
        <MapScreen
          t={t}
          spots={SPOTS}
          offline={offline}
          showYouAreHere={locationGranted}
          onToggleOffline={() => setOffline((v) => !v)}
          onOpenSearch={() => { setSearchOpen(true); setQuery(''); }}
          onSelectSpot={selectSpot}
        />
      )}

      {searchOpen && (
        <SearchOverlay
          t={t}
          query={query}
          onQueryChange={(e) => setQuery(e.target.value)}
          onClose={() => setSearchOpen(false)}
          streetHints={STREET_HINTS}
          onPickStreet={setQuery}
          results={results}
          onPickResult={selectSpot}
        />
      )}

      {sheetSpot && <SpotSheet t={t} spot={sheetSpot} onClose={() => setSelectedId(null)} />}
    </div>
  );
}

export default App;
