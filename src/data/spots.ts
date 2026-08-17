export type SpotStatus = 'assigned' | 'free' | 'unknown';
export type SpotCategory = 'riveran' | 'juridic' | 'terasa' | 'unknown';

export interface Spot {
  id: string;
  street: string;
  zone: string;
  x: number;
  y: number;
  category: SpotCategory;
  status: SpotStatus;
}

interface StreetDef {
  name: string;
  ids: string[];
  coords: [number, number][];
}

const STREETS: StreetDef[] = [
  {
    name: 'Strada Memorandumului',
    ids: ['210', '211', '212', '213', '214', '215', '216', '217'],
    coords: [[10, 15], [18, 22], [26, 29], [34, 36], [42, 43], [50, 50], [58, 57], [66, 64]],
  },
  {
    name: 'Strada Iuliu Maniu',
    ids: ['505', '506', '507', '508', '509', '510', '511', '512'],
    coords: [[86, 8], [84, 17], [82, 26], [80, 35], [78, 44], [76, 53], [74, 62], [72, 71]],
  },
  {
    name: 'Bulevardul Eroilor',
    ids: ['340', '341', '342', '343', '344', '345', '346', '347'],
    coords: [[8, 84], [18, 82], [28, 80], [38, 78], [48, 76], [58, 74], [68, 72], [78, 70]],
  },
];

const CATS: SpotCategory[] = ['riveran', 'riveran', 'juridic', 'terasa', 'riveran', 'juridic', 'riveran', 'unknown'];
const STATUSES: SpotStatus[] = ['assigned', 'free', 'assigned', 'free', 'unknown', 'free', 'assigned', 'free'];

export function buildSpots(): Spot[] {
  const out: Spot[] = [];
  STREETS.forEach((st) => {
    st.ids.forEach((id, i) => {
      out.push({
        id,
        street: st.name,
        zone: 'Centru',
        x: st.coords[i][0],
        y: st.coords[i][1],
        category: CATS[i],
        status: STATUSES[i],
      });
    });
  });
  return out;
}

export interface StreetHint {
  name: string;
  count: number;
}

export const STREET_HINTS: StreetHint[] = STREETS.map((st) => ({ name: st.name, count: st.ids.length }));
