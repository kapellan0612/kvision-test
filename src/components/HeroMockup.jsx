import { ArrowRight, Network, Palette, Type } from "lucide-react";

function FloatingCard({ className, title, children, icon: Icon }) {
  return (
    <div className={`glass-card hidden rounded-2xl p-5 shadow-card-glow lg:block ${className}`}>
      <div className="flex items-center gap-3 text-bone">
        {Icon && <Icon aria-hidden="true" className="h-5 w-5 text-lime" />}
        <p className="font-display text-sm font-bold">{title}</p>
      </div>
      {children}
    </div>
  );
}

export default function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-3xl pt-8 lg:pt-0">
      <FloatingCard className="absolute -left-4 top-16 z-20 w-40 rotate-[-2deg]" title="Brand Palette" icon={Palette}>
        <div className="mt-5 flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-lime shadow-glow" />
          <span className="h-9 w-9 rounded-full bg-bone" />
          <span className="h-9 w-9 rounded-full bg-slate-800" />
        </div>
        <p className="mt-5 text-xs font-bold text-mist">#A6FF00</p>
      </FloatingCard>

      <FloatingCard className="absolute -left-12 bottom-20 z-20 w-36 rotate-[3deg]" title="Typography" icon={Type}>
        <p className="mt-4 font-display text-5xl font-bold text-bone">Aa</p>
        <p className="mt-2 text-xs text-mist">Inter</p>
        <span className="mt-3 block h-1 w-8 rounded bg-lime" />
      </FloatingCard>

      <FloatingCard className="absolute -right-8 bottom-10 z-20 w-48 rotate-[2deg]" title="Site Structure" icon={Network}>
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="h-10 w-12 rounded-md border-2 border-lime" />
          <span className="h-8 w-px bg-white/30" />
          <div className="flex gap-3">
            <span className="h-8 w-10 rounded border border-white/30" />
            <span className="h-8 w-10 rounded border border-white/30" />
            <span className="h-8 w-10 rounded border border-white/30" />
          </div>
        </div>
      </FloatingCard>

      <div className="relative rounded-[2rem] border border-white/25 bg-[linear-gradient(145deg,#303636,#111616_35%,#05090B)] p-3 shadow-[0_38px_120px_rgba(0,0,0,0.62)]">
        <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(135deg,#071118,#020403)]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lime text-xs font-black text-lime">N</span>
              <span className="font-display text-sm font-bold uppercase text-bone">Nekora</span>
            </div>
            <div className="hidden gap-6 text-xs text-bone/70 sm:flex">
              <span className="text-lime">Home</span>
              <span>Services</span>
              <span>Work</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden p-7 sm:p-10">
            <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-25" />
            <div className="absolute inset-y-0 right-0 w-3/5 bg-[linear-gradient(120deg,transparent,rgba(182,255,0,0.08))]" />
            <div className="relative max-w-md">
              <p className="font-display text-4xl font-bold italic leading-tight text-bone sm:text-5xl">
                Built for <span className="text-lime">Growth.</span>
                <span className="block">Designed to Last.</span>
              </p>
              <p className="mt-5 max-w-xs text-sm leading-7 text-mist">
                Digital solutions that elevate your brand and drive real results.
              </p>
              <a
                href="#portfolio"
                className="focus-ring mt-7 inline-flex items-center gap-3 rounded-lg border border-lime/70 px-4 py-3 text-sm font-bold text-lime hover:bg-lime hover:text-obsidian"
              >
                Explore Our Work
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="absolute bottom-0 right-0 h-52 w-4/5 bg-[linear-gradient(140deg,transparent,rgba(255,255,255,0.08),rgba(182,255,0,0.08))]" />
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3 border-t border-lime/25 pt-5">
              {["120+", "98%", "5+"].map((item) => (
                <div key={item} className="border-l border-lime/45 pl-4 first:border-l-0 first:pl-0">
                  <p className="font-display text-2xl font-bold text-bone">{item}</p>
                  <p className="mt-1 text-[10px] text-mist">Growth Metric</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-5 w-[84%] rounded-b-[2rem] bg-[linear-gradient(90deg,transparent,#2B3131,transparent)]" />
    </div>
  );
}
