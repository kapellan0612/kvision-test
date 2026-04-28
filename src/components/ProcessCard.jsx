export default function ProcessCard({
  number,
  icon: Icon,
  title,
  subtitle,
  description,
  outcome,
}) {
  return (
    <article className="glass-card lime-border relative rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full border border-lime bg-lime text-sm font-black text-obsidian shadow-glow">
        {number}
      </div>
      <Icon aria-hidden="true" className="mt-5 h-14 w-14 text-lime stroke-[1.5]" />
      <h3 className="mt-7 font-display text-3xl font-bold text-bone">{title}</h3>
      <p className="mt-1 font-semibold text-lime">{subtitle}</p>
      <span className="mt-5 block h-px w-12 bg-lime" />
      <p className="mt-6 text-sm leading-7 text-mist">{description}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <span className="rounded-md border border-lime/50 px-3 py-2 text-xs font-bold text-lime">
          Outcome
        </span>
        <p className="text-sm leading-6 text-bone/80">{outcome}</p>
      </div>
    </article>
  );
}
