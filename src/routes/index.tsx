import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Menu,
  ScanFace,
  Sparkles,
  Waves,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import consultationPhoto from "@/assets/clinic-consultation.jpg";
import practitionerPhoto from "@/assets/clinic-practitioner.jpg";

const navigation = [
  { label: "Our approach", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "The experience", href: "#experience" },
];

const treatments = [
  {
    number: "01",
    title: "Injectables",
    description:
      "Thoughtful, tailored treatments that soften, refresh, and keep your expression unmistakably yours.",
    icon: <Sparkles aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Skin rejuvenation",
    description:
      "Personalized care for tone, texture, and the healthy-looking glow that feels like you.",
    icon: <ScanFace aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
  {
    number: "03",
    title: "Laser & resurfacing",
    description:
      "Modern skin treatments selected around your goals, your comfort, and your own starting point.",
    icon: <Waves aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auré Aesthetics | Thoughtful Aesthetic Care" },
      {
        name: "description",
        content:
          "Personalized aesthetic care, thoughtful treatment plans, and natural-looking results at Auré Aesthetics.",
      },
      { property: "og:title", content: "Auré Aesthetics | Thoughtful Aesthetic Care" },
      {
        property: "og:description",
        content:
          "Modern aesthetic medicine shaped around your features, your pace, and your goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-3 focus:text-foreground"
      >
        Skip to content
      </a>

      <section className="clinic-hero relative isolate flex flex-col justify-end" aria-label="Welcome">
        <img
          src={consultationPhoto}
          alt="A practitioner speaking with a patient in a calm, light-filled clinic"
          className="absolute inset-0 z-0 size-full object-cover object-[58%_center]"
          fetchPriority="high"
        />
        <div className="clinic-hero-wash absolute inset-0 z-[1]" aria-hidden="true" />

        <header className="absolute inset-x-0 top-0 z-20 border-b border-primary-foreground/20 bg-foreground/25 backdrop-blur-sm">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
            <a href="#top" aria-label="Auré Aesthetics home" className="flex items-center gap-3 text-primary-foreground">
              <span className="font-display text-4xl leading-none">Auré</span>
              <span className="h-9 w-px bg-primary-foreground/55" aria-hidden="true" />
              <span className="max-w-16 text-xs leading-4">AESTHETIC<br />CARE</span>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-primary-foreground/60 bg-transparent px-5 text-primary-foreground shadow-none hover:bg-primary-foreground hover:text-foreground"
              >
                <a href="#contact">
                  Book a consultation <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden"
            >
              {mobileNavOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>

          {mobileNavOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="border-t border-border bg-background px-5 py-5 text-foreground shadow-lg md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileNav}
                    className="border-b border-border py-3 text-base"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4 h-12 w-full rounded-none shadow-none">
                  <a href="#contact" onClick={closeMobileNav}>
                    Book a consultation <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </nav>
          )}
        </header>

        <div id="main-content" className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-primary-foreground">
              <span className="h-px w-9 bg-accent" aria-hidden="true" />
              A more personal kind of aesthetic care
            </p>
            <h1 className="max-w-2xl font-display text-6xl leading-[0.98] text-primary-foreground sm:text-7xl">
              A little more <span className="text-accent">you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/90 sm:text-lg sm:leading-8">
              Modern aesthetic medicine, thoughtfully shaped around your features, your pace, and the way you want to feel.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button asChild className="h-12 rounded-none px-6 shadow-none">
                <a href="#contact">
                  Book a consultation <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href="#treatments"
                className="group inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-accent"
              >
                Explore treatments
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-xs text-primary-foreground/80 sm:absolute sm:bottom-9 sm:right-12 sm:mt-0">
            <span className="h-px w-8 bg-primary-foreground/60" aria-hidden="true" />
            Thoughtful by design. Always about you.
          </div>
        </div>
      </section>

      <section aria-label="Our values" className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {[
            "Expert-led, personal care",
            "Plans made around you",
            "Natural-looking results",
          ].map((value, index) => (
            <div key={value} className="flex items-center gap-4 py-5 md:justify-center md:py-7">
              <span className="font-display text-xl text-moss">0{index + 1}</span>
              <span className="text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-12">
          <div className="relative mx-auto w-full max-w-lg md:mx-0">
            <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 bg-secondary" aria-hidden="true" />
            <img
              src={practitionerPhoto}
              alt="A practitioner in a bright, contemporary clinic"
              className="relative aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 max-w-[13rem] bg-background px-4 py-3 sm:bottom-7 sm:left-7">
              <p className="font-display text-xl">Care, with intention.</p>
              <p className="mt-1 text-xs text-muted-foreground">A considered approach to every visit</p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold text-moss">The Auré approach</p>
            <h2 className="font-display text-5xl leading-[1.04] sm:text-6xl">
              Your skin, <span className="text-moss">your story.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Great aesthetic care starts with listening. We take time to understand what matters to you, then build a clear, considered plan together.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "A one-to-one conversation about your goals",
                "Recommendations made for your features and comfort",
                "A pace that feels right for you",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-moss" strokeWidth={2} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="#experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-moss hover:text-foreground"
            >
              Get to know our approach <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="treatments" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold text-moss">Explore our treatments</p>
              <h2 className="font-display text-5xl leading-[1.04] sm:text-6xl">A thoughtful way forward.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Every treatment begins with a conversation. Together, we’ll find the right place to start.
            </p>
          </div>

          <div className="grid border-y border-border md:grid-cols-3">
            {treatments.map((treatment) => (
              <article
                key={treatment.number}
                className="group flex min-h-72 flex-col border-b border-border px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-9 md:last:border-r-0"
              >
                <div className="flex items-center justify-between text-moss">
                  <span className="font-display text-2xl">{treatment.number}</span>
                  <span className="flex size-12 items-center justify-center border border-moss/30 text-moss">
                    {treatment.icon}
                  </span>
                </div>
                <h3 className="mt-9 font-display text-3xl">{treatment.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{treatment.description}</p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-moss"
                >
                  Ask us about it
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold text-accent">A visit that feels different</p>
              <h2 className="font-display text-5xl leading-[1.04] sm:text-6xl">Calm, considered, and completely yours.</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-primary-foreground/80">
                We believe confidence grows when you feel heard. From your first conversation to your personalized plan, your experience is designed around what feels right for you.
              </p>
            </div>
            <div className="divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
              {[
                { number: "01", title: "We listen", text: "Tell us what you hope to change, keep, or simply understand better." },
                { number: "02", title: "We make a plan", text: "Explore options together, with clear guidance and room for questions." },
                { number: "03", title: "We move at your pace", text: "Your care is personal. You decide what feels like the right next step." },
              ].map((step) => (
                <div key={step.number} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-7">
                  <span className="font-display text-2xl text-accent">{step.number}</span>
                  <div>
                    <h3 className="font-display text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-primary-foreground/75">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-moss">Your next step</p>
            <h2 className="font-display text-5xl leading-[1.04] sm:text-6xl">Let’s begin with a conversation.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              A personal consultation is a chance to share what you’re looking for, ask questions, and explore a plan that feels right for you.
            </p>
          </div>
          <Button asChild className="h-12 w-fit rounded-none px-6 shadow-none">
            <a href="mailto:hello@aureaesthetics.com?subject=Consultation%20request">
              Request a consultation <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-border px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} Auré Aesthetics</span>
          <span className="inline-flex items-center gap-2"><Leaf aria-hidden="true" className="size-4 text-moss" /> Thoughtful care, centered on you.</span>
        </div>
      </section>
    </main>
  );
}