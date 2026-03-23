export interface CarMake {
  slug: string;
  name: string;
  popularModels: string[];
}

// A subset of popular global brands to seed the programmatic SEO Directory pages
export const POPULAR_MAKES: CarMake[] = [
  { slug: "ford", name: "Ford", popularModels: ["F-150", "Mustang", "Focus", "Explorer", "Escape", "Transit", "Ranger", "Fiesta"] },
  { slug: "bmw", name: "BMW", popularModels: ["3-Series", "5-Series", "X5", "X3", "M3", "1-Series", "M5"] },
  { slug: "audi", name: "Audi", popularModels: ["A4", "A3", "Q5", "A6", "Q7", "TT", "R8"] },
  { slug: "volkswagen", name: "Volkswagen", popularModels: ["Golf", "Jetta", "Passat", "Tiguan", "Transporter", "Polo"] },
  { slug: "toyota", name: "Toyota", popularModels: ["Camry", "Corolla", "RAV4", "Hilux", "Tacoma", "Highlander", "Prius"] },
  { slug: "mercedes-benz", name: "Mercedes-Benz", popularModels: ["C-Class", "E-Class", "Sprinter", "S-Class", "GLC", "A-Class"] },
  { slug: "renault", name: "Renault", popularModels: ["Clio", "Megane", "Captur", "Trafic", "Kangoo"] },
  { slug: "peugeot", name: "Peugeot", popularModels: ["208", "3008", "2008", "Partner", "308"] },
  { slug: "honda", name: "Honda", popularModels: ["Civic", "Accord", "CR-V", "HR-V", "Pilot"] },
  { slug: "nissan", name: "Nissan", popularModels: ["Altima", "Rogue", "Sentra", "Qashqai", "Navara"] },
  { slug: "vauxhall", name: "Vauxhall", popularModels: ["Corsa", "Astra", "Mokka", "Vivaro"] },
  { slug: "kia", name: "Kia", popularModels: ["Sportage", "Sorento", "Forte", "Rio", "Optima"] },
  { slug: "hyundai", name: "Hyundai", popularModels: ["Elantra", "Tucson", "Santa Fe", "Sonata", "Kona"] },
  { slug: "volvo", name: "Volvo", popularModels: ["XC90", "XC60", "V40", "S60"] },
  { slug: "skoda", name: "Skoda", popularModels: ["Octavia", "Fabia", "Superb", "Kodiaq"] },
  { slug: "fiat", name: "Fiat", popularModels: ["500", "Ducato", "Panda", "Tipo"] },
  { slug: "mazda", name: "Mazda", popularModels: ["CX-5", "Mazda3", "Mazda6", "MX-5"] },
  { slug: "mini", name: "Mini", popularModels: ["Cooper", "Countryman", "Clubman"] },
  { slug: "seat", name: "SEAT", popularModels: ["Ibiza", "Leon", "Ateca", "Arona"] },
  { slug: "alfa-romeo", name: "Alfa Romeo", popularModels: ["Giulia", "Stelvio", "Giulietta"] }
];

/**
 * Converts a URL slug back to a human-readable title
 * e.g., "mercedes-benz" -> "Mercedes Benz"
 */
export function unslugify(slug: string | undefined): string {
  if (!slug) return '';
  // Check for precise matches first for complex names
  if (slug.toLowerCase() === 'mercedes-benz') return 'Mercedes-Benz';
  if (slug.toLowerCase() === 'alfa-romeo') return 'Alfa Romeo';
  if (slug.toLowerCase() === 'f-150') return 'F-150';

  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Creates an SEO-friendly URL slug from a human-readable string
 */
export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
