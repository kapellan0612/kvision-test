export default function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow-line ${isCenter ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.03] text-bone sm:text-5xl lg:text-7xl">
        {title}
        {accent && <span className="text-lime"> {accent}</span>}
      </h2>
      {children && (
        <p className={`mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg ${isCenter ? "mx-auto" : ""}`}>
          {children}
        </p>
      )}
    </div>
  );
}
