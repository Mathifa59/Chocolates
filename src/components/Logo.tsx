import { siteConfig } from '../config/site';

/**
 * Logotipo textual. Si tienes un logo en imagen, colócalo en /public/logo.svg
 * y reemplaza el contenido de este componente por <img src="/logo.svg" ... />.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`grid size-9 place-items-center rounded-full ${light ? 'bg-cream-50/10 text-caramel-400' : 'bg-cocoa-900 text-caramel-400'}`}
      >
        {/* Grano de cacao estilizado */}
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="6.2" ry="9.5" transform="rotate(28 12 12)" />
          <path d="M8.2 5.6c1.6 3.9 2.6 8.4 7.6 12.8" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={`font-display text-[1.2rem] leading-none font-semibold tracking-tight ${light ? 'text-cream-50' : 'text-cocoa-900'}`}
      >
        {siteConfig.businessName}
      </span>
    </span>
  );
}
