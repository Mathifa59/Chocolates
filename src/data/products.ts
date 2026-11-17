/**
 * CATÁLOGO DE SABORES
 * ------------------------------------------------------------------
 * Para AGREGAR un sabor: copia un bloque { ... }, cambia sus datos y
 * coloca la foto en /public/products/<id>.webp (y opcionalmente una
 * versión pequeña <id>-360.webp). Para QUITAR un sabor: borra su bloque
 * o pon `available: false` para mostrarlo como "Agotado".
 *
 * Los nombres, porcentajes de cacao e inclusiones se tomaron
 * directamente de los empaques. No se añadieron datos inventados.
 *
 * DESTACADOS: los sabores con `featured: true` se muestran primero.
 *
 * PRECIOS: S/ 4 todos los sabores · S/ 5 solo Excelencia 99%.
 * Si dejas `price` sin definir, la tarjeta no muestra precio.
 */

export type Category = 'puros' | 'frutas' | 'frutos-secos' | 'andinos' | 'especiales';

export interface Product {
  /** Identificador único; también es el nombre del archivo de imagen. */
  id: string;
  /** Nombre del sabor tal como aparece en el empaque. */
  name: string;
  /** Descripción corta (1 línea). */
  description: string;
  /** Ruta de la imagen principal (600 × 1080). */
  image: string;
  /** Ruta opcional de la imagen pequeña (360 × 648) para móviles. */
  imageSmall?: string;
  /** Precio opcional en soles. */
  price?: number;
  /** Ingredientes destacados opcionales (solo los que figuran en el empaque). */
  ingredients?: string[];
  /** false = se muestra como agotado y sin botón de pedido. Por defecto: true. */
  available?: boolean;
  /** Porcentaje de cacao indicado en el empaque. */
  cacao: number;
  /** Grupo para los filtros del catálogo. */
  category: Category;
  /** Color del empaque (se usa como fondo suave de la tarjeta). */
  accent: string;
  /** Marcado como "crocante" en el empaque. */
  crunchy?: boolean;
  /** Destacado: aparece primero en la pestaña "Todos". */
  featured?: boolean;
}

export const categories: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'puros', label: 'Puros' },
  { id: 'frutas', label: 'Frutas' },
  { id: 'frutos-secos', label: 'Frutos secos' },
  { id: 'andinos', label: 'Andinos' },
  { id: 'especiales', label: 'Especiales' },
];

const PRICE_FLAVORED = 4;
const PRICE_PURE = 5; // solo Excelencia 99%

const BASE = import.meta.env.BASE_URL;
const img = (id: string) => ({
  image: `${BASE}products/${id}.webp`,
  imageSmall: `${BASE}products/${id}-360.webp`,
});

