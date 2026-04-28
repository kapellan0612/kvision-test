import { ArrowRight, BarChart3, Layers3, MonitorSmartphone } from "lucide-react";

function MockupVisual({ variant }) {
  if (variant === "brand") {
    return (
      <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#1A1D1B,#050A0D)] p-6">
        <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-30" />
        <div className="relative mx-auto mt-5 grid max-w-md grid-cols-[0.9fr_1.1fr] gap-4">
          <div className="rounded-lg border border-white/10 bg-black/45 p-5 shadow-2xl">
            <div className="mb-10 h-14 w-14 rounded-md border border-lime/70" />
            <p className="font-display text-2xl font-bold text-lime">VERIDIAN</p>
            <p className="mt-1 text-xs uppercase text-bone/65">Capital</p>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-32 rounded-md border border-white/10 bg-bone/90 p-4">
              <div className="h-2 w-24 rounded bg-obsidian/55" />
              <div className="mt-5 space-y-2">
                <div className="h-1.5 rounded bg-obsidian/25" />
                <div className="h-1.5 w-5/6 rounded bg-obsidian/25" />
                <div className="h-1.5 w-2/3 rounded bg-obsidian/25" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 rounded-md border border-lime/25 bg-black/50" />
              <div className="h-16 rounded-md border border-white/10 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "system") {
    return (
      <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl bg-[linear-gradient(145deg,#020403,#071118)] p-6">
        <div className="absolute inset-0 bg-grid bg-[length:36px_36px] opacity-25" />
        <div className="relative mx-auto mt-4 max-w-lg rounded-xl border border-white/15 bg-black/45 p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-display text-sm font-bold uppercase text-lime">Nexora</span>
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-lime" />
              <span className="h-2 w-2 rounded-full bg-white/35" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["2,420", "37.8%", "$86,540"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="font-display text-lg font-bold text-bone">{item}</p>
                <p className="mt-1 text-[10px] text-lime">+18%</p>
              </div>
            ))}
          </div>
          <div className="mt-4 h-24 rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(182,255,0,0.12),transparent)] p-4">
            <svg viewBox="0 0 240 72" className="h-full w-full" aria-hidden="true">
              <polyline
                points="0,52 24,43 48,48 72,30 96,36 120,24 144,28 168,15 192,20 216,9 240,13"
                fill="none"
                stroke="#B6FF00"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl bg-[linear-gradient(145deg,#071118,#020403)] p-6">
      <div className="absolute inset-0 bg-grid bg-[length:44px_44px] opacity-25" />
      <div className="relative mx-auto mt-4 max-w-lg rounded-xl border border-white/15 bg-black/50 p-4 shadow-2xl">
        <div className="rounded-lg border border-lime/20 bg-[linear-gradient(135deg,rgba(182,255,0,0.08),rgba(255,255,255,0.03))] p-5">
          <div className="mb-12 flex items-center justify-between">
            <span className="font-display text-sm font-bold uppercase text-bone">Altura</span>
            <span className="rounded border border-lime/50 px-3 py-1 text-xs text-lime">Build a Consultation</span>
          </div>
          <p className="font-display text-3xl font-bold leading-tight text-bone">
            Building Spaces.
            <span className="block text-lime">Elevating Lives.</span>
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
            {["120+", "98%", "5+"].map((item) => (
              <div key={item}>
                <p className="font-display text-xl font-bold text-bone">{item}</p>
                <p className="mt-1 text-[10px] text-mist">Results</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-8 w-20 rounded-xl border border-white/15 bg-black/75 p-2 shadow-2xl">
        <MonitorSmartphone aria-hidden="true" className="mx-auto h-8 w-8 text-lime" />
        <div className="mt-3 h-1.5 rounded bg-white/20" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded bg-lime/70" />
      </div>
    </div>
  );
}

const iconMap = {
  "Website Design": MonitorSmartphone,
  "Brand & Print Design": Layers3,
  "AI & Systems": BarChart3,
};

export default function PortfolioCard({ title, category, description, stats, variant }) {
  const Icon = iconMap[category] || MonitorSmartphone;

  return (
    <article className="glass-card lime-border group overflow-hidden rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <MockupVisual variant={variant} />
      <div className="p-3 pt-6 sm:p-5">
        <p className="flex items-center gap-3 text-xs font-bold uppercase text-lime" style={{ letterSpacing: "0.18em" }}>
          <Icon aria-hidden="true" className="h-4 w-4" />
          {category}
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold text-bone">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-mist sm:text-base">{description}</p>
        <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/10 py-5">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-lime/35 pl-4 first:border-l-0 first:pl-0">
              <p className="font-display text-xl font-bold text-bone">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring mt-6 inline-flex items-center gap-4 rounded-md text-sm font-bold text-lime transition duration-300 group-hover:gap-5"
        >
          View Project
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}
