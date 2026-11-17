import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { buildWhatsAppLink, externalLinkProps } from '../lib/whatsapp';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sabores', label: 'Sabores' },
  { href: '#ingredientes', label: 'Ingredientes' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? 'bg-cream-50/85 shadow-[0_1px_0_rgba(42,24,18,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8"
      >
        <a href="#inicio" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-cocoa-700 transition-colors hover:bg-cocoa-900/5 hover:text-cocoa-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" variant="dark">
            Pedir por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Móvil: acceso directo a WhatsApp + menú */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={buildWhatsAppLink()}
            {...externalLinkProps}
            aria-label="Pedir por WhatsApp"
            className="grid size-11 place-items-center rounded-full bg-cocoa-900 text-whatsapp transition-transform active:scale-95"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-full text-cocoa-900 ring-1 ring-cocoa-900/15 transition-colors hover:bg-cocoa-900/5"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-soft md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0" inert={!open}>
          <ul className="space-y-1 px-5 pt-2 pb-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 font-display text-2xl text-cocoa-900 transition-colors hover:bg-cocoa-900/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <WhatsAppButton size="lg" className="w-full">
                Pedir por WhatsApp
              </WhatsAppButton>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
