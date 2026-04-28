import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button.jsx";
import logo from "../assets/vision-kreativa-logo.png";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/78 backdrop-blur-xl">
      <div className="container-x flex min-h-24 items-center justify-between gap-6">
        <a href="#home" aria-label="Vision Kreativa home" className="focus-ring block h-16 w-56 overflow-hidden rounded-md sm:w-72">
          <img
            src={logo}
            alt="Vision Kreativa Digital Creative Studio"
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 46%" }}
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-1 py-2 text-base font-medium text-bone/88 hover:text-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="secondary" className="min-w-56">
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-lime/45 text-lime lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-obsidian/96 px-5 py-5 shadow-2xl lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-md gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-bone/90 hover:border-lime/60 hover:text-lime"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Start Your Project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
