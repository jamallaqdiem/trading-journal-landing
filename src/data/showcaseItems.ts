import { Activity, BarChart3, BookOpen, TrendingUp } from "lucide-react";

const CHART_IMAGE_SRC = "/media/ibkr-img-1.png";
const NOTES_IMAGE_SRC = "/media/notes-img.png";

export interface ChartNoteSlide {
  id: string;
  label: string;
  code: string;
  title: string;
  summary: string;
  noteTitle: string;
  noteBody: string;
  ruleLabel: string;
  ruleText: string;
  mediaSrc: string;
  notesSrc: string;
}

export interface FeatureItem {
  id: string;
  label: string;
  code: string;
  title: string;
  description: string;
  highlight: string;
  mediaSrc: string;
  icon: typeof BarChart3;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "overview",
    label: "Overview",
    code: "MOD // 01",
    title: "Instant Command View of Your Trading Day",
    description:
      "See daily net P&L, win rate, risk-to-reward discipline, and session status at a glance before placing your next trade.",
    highlight: "Spot overtrading and tilt early",
    mediaSrc: "/media/img6.jpeg",
    icon: TrendingUp,
  },
  {
    id: "metrics",
    label: "Metrics",
    code: "MOD // 02",
    title: "Deep Performance & Mistake Analytics",
    description:
      "Break down expectancy, drawdown curves, and setup performance so repeating errors stand out clearly.",
    highlight: "Turn raw trade history into edge",
    mediaSrc: "/media/img5.jpeg",
    icon: BarChart3,
  },
  {
    id: "entries",
    label: "Entries",
    code: "MOD // 03",
    title: "Clean Execution & Trade Entry Log",
    description:
      "Review entry prices, exits, sizing, and timing side by side to tighten execution consistency and keep chart proof for every trade.",
    highlight: "Saved notes and charts become your winning assets",
    mediaSrc: "/media/img4.jpeg",
    icon: Activity,
  },
  {
    id: "news-journal",
    label: "News & Journal",
    code: "MOD // 04",
    title: "Market Catalysts Paired With Your Journal",
    description:
      "Connect session news events directly to your trade notes and emotional tags to build repeatable habits.",
    highlight: "Context + reflection in one place",
    mediaSrc: "/media/img3.jpeg",
    icon: BookOpen,
  },
];

export const CHART_NOTE_SLIDES: ChartNoteSlide[] = [
  {
    id: "levels-trendlines",
    label: "Chart & Levels",
    code: "CHART // 01",
    title: "Attach Any Chart to Your Trade & Review Notes",
    summary:
      "Works with whatever broker or charting platform you trade on. Save trendlines, key price levels, and volume context alongside your written notes.",
    noteTitle: "01 / Setup & Entry Thesis",
    noteBody:
      "Record why you took the trade—key level reaction, trendline structure, or volume shift—while your reasoning is fresh.",
    ruleLabel: "REPEATABLE RULE",
    ruleText:
      "Only enter when price respects your marked level and risk is defined before execution.",
    mediaSrc: CHART_IMAGE_SRC,
    notesSrc: NOTES_IMAGE_SRC,
  },
  {
    id: "mistake-review",
    label: "Mistake Log",
    code: "CHART // 02",
    title: "Pair Execution Snapshots With Honest Mistake Notes",
    summary:
      "Reviewing the chart right next to your execution notes makes early exits, chasing, or moving stops easy to catch.",
    noteTitle: "02 / Execution & Timing Check",
    noteBody:
      "Flag whether the entry followed your plan or came from impatience after a prior win or loss.",
    ruleLabel: "REPEATABLE RULE",
    ruleText:
      "Step back after consecutive losses instead of increasing size to win it back.",
    mediaSrc: CHART_IMAGE_SRC,
    notesSrc: NOTES_IMAGE_SRC,
  },
  {
    id: "next-session",
    label: "Session Rule",
    code: "CHART // 03",
    title: "Turn Every Chart Review Into Tomorrow's Rule",
    summary:
      "Keep each post-session note focused on one clear takeaway so you fix one leak at a time without feeling overwhelmed.",
    noteTitle: "03 / Takeaway for Next Session",
    noteBody:
      "Summarize what worked, what hurt, and the single habit you will focus on at the next market open.",
    ruleLabel: "REPEATABLE RULE",
    ruleText: "End every review with one concrete rule—never vague intentions.",
    mediaSrc: CHART_IMAGE_SRC,
    notesSrc: NOTES_IMAGE_SRC,
  },
];
