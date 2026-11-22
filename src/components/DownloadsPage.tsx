import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Laptop,
  Mail,
  Monitor,
  Terminal,
} from "lucide-react";

interface OsInstaller {
  id: string;
  osName: string;
  fileFormat: string;
  downloadUrl: string;
  icon: typeof Monitor;
  installSteps: string[];
}

const SUPPORT_EMAIL = "jlaqdiem@gmail.com";

const INSTALLERS: OsInstaller[] = [
  {
    id: "windows",
    osName: "Windows",
    fileFormat: ".exe Installer",
    downloadUrl:
      "https://github.com/jamallaqdiem/trading-journal-desktop/releases/download/V.1.0.0/Trading.Journal.2.0.0.exe",
    icon: Monitor,
    installSteps: [
      "Download the .exe file and double-click it from your Downloads folder.",
      "If Windows SmartScreen appears, click More info → Run anyway.",
      "Follow the setup wizard and launch Trading Analytics from your desktop or Start menu.",
    ],
  },
  {
    id: "macos",
    osName: "macOS",
    fileFormat: ".dmg Disk Image",
    downloadUrl:
      "https://github.com/jamallaqdiem/trading-journal-desktop/releases/download/V.1.0.0/Trading.Journal-2.0.0-arm64.dmg",
    icon: Laptop,
    installSteps: [
      "Download the .dmg file and double-click it to open the disk image.",
      "Drag the Trading Analytics app icon into your Applications folder.",
      "Open it from Applications (if macOS blocks first launch, go to System Settings → Privacy & Security → Open Anyway).",
    ],
  },
  {
    id: "linux",
    osName: "Linux",
    fileFormat: ".deb Package",
    downloadUrl:
      "https://github.com/jamallaqdiem/trading-journal-desktop/releases/download/V.1.0.0/trading-journal-desktop_2.0.0_amd64.deb",
    icon: Terminal,
    installSteps: [
      "Download the .deb package to your ~/Downloads folder.",
      "Open a terminal and run: sudo apt install ./edgeledger.deb",
      "Launch Trading Analytics from your application menu.",
    ],
  },
];

export function DownloadsPage() {
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
    </div>
  );
}
