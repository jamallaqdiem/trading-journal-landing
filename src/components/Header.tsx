import { ArrowUpRight, TrendingUp } from "lucide-react";

interface HeaderProps {
  priceLabel?: string;
}

export function Header({ priceLabel = "$49" }: HeaderProps) {
  return (
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
            Core Views
          </a>
          <a
            href="#charts"
            className="transition duration-200 hover:text-emerald-300"
          >
            Charts &amp; Notes
          </a>
          <a
            href="#pricing"
            className="transition duration-200 hover:text-emerald-300"
          >
            {priceLabel} License
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
  );
}
