import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { IngredientsSection } from './components/IngredientsSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#sabores"
        className="sr-only z-50 rounded-full bg-cocoa-900 px-5 py-3 text-cream-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al catálogo
      </a>
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <IngredientsSection />
        <WhatsAppCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
