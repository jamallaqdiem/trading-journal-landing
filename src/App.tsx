import { useEffect, useState } from "react";
import { DownloadsPage } from "./components/DownloadsPage";
import { PrivacyGuarantee } from "./components/PrivacyGuarantee";
import { CheckoutTrustSteps } from "./components/CheckoutTrustSteps";
import { FounderAndSupport } from "./components/FounderAndSupport";
import { APP_CONFIG } from "./config/links";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Film,
  Image as ImageIcon,
  Lock,
  Maximize2,
  Newspaper,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  X,
} from "lucide-react";

interface FeatureItem {
  id: string;
  label: string;
  code: string;
  title: string;
  description: string;
  highlight: string;
  mediaSrc: string;
  icon: typeof BarChart3;
}

const VIDEO_SLOT_SRC = "/media/video-commercial.mp4";

const CHECKOUT_URL = APP_CONFIG.stripePaymentUrl;

const FEATURES: FeatureItem[] = [
  {
    id: "overview",
    label: "Overview",
    code: "MOD // 01",
    title: "Instant Command View of Your Trading Day",
    description:
      "See daily net P&L, win rate, risk-to-reward discipline, and session status at a glance before placing your next trade.",
    highlight: "Spot overtrading and tilt early",
    mediaSrc: "/media/img2.jpeg",
    icon: TrendingUp,
  },
  {
    id: "metrics",
    label: "Metrics",
    code: "MOD // 02",
    title: "Deep Performance & Mistake Analytics",
    description:
      "Break down expectancy, drawdown curves, and setup performance so repeating errors stand out clearly.",
    highlight: "Turn raw trade history into edge",
    mediaSrc: "/media/img5.jpeg",
    icon: BarChart3,
  },
  {
    id: "entries",
    label: "Entries",
    code: "MOD // 03",
    title: "Clean Execution & Trade Entry Log",
    description:
      "Review entry prices, exits, sizing, and timing side by side to tighten execution consistency, keep screenshot for charts to review why it fail or succeeded.",
    highlight: "Saved notes and charts will be your winning assets",
    mediaSrc: "/media/img4.jpeg",
    icon: Activity,
  },
  {
    id: "news-journal",
    label: "News & Journal",
    code: "MOD // 04",
    title: "Market Catalysts Paired With Your Journal",
    description:
      "Connect session news events directly to your trade notes and emotional tags to build repeatable habits.",
    highlight: "Context + reflection in one place",
    mediaSrc: "/media/img3.jpeg",
    icon: BookOpen,
  },
];

