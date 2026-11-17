import { MessageCircle, PackageCheck, Pointer } from 'lucide-react';
import { products } from '../data/products';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { Reveal } from './ui/Reveal';

const CTA_IDS = ['excelencia-99', 'caramelo-sal-de-maras', 'pistacho', 'cereza'];

const steps = [
  { icon: Pointer, text: 'Elige tus sabores' },
  { icon: MessageCircle, text: 'Escríbenos por WhatsApp' },
  { icon: PackageCheck, text: 'Coordinamos tu pedido' },
];

export function WhatsAppCTA() {
  const bars = CTA_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;

  return (
    <section aria-labelledby="cta-title" className="px-3 py-3 sm:px-5 sm:py-5">
      <div className="grain relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cocoa-900 px-6 py-16 text-cream-50 sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16">
        <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(224,154,79,0.4),transparent_65%)]" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-24 -z-10 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,69,42,0.35),transparent_65%)]" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="text-center lg:text-left">
            <h2 id="cta-title" className="font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1] font-medium tracking-tight">
              ¿Ya elegiste tu <em className="text-caramel-400 italic">favorito</em>?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-cream-200/90 lg:mx-0">
              Escríbenos por WhatsApp y realiza tu pedido de forma rápida y sencilla.
            </p>

            <ol className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {steps.map(({ icon: Icon, text }, i) => (
                <li key={text} className="flex items-center gap-3 rounded-full bg-cream-50/[0.07] py-2 pr-4 pl-2 text-sm whitespace-nowrap text-cream-100">
                  <span className="grid size-8 place-items-center rounded-full bg-caramel-500 text-cocoa-950">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="sr-only">Paso {i + 1}: </span>
                    {text}
                  </span>
                </li>
              ))}
            </ol>

            <WhatsAppButton size="lg" className="mt-10 w-full sm:w-auto">
              Realizar pedido por WhatsApp
            </WhatsAppButton>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto h-64 w-full max-w-sm sm:h-80">
            {bars.map((p, i) => (
              <img
                key={p.id}
                src={p.imageSmall ?? p.image}
                alt=""
                width={360}
                height={648}
                loading="lazy"
                decoding="async"
                className="absolute top-1/2 left-1/2 w-[30%] rounded-[4px] shadow-[0_30px_40px_-18px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out-soft hover:-translate-y-3"
                style={{
                  transform: `translate(calc(-50% + ${(i - 1.5) * 62}%), -50%) rotate(${(i - 1.5) * 7}deg)`,
                  zIndex: 4 - Math.abs(Math.round(i - 1.5)),
                }}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
