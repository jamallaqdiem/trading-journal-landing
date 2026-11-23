import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  code: string;
  label: string;
  title: string;
  mediaSrc: string;
}

interface LightboxModalProps {
  items: LightboxItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const activeItem = activeIndex !== null ? (items[activeIndex] ?? null) : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  if (!activeItem || activeIndex === null) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeItem.label} full screen preview`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040812]/92 p-3 backdrop-blur-md sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-emerald-400/35 bg-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              {activeItem.code} • {activeItem.label} ({activeIndex + 1} of{" "}
              {items.length})
            </span>
            <h4 className="text-sm font-semibold text-white sm:text-base">
              {activeItem.title}
            </h4>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close full screen view"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/50 hover:bg-slate-700 hover:text-white"
          >
            <X className="h-4 w-4" />
            <span>Close (Esc)</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center bg-black p-2 sm:p-4">
          <img
            src={activeItem.mediaSrc}
            alt={activeItem.title}
            className="max-h-[74vh] w-auto rounded-lg object-contain"
          />

          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous screenshot"
            className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next screenshot"
            className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
