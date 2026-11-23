import { useState } from "react";
import { FEATURES } from "../data/showcaseItems";
import { CheckCircle2, Image as ImageIcon, Maximize2 } from "lucide-react";

interface FeatureShowcaseProps {
  onOpenLightbox: (lightboxIndex: number) => void;
}

export function FeatureShowcase({ onOpenLightbox }: FeatureShowcaseProps) {
  const [activeId, setActiveId] = useState<string>(FEATURES[0].id);

  const activeIndex = Math.max(
    0,
    FEATURES.findIndex((item) => item.id === activeId),
  );
  const activeFeature = FEATURES[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section
      id="screens"
      className="border-b border-slate-800/70 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              // Interactive App Views
            </p>
            <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Four Focused Views in One Desktop App
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400">
            HOVER OR CLICK ANY VIEW BELOW •{" "}
            <span className="text-emerald-400">{activeFeature.label}</span>
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800/90 bg-[#070d19]/95 p-5 shadow-2xl sm:p-7">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                <ActiveIcon className="h-4 w-4" />
                <span>
                  {activeFeature.code} • {activeFeature.label}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeFeature.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {activeFeature.description}
              </p>

              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2.5 text-sm font-medium text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{activeFeature.highlight}</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_35px_-10px_rgba(16,185,129,0.4)]">
                <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/95 px-4 py-2 text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-300">
                    {activeFeature.label.toUpperCase()} SCREENSHOT
                  </span>
                  {activeFeature.mediaSrc && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(activeIndex)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      Full Screen
                    </button>
                  )}
                </div>

                {activeFeature.mediaSrc ? (
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(activeIndex)}
                    aria-label={`Open ${activeFeature.label} full screen`}
                    className="relative block w-full cursor-zoom-in text-left"
                  >
                    <img
                      src={activeFeature.mediaSrc}
                      alt={`${activeFeature.label} view of the trading app`}
                      className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute right-3 bottom-3 translate-y-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/60 bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur-md">
                        <Maximize2 className="h-3.5 w-3.5 text-emerald-400" />
                        Click to Zoom
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center p-6 text-center">
                    <ImageIcon className="mb-2 h-6 w-6 text-slate-400" />
                    <p className="text-sm font-semibold text-white">
                      {activeFeature.label} Screenshot Slot
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800/80 pt-5">
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {FEATURES.map((item, idx) => {
                const isSelected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => {
                      setActiveId(item.id);
                      if (isSelected && item.mediaSrc) {
                        onOpenLightbox(idx);
                      }
                    }}
                    className={`group relative flex flex-col overflow-hidden rounded-xl border p-2 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "border-emerald-400 bg-emerald-500/10 shadow-[0_0_24px_-6px_rgba(16,185,129,0.45)]"
                        : "border-slate-800 bg-slate-900/60 hover:border-emerald-400/50 hover:bg-slate-900"
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-950">
                      {item.mediaSrc ? (
                        <img
                          src={item.mediaSrc}
                          alt={item.label}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[11px] text-slate-400">
                          {item.label}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between px-1">
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isSelected
                            ? "text-emerald-300"
                            : "text-slate-200 group-hover:text-emerald-300"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {isSelected ? "ZOOM" : "VIEW"}
                      </span>
                    </div>
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
