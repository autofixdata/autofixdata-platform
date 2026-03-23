export interface CarMake {
  slug: string;
  name: string;
  popularModels: string[];
}

// A heavily expanded list of 50+ global brands to maximize Programmatic SEO directory depth
export const POPULAR_MAKES: CarMake[] = [
  // American
  { slug: "ford", name: "Ford", popularModels: ["F-150", "Mustang", "Focus", "Explorer", "Escape", "Transit", "Ranger", "Fiesta", "Bronco", "Edge"] },
  { slug: "chevrolet", name: "Chevrolet", popularModels: ["Silverado", "Equinox", "Malibu", "Tahoe", "Colorado", "Camaro", "Corvette", "Cruze", "Suburban", "Traverse"] },
  { slug: "dodge", name: "Dodge", popularModels: ["Charger", "Challenger", "Durango", "Grand Caravan", "Journey", "Ram 1500 (Legacy)", "Dart"] },
  { slug: "gmc", name: "GMC", popularModels: ["Sierra", "Acadia", "Terrain", "Yukon", "Canyon", "Savana"] },
  { slug: "jeep", name: "Jeep", popularModels: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator"] },
  { slug: "ram", name: "Ram", popularModels: ["1500", "2500", "3500", "ProMaster"] },
  { slug: "chrysler", name: "Chrysler", popularModels: ["300", "Pacifica", "Voyager", "200", "Town & Country"] },
  { slug: "cadillac", name: "Cadillac", popularModels: ["Escalade", "XT5", "CT5", "CTS", "SRX", "XT4"] },
  { slug: "buick", name: "Buick", popularModels: ["Encore", "Enclave", "Envision", "Regal", "LaCrosse"] },
  { slug: "lincoln", name: "Lincoln", popularModels: ["Navigator", "Aviator", "Corsair", "Nautilus", "MKZ", "MKX"] },
  { slug: "tesla", name: "Tesla", popularModels: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"] },
  { slug: "rivian", name: "Rivian", popularModels: ["R1T", "R1S"] },
  { slug: "lucid", name: "Lucid", popularModels: ["Air"] },

  // European (German)
  { slug: "volkswagen", name: "Volkswagen", popularModels: ["Golf", "Jetta", "Passat", "Tiguan", "Transporter", "Polo", "Atlas", "Touareg", "ID.4", "Caddy"] },
  { slug: "bmw", name: "BMW", popularModels: ["3 Series", "5 Series", "X5", "X3", "M3", "1 Series", "M5", "X1", "X7", "4 Series"] },
  { slug: "audi", name: "Audi", popularModels: ["A4", "A3", "Q5", "A6", "Q7", "TT", "R8", "Q3", "A5", "e-tron"] },
  { slug: "mercedes-benz", name: "Mercedes-Benz", popularModels: ["C-Class", "E-Class", "Sprinter", "S-Class", "GLC", "A-Class", "GLE", "G-Class", "Vito"] },
  { slug: "porsche", name: "Porsche", popularModels: ["911", "Cayenne", "Macan", "Panamera", "Taycan", "718 Cayman"] },
  { slug: "opel", name: "Opel", popularModels: ["Corsa", "Astra", "Insignia", "Mokka", "Crossland", "Grandland"] },
  
  // European (British)
  { slug: "vauxhall", name: "Vauxhall", popularModels: ["Corsa", "Astra", "Mokka", "Vivaro", "Crossland", "Grandland"] },
  { slug: "land-rover", name: "Land Rover", popularModels: ["Range Rover", "Defender", "Discovery", "Range Rover Sport", "Evoque", "Velar"] },
  { slug: "jaguar", name: "Jaguar", popularModels: ["F-PACE", "XF", "XE", "E-PACE", "I-PACE", "F-TYPE"] },
  { slug: "mini", name: "Mini", popularModels: ["Cooper", "Countryman", "Clubman"] },
  { slug: "aston-martin", name: "Aston Martin", popularModels: ["DB11", "Vantage", "DBX", "DBS"] },
  { slug: "bentley", name: "Bentley", popularModels: ["Continental GT", "Bentayga", "Flying Spur"] },

  // European (French)
  { slug: "renault", name: "Renault", popularModels: ["Clio", "Megane", "Captur", "Trafic", "Kangoo", "Kadjar", "Zoe", "Master"] },
  { slug: "peugeot", name: "Peugeot", popularModels: ["208", "3008", "2008", "Partner", "308", "5008", "Boxer", "Expert"] },
  { slug: "citroen", name: "Citroen", popularModels: ["C3", "C4", "C3 Aircross", "Berlingo", "C5 Aircross", "Dispatch"] },
  { slug: "dacia", name: "Dacia", popularModels: ["Duster", "Sandero", "Logan", "Jogger"] },

  // European (Italian)
  { slug: "fiat", name: "Fiat", popularModels: ["500", "Ducato", "Panda", "Tipo", "500X", "Doblo", "Punto"] },
  { slug: "alfa-romeo", name: "Alfa Romeo", popularModels: ["Giulia", "Stelvio", "Giulietta", "Tonale", "Mito"] },
  { slug: "maserati", name: "Maserati", popularModels: ["Levante", "Ghibli", "Quattroporte", "Grecale"] },
  { slug: "ferrari", name: "Ferrari", popularModels: ["488", "F8 Tributo", "Roma", "Portofino", "SF90"] },
  { slug: "lamborghini", name: "Lamborghini", popularModels: ["Urus", "Huracan", "Aventador"] },

  // European (Other)
  { slug: "volvo", name: "Volvo", popularModels: ["XC90", "XC60", "XC40", "V60", "S60", "V90"] },
  { slug: "skoda", name: "Skoda", popularModels: ["Octavia", "Fabia", "Superb", "Kodiaq", "Karoq", "Kamiq"] },
  { slug: "seat", name: "SEAT", popularModels: ["Ibiza", "Leon", "Ateca", "Arona", "Tarraco"] },
  { slug: "polestar", name: "Polestar", popularModels: ["Polestar 2"] },
  { slug: "saab", name: "Saab", popularModels: ["9-3", "9-5"] },

  // Asian (Japanese)
  { slug: "toyota", name: "Toyota", popularModels: ["Camry", "Corolla", "RAV4", "Hilux", "Tacoma", "Highlander", "Prius", "Yaris", "Land Cruiser", "Tundra"] },
  { slug: "honda", name: "Honda", popularModels: ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "Odyssey", "Fit", "Ridgeline"] },
  { slug: "nissan", name: "Nissan", popularModels: ["Altima", "Rogue", "Sentra", "Qashqai", "Navara", "Pathfinder", "Frontier", "Micra", "Juke", "Leaf"] },
  { slug: "mazda", name: "Mazda", popularModels: ["CX-5", "Mazda3", "Mazda6", "MX-5", "CX-9", "CX-30", "CX-3"] },
  { slug: "subaru", name: "Subaru", popularModels: ["Outback", "Forester", "Crosstrek", "Impreza", "Ascent", "WRX", "Legacy"] },
  { slug: "lexus", name: "Lexus", popularModels: ["RX", "NX", "ES", "IS", "GX", "UX"] },
  { slug: "infiniti", name: "Infiniti", popularModels: ["Q50", "QX60", "QX50", "QX80", "G37"] },
  { slug: "acura", name: "Acura", popularModels: ["MDX", "RDX", "TLX", "ILX", "Integra"] },
  { slug: "mitsubishi", name: "Mitsubishi", popularModels: ["Outlander", "L200", "Eclipse Cross", "Mirage", "Pajero"] },
  { slug: "suzuki", name: "Suzuki", popularModels: ["Swift", "Vitara", "Jimny", "Ignis", "SX4 S-Cross"] },
  { slug: "isuzu", name: "Isuzu", popularModels: ["D-Max", "NPR"] },

  // Asian (Korean)
  { slug: "hyundai", name: "Hyundai", popularModels: ["Elantra", "Tucson", "Santa Fe", "Sonata", "Kona", "Palisade", "Ioniq 5", "i30", "i20", "i10"] },
  { slug: "kia", name: "Kia", popularModels: ["Sportage", "Sorento", "Forte", "Rio", "Optima", "Telluride", "Soul", "Ceed", "EV6"] },
  { slug: "genesis", name: "Genesis", popularModels: ["GV80", "G70", "GV70", "G80"] }
];

/**
 * Converts a URL slug back to a human-readable title
 * e.g., "mercedes-benz" -> "Mercedes-Benz"
 */
export function unslugify(slug: string | undefined): string {
  if (!slug) return '';
  // Check for precise matches first for complex names
  if (slug.toLowerCase() === 'mercedes-benz') return 'Mercedes-Benz';
  if (slug.toLowerCase() === 'alfa-romeo') return 'Alfa Romeo';
  if (slug.toLowerCase() === 'land-rover') return 'Land Rover';
  if (slug.toLowerCase() === 'aston-martin') return 'Aston Martin';
  if (slug.toLowerCase() === 'rolls-royce') return 'Rolls-Royce';
  if (slug.toLowerCase() === 'f-150') return 'F-150';

  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Creates an SEO-friendly URL slug from a human-readable string
 */
export function slugify(text: string): string {
  // First stringify to lower case
  let base = text.toLowerCase();
  // Handle some edge cases manually
  base = base.replace(/\./g, ''); // "id.4" -> "id4"
  // Replace all non-alphanumeric chars with hyphens
  return base.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
