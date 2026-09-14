import { CITIES as RAW_INDIAN_CITIES } from './indianCities';

export interface GlobalCity {
  country: string;
  countryName: string;
  name: string;
  slug: string;
  state: string;
  tier?: number;
}

export const TOP_METROS = [
  { name: "Mumbai", slug: "mumbai", image: "/cities/mumbai.webp", state: "Maharashtra", country: "india", countryName: "India" },
  { name: "Delhi NCR", slug: "delhi", image: "/cities/delhi.webp", state: "Delhi", country: "india", countryName: "India" },
  { name: "Bengaluru", slug: "bengaluru", image: "/cities/bengaluru.webp", state: "Karnataka", country: "india", countryName: "India" },
  { name: "Hyderabad", slug: "hyderabad", image: "/cities/hyderabad.webp", state: "Telangana", country: "india", countryName: "India" },
  { name: "Chennai", slug: "chennai", image: "/cities/chennai-icon.webp", state: "Tamil Nadu", country: "india", countryName: "India" },
  { name: "Ahmedabad", slug: "ahmedabad", image: "/cities/ahmedabad.webp", state: "Gujarat", country: "india", countryName: "India" },
  { name: "Pune", slug: "pune", image: "/cities/pune.webp", state: "Maharashtra", country: "india", countryName: "India" },
  { name: "Surat", slug: "surat", image: "/cities/surat.webp", state: "Gujarat", country: "india", countryName: "India" },
  { name: "Jaipur", slug: "jaipur", image: "/cities/jaipur-icon.webp", state: "Rajasthan", country: "india", countryName: "India" },
  { name: "Kolkata", slug: "kolkata", image: "/cities/kolkata.webp", state: "West Bengal", country: "india", countryName: "India" },
  { name: "Lucknow", slug: "lucknow", image: "/cities/lucknow.webp", state: "Uttar Pradesh", country: "india", countryName: "India" },
  { name: "Coimbatore", slug: "coimbatore", image: "/cities/coimbatore-icon.webp", state: "Tamil Nadu", country: "india", countryName: "India" },
  { name: "Indore", slug: "indore", image: "/cities/indore.webp", state: "Madhya Pradesh", country: "india", countryName: "India" },
  { name: "Chandigarh", slug: "chandigarh", image: "/cities/chandigarh-icon.webp", state: "Punjab", country: "india", countryName: "India" },
  { name: "Kochi", slug: "kochi", image: "/cities/kochi-icon.webp", state: "Kerala", country: "india", countryName: "India" },
];

