import { siteConfig } from '../config/site';
import { buildWhatsAppLink, externalLinkProps } from '../lib/whatsapp';
import { Logo } from './Logo';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
};

export function Footer() {
  const socials = (Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).filter(
    (k) => siteConfig.social[k],
  );
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-50 pt-14 pb-24 sm:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-sm text-sm text-cocoa-500">
            Venta de chocolates {siteConfig.manufacturerBrand}®.
            {siteConfig.serviceArea && ` Atendemos en ${siteConfig.serviceArea}.`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
          <a
            href={buildWhatsAppLink()}
            {...externalLinkProps}
            className="inline-flex items-center gap-2 text-cocoa-900 transition-colors hover:text-whatsapp-dark"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          {socials.map((k) => (
            <a key={k} href={siteConfig.social[k]} {...externalLinkProps} className="text-cocoa-700 transition-colors hover:text-cocoa-950">
              {socialLabels[k]}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <p className="border-t border-cocoa-900/10 pt-6 text-xs leading-relaxed text-cocoa-500">
          © {year} {siteConfig.businessName}. Somos distribuidores independientes; la marca{' '}
          {siteConfig.manufacturerBrand}® y sus productos pertenecen a su fabricante.
        </p>
      </div>
    </footer>
  );
}
