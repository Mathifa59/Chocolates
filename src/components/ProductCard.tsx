import type { Product } from '../data/products';
import { siteConfig } from '../config/site';
import { buildProductWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppButton } from './ui/WhatsAppButton';

interface Props {
  product: Product;
  /** Las primeras tarjetas cargan sin lazy loading. */
  eager?: boolean;
}

export function ProductCard({ product, eager = false }: Props) {
  const available = product.available !== false;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-cocoa-900/[0.06] transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(42,24,18,0.45)]">
      {/* Imagen sobre un fondo teñido con el color del empaque */}
      <div
        className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(120% 90% at 50% 100%, ${product.accent}38, ${product.accent}10 60%, #faf5ee 100%)`,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_40%_at_50%_92%,rgba(42,24,18,0.18),transparent)]" aria-hidden="true" />
        <img
          src={product.image}
          srcSet={product.imageSmall ? `${product.imageSmall} 360w, ${product.image} 600w` : undefined}
          sizes="(min-width: 1280px) 220px, (min-width: 768px) 28vw, 42vw"
          alt={`Barra de chocolate ${product.cacao}% cacao sabor ${product.name}`}
          width={600}
          height={1080}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`relative h-[86%] w-auto rounded-[4px] object-contain shadow-[0_18px_30px_-14px_rgba(28,17,12,0.55)] transition-transform duration-700 ease-out-soft group-hover:-translate-y-1 group-hover:rotate-[-3deg] group-hover:scale-[1.03] ${available ? '' : 'opacity-50 grayscale'}`}
        />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-cocoa-900 backdrop-blur">
            {product.cacao}% cacao
          </span>
          {product.crunchy && (
            <span className="rounded-full bg-cocoa-900/85 px-2.5 py-1 text-[11px] font-bold text-cream-50 backdrop-blur">
              Crocante
            </span>
          )}
        </div>
        {!available && (
          <span className="absolute top-3 right-3 rounded-full bg-terracotta-500 px-2.5 py-1 text-[11px] font-bold text-white">
            Agotado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <h3 className="font-display text-[17px] leading-tight font-semibold text-cocoa-950 sm:text-xl">{product.name}</h3>
          {product.price !== undefined && (
            <p className="shrink-0 font-display text-base font-semibold text-caramel-600 sm:text-xl">
              <span className="sr-only">Precio: </span>
              {siteConfig.currency} {product.price.toFixed(2)}
            </p>
          )}
        </div>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-cocoa-500 sm:text-sm">{product.description}</p>

        <div className="mt-auto pt-4">
          {available ? (
            <WhatsAppButton
              href={buildProductWhatsAppLink(product.name)}
              size="sm"
              variant="dark"
              className="w-full !px-3"
              ariaLabel={`Pedir el chocolate de ${product.name} por WhatsApp`}
            >
              <span className="sm:hidden">Pedir</span>
              <span className="hidden sm:inline">Pedir por WhatsApp</span>
            </WhatsAppButton>
          ) : (
            <p className="flex h-10 items-center justify-center rounded-full bg-cream-200 text-sm font-semibold text-cocoa-500">
              No disponible
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
