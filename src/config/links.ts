export const APP_CONFIG = {
  stripePaymentUrl: import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#",
  downloads: {
    linux: import.meta.env.VITE_DOWNLOAD_LINUX_URL || "#",
    mac: import.meta.env.VITE_DOWNLOAD_MAC_URL || "#",
    windows: import.meta.env.VITE_DOWNLOAD_WIN_URL || "#",
  },
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "support@yourdomain.com",
} as const;
