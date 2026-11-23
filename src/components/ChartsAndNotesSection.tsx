import { useState } from "react";
import { LineChart, Maximize2 } from "lucide-react";
import { CHART_NOTE_SLIDES } from "../data/showcaseItems";

interface ChartsAndNotesSectionProps {
  lightboxOffset: number;
  onOpenLightbox: (lightboxIndex: number) => void;
}

export function ChartsAndNotesSection({
  lightboxOffset,
  onOpenLightbox,
}: ChartsAndNotesSectionProps) {
  const [activeChartSlideId, setActiveChartSlideId] = useState<string>(
    CHART_NOTE_SLIDES[0].id,
  );

  const activeChartIndex = Math.max(
    0,
    CHART_NOTE_SLIDES.findIndex((slide) => slide.id === activeChartSlideId),
  );
  const activeChartSlide = CHART_NOTE_SLIDES[activeChartIndex];

  return (
    <section
      id="charts"
      className="border-b border-slate-800/70 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              // Chart Proof + Written Notes
            </p>
            <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pair Any Chart With Structured Trade Notes
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400">
            WORKS WITH ANY BROKER •{" "}
            <span className="text-emerald-400">{activeChartSlide.label}</span>
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800/90 bg-[#070d19]/95 p-5 shadow-2xl sm:p-7">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                <LineChart className="h-4 w-4" />
                <span>{activeChartSlide.code}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeChartSlide.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {activeChartSlide.summary}
              </p>

              <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4">
                <p className="font-mono text-xs font-semibold text-emerald-400">
                  {activeChartSlide.noteTitle}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {activeChartSlide.noteBody}
                </p>
                <div className="mt-3 border-t border-slate-800/80 pt-2.5 text-xs text-slate-400">
                  <span className="font-mono font-semibold text-cyan-300">
                    {activeChartSlide.ruleLabel}:{" "}
                  </span>
                  <span>{activeChartSlide.ruleText}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_35px_-10px_rgba(16,185,129,0.4)]">
                <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/95 px-4 py-2 text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-300">
                    {activeChartSlide.label.toUpperCase()} — CHART + NOTES
                    PREVIEW
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(lightboxOffset + activeChartIndex)
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    Full Screen
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(lightboxOffset + activeChartIndex)
                    }
                    aria-label="Open chart full screen"
                    className="group/img relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-slate-800/90 bg-black text-left"
                  >
                    <img
                      src={activeChartSlide.mediaSrc}
                      alt="Trading chart showing trendlines, price levels, and volume"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                    />
                    <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-slate-950/85 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                      CHART
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(lightboxOffset + activeChartIndex)
                    }
                    aria-label="Open trade notes screenshot full screen"
                    className="group/img relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-slate-800/90 bg-black text-left"
                  >
                    <img
                      src={activeChartSlide.notesSrc}
                      alt="Trade notes view inside the desktop app"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                    />
                    <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-slate-950/85 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                      NOTES
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800/80 pt-5">
            <div className="grid gap-3.5 sm:grid-cols-3">
              {CHART_NOTE_SLIDES.map((slide, idx) => {
                const isSelected = slide.id === activeChartSlideId;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onMouseEnter={() => setActiveChartSlideId(slide.id)}
                    onFocus={() => setActiveChartSlideId(slide.id)}
                    onClick={() => {
                      setActiveChartSlideId(slide.id);
                      if (isSelected) {
                        onOpenLightbox(lightboxOffset + idx);
                      }
                    }}
                    className={`group rounded-xl border p-3.5 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "border-emerald-400 bg-emerald-500/10 shadow-[0_0_24px_-6px_rgba(16,185,129,0.4)]"
                        : "border-slate-800 bg-slate-900/60 hover:border-emerald-400/50 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold text-emerald-400">
                        {slide.code}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 group-hover:text-emerald-300">
                        {isSelected ? "ACTIVE" : "PREVIEW"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-bold text-white group-hover:text-emerald-300">
                      {slide.label}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-400">
                      {slide.noteBody}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