export const GOLDEN_CITIES: GlobalCity[] = [
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "raleigh",
    "name": "Raleigh",
    "state": "NC"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "salt-lake-city",
    "name": "Salt Lake City",
    "state": "UT"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "denver",
    "name": "Denver",
    "state": "CO"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "charlotte",
    "name": "Charlotte",
    "state": "NC"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "columbus",
    "name": "Columbus",
    "state": "OH"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "tampa",
    "name": "Tampa",
    "state": "FL"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "orlando",
    "name": "Orlando",
    "state": "FL"
  },
  {
    "country": "usa",
    "countryName": "USA",
    "slug": "huntsville",
    "name": "Huntsville",
    "state": "AL"
  },
  {
    "country": "canada",
    "countryName": "Canada",
    "slug": "calgary",
    "name": "Calgary",
    "state": "AB"
  },
  {
    "country": "canada",
    "countryName": "Canada",
    "slug": "waterloo",
    "name": "Waterloo",
    "state": "ON"
  },
  {
    "country": "canada",
    "countryName": "Canada",
    "slug": "halifax",
    "name": "Halifax",
    "state": "NS"
  },
  {
    "country": "canada",
    "countryName": "Canada",
    "slug": "ottawa",
    "name": "Ottawa",
    "state": "ON"
  },
  {
    "country": "canada",
    "countryName": "Canada",
    "slug": "victoria",
    "name": "Victoria",
    "state": "BC"
  },
  {
    "country": "australia",
    "countryName": "Australia",
    "slug": "brisbane",
    "name": "Brisbane",
    "state": "QLD"
  },
  {
    "country": "australia",
    "countryName": "Australia",
    "slug": "perth",
    "name": "Perth",
    "state": "WA"
  },
  {
    "country": "australia",
    "countryName": "Australia",
    "slug": "adelaide",
    "name": "Adelaide",
    "state": "SA"
  },
  {
    "country": "australia",
    "countryName": "Australia",
    "slug": "hobart",
    "name": "Hobart",
    "state": "TAS"
  },
  {
    "country": "uk",
    "countryName": "United Kingdom",
    "slug": "manchester",
    "name": "Manchester",
    "state": "UK"
  },
  {
    "country": "uk",
    "countryName": "United Kingdom",
    "slug": "bristol",
    "name": "Bristol",
    "state": "UK"
  },
  {
    "country": "uk",
    "countryName": "United Kingdom",
    "slug": "edinburgh",
    "name": "Edinburgh",
    "state": "UK"
  },
  {
    "country": "uk",
    "countryName": "United Kingdom",
    "slug": "leeds",
    "name": "Leeds",
    "state": "UK"
  },
  {
    "country": "uk",
    "countryName": "United Kingdom",
    "slug": "newcastle",
    "name": "Newcastle",
    "state": "UK"
  },
  {
    "country": "uae",
    "countryName": "UAE",
    "slug": "dubai",
    "name": "Dubai",
    "state": "UAE"
  },
  {
    "country": "uae",
    "countryName": "UAE",
    "slug": "abu-dhabi",
    "name": "Abu Dhabi",
    "state": "UAE"
  },
  {
    "country": "uae",
    "countryName": "UAE",
    "slug": "sharjah",
    "name": "Sharjah",
    "state": "UAE"
  },
  {
    "country": "ksa",
    "countryName": "Saudi Arabia",
    "slug": "riyadh",
    "name": "Riyadh",
    "state": "KSA"
  },
  {
    "country": "ksa",
    "countryName": "Saudi Arabia",
    "slug": "jeddah",
    "name": "Jeddah",
    "state": "KSA"
  },
  {
    "country": "qatar",
    "countryName": "Qatar",
    "slug": "doha",
    "name": "Doha",
    "state": "Qatar"
  },
  {
    "country": "bahrain",
    "countryName": "Bahrain",
    "slug": "manama",
    "name": "Manama",
    "state": "Bahrain"
  },
  {
    "country": "sweden",
    "countryName": "Sweden",
    "slug": "gothenburg",
    "name": "Gothenburg",
    "state": "Sweden"
  },
  {
    "country": "sweden",
    "countryName": "Sweden",
    "slug": "malmo",
    "name": "Malmo",
    "state": "Sweden"
  },
  {
    "country": "netherlands",
    "countryName": "Netherlands",
    "slug": "eindhoven",
    "name": "Eindhoven",
    "state": "Netherlands"
  },
  {
    "country": "netherlands",
    "countryName": "Netherlands",
    "slug": "utrecht",
    "name": "Utrecht",
    "state": "Netherlands"
  },
  {
    "country": "denmark",
    "countryName": "Denmark",
    "slug": "aarhus",
    "name": "Aarhus",
    "state": "Denmark"
  },
  {
    "country": "denmark",
    "countryName": "Denmark",
    "slug": "odense",
    "name": "Odense",
    "state": "Denmark"
  },
  {
    "country": "norway",
    "countryName": "Norway",
    "slug": "bergen",
    "name": "Bergen",
    "state": "Norway"
  },
  {
    "country": "norway",
    "countryName": "Norway",
    "slug": "trondheim",
    "name": "Trondheim",
    "state": "Norway"
  },
  {
    "country": "finland",
    "countryName": "Finland",
    "slug": "espoo",
    "name": "Espoo",
    "state": "Finland"
  },
  {
    "country": "finland",
    "countryName": "Finland",
    "slug": "tampere",
    "name": "Tampere",
    "state": "Finland"
  },
  {
    "country": "germany",
    "countryName": "Germany",
    "slug": "stuttgart",
    "name": "Stuttgart",
    "state": "Germany"
  },
  {
    "country": "germany",
    "countryName": "Germany",
    "slug": "leipzig",
    "name": "Leipzig",
    "state": "Germany"
  },
  {
    "country": "france",
    "countryName": "France",
    "slug": "lyon",
    "name": "Lyon",
    "state": "France"
  },
  {
    "country": "france",
    "countryName": "France",
    "slug": "toulouse",
    "name": "Toulouse",
    "state": "France"
  },
  {
    "country": "belgium",
    "countryName": "Belgium",
    "slug": "antwerp",
    "name": "Antwerp",
    "state": "Belgium"
  },
  {
    "country": "belgium",
    "countryName": "Belgium",
    "slug": "ghent",
    "name": "Ghent",
    "state": "Belgium"
  },
  {
    "country": "ireland",
    "countryName": "Ireland",
    "slug": "cork",
    "name": "Cork",
    "state": "Ireland"
  },
  {
    "country": "ireland",
    "countryName": "Ireland",
    "slug": "galway",
    "name": "Galway",
    "state": "Ireland"
  },
  {
    "country": "new-zealand",
    "countryName": "New Zealand",
    "slug": "wellington",
    "name": "Wellington",
    "state": "NZ"
  },
  {
    "country": "new-zealand",
    "countryName": "New Zealand",
    "slug": "christchurch",
    "name": "Christchurch",
    "state": "NZ"
  },
  {
    "country": "new-zealand",
    "countryName": "New Zealand",
    "slug": "auckland",
    "name": "Auckland",
    "state": "NZ"
  }
];

export const INDIAN_CITIES: GlobalCity[] = RAW_INDIAN_CITIES.map((c) => ({
  country: "india",
  countryName: "India",
  name: c.name,
  slug: c.slug,
  state: c.state,
  tier: c.tier || 3,
}));

export const ALL_CITIES: GlobalCity[] = [
  ...GOLDEN_CITIES,
  ...INDIAN_CITIES,
];
