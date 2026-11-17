import { siteConfig } from '../config/site';

/** Construye un enlace oficial wa.me con el mensaje codificado. */
export function buildWhatsAppLink(message: string = siteConfig.defaultMessage): string {
  const number = siteConfig.whatsappNumber.replace(/[\s+()-]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Enlace de WhatsApp con el mensaje personalizado para un sabor. */
export function buildProductWhatsAppLink(flavorName: string): string {
  return buildWhatsAppLink(siteConfig.productMessage.replace('{sabor}', flavorName));
}

/** Atributos comunes para abrir WhatsApp en una pestaña nueva. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
