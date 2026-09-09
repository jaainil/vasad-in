import { MAP_RADIUS, TOWN_CENTER, type MapCategoryId } from './categories';

export interface OverpassTag {
	category: MapCategoryId;
	match: (tags: Record<string, string>) => boolean;
	selectors: string[];
}

/*
 * One clause per tag family. Ways/relations resolve through
 * `out center`, so every board lands on a real coordinate.
 */
const FAMILIES: OverpassTag[] = [
	{
		category: 'rail',
		match: (t) =>
			t.railway === 'station' ||
			t.railway === 'halt' ||
			t.public_transport === 'station' ||
			t.highway === 'bus_stop' ||
			t.public_transport === 'platform',
		selectors: [
			'["railway"="station"]',
			'["railway"="halt"]',
			'["public_transport"="station"]',
			'["highway"="bus_stop"]',
			'["public_transport"="platform"]',
		],
	},
	{
		category: 'sacred',
		match: (t) => t.amenity === 'place_of_worship' || t.building === 'temple' || t.building === 'mosque' || t.building === 'church',
		selectors: ['["amenity"="place_of_worship"]', '["building"="temple"]', '["building"="mosque"]', '["building"="church"]'],
	},
	{
		category: 'stay',
		match: (t) =>
			t.tourism === 'hotel' ||
			t.tourism === 'guest_house' ||
			t.tourism === 'hostel' ||
			t.amenity === 'restaurant' ||
			t.amenity === 'cafe' ||
			t.amenity === 'fast_food',
		selectors: [
			'["tourism"="hotel"]',
			'["tourism"="guest_house"]',
			'["tourism"="hostel"]',
			'["amenity"="restaurant"]',
			'["amenity"="cafe"]',
			'["amenity"="fast_food"]',
		],
	},
	{
		category: 'health',
		match: (t) => t.amenity === 'hospital' || t.amenity === 'clinic' || t.amenity === 'doctors' || t.amenity === 'pharmacy',
		selectors: ['["amenity"="hospital"]', '["amenity"="clinic"]', '["amenity"="doctors"]', '["amenity"="pharmacy"]'],
	},
	{
		category: 'study',
		match: (t) => t.amenity === 'school' || t.amenity === 'college' || t.amenity === 'university' || t.amenity === 'kindergarten',
		selectors: ['["amenity"="school"]', '["amenity"="college"]', '["amenity"="university"]', '["amenity"="kindergarten"]'],
	},
	{
		category: 'atm',
		match: (t) => t.amenity === 'atm',
		selectors: ['["amenity"="atm"]'],
	},
	{
		category: 'bank',
		match: (t) => t.amenity === 'bank',
		selectors: ['["amenity"="bank"]'],
	},
	{
		category: 'fuel',
		match: (t) => t.amenity === 'fuel',
		selectors: ['["amenity"="fuel"]'],
	},
];

export function buildOverpassQuery(lat = TOWN_CENTER.lat, lon = TOWN_CENTER.lon, radius = MAP_RADIUS): string {
	const around = FAMILIES.flatMap((family) =>
		family.selectors.flatMap((selector) => [
			`node(around:${radius},${lat},${lon})${selector};`,
			`way(around:${radius},${lat},${lon})${selector};`,
			`relation(around:${radius},${lat},${lon})${selector};`,
		]),
	).join('\n  ');
	return `[out:json][timeout:25];\n(\n  ${around}\n);\nout center tags;`;
}

export function categorizeTags(tags: Record<string, string> = {}): MapCategoryId | null {
	for (const family of FAMILIES) {
		if (family.match(tags)) return family.category;
	}
	return null;
}

export interface OverpassPlace {
	id: string;
	name: string;
	category: MapCategoryId;
	lat: number;
	lon: number;
	street?: string;
	phone?: string;
	osmType: string;
	osmId: number;
}

interface OverpassElement {
	type: 'node' | 'way' | 'relation';
	id: number;
	lat?: number;
	lon?: number;
	center?: { lat: number; lon: number };
	tags?: Record<string, string>;
}

const CATEGORY_LABEL: Record<MapCategoryId, string> = {
	rail: 'Rail / bus stop',
	sacred: 'Place of worship',
	stay: 'Stay / eatery',
	health: 'Health',
	study: 'School / college',
	mill: 'Mill / industry',
	atm: 'ATM',
	bank: 'Bank',
	fuel: 'Fuel station',
	civic: 'Civic desk',
};

/*
 * Live-survey exclusion list: places the community has explicitly asked
 * to keep off the map (outside the vouched town record).
 */
const EXCLUDED_NAMES = [/vehrakhadi/i, /param\s+ayurved/i];

function isExcluded(name: string): boolean {
	return EXCLUDED_NAMES.some((re) => re.test(name));
}

export function toPlaces(elements: OverpassElement[] = []): OverpassPlace[] {
	const seen = new Set<string>();
	const places: OverpassPlace[] = [];
	for (const el of elements) {
		const tags = el.tags ?? {};
		const category = categorizeTags(tags);
		if (!category) continue;
		const name = tags.name ?? CATEGORY_LABEL[category];
		if (isExcluded(name)) continue;
		const lat = el.type === 'node' ? el.lat : el.center?.lat;
		const lon = el.type === 'node' ? el.lon : el.center?.lon;
		if (typeof lat !== 'number' || typeof lon !== 'number') continue;
		const key = `${category}:${tags.name ?? `${el.type}/${el.id}`}`;
		if (seen.has(key)) continue;
		seen.add(key);
		places.push({
			id: `${el.type}-${el.id}`,
			name,
			category,
			lat,
			lon,
			street: tags['addr:street'] ?? tags['addr:full'],
			phone: tags.phone ?? tags['contact:phone'],
			osmType: el.type,
			osmId: el.id,
		});
	}
	return places;
}
