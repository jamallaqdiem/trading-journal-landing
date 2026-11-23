import {
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Lock,
  Sparkles,
} from "lucide-react";
import { CheckoutTrustSteps } from "./CheckoutTrustSteps";

interface PricingSectionProps {
  checkoutUrl: string;
  priceLabel?: string;
}

export function PricingSection({
  checkoutUrl,
  priceLabel = "$49",
}: PricingSectionProps) {
  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6">
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
                <span>LIFETIME DESKTOP LICENSE</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Start Reviewing Every Session Properly
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                One payment gets you the desktop app for Windows, macOS, and
                Linux—100% local data storage with no recurring monthly
                subscriptions.
              </p>

              <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    Overview, Metrics, Entries &amp; Journal views with
                    unlimited local trades
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    Trade notes, chart snapshots &amp; free lifetime updates
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span> direct email support</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6 text-center shadow-xl lg:col-span-5">
              <p className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                Lifetime License
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-1.5">
                <span className="text-4xl font-extrabold text-white">
                  {priceLabel}
                </span>
                <span className="text-xs text-slate-400">one-time</span>
              </div>
              <p className="mt-1 text-xs text-emerald-400">
                No subscription • Instant download access
              </p>

              <a
                href={checkoutUrl}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(16,185,129,0.6)]"
              >
                <CreditCard className="h-4 w-4" />
                <span>Buy Lifetime License — {priceLabel}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <Lock className="h-3.5 w-3.5 text-emerald-400/80" />
                <span>Secure Stripe checkout </span>
              </div>
            </div>
          </div>

          <CheckoutTrustSteps />
        </div>
      </div>
    </section>
  );
}
