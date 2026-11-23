import { useEffect, useState } from "react";
import { APP_CONFIG } from "../config/links";
import winSmartScreenImg from "../assets/win-guide.jpeg";
import macGatekeeperImg from "../assets/macOs-guide.jpeg";
import linuxInstallImg from "../assets/linux-guide.jpeg";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  Image as ImageIcon,
  Laptop,
  Mail,
  Maximize2,
  Monitor,
  ShieldAlert,
  Terminal,
  X,
} from "lucide-react";

interface OsInstaller {
  id: string;
  osName: string;
  fileFormat: string;
  downloadUrl: string;
  icon: typeof Monitor;
  installSteps: string[];
  bypassTitle: string;
  bypassSummary: string;
  bypassSteps: string[];
  guideImageSrc?: string;
}

const SUPPORT_EMAIL = APP_CONFIG.supportEmail;

const INSTALLERS: OsInstaller[] = [
  {
    id: "windows",
    osName: "Windows",
    fileFormat: ".exe Installer",
    downloadUrl: APP_CONFIG.downloads.windows,
    icon: Monitor,
    installSteps: [
      "Download the .exe file and double-click it from your Downloads folder.",
      "If Windows SmartScreen appears, click More info → Run anyway.",
      "Follow the setup wizard and launch Trading Analytics from your desktop or Start menu.",
    ],
    bypassTitle: "Windows SmartScreen Prompt",
    bypassSummary:
      "Windows may show a 'Windows protected your PC' screen on first launch.",
    bypassSteps: [
      "Click 'More info' under the warning text.",
      "Click 'Run anyway' to start the installer.",
    ],
    guideImageSrc: winSmartScreenImg,
  },
  {
    id: "macos",
    osName: "macOS",
    fileFormat: ".dmg Disk Image",
    downloadUrl: APP_CONFIG.downloads.mac,
    icon: Laptop,
    installSteps: [
      "Download the .dmg file and double-click it to open the disk image.",
      "Drag the Trading Analytics app icon into your Applications folder.",
      "Open it from Applications (if macOS blocks first launch, go to System Settings → Privacy & Security → Open Anyway).",
    ],
    bypassTitle: "macOS Gatekeeper Block",
    bypassSummary:
      "macOS may block the app on first open if it isn't notarized yet.",
    bypassSteps: [
      "Open System Settings → Privacy & Security.",
      "Scroll to Security, click 'Open Anyway', and confirm with your password or Touch ID.",
    ],
    guideImageSrc: macGatekeeperImg,
  },
  {
    id: "linux",
    osName: "Linux",
    fileFormat: ".deb Package",
    downloadUrl: APP_CONFIG.downloads.linux,
    icon: Terminal,
    installSteps: [
      "Download the .deb package to your ~/Downloads folder.",
      "Open a terminal and run: sudo apt install ./edgeledger.deb",
      "Launch Trading Analytics from your application menu.",
    ],
    bypassTitle: "Linux Package / Permissions",
    bypassSummary:
      "Install cleanly via apt or dpkg if your desktop file manager asks for permissions.",
    bypassSteps: [
      "Run: sudo apt install ./edgeledger.deb (or sudo dpkg -i edgeledger.deb).",
      "If using an AppImage later, mark it executable with: chmod +x <file>.AppImage.",
    ],
    guideImageSrc: linuxInstallImg,
  },
];

