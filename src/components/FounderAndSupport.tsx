import { Wrench, RefreshCw, Mail, Sparkles } from "lucide-react";
import { APP_CONFIG } from "../config/links";

export function FounderAndSupport() {
  return (
    <section className="py-12 px-4 border-t border-slate-800 bg-slate-950/60">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Point 6: Founder Note & Guarantee */}
        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Wrench className="w-3.5 h-3.5" />
              Built by a Developer & Active Trader
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Fast, Local Trading Analytics—Without Monthly Subscriptions
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I built this desktop app because I wanted a fast, private way to
              review my trades, charts, and mistakes on my own machine without
              paying recurring monthly fees. If it does not fit your workflow,
              reach out within 7 days for a straightforward refund.
            </p>
          </div>
        </div>

        {/* Point 7: Lifetime Updates, Direct Support & Feature Requests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <RefreshCw className="w-5 h-5 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              Free Lifetime Updates
            </h3>
            <p className="text-sm text-slate-400">
              Your one-time license includes future feature releases, bug fixes,
              and OS compatibility updates at no extra charge.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <Mail className="w-5 h-5 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              Direct-to-Engineer Support
            </h3>
            <p className="text-sm text-slate-400">
              Need help setting up or importing data? Email{" "}
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                {APP_CONFIG.supportEmail}
              </a>{" "}
              and get help directly from the developer who built it.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <Sparkles className="w-5 h-5 text-emerald-400 mb-3" />
            <h3 className="font-semibold text-white mb-1">
              Shape Future Improvements
            </h3>
            <p className="text-sm text-slate-400">
              Have a broker format, chart habit, or analytics metric that would
              make your trading review easier? Send your suggestion by email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
