import { Film, Play, Terminal } from "lucide-react";

interface HeroSectionProps {
  videoSrc: string;
  priceLabel?: string;
}

export function HeroSection({
  videoSrc,
  priceLabel = "$27",
}: HeroSectionProps) {
  return (
    <section className="relative border-b border-slate-800/70 px-4 pt-12 pb-16 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-cyan-500/15 px-4 py-1.5 font-mono text-xs font-semibold text-amber-200 shadow-[0_0_25px_rgba(251,191,36,0.18)] backdrop-blur-md">
          <Terminal className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-emerald-300">SOFTWARE ENGINEER</span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-300">5 YEARS TRADING EXPERIENCE</span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-300">{priceLabel} ONE-TIME</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Most Traders Fail Because They Never{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 bg-clip-text text-transparent">
            Track What Went Wrong
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Built by a{" "}
          <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-300">
            software engineer
          </span>{" "}
          with{" "}
          <span className="rounded-md border border-amber-400/35 bg-amber-500/10 px-2 py-0.5 font-semibold text-amber-300">
            5 years of trading experience
          </span>
          . Review your trades, charts, and notes privately on your own computer
          so repeating mistakes stand out early and every session builds real
          discipline.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#screens"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]"
          >
            <Play className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" />
            See How It Works
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/90 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-slate-800/90 hover:text-white"
          >
            Buy Lifetime License ({priceLabel})
          </a>
        </div>
      </div>

      <div id="walkthrough" className="mx-auto mt-12 max-w-5xl">
        <div className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-400/30 to-emerald-500/30 opacity-40 blur-xl transition duration-500 group-hover:opacity-90"
          />

          <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#070d19]/95 shadow-2xl shadow-black/70 transition-colors duration-300 group-hover:border-emerald-400/60">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 bg-slate-950/90 px-4 py-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-300">
                <Film className="h-3.5 w-3.5 text-emerald-400" />
                <span>
                  WALKTHROUGH // Overview → Metrics → Entries → Journal
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {videoSrc ? "PRODUCT WALKTHROUGH" : "READY"}
              </span>
            </div>

            {videoSrc ? (
              <div className="relative overflow-hidden bg-black">
                <video
                  src={videoSrc}
                  controls
                  playsInline
                  className="aspect-video w-full bg-black object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-slate-950 p-8 text-center">
                <Film className="mb-3 h-8 w-8 text-emerald-400" />
                <p className="text-base font-semibold text-white">
                  Walkthrough Video Slot Reserved
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