export function DownloadsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const guidesWithImages = INSTALLERS.filter((item) =>
    Boolean(item.guideImageSrc),
  );
  const activeGuide =
    lightboxIndex !== null ? (guidesWithImages[lightboxIndex] ?? null) : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % guidesWithImages.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + guidesWithImages.length) % guidesWithImages.length,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, guidesWithImages.length]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040812] text-slate-100">
      <header className="border-b border-emerald-500/15 bg-[#040812]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#/"
            className="text-base font-bold tracking-tight text-white sm:text-lg"
          >
            Trading Analytics — Downloads
          </a>
          <a
            href="#/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-emerald-400" />
            <span>Back to Overview</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            // Post-Purchase Installer Access
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Download Your Desktop Installer
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Choose the installer for your operating system below and follow the
            quick steps to get set up.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {INSTALLERS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-300">
                      {item.fileFormat}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-white">
                    {item.osName}
                  </h2>

                  <ol className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {item.installSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={item.downloadUrl}
                  download
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-3 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(16,185,129,0.55)]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download for {item.osName}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Visual OS Security Bypass Walkthroughs */}
        <section className="mt-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>// First-Launch Security Prompts</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Visual Guide: If Your OS Blocks the First Launch
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Because the desktop build is distributed directly without an
              expensive enterprise signing certificate, Windows and macOS may
              show a first-time security prompt. Click any guide below to
              inspect full screen.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {INSTALLERS.map((item) => {
              const guideIdx = guidesWithImages.findIndex(
                (g) => g.id === item.id,
              );
              return (
                <div
                  key={`${item.id}-guide`}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-slate-900/90 hover:shadow-[0_0_32px_-8px_rgba(16,185,129,0.35)]"
                >
                  <div>
                    {item.guideImageSrc && guideIdx !== -1 ? (
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(guideIdx)}
                        aria-label={`Inspect ${item.osName} security guide full screen`}
                        className="relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-800 bg-slate-950 text-left transition-colors group-hover:border-emerald-400/50"
                      >
                        <img
                          src={item.guideImageSrc}
                          alt={`${item.osName} security prompt walkthrough`}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="pointer-events-none absolute right-2.5 bottom-2.5 inline-flex translate-y-1.5 items-center gap-1.5 rounded-lg border border-emerald-400/60 bg-slate-950/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <Maximize2 className="h-3 w-3 text-emerald-400" />
                          Zoom Guide
                        </span>
                      </button>
                    ) : (
                      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                        <ImageIcon className="mb-2 h-5 w-5 text-emerald-400/80" />
                        <p className="font-mono text-xs font-semibold text-slate-200">
                          {item.bypassTitle}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-400">
                          Screenshot slot ready ({item.osName})
                        </p>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white transition-colors group-hover:text-emerald-300">
                        {item.osName} — {item.bypassTitle}
                      </h3>
                      {item.guideImageSrc && guideIdx !== -1 && (
                        <button
                          type="button"
                          onClick={() => setLightboxIndex(guideIdx)}
                          className="shrink-0 font-mono text-xs text-emerald-400 transition-transform duration-200 group-hover:translate-x-0.5"
                        >
                          Expand →
                        </button>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {item.bypassSummary}
                    </p>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                      {item.bypassSteps.map((bStep, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono font-bold text-emerald-400">
                            {i + 1}.
                          </span>
                          <span>{bStep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Direct Developer Support */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-emerald-500/20 bg-slate-900/50 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Need Help Installing or Getting Started?
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                If you hit an OS security prompt, dependency issue, or setup
                question, email directly and include the OS you&apos;re using.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Trading%20Analytics%20Install%20Support`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-2.5 font-mono text-xs font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950 sm:text-sm"
          >
            <Mail className="h-4 w-4" />
            <span>{SUPPORT_EMAIL}</span>
          </a>
        </div>
      </main>

      {/* Full-Screen Guide Lightbox Modal */}
      {activeGuide && activeGuide.guideImageSrc && (
        <div
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGuide.osName} setup guide full screen`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#040812]/92 p-3 backdrop-blur-md sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-emerald-400/35 bg-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  {activeGuide.osName} • Step Guide ({(lightboxIndex ?? 0) + 1}{" "}
                  of {guidesWithImages.length})
                </span>
                <h4 className="text-sm font-semibold text-white sm:text-base">
                  {activeGuide.bypassTitle}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close guide modal"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/50 hover:bg-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" />
                <span>Close (Esc)</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center bg-black p-2 sm:p-4">
              <img
                src={activeGuide.guideImageSrc}
                alt={`${activeGuide.osName} setup walkthrough`}
                className="max-h-[74vh] w-auto rounded-lg object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null
                      ? null
                      : (prev - 1 + guidesWithImages.length) %
                        guidesWithImages.length,
                  )
                }
                aria-label="Previous OS guide"
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null ? null : (prev + 1) % guidesWithImages.length,
                  )
                }
                aria-label="Next OS guide"
                className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-white shadow-lg transition hover:scale-105 hover:border-emerald-400 hover:text-emerald-400 sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
