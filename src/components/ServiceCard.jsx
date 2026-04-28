import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, number, title, description }) {
  return (
    <article className="glass-card lime-border group flex min-h-[340px] flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-9">
      <div className="flex items-start justify-between gap-6">
        <span className="text-lime">
          <Icon aria-hidden="true" className="h-14 w-14 stroke-[1.6]" />
        </span>
        <span className="font-display text-2xl font-bold text-white/35">{number}</span>
      </div>
      <h3 className="mt-10 font-display text-2xl font-bold text-bone">{title}</h3>
      <span className="mt-5 h-px w-12 bg-lime" />
      <p className="mt-6 flex-1 text-base leading-8 text-mist">{description}</p>
      <a
        href="#contact"
        className="focus-ring mt-8 inline-flex w-fit items-center gap-4 rounded-md text-sm font-bold text-lime transition duration-300 group-hover:gap-5"
      >
        Learn More
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </a>
    </article>
  );
}
