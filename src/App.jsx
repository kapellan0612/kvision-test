import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Box,
  CalendarDays,
  CircuitBoard,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Button from "./components/Button.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import PortfolioCard from "./components/PortfolioCard.jsx";
import ProcessCard from "./components/ProcessCard.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import StatItem from "./components/StatItem.jsx";
import heroBackground from "./assets/hero-background.png";

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Website Design",
    description: "Modern, responsive websites that look stunning and turn visitors into customers.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Brand Systems",
    description: "Consistent, scalable brand identities that build recognition and lasting trust.",
  },
  {
    icon: Box,
    number: "03",
    title: "Custom Print Design",
    description: "High-impact print materials designed to communicate your brand with clarity.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "AI Integration",
    description: "Intelligent automation and AI solutions that streamline work and drive better results.",
  },
];

const portfolio = [
  {
    title: "Altura Homes - Website Redesign",
    category: "Website Design",
    variant: "website",
    description: "A premium, high-performance website that reflects elegance, builds trust, and converts visitors.",
    stats: [
      { value: "120+", label: "Projects Completed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "45%", label: "Increase in Leads" },
    ],
  },
  {
    title: "Veridian Capital - Brand Identity",
    category: "Brand & Print Design",
    variant: "brand",
    description: "A refined visual identity and print system that communicates credibility, professionalism, and long-term value.",
    stats: [
      { value: "100%", label: "Brand Consistency" },
      { value: "3x", label: "Stronger Recognition" },
      { value: "Enhanced", label: "Professional Presence" },
    ],
  },
  {
    title: "Nexora - AI-Enabled Business System",
    category: "AI & Systems",
    variant: "system",
    description: "An intelligent business system that automates workflows, captures leads, and delivers actionable insights.",
    stats: [
      { value: "60%", label: "Time Saved" },
      { value: "2.3x", label: "More Conversions" },
      { value: "$86K+", label: "Revenue Impact" },
    ],
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Strategy & Research",
    description:
      "We start by understanding your business, audience, and goals. Through research and workshops, we define a data-driven strategy that sets the direction.",
    outcome: "Clear strategy. Aligned goals.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    subtitle: "Brand & Experience",
    description:
      "We craft your brand system and digital experience with clarity and purpose, focused on usability, storytelling, and conversion.",
    outcome: "Strong brand. Seamless experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    subtitle: "Web & Integrations",
    description:
      "We build fast, responsive websites and integrate the tools you need. From custom features to AI automation, everything is built to scale.",
    outcome: "High-performance site. Connected systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    subtitle: "Optimize & Grow",
    description:
      "We launch with precision and optimize continuously using insights and automation to drive growth and long-term success.",
    outcome: "Live, optimized, and ready to grow.",
  },
];

const aboutFeatures = [
  {
    icon: Globe2,
    title: "Full-Service Creative Partner",
    text: "Web, print, branding, and AI - working together for you.",
  },
  {
    icon: Sparkles,
    title: "Built for Small Business",
    text: "Solutions that fit your goals, budget, and timeline.",
  },
  {
    icon: Target,
    title: "Strategy Meets Design",
    text: "Every project is purposeful, conversion-focused, and scalable.",
  },
  {
    icon: ShieldCheck,
    title: "Modern. Reliable. Human.",
    text: "Clear communication, on-time delivery, and designs that last.",
  },
];

const heroHighlights = [
  { icon: Globe2, title: "Website Design", text: "Modern. Responsive. Fast." },
  { icon: Layers3, title: "Brand Systems", text: "Consistent. Scalable. Strong." },
  { icon: Box, title: "Custom Print Design", text: "Custom. Branded. Physical." },
  { icon: Cpu, title: "AI Integration", text: "Intelligent. Automated. Future-Ready." },
];

function HomePage() {
  return (
    <>
      <section id="home" className="relative isolate min-h-screen overflow-hidden pt-36 sm:pt-40">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,7,10,0.98)_0%,rgba(3,7,10,0.88)_32%,rgba(3,7,10,0.46)_62%,rgba(3,7,10,0.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_28%,rgba(182,255,0,0.16),transparent_24%),linear-gradient(180deg,rgba(3,7,10,0.18)_0%,rgba(3,7,10,0.44)_70%,#03070A_100%)]" />
        <div className="container-x relative grid min-h-[calc(100vh-9rem)] items-center pb-10">
          <div className="max-w-4xl">
            <p className="eyebrow-line">Digital Creative Studio</p>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[0.98] text-bone sm:text-7xl lg:text-8xl">
              Your Business
              <span className="block">Has a Vision.</span>
              <span className="block text-lime">We Build It Online.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-mist sm:text-xl">
              We create modern websites, AI integration, custom print design, and online brand systems that help small businesses stand out, build trust, and grow with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" className="sm:min-w-64">
                Start Your Project
              </Button>
              <Button href="#services" variant="secondary" className="sm:min-w-56">
                View Services
              </Button>
            </div>
          </div>
        </div>

        <div className="container-x relative pb-16">
          <div className="glass-card grid gap-5 rounded-2xl border-lime/20 px-5 py-7 sm:grid-cols-2 sm:px-7 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <div key={item.title} className="flex gap-5 border-lime/35 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <item.icon aria-hidden="true" className="h-12 w-12 shrink-0 text-lime stroke-[1.7]" />
                <div>
                  <h2 className="font-display text-xl font-bold text-bone">{item.title}</h2>
                  <p className="mt-2 text-sm text-mist">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <ContactSection />
    </>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-pad section-band section-services">
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <SectionHeading eyebrow="Services / Solutions" title="Solutions Built for" accent="Growth." />
          <p className="max-w-2xl border-l border-lime/45 pl-8 text-lg leading-9 text-bone/88">
            We help small businesses stand out, build trust, and grow with smart design and technology.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="glass-card lime-border mt-10 flex flex-col gap-6 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime/50 text-lime">
              <Zap aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="max-w-4xl text-base leading-8 text-bone/85">
              From concept to launch and beyond, we deliver solutions that are strategic, <span className="text-lime">scalable</span>, and built for <span className="text-lime">long-term growth</span>.
            </p>
          </div>
          <Button href="/#contact" variant="secondary" className="shrink-0">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

function PortfolioPage() {
  return (
    <section id="portfolio" className="section-pad section-band section-portfolio pt-36 sm:pt-40">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Our Work. Real Results." title="Featured" accent="Work">
            We partner with forward-thinking brands to design digital experiences, print materials, and systems that drive growth and leave a lasting impact.
          </SectionHeading>
          <a href="/#contact" className="focus-ring inline-flex w-fit items-center gap-4 border-b border-lime pb-2 text-lg font-semibold text-bone hover:text-lime">
            Start a Project
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {portfolio.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section id="process" className="section-pad section-band section-process pt-36 sm:pt-40">
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <SectionHeading eyebrow="Our Process" title="How We Work. Built for" accent="Results." />
          <p className="max-w-2xl text-lg leading-9 text-bone/88">
            A clear, collaborative process that turns strategy into digital experiences designed to grow your brand and built to last.
          </p>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="relative grid gap-9 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-6 right-6 top-0 hidden h-px bg-lime/55 lg:block" />
            {process.map((item) => (
              <ProcessCard key={item.title} {...item} />
            ))}
          </div>

          <aside className="glass-card lime-border rounded-2xl p-7 shadow-glow">
            <h3 className="font-display text-2xl font-bold text-lime">AI-Ready Workflows</h3>
            <p className="mt-5 text-sm leading-7 text-bone/85">
              We integrate intelligent tools and automations that streamline operations, enhance customer experiences, and unlock growth.
            </p>
            <div className="mt-7 space-y-6 border-t border-white/15 pt-7">
              {[
                { icon: CircuitBoard, title: "AI Automation", text: "Smarter workflows that save time and reduce manual work." },
                { icon: BarChart3, title: "Data-Driven Insights", text: "Real-time data and AI insights to guide better decisions." },
                { icon: Puzzle, title: "Seamless Integrations", text: "Connect the tools you use and scale without friction." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon aria-hidden="true" className="h-9 w-9 shrink-0 text-lime stroke-[1.6]" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-bone">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-mist">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/#contact" variant="secondary" className="mt-8 w-full">
              Explore Integrations
            </Button>
          </aside>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:items-center">
          <div className="glass-card flex gap-6 rounded-2xl p-6">
            <Target aria-hidden="true" className="h-12 w-12 shrink-0 text-lime" />
            <p className="text-xl font-semibold leading-8 text-bone">
              Strategy-led. Design-driven. Technology-powered.
              <span className="block text-lime">Every step focused on growing your business.</span>
            </p>
          </div>
          {[
            { icon: ShieldCheck, title: "Transparent Process", text: "Clear communication at every step." },
            { icon: Users, title: "Collaborative Teams", text: "Your vision. Our expertise. One team." },
            { icon: Zap, title: "Future-Ready Solutions", text: "Built with performance, scalability, and AI in mind." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon aria-hidden="true" className="h-10 w-10 shrink-0 text-lime" />
              <div>
                <h3 className="font-display text-lg font-bold text-bone">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-mist">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section id="about" className="section-pad section-band section-about pt-36 sm:pt-40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="About Vision Kreativa" title="We Design. We Build." accent="We Help You Grow." />
            <p className="mt-7 text-base leading-8 text-mist sm:text-lg">
              Vision Kreativa is a digital creative studio dedicated to helping small businesses stand out and scale. We blend modern websites, custom print design, brand systems, and AI-powered solutions to build cohesive, high-impact experiences that drive real results.
            </p>
            <div className="mt-8 grid gap-5">
              {aboutFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <feature.icon aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-lime" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-bone">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-mist">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-7">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <StatItem value="120+" label="Projects Completed" icon={Box} />
              <StatItem value="98%" label="Client Satisfaction" icon={BadgeCheck} />
              <StatItem value="5+" label="Years Experience" icon={CalendarDays} />
              <StatItem value="30+" label="Industries Served" icon={Rocket} />
            </div>
            <div className="glass-card circuit-panel rounded-2xl p-8 sm:p-10">
              <div className="relative">
                <p className="font-display text-6xl font-bold leading-none text-lime">&ldquo;</p>
                <p className="max-w-3xl text-xl leading-9 text-bone">
                  Vision Kreativa completely transformed our online presence. The new website looks incredible, works flawlessly, and our brand finally feels as professional as our service.
                </p>
                <div className="mt-8 flex text-lime" aria-label="Five star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} aria-hidden="true" className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-6 font-display text-lg font-bold text-bone">Jessica M.</p>
                <p className="mt-1 text-sm text-mist">Founder, PureGlow Skincare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-band section-contact py-16 sm:py-24">
      <div className="container-x">
        <div className="glass-card lime-border rounded-[1.75rem] p-6 sm:p-8 lg:p-12">
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1fr_0.62fr] xl:divide-x xl:divide-lime/25">
            <div className="xl:pr-10">
              <p className="eyebrow-line">Let&apos;s Build Something Great</p>
              <h2 className="mt-7 font-display text-4xl font-bold leading-[1.08] text-bone sm:text-5xl">
                Ready to Bring Your Vision to Life?
                <span className="block text-lime">We&apos;re Ready When You Are.</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-mist">
                From powerful websites to unforgettable brand experiences, we&apos;re here to help you grow with confidence.
              </p>
              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button href="#contact">Start Your Project</Button>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-lime/45 text-lime">
                    <CalendarDays aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <p className="text-sm leading-6 text-mist">
                    <span className="block font-bold text-bone">Book a Free Consultation</span>
                    No pressure. Just possibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:px-10">
              <p className="eyebrow-line">Send Us a Message</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6 xl:pl-10">
              {[
                { icon: Mail, title: "Email Us", text: "hello@visionkreativa.com" },
                { icon: Phone, title: "Call Us", text: "(555) 123-4567" },
                { icon: MapPin, title: "Our Studio", text: "Digital-first studio" },
                { icon: CalendarDays, title: "Hours", text: "Mon - Fri: 9AM - 6PM EST" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0">
                  <item.icon aria-hidden="true" className="h-7 w-7 shrink-0 text-lime" />
                  <div>
                    <h3 className="font-display text-base font-bold text-bone">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-mist">{item.text}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentPage() {
  const path = window.location.pathname;

  if (path === "/portfolio") {
    return <PortfolioPage />;
  }

  if (path === "/process") {
    return <ProcessPage />;
  }

  if (path === "/about") {
    return <AboutPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
}
