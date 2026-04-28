import { Instagram, Linkedin } from "lucide-react";
import logo from "../assets/vision-kreativa-logo.png";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a href="/" aria-label="Vision Kreativa home" className="focus-ring block h-16 w-60 overflow-hidden rounded-md">
          <img
            src={logo}
            alt="Vision Kreativa Digital Creative Studio"
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 46%" }}
          />
        </a>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded-md text-sm text-bone/80 hover:text-lime">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-sm text-bone/75">Follow Us</span>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="focus-ring rounded-full border border-lime/45 p-2 text-lime hover:bg-lime hover:text-obsidian">
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="focus-ring rounded-full border border-lime/45 p-2 text-lime hover:bg-lime hover:text-obsidian">
            <Instagram aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="https://www.pinterest.com" aria-label="Pinterest" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-lime/45 text-sm font-black text-lime hover:bg-lime hover:text-obsidian">
            P
          </a>
        </div>

        <p className="max-w-44 text-sm leading-6 text-bone/70">&copy; 2025 Vision Kreativa. All rights reserved.</p>
      </div>
    </footer>
  );
}
