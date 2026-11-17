import { useEffect, useState } from 'react';
import { buildWhatsAppLink, externalLinkProps } from '../lib/whatsapp';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

/** Botón flotante: aparece tras un poco de scroll para no tapar el hero. */
export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppLink()}
      {...externalLinkProps}
      aria-label="Pedir por WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`wa-pulse group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 isolate grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_30px_-8px_rgba(18,140,126,0.6)] transition-all duration-500 ease-out-soft hover:scale-105 sm:right-6 sm:bottom-6 sm:size-16 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-cocoa-900 px-4 py-2 text-sm font-semibold whitespace-nowrap text-cream-50 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        ¿Hacemos tu pedido?
      </span>
    </a>
  );
}
