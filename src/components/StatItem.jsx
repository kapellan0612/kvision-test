export default function StatItem({ value, label, icon: Icon, compact = false }) {
  return (
    <div className={`flex ${compact ? "items-center gap-4" : "flex-col items-start gap-3"}`}>
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-lime/35 bg-lime/10 text-lime">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
      )}
      <div>
        <p className="font-display text-3xl font-bold leading-none text-lime sm:text-4xl">{value}</p>
        <p className="mt-2 text-sm text-bone/80">{label}</p>
      </div>
    </div>
  );
}
