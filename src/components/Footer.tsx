import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-4 py-8 text-center text-xs text-slate-500 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
        <span className="flex items-center gap-1.5 text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Trading Analytics Desktop — Built for disciplined traders.
        </span>
        <span className="font-mono text-[11px] text-slate-600">
          LOCAL-FIRST • WINDOWS • MACOS • LINUX
        </span>
      </div>
    </footer>
  );
}
