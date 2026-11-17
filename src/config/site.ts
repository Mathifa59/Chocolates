/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * ------------------------------------------------------------------
 * Todo lo que cambia con frecuencia está aquí: nombre comercial,
 * número de WhatsApp, redes sociales y textos del pie de página.
 */

export const siteConfig = {
  /** ⚠️ PLACEHOLDER — reemplaza por tu nombre comercial real. */
  businessName: 'Antojo de Cacao',

  /** Marca del fabricante (aparece en los empaques). No somos los fabricantes. */
  manufacturerBrand: 'Machu Picchu',

  /**
   * ⚠️ PLACEHOLDER — número de WhatsApp en formato internacional,
   * solo dígitos, sin "+" ni espacios. Ej.: 51987654321
   */
  whatsappNumber: '519XXXXXXXX',

  /** Mensaje general (header, hero, CTA final y botón flotante). */
  defaultMessage:
    '¡Hola! Vi su página y me gustaría hacer un pedido de chocolates. ¿Me brindan información?',

  /** Mensaje por sabor. {sabor} se reemplaza automáticamente. */
  productMessage:
    '¡Hola! Me gustaría pedir el chocolate de {sabor}. ¿Podrías brindarme información para realizar mi pedido?',

  /** Moneda para mostrar precios. */
  currency: 'S/',

  /**
   * Redes sociales: deja la URL vacía ('') para ocultarla.
   * ⚠️ PLACEHOLDER — agrega tus enlaces reales.
   */
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },

  /** Ciudad o zona de atención. ⚠️ PLACEHOLDER — vacío para ocultar. */
  serviceArea: '',
} as const;
