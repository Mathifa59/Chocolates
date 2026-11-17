import { Info } from 'lucide-react';
import { categories, packagingFacts, products, type Category } from '../data/products';
import { siteConfig } from '../config/site';
import { Reveal } from './ui/Reveal';

/** Barras que aparecen en la foto compuesta de esta sección. */
const SHOWCASE_IDS = ['quinua-tostada', 'aguaymanto', 'menta-andina-muna'];

/** Grupos generados automáticamente a partir del catálogo (sin datos inventados). */
const GROUPS: Category[] = ['frutas', 'andinos', 'frutos-secos', 'especiales'];

export function IngredientsSection() {
  const showcase = SHOWCASE_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;

  const seen = new Set<string>();
  const groups = GROUPS.map((cat) => ({
    label: categories.find((c) => c.id === cat)?.label ?? cat,
    items: products
      .filter((p) => p.category === cat)
      .flatMap((p) => p.ingredients ?? [])
      .filter((item) => !seen.has(item) && Boolean(seen.add(item))),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="ingredientes" aria-labelledby="ingredientes-title" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Composición visual */}
        <Reveal className="relative order-last lg:order-first">
          <div className="grain relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-cocoa-900 sm:aspect-square lg:aspect-[4/5]">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,rgba(224,154,79,0.35),transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              {showcase.map((p, i) => (
                <img
                  key={p.id}
                  src={p.imageSmall ?? p.image}
                  alt={`Barra sabor ${p.name}`}
                  width={360}
                  height={648}
                  loading="lazy"
                  decoding="async"
                  className="absolute w-[32%] rounded-[4px] shadow-[0_30px_40px_-18px_rgba(0,0,0,0.75)]"
                  style={{
                    transform: `translateX(${(i - 1) * 78}%) translateY(${i === 1 ? -4 : 6}%) rotate(${(i - 1) * 9}deg)`,
                    zIndex: i === 1 ? 2 : 1,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl bg-cream-50/10 px-5 py-4 text-cream-50 backdrop-blur-md">
              <span className="text-sm text-cream-200">{packagingFacts.origin}</span>
              <span className="font-display text-xl font-semibold">{packagingFacts.weight}</span>
            </div>
          </div>
        </Reveal>

        {/* Contenido */}
        <div>
          <Reveal>
            <p className="text-[13px] font-bold tracking-[0.2em] text-caramel-600 uppercase">Ingredientes</p>
            <h2 id="ingredientes-title" className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-cocoa-950 sm:text-5xl">
              Cacao nativo con sabores de los Andes
            </h2>
            <p className="mt-4 max-w-lg text-cocoa-700 sm:text-lg">
              Chocolate oscuro del grano a la barra, con frutas, granos andinos y frutos secos.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: 'Cacao', v: '75–99%' },
                { k: 'Peso', v: packagingFacts.weight },
                { k: 'Proceso', v: 'Bean to Bar' },
              ].map((f) => (
                <div key={f.k} className="rounded-2xl bg-white p-4 ring-1 ring-cocoa-900/[0.06]">
                  <dt className="text-[11px] font-bold tracking-wider text-cocoa-500 uppercase">{f.k}</dt>
                  <dd className="mt-1 font-display text-base leading-tight font-semibold text-cocoa-950 sm:text-xl">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 space-y-5">
              {groups.map((g) => (
                <div key={g.label}>
                  <h3 className="text-sm font-bold text-cocoa-900">{g.label}</h3>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-white px-3 py-1.5 text-[13px] text-cocoa-700 ring-1 ring-cocoa-900/[0.07]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            {/* ⚠️ TEXTO PROVISIONAL — reemplazar con la lista completa del reverso del empaque */}
            <div className="mt-8 flex gap-3 rounded-2xl border border-dashed border-caramel-500/50 bg-caramel-400/[0.07] p-4 text-sm text-cocoa-700">
              <Info className="mt-0.5 size-4 shrink-0 text-caramel-600" aria-hidden="true" />
              <p>
                <strong className="font-semibold text-cocoa-900">[Texto provisional]</strong> Lista completa de
                ingredientes y alérgenos: copiar del reverso del empaque.
              </p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-cocoa-500">
              Productos de la marca {siteConfig.manufacturerBrand}®. Somos distribuidores: la marca, la receta y los
              ingredientes pertenecen a su fabricante.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
