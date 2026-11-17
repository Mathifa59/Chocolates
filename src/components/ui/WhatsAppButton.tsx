import type { ReactNode } from 'react';
import { buildWhatsAppLink, externalLinkProps } from '../../lib/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

type Variant = 'primary' | 'dark' | 'light' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  children: ReactNode;
  /** Enlace ya construido. Si no se envía, usa el mensaje general. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-whatsapp text-cocoa-950 hover:bg-[#2ee072] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)]',
  dark: 'bg-cocoa-900 text-cream-50 hover:bg-cocoa-800 shadow-[0_10px_30px_-12px_rgba(42,24,18,0.6)]',
  light: 'bg-cream-50 text-cocoa-900 hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]',
  outline:
    'bg-transparent text-cocoa-900 ring-1 ring-inset ring-cocoa-900/20 hover:ring-cocoa-900/50 hover:bg-cocoa-900/[0.03]',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm gap-2',
  md: 'h-12 px-6 text-[15px] gap-2.5',
  lg: 'h-14 px-8 text-base gap-3',
};

export function WhatsAppButton({
  children,
  href = buildWhatsAppLink(),
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      {...externalLinkProps}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-300 ease-out-soft hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className="size-[1.15em] shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
      <span>{children}</span>
    </a>
  );
}
