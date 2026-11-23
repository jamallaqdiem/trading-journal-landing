import { Lock, CheckCircle2 } from "lucide-react";

export function CheckoutTrustSteps() {
  return (
    <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 max-w-xl mx-auto text-left">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        <Lock className="w-3.5 h-3.5 text-emerald-400" />
        <span>What happens when you click Buy:</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
        <div className="flex items-start gap-2">
          <span className="font-bold text-emerald-400">1.</span>
          <span>
            Securely redirected to{" "}
            <strong className="text-white">stripe.com</strong> for encrypted
            payment.
          </span>
        </div>

        <div className="flex items-start gap-2">
          <span className="font-bold text-emerald-400">2.</span>
          <span>
            Instant redirect back to your{" "}
            <strong className="text-white">Download Page</strong> right after
            payment.
          </span>
        </div>

        <div className="flex items-start gap-2">
          <span className="font-bold text-emerald-400">3.</span>
          <span>
            One-click installers ready for{" "}
            <strong className="text-white">Windows, macOS & Linux</strong>.
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          One-time £27 payment (No subscriptions)
        </span>
        <span>7-Day Money-Back Guarantee</span>
      </div>
    </div>
  );
}
