import { useEffect, useState } from "react";
import { APP_CONFIG } from "./config/links";
import { DownloadsPage } from "./components/DownloadsPage";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PrivacyGuarantee } from "./components/PrivacyGuarantee";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { ChartsAndNotesSection } from "./components/ChartsAndNotesSection";
import { FounderAndSupport } from "./components/FounderAndSupport";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";
import { LightboxModal, type LightboxItem } from "./components/LightboxModal";
import { CHART_NOTE_SLIDES, FEATURES } from "./data/showcaseItems";

const VIDEO_SLOT_SRC = "/media/video-commercial.mp4";
const CHECKOUT_URL = APP_CONFIG.stripePaymentUrl;
const LICENSE_PRICE = "$27";

const LIGHTBOX_ITEMS: LightboxItem[] = [
  ...FEATURES.map((f) => ({
    code: f.code,
    label: f.label,
    title: f.title,
    mediaSrc: f.mediaSrc,
  })),
  ...CHART_NOTE_SLIDES.map((s) => ({
    code: s.code,
    label: s.label,
    title: s.title,
    mediaSrc: s.mediaSrc,
  })),
];

export function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hash, setHash] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (hash === "#/downloads" || hash === "#downloads") {
    return <DownloadsPage />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040812] text-slate-100 selection:bg-emerald-400/30 selection:text-emerald-200">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-[-140px] left-1/2 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-400/10 to-cyan-500/15 blur-[120px]"
      />

      <Header priceLabel={LICENSE_PRICE} />

      <main>
        <HeroSection videoSrc={VIDEO_SLOT_SRC} priceLabel={LICENSE_PRICE} />
        <PrivacyGuarantee />
        <FeatureShowcase onOpenLightbox={setLightboxIndex} />
        <ChartsAndNotesSection
          lightboxOffset={FEATURES.length}
          onOpenLightbox={setLightboxIndex}
        />
        <FounderAndSupport />
        <PricingSection checkoutUrl={CHECKOUT_URL} priceLabel={LICENSE_PRICE} />
      </main>

      <Footer />

      <LightboxModal
        items={LIGHTBOX_ITEMS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === null
              ? null
              : (prev - 1 + LIGHTBOX_ITEMS.length) % LIGHTBOX_ITEMS.length,
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === null ? null : (prev + 1) % LIGHTBOX_ITEMS.length,
          )
        }
      />
    </div>
  );
}

export default App;
