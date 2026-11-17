import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { categories, products, type Category } from '../data/products';
import { ProductCard } from './ProductCard';
import { Reveal } from './ui/Reveal';

/** Cantidad de sabores visibles antes de "Ver todos" (solo en la pestaña Todos). */
const INITIAL_VISIBLE = 8;

export function ProductCatalog() {
  const [active, setActive] = useState<Category | 'todos'>('todos');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      active === 'todos'
        ? [...products].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
        : products.filter((p) => p.category === active),
    [active],
  );
  const collapsed = active === 'todos' && !expanded && filtered.length > INITIAL_VISIBLE;
  const visible = collapsed ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  const counts = useMemo(() => {
    const c: Record<string, number> = { todos: products.length };
    for (const p of products) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <section id="sabores" aria-labelledby="sabores-title" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-[0.2em] text-caramel-600 uppercase">Catálogo</p>
          <h2 id="sabores-title" className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-cocoa-950 sm:text-5xl">
            Encuentra tu chocolate favorito
          </h2>
          <p className="mt-4 text-cocoa-700 sm:text-lg">
            Elige un sabor y te escribimos por WhatsApp para coordinar tu pedido.
          </p>
        </Reveal>

        {/* Filtros */}
        <div className="relative mt-10 -mx-5 sm:mx-0">
          <div
            role="group"
            aria-label="Filtrar sabores por tipo"
            className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-1 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {categories.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActive(c.id);
                    setExpanded(false);
                  }}
                  className={`flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-cocoa-900 text-cream-50 shadow-[0_8px_20px_-10px_rgba(42,24,18,0.7)]'
                      : 'bg-white text-cocoa-700 ring-1 ring-cocoa-900/10 hover:ring-cocoa-900/30'
                  }`}
                >
                  {c.label}
                  <span className={`text-xs tabular-nums ${isActive ? 'text-caramel-400' : 'text-cocoa-500/70'}`}>
                    {counts[c.id] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cuadrícula */}
        <ul
          aria-live="polite"
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          {visible.map((p, i) => (
            <li key={p.id} className="animate-[card-in_.6s_var(--ease-out-soft)_both]" style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}>
              <ProductCard product={p} eager={i < 4} />
            </li>
          ))}
        </ul>

        {collapsed && (
          <div className="pointer-events-none relative -mt-40 flex justify-center bg-gradient-to-t from-cream-50 via-cream-50/95 to-transparent pt-28">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="group pointer-events-auto inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-8 font-semibold text-cocoa-900 shadow-[0_14px_40px_-18px_rgba(42,24,18,0.6)] ring-1 ring-cocoa-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:ring-cocoa-900/25"
            >
              Ver los {products.length} sabores
              <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
