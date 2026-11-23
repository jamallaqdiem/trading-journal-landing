import { ShieldCheck, HardDrive, WifiOff } from "lucide-react";

export function PrivacyGuarantee() {
  return (
    <section className="py-12 px-4 border-y border-slate-800 bg-slate-900/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-4 h-4" />
            The App live in your Laptop
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Your Trading Data Never Touches the Internet
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Unlike web-based journals that store your private P&L on external
            servers, this app lives natively on your computer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
            <HardDrive className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              100% Local Storage
            </h3>
            <p className="text-sm text-slate-400">
              All trades, charts, and notes are saved directly on your own hard
              drive—never uploaded to any third-party cloud.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
            <WifiOff className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              Works Completely Offline
            </h3>
            <p className="text-sm text-slate-400">
              Once downloaded and installed, the application runs independently
              without requiring an internet connection or login account.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              Total Strategy Privacy
            </h3>
            <p className="text-sm text-slate-400">
              No tracking, no data harvesting, and no external database leaks.
              You own your database file forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
