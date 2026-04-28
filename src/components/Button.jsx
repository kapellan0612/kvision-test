import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "border-lime bg-lime text-obsidian shadow-glow hover:bg-lime-soft hover:border-lime-soft",
  secondary:
    "border-lime/75 bg-white/[0.035] text-bone hover:border-lime hover:bg-lime/10 hover:text-lime",
  ghost:
    "border-white/15 bg-white/[0.035] text-bone hover:border-lime/70 hover:text-lime",
};

export default function Button({
  as: Component = "a",
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
  ...props
}) {
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />}
    </>
  );

  const classes = [
    "focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 sm:text-base",
    variants[variant],
    className,
  ].join(" ");

  if (Component === "button") {
    return (
      <button className={classes} {...props}>
        {content}
      </button>
    );
  }

  return (
    <Component href={href} className={classes} {...props}>
      {content}
    </Component>
  );
}
