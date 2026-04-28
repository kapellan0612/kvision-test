import { ChevronDown } from "lucide-react";
import Button from "./Button.jsx";

export default function ContactForm() {
  return (
    <form
      className="grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="name">
          Your Name
        </label>
        <input id="name" name="name" type="text" placeholder="Your Name" autoComplete="name" />
        <label className="sr-only" htmlFor="email">
          Email Address
        </label>
        <input id="email" name="email" type="email" placeholder="Email Address" autoComplete="email" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="business">
          Business Name
        </label>
        <input id="business" name="business" type="text" placeholder="Business Name" autoComplete="organization" />
        <label className="sr-only" htmlFor="phone">
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" />
      </div>
      <div className="relative">
        <label className="sr-only" htmlFor="interest">
          I am interested in
        </label>
        <select id="interest" name="interest" defaultValue="">
          <option value="" disabled>
            I&apos;m interested in...
          </option>
          <option>Website Design</option>
          <option>Brand Systems</option>
          <option>Custom Print Design</option>
          <option>AI Integration</option>
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-lime"
        />
      </div>
      <label className="sr-only" htmlFor="message">
        Tell us about your project
      </label>
      <textarea id="message" name="message" placeholder="Tell us about your project..." />
      <Button as="button" type="submit" className="w-full" variant="secondary">
        Send Message
      </Button>
    </form>
  );
}
