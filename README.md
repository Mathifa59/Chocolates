# Landing — Venta de chocolates

Landing page de una sola página (React + Vite + TypeScript + Tailwind CSS v4) para mostrar el catálogo de barras de chocolate y recibir pedidos por WhatsApp.

## Ejecutar

```bash
npm install
npm run dev       # desarrollo → http://localhost:5173
npm run build     # verificación de tipos + build de producción en /dist
npm run preview   # previsualizar el build
```

## Dónde cambiar cada cosa

| Qué | Archivo |
| --- | --- |
| **Número de WhatsApp** (`whatsappNumber`), mensajes, nombre comercial, redes sociales | `src/config/site.ts` |
| **Sabores, descripciones, precios, disponibilidad, destacados** | `src/data/products.ts` |
| **Fotos de productos** | `public/products/<id>.webp` (600×1080) y `<id>-360.webp` (360×648) |
| Barras que aparecen en el hero / CTA / ingredientes | Constantes `HERO_IDS`, `CTA_IDS`, `SHOWCASE_IDS` en cada componente |
| Título, descripción SEO, Open Graph, dominio | `index.html` |
| Imagen para redes sociales | `public/og-image.jpg` (1200×630) |
| Colores y tipografías | `src/index.css` (bloque `@theme`) |

### Agregar o quitar un sabor
1. Coloca la foto recortada en `public/products/` con el mismo `id` del producto.
2. Copia un bloque en `src/data/products.ts` y edita sus datos.
3. Para ocultarlo temporalmente usa `available: false` (se muestra como agotado) o borra el bloque.

## Placeholders pendientes
- `whatsappNumber: '519XXXXXXXX'` → número real.
- `businessName: 'Antojo de Cacao'` → nombre comercial real (también en `index.html`).
- Lista completa de ingredientes y alérgenos (texto provisional en la sección Ingredientes).
- URL `https://tu-dominio.vercel.app/` en `index.html`.
- Redes sociales en `src/config/site.ts` (vacías = ocultas).

## Desplegar en Vercel
Importa la carpeta/repositorio en Vercel. Detecta Vite automáticamente (build: `npm run build`, output: `dist`).

> Las fotos originales de WhatsApp se conservan en la raíz; las versiones recortadas y optimizadas están en `public/products/`.