export function App() {
  const [activeId, setActiveId] = useState<string>(FEATURES[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hash, setHash] = useState<string>(() => window.location.hash);

  const activeIndex = Math.max(
    0,
    FEATURES.findIndex((item) => item.id === activeId),
  );
  const activeFeature = FEATURES[activeIndex];
  const ActiveIcon = activeFeature.icon;

  const lightboxFeature =
    lightboxIndex !== null ? FEATURES[lightboxIndex] : null;

  const showPrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + FEATURES.length) % FEATURES.length,
    );
  };

  const showNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % FEATURES.length,
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

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
      {/* Cyber-Grid & Ambient Glow Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-[-140px] left-1/2 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-400/10 to-cyan-500/15 blur-[120px]"
      />

      {/* Top Navigation */}
      <header className="sticky top-0 z-30 border-b border-emerald-500/15 bg-[#040812]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-400/70 group-hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-base font-bold tracking-tight text-white sm:text-lg">
                Trading Analytics
              </span>
              <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-300 sm:inline-flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                DAY TRADER SUITE
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
            <a
              href="#walkthrough"
              className="transition duration-200 hover:text-emerald-300"
            >
              Walkthrough
            </a>
            <a
              href="#screens"
              className="transition duration-200 hover:text-emerald-300"
            >
              4 Core Modules
            </a>
            <a
              href="#workflow"
              className="transition duration-200 hover:text-emerald-300"
            >
              Edge &amp; Discipline
            </a>
            <a
              href="#pricing"
              className="transition duration-200 hover:text-emerald-300"
            >
              License
            </a>
          </nav>

          <a
            href="#pricing"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-2 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(16,185,129,0.6)]"
          >
            <span>Get Access</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative border-b border-slate-800/70 px-4 pt-14 pb-20 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-slate-900/80 px-4 py-1.5 font-mono text-xs text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.12)] backdrop-blur-md">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>Built BY A SOFTWARE ENGINEER • NOT VIBE-CODED</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Most Traders Fail Because They Never{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 bg-clip-text text-transparent">
                Track What Went Wrong
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I learned the hard way repeating mistakes without tracking wins or
              losses is why most traders lose, instead of reviewing what worked
              and what hurt. Built cleanly from scratch to spot repeating
              mistakes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#walkthrough"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
              >
                <Play className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                Watch Full Walkthrough
              </a>
              <a
                href="#screens"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/90 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-slate-800/90 hover:text-white"
              >
                Explore All 4 Views
              </a>
            </div>
          </div>

          {/* Interactive Futuristic Video Showcase Frame */}
          <div id="walkthrough" className="mx-auto mt-14 max-w-5xl">
            <div className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1.5">
              {/* Animated Outer Neon Glow on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-400/30 to-emerald-500/30 opacity-40 blur-xl transition duration-500 group-hover:opacity-95"
              />

              <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#070d19]/95 shadow-2xl shadow-black/70 transition-colors duration-300 group-hover:border-emerald-400/60">
                {/* Terminal Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 bg-slate-950/90 px-4 py-3 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70 transition group-hover:bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70 transition group-hover:bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70 transition group-hover:bg-emerald-400" />
                    </div>
                    <div className="h-3.5 w-[1px] bg-slate-800" />
                    <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
                      <Film className="h-3.5 w-3.5 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                      <span>
                        WALKTHROUGH // Overview → Trades → News → Journal
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300 transition duration-300 group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
                    {VIDEO_SLOT_SRC ? "1080P NARRATED STREAM" : "READY"}
                  </span>
                </div>

                {VIDEO_SLOT_SRC ? (
                  <div className="relative overflow-hidden bg-black">
                    <video
                      src={VIDEO_SLOT_SRC}
                      controls
                      playsInline
                      className="aspect-video w-full bg-black object-cover transition-transform duration-500 ease-out group-hover:scale-[1.012]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                      <Film className="h-8 w-8" />
                    </div>
                    <p className="text-base font-semibold text-white">
                      Commercial Video Slot Reserved
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Point 3: Local-Only Security & Privacy */}
        <PrivacyGuarantee />

        {/* Interactive Feature Tabs + Click-to-Expand Screenshot */}
        <section
          id="screens"
          className="border-b border-slate-800/70 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                  // Four Core Command Modules
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Designed Around How Real Traders Review Sessions
                </h2>
                <p className="mt-3 text-slate-400">
                  Switch modules below or hover and click any screen to inspect
                  every indicator in full resolution.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-400">
                ACTIVE MODULE:{" "}
                <span className="text-emerald-400">{activeFeature.code}</span>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="mt-8 flex flex-wrap gap-3">
              {FEATURES.map((item) => {
                const Icon = item.icon;
                const isSelected = item.id === activeFeature.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`group inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? "-translate-y-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.35)]"
                        : "border border-slate-800 bg-slate-900/80 text-slate-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-slate-800/90 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isSelected ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Feature Stage */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-4">
                <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                  <ActiveIcon className="h-4 w-4" />
                  <span>
                    {activeFeature.code} • {activeFeature.label}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {activeFeature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                  {activeFeature.description}
                </p>
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2.5 text-sm font-medium text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{activeFeature.highlight}</span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="group relative rounded-2xl border border-slate-800 bg-[#070d19]/90 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-[0_0_45px_-10px_rgba(16,185,129,0.45)]">
                  <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/90 px-4 py-2.5 text-xs text-slate-400">
                    <span className="font-mono text-[11px] text-slate-300">
                      {activeFeature.label.toUpperCase()} — ANNOTATED VIEW
                    </span>
                    {activeFeature.mediaSrc && (
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(activeIndex)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 transition duration-200 hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        Full Screen
                      </button>
                    )}
                  </div>

                  {activeFeature.mediaSrc ? (
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(activeIndex)}
                      aria-label={`Expand ${activeFeature.label} screenshot full screen`}
                      className="relative block w-full cursor-zoom-in overflow-hidden rounded-b-2xl text-left"
                    >
                      <img
                        src={activeFeature.mediaSrc}
                        alt={`${activeFeature.label} view of the trading app`}
                        className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-transparent to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute right-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/60 bg-slate-950/90 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] backdrop-blur-md">
                          <Maximize2 className="h-3.5 w-3.5 text-emerald-400" />
                          Click to Inspect Full Screen
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div className="flex aspect-video w-full flex-col items-center justify-center bg-slate-950/80 p-6 text-center">
                      <ImageIcon className="mb-2 h-6 w-6 text-slate-400" />
                      <p className="text-sm font-semibold text-white">
                        {activeFeature.label} Screenshot Slot
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive Screenshot Cards Grid */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onDoubleClick={() => item.mediaSrc && setLightboxIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(item.id);
                    }
                  }}
                  className={`group relative cursor-pointer rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1.5 ${
                    item.id === activeId
                      ? "border-emerald-400/70 bg-slate-900/90 shadow-[0_0_30px_-8px_rgba(16,185,129,0.4)]"
                      : "border-slate-800/90 bg-slate-900/40 hover:border-emerald-400/50 hover:bg-slate-900/85 hover:shadow-[0_0_28px_-8px_rgba(16,185,129,0.3)]"
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950/90">
                    {item.mediaSrc ? (
                      <>
                        <img
                          src={item.mediaSrc}
                          alt={item.label}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(item.id);
                            setLightboxIndex(idx);
                          }}
                          title="Expand full screen"
                          aria-label={`Expand ${item.label} full screen`}
                          className="absolute top-2 right-2 flex h-7 w-7 scale-90 items-center justify-center rounded-lg border border-emerald-400/40 bg-slate-950/90 text-emerald-300 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 hover:bg-emerald-400 hover:text-slate-950"
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-slate-400">
                        Slot 0{idx + 1} — Empty
                      </div>
                    )}
                  </div>
                  <div className="mt-3.5 flex items-center justify-between">
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-emerald-300">
                      {item.label}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveId(item.id);
                        if (item.mediaSrc) setLightboxIndex(idx);
                      }}
                      className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <span>Expand</span>
                      <span>→</span>
                    </button>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Summary Section */}
        <section
          id="workflow"
          className="border-b border-slate-800/70 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                // Built For Discipline
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Every Session Turns Into Actionable Data
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.35)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Catch Recurring Errors Early
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Seeing exact patterns in your entries and metrics makes it
                  easier to stop repeating habits that drain your account.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Trade With Context, Not Noise
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Keep market news and trade execution connected so you know
                  which conditions bring out your best discipline.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.35)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Build Long-Term Consistency
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A structured journal turns every session—win or loss—into
                  clear feedback for tomorrow&apos;s market open.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Points 6 & 7: Founder Note, Guarantee & Direct Support */}
        <FounderAndSupport />

        {/* Conversion / Checkout Ready Section */}
        <section id="pricing" className="relative px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/35 bg-gradient-to-b from-slate-900/95 via-[#070e1c] to-slate-950 p-8 shadow-[0_0_60px_-15px_rgba(16,185,129,0.35)] sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
              />

              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="space-y-4 lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>FULL DESKTOP LICENSE</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Ready to Upgrade Your Trading Discipline?
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    Get instant access to the desktop Trading Analytics &amp;
                    Journal Suite with full Overview metrics, Trades Feed CSV
                    sync, Market News catalysts, and Daily Psychology tracking.
                  </p>

                  <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>
                        All 4 desktop modules + unlimited local trade logging
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>
                        CSV import/export, chart snapshots &amp; psychology
                        scoring
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Instant download &amp; license activation key</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6 text-center shadow-xl lg:col-span-5">
                  <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                    Desktop Pro Access
                  </p>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      $49
                    </span>
                    <span className="text-xs text-slate-400">/ one-time</span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-400">
                    Instant download after checkout
                  </p>

                  <a
                    href={CHECKOUT_URL}
                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(16,185,129,0.6)]"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Buy Now — Instant Access</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                    <Lock className="h-3.5 w-3.5 text-emerald-400/80" />
                    <span>Encrypted card &amp; Apple/Google Pay checkout</span>
                  </div>
                </div>
              </div>

              {/* Point 4: Checkout Trust Steps */}
              <CheckoutTrustSteps />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Trading Analytics Desktop — Built for disciplined day traders.
          </span>
          <span className="font-mono text-[11px] text-slate-600">
            OVERVIEW • TRADES • NEWS • JOURNAL
          </span>
        </div>
      </footer>

      {/* Full-Screen Lightbox Modal */}
      {lightboxFeature && (
        <div
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxFeature.label} full screen preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#040812]/92 p-3 backdrop-blur-md sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-emerald-400/35 bg-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  {lightboxFeature.code} • {lightboxFeature.label} (
                  {(lightboxIndex ?? 0) + 1} of {FEATURES.length})
                </span>
                <h4 className="text-sm font-semibold text-white sm:text-base">
                  {lightboxFeature.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close full screen view"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/50 hover:bg-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" />
                <span>Close (Esc)</span>
              </button>
            </div>

            {/* Full Image Display */}
            <div className="relative flex items-center justify-center bg-black p-2 sm:p-4">
              <img
                src={lightboxFeature.mediaSrc}
                alt={lightboxFeature.title}
                className="max-h-[74vh] w-auto rounded-lg object-contain"
              />

              {/* Previous / Next Controls */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous screenshot"
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