export const products: Product[] = [
  // ——— PUROS ———
  {
    id: 'intenso',
    featured: true,
    name: 'Intenso',
    description: 'Chocolate puro 75% cacao nativo. Sin inclusiones.',
    cacao: 75,
    category: 'puros',
    accent: '#0250c4',
    price: PRICE_FLAVORED,
    ...img('intenso'),
  },
  {
    id: 'profundo-85',
    featured: true,
    name: 'Profundo 85%',
    description: 'Chocolate puro 85% cacao nativo, más intenso.',
    cacao: 85,
    category: 'puros',
    accent: '#201b1c',
    price: PRICE_FLAVORED,
    ...img('profundo-85'),
  },
  {
    id: 'excelencia-99',
    name: 'Excelencia 99%',
    description: 'Chocolate 99% cacao nativo, para paladares extremos.',
    cacao: 99,
    category: 'puros',
    accent: '#312425',
    price: PRICE_PURE,
    ...img('excelencia-99'),
  },

  // ——— ESPECIALES ———
  {
    id: 'caramelo-sal-de-maras',
    featured: true,
    name: 'Caramelo con Sal de Maras',
    description: 'Crocante, con caramelo y sal de Maras.',
    cacao: 75,
    category: 'especiales',
    accent: '#fd8913',
    crunchy: true,
    ingredients: ['Caramelo', 'Sal de Maras'],
    price: PRICE_FLAVORED,
    ...img('caramelo-sal-de-maras'),
  },
  {
    id: 'cafe-85',
    name: 'Café',
    description: 'Chocolate 85% cacao nativo con café.',
    cacao: 85,
    category: 'especiales',
    accent: '#242324',
    ingredients: ['Café'],
    price: PRICE_FLAVORED,
    ...img('cafe-85'),
  },
  {
    id: 'granilla-de-cacao',
    name: 'Granilla de Cacao',
    description: 'Crocante, con granilla (nibs) de cacao.',
    cacao: 75,
    category: 'especiales',
    accent: '#04bbf1',
    crunchy: true,
    ingredients: ['Granilla de cacao'],
    price: PRICE_FLAVORED,
    ...img('granilla-de-cacao'),
  },
  {
    id: 'pasas-con-ron',
    name: 'Pasas con Ron',
    description: 'Chocolate 75% cacao nativo con pasas al ron.',
    cacao: 75,
    category: 'especiales',
    accent: '#207ed3',
    ingredients: ['Pasas', 'Ron'],
    price: PRICE_FLAVORED,
    ...img('pasas-con-ron'),
  },

  // ——— ANDINOS ———
  {
    id: 'quinua-tostada',
    featured: true,
    name: 'Quinua Tostada',
    description: 'Crocante, con quinua tostada.',
    cacao: 75,
    category: 'andinos',
    accent: '#fd0188',
    crunchy: true,
    ingredients: ['Quinua tostada'],
    price: PRICE_FLAVORED,
    ...img('quinua-tostada'),
  },
  {
    id: 'kiwicha',
    name: 'Kiwicha',
    description: 'Chocolate 75% cacao nativo con kiwicha.',
    cacao: 75,
    category: 'andinos',
    accent: '#fa4296',
    ingredients: ['Kiwicha'],
    price: PRICE_FLAVORED,
    ...img('kiwicha'),
  },
  {
    id: 'maca',
    name: 'Maca',
    description: 'Crocante, con maca.',
    cacao: 75,
    category: 'andinos',
    accent: '#02b3f3',
    crunchy: true,
    ingredients: ['Maca'],
    price: PRICE_FLAVORED,
    ...img('maca'),
  },
  {
    id: 'menta-andina-muna',
    name: 'Menta Andina – Muña',
    description: 'Chocolate 75% cacao nativo con muña.',
    cacao: 75,
    category: 'andinos',
    accent: '#02aafc',
    ingredients: ['Muña (menta andina)'],
    price: PRICE_FLAVORED,
    ...img('menta-andina-muna'),
  },
  {
    id: 'hojas-de-coca',
    name: 'Hojas de Coca',
    description: 'Chocolate 75% cacao nativo con hojas de coca.',
    cacao: 75,
    category: 'andinos',
    accent: '#abdb27',
    ingredients: ['Hojas de coca'],
    price: PRICE_FLAVORED,
    ...img('hojas-de-coca'),
  },
  {
    id: 'sal-de-maras',
    name: 'Sal de Maras',
    description: 'Chocolate 75% cacao nativo con sal de Maras.',
    cacao: 75,
    category: 'andinos',
    accent: '#fd535d',
    ingredients: ['Sal de Maras'],
    price: PRICE_FLAVORED,
    ...img('sal-de-maras'),
  },

  // ——— FRUTAS ———
  {
    id: 'aguaymanto',
    featured: true,
    name: 'Aguaymanto',
    description: 'Chocolate 75% cacao nativo con aguaymanto.',
    cacao: 75,
    category: 'frutas',
    accent: '#fea015',
    ingredients: ['Aguaymanto'],
    price: PRICE_FLAVORED,
    ...img('aguaymanto'),
  },
  {
    id: 'lucuma',
    name: 'Lúcuma',
    description: 'Chocolate 75% cacao nativo con lúcuma.',
    cacao: 75,
    category: 'frutas',
    accent: '#a2dd74',
    ingredients: ['Lúcuma'],
    price: PRICE_FLAVORED,
    ...img('lucuma'),
  },
  {
    id: 'maracuya',
    featured: true,
    name: 'Maracuyá',
    description: 'Chocolate 75% cacao nativo con maracuyá.',
    cacao: 75,
    category: 'frutas',
    accent: '#edde02',
    ingredients: ['Maracuyá'],
    price: PRICE_FLAVORED,
    ...img('maracuya'),
  },
  {
    id: 'frutos-rojos',
    featured: true,
    name: 'Frutos Rojos',
    description: 'Chocolate 75% cacao nativo con frutos rojos.',
    cacao: 75,
    category: 'frutas',
    accent: '#95065e',
    ingredients: ['Frutos rojos'],
    price: PRICE_FLAVORED,
    ...img('frutos-rojos'),
  },
  {
    id: 'arandano',
    name: 'Arándano',
    description: 'Chocolate 75% cacao nativo con arándano.',
    cacao: 75,
    category: 'frutas',
    accent: '#723fb2',
    ingredients: ['Arándano'],
    price: PRICE_FLAVORED,
    ...img('arandano'),
  },
  {
    id: 'mora',
    name: 'Mora',
    description: 'Chocolate 75% cacao nativo con mora.',
    cacao: 75,
    category: 'frutas',
    accent: '#fe0120',
    ingredients: ['Mora'],
    price: PRICE_FLAVORED,
    ...img('mora'),
  },
  {
    id: 'cereza',
    name: 'Cereza',
    description: 'Chocolate 75% cacao nativo con cereza.',
    cacao: 75,
    category: 'frutas',
    accent: '#fa2b72',
    ingredients: ['Cereza'],
    price: PRICE_FLAVORED,
    ...img('cereza'),
  },
  {
    id: 'mango',
    name: 'Mango',
    description: 'Chocolate 75% cacao nativo con mango.',
    cacao: 75,
    category: 'frutas',
    accent: '#e50132',
    ingredients: ['Mango'],
    price: PRICE_FLAVORED,
    ...img('mango'),
  },
  {
    id: 'naranja',
    name: 'Naranja',
    description: 'Chocolate 75% cacao nativo con naranja.',
    cacao: 75,
    category: 'frutas',
    accent: '#fd3a0a',
    ingredients: ['Naranja'],
    price: PRICE_FLAVORED,
    ...img('naranja'),
  },
  {
    id: 'limon',
    name: 'Limón',
    description: 'Chocolate 75% cacao nativo con limón.',
    cacao: 75,
    category: 'frutas',
    accent: '#c4df01',
    ingredients: ['Limón'],
    price: PRICE_FLAVORED,
    ...img('limon'),
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    description: 'Chocolate 75% cacao nativo con kiwi.',
    cacao: 75,
    category: 'frutas',
    accent: '#78c8ce',
    ingredients: ['Kiwi'],
    price: PRICE_FLAVORED,
    ...img('kiwi'),
  },
  {
    id: 'platano',
    name: 'Plátano',
    description: 'Chocolate 75% cacao nativo con plátano.',
    cacao: 75,
    category: 'frutas',
    accent: '#ffc702',
    ingredients: ['Plátano'],
    price: PRICE_FLAVORED,
    ...img('platano'),
  },
  {
    id: 'damasco',
    name: 'Damasco',
    description: 'Chocolate 75% cacao nativo con damasco.',
    cacao: 75,
    category: 'frutas',
    accent: '#f9d802',
    ingredients: ['Damasco'],
    price: PRICE_FLAVORED,
    ...img('damasco'),
  },
  {
    id: 'coco',
    name: 'Coco',
    description: 'Chocolate 75% cacao nativo con coco.',
    cacao: 75,
    category: 'frutas',
    accent: '#c9ccdc',
    ingredients: ['Coco'],
    price: PRICE_FLAVORED,
    ...img('coco'),
  },

  // ——— FRUTOS SECOS ———
  {
    id: 'almendra',
    name: 'Almendra',
    description: 'Chocolate 75% cacao nativo con almendra.',
    cacao: 75,
    category: 'frutos-secos',
    accent: '#fee802',
    ingredients: ['Almendra'],
    price: PRICE_FLAVORED,
    ...img('almendra'),
  },
  {
    id: 'pecana',
    name: 'Pecana',
    description: 'Chocolate 75% cacao nativo con pecana.',
    cacao: 75,
    category: 'frutos-secos',
    accent: '#fd9f39',
    ingredients: ['Pecana'],
    price: PRICE_FLAVORED,
    ...img('pecana'),
  },
  {
    id: 'pistacho',
    featured: true,
    name: 'Pistacho',
    description: 'Chocolate 75% cacao nativo con pistacho.',
    cacao: 75,
    category: 'frutos-secos',
    accent: '#70cf1f',
    ingredients: ['Pistacho'],
    price: PRICE_FLAVORED,
    ...img('pistacho'),
  },
  {
    id: 'mani',
    name: 'Maní',
    description: 'Chocolate 75% cacao nativo con maní.',
    cacao: 75,
    category: 'frutos-secos',
    accent: '#fdca93',
    ingredients: ['Maní'],
    price: PRICE_FLAVORED,
    ...img('mani'),
  },
];

/** Datos reales impresos en todos los empaques. */
export const packagingFacts = {
  weight: '25 g',
  origin: 'Hecho en Cusco',
  process: 'Bean to Bar — del grano a la barra',
  cacaoRange: '75% · 85% · 99%',
};
