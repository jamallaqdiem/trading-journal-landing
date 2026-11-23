import { Smartphone } from "lucide-react";

interface StripeQrBadgeProps {
  qrSrc?: string;
  priceLabel?: string;
}

export function StripeQrBadge({
  qrSrc = "/media/stripeBQ27.png",
  priceLabel = "$27",
}: StripeQrBadgeProps) {
  return (
    <div className="mx-auto mt-6 inline-flex items-center gap-3.5 rounded-2xl border border-slate-800/90 bg-slate-900/75 px-4 py-2.5 text-left shadow-lg backdrop-blur-md">
      <div className="shrink-0 overflow-hidden rounded-lg border border-emerald-400/30 bg-white p-1.5">
        <img
          src={qrSrc}
          alt={`Scan QR code to pay ${priceLabel} via Stripe`}
          className="h-16 w-16 object-contain"
        />
      </div>

      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-400">
          <Smartphone className="h-3.5 w-3.5" />
          <span>SCAN TO PAY BY PHONE</span>
        </div>
        <p className="text-xs font-medium text-slate-200">
          Instant Stripe Checkout ({priceLabel})
        </p>
        <p className="text-[11px] text-slate-400">
          Supports Apple Pay, Google Pay &amp; Card
        </p>
      </div>
    </div>
  );
}
