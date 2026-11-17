import type { ReactNode } from 'react';
import { ArrowDown, MapPin, Scale, Sparkles } from 'lucide-react';
import { products, packagingFacts } from '../data/products';
import { WhatsAppButton } from './ui/WhatsAppButton';

/** Barras que aparecen en abanico. Cambia los IDs para mostrar otros sabores. */
const HERO_IDS = ['frutos-rojos', 'intenso', 'maracuya', 'profundo-85', 'mango'];

const FAN = [
  { tx: '-118%', ty: '10%', rot: '-16deg', z: 1 },
  { tx: '-60%', ty: '-2%', rot: '-8deg', z: 2 },
  { tx: '0%', ty: '-8%', rot: '0deg', z: 5 },
  { tx: '60%', ty: '-2%', rot: '8deg', z: 2 },
  { tx: '118%', ty: '10%', rot: '16deg', z: 1 },
];

export function Hero() {
  const heroProducts = HERO_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is (typeof products)[number] => Boolean(p),
  );
  const flavorCount = products.length;

  return (
    <section id="inicio" className="grain relative isolate overflow-hidden bg-cream-100 pt-24 sm:pt-28">
      {/* Fondo cálido */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 size-[44rem] rounded-full bg-[radial-gradient(circle,rgba(224,154,79,0.35),transparent_65%)]" />
        <div className="absolute -bottom-56 -left-40 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(196,69,42,0.14),transparent_65%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24">
        {/* Texto */}
        <div className="relative z-10 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-cocoa-900/[0.06] px-4 py-1.5 text-[13px] font-semibold tracking-wide text-cocoa-700 uppercase">
            <Sparkles className="size-3.5 text-caramel-500" aria-hidden="true" />
            {flavorCount} sabores · Cacao nativo
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.03em] text-cocoa-950">
            Un antojo que <em className="font-normal text-caramel-600 italic">vale</em> la pena.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-cocoa-700 lg:mx-0">
            Barras de chocolate hechas en Cusco, en {flavorCount} sabores. Encuentra tu favorito y pídelo
            por WhatsApp.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#sabores"
              className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-cocoa-900 px-8 font-semibold text-cream-50 shadow-[0_14px_30px_-14px_rgba(42,24,18,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa-800 sm:w-auto"
            >
              Ver sabores
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <WhatsAppButton size="lg" variant="outline" className="w-full sm:w-auto">
              Pedir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Abanico de barras */}
        <div className="relative mx-auto h-[340px] w-full max-w-[560px] sm:h-[460px] lg:h-[560px]">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cocoa-900"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cocoa-900/15"
          />
          <div className="absolute inset-0 scale-[0.8] sm:scale-100">
          <div className="hero-fan float-soft absolute inset-0">
            {heroProducts.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={i === 2 ? `Barra de chocolate sabor ${p.name}` : ''}
                width={600}
                height={1080}
                fetchPriority={i === 2 ? 'high' : 'auto'}
                className="hero-bar absolute top-[14%] left-[calc(50%-17%)] w-[34%] rounded-[6px] shadow-[0_30px_50px_-20px_rgba(28,17,12,0.65),0_8px_16px_-8px_rgba(28,17,12,0.35)]"
                style={{
                  ['--tx' as string]: FAN[i].tx,
                  ['--ty' as string]: FAN[i].ty,
                  ['--rot' as string]: FAN[i].rot,
                  ['--delay' as string]: `${120 + Math.abs(i - 2) * 120}ms`,
                  zIndex: FAN[i].z,
                }}
              />
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* Datos reales del empaque */}
      <div className="relative border-t border-cocoa-900/10 bg-cream-50/60 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-6 text-sm sm:px-8 md:grid-cols-4">
          <Fact icon={<span className="font-display text-base font-semibold">%</span>} label="Cacao nativo" value={packagingFacts.cacaoRange} />
          <Fact icon={<Scale className="size-4" />} label="Por barra" value={packagingFacts.weight} />
          <Fact icon={<MapPin className="size-4" />} label="Origen" value={packagingFacts.origin} />
          <Fact icon={<Sparkles className="size-4" />} label="Variedades" value={`${flavorCount} sabores`} />
        </ul>
      </div>
    </section>
  );
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-center gap-3 md:justify-center">
      <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-caramel-500/15 text-caramel-600">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[12px] tracking-wide text-cocoa-500 uppercase">{label}</span>
        <span className="font-semibold text-cocoa-900">{value}</span>
      </span>
    </li>
  );
}
