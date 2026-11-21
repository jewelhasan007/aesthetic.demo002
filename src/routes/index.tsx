import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bird,
  Check,
  Code,
  Menu,
  ScanFace,
  Sparkles,
  Waves,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import practitionerPhoto from "@/assets/clinic-practitioner.jpg";

const heroImages = [
  "/images/hero/hero-4.jpg",
  "/images/hero/hero-5.jpg",
  "/images/hero/hero-7.png",
];

const navigation = [
  { label: "আমাদের পদ্ধতি", href: "#about" },
  { label: "চিকিৎসাসমূহ", href: "#treatments" },
  { label: "অভিজ্ঞতা", href: "#experience" },
];

const values = [
  "বিশেষজ্ঞ-নেতৃত্বাধীন, ব্যক্তিগত সেবা",
  "আপনাকে ঘিরে তৈরি পরিকল্পনা",
  "স্বাভাবিক দেখানো ফলাফল",
];

const treatments = [
  {
    number: "০১",
    title: "ইনজেকটেবল",
    description:
      "সুচিন্তিত ও আপনার জন্য সাজানো চিকিৎসা, যা মুখাবয়বকে করে কোমল ও সতেজ, আর আপনার অভিব্যক্তিকে রাখে অবিকল আপনারই মতো।",
    icon: <Sparkles aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
  {
    number: "০২",
    title: "ত্বকের পুনরুজ্জীবন",
    description:
      "ত্বকের রং, গঠন এবং সেই সুস্থ উজ্জ্বলতার জন্য ব্যক্তিগত যত্ন, যা আপনার নিজের মতোই মনে হয়।",
    icon: <ScanFace aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
  {
    number: "০৩",
    title: "লেজার ও রিসারফেসিং",
    description:
      "আধুনিক ত্বক-চিকিৎসা, যা বেছে নেওয়া হয় আপনার লক্ষ্য, আপনার স্বাচ্ছন্দ্য এবং আপনার নিজস্ব শুরুর অবস্থার ওপর ভিত্তি করে।",
    icon: <Waves aria-hidden="true" className="size-6" strokeWidth={1.5} />,
  },
];

const steps = [
  {
    number: "০১",
    title: "আমরা শুনি",
    text: "আপনি কী বদলাতে চান, কী রাখতে চান, কিংবা কী আরও ভালোভাবে বুঝতে চান, আমাদের বলুন।",
  },
  {
    number: "০২",
    title: "আমরা পরিকল্পনা করি",
    text: "স্পষ্ট দিকনির্দেশনা এবং প্রশ্ন করার পূর্ণ সুযোগ নিয়ে একসঙ্গে বিকল্পগুলো দেখি।",
  },
  {
    number: "০৩",
    title: "আমরা আপনার গতিতে চলি",
    text: "আপনার যত্ন একান্তই ব্যক্তিগত। পরের ধাপ কী হবে, তা আপনিই ঠিক করেন।",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auré Aesthetics | ভাবনাচিন্তায় গড়া নান্দনিক সেবা" },
      {
        name: "description",
        content:
          "Auré Aesthetics-এ পাবেন ব্যক্তিগত নান্দনিক সেবা, সুচিন্তিত চিকিৎসা-পরিকল্পনা এবং স্বাভাবিক দেখানো ফলাফল।",
      },
      { property: "og:title", content: "Auré Aesthetics | ভাবনাচিন্তায় গড়া নান্দনিক সেবা" },
      {
        property: "og:description",
        content:
          "আধুনিক নান্দনিক চিকিৎসা, আপনার বৈশিষ্ট্য, আপনার গতি এবং আপনার লক্ষ্য ঘিরে সাজানো।",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "bn_BD" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico?v=2", sizes: "any" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const closeMobileNav = () => setMobileNavOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="top" lang="bn" className="bn-page overflow-hidden bg-background text-foreground">
      {/* Bengali fonts: DM Sans / DM Serif Display have no Bengali glyphs */}
      <style>{`
        .bn-page { font-family: "Hind Siliguri", "DM Sans", system-ui, sans-serif; }
        .bn-page .font-display { font-family: "Noto Serif Bengali", "DM Serif Display", serif; }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-3 focus:text-foreground"
      >
        মূল অংশে যান
      </a>

      {/* ==================== HERO ==================== */}
      <section
        className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden bg-primary"
        aria-label="স্বাগতম"
      >
        {/* Background slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out ${
                index === activeImage ? "scale-105 opacity-100" : "scale-100 opacity-0"
              }`}
            />
          ))}

          {/* Light overall tint in brand green */}
          <div className="absolute inset-0 bg-primary/10" />

          {/* Left-side brand-green gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>

        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 bg-primary/40 backdrop-blur-sm">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
            {/* Logo */}
            <a
              href="#top"
              aria-label="Auré Aesthetics হোম"
              className="flex items-center gap-3 text-white"
            >
              <span className="font-display text-4xl leading-none">Auré</span>
              <span className="h-9 w-px bg-white/50" aria-hidden="true" />
              <span className="max-w-20 text-xs leading-5 text-white/90">
                নান্দনিক
                <br />
                সেবা
              </span>
            </a>

            {/* Desktop navigation */}
            <nav aria-label="প্রধান নেভিগেশন" className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-white/70 bg-white/5 px-5 text-white shadow-none backdrop-blur-sm hover:bg-white hover:text-primary"
              >
                <a href="#contact">
                  পরামর্শের সময় নিন <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={mobileNavOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
            >
              {mobileNavOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>

          {/* Mobile navigation */}
          {mobileNavOpen && (
            <nav
              id="mobile-navigation"
              aria-label="মোবাইল নেভিগেশন"
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
                    পরামর্শের সময় নিন <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </nav>
          )}
        </header>

        {/* Hero content */}
        <div
          id="main-content"
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
        >
          <div className="w-full max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              আরও ব্যক্তিগত ধরনের নান্দনিক সেবা
            </p>

            <h1 className="max-w-3xl font-display text-5xl font-normal leading-[1.2] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
              আরেকটু বেশি{" "}
              <span className="text-accent drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">আপনি।</span>
            </h1>

            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-lg sm:leading-9">
              আধুনিক নান্দনিক চিকিৎসা, যত্ন করে সাজানো আপনার বৈশিষ্ট্য, আপনার গতি এবং আপনি যেভাবে
              অনুভব করতে চান, তা ঘিরে।
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button
                asChild
                className="h-12 rounded-none border-0 bg-white px-7 text-primary shadow-lg shadow-black/20 hover:bg-white/90"
              >
                <a href="#contact">
                  পরামর্শের সময় নিন <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>

              <a
                href="#treatments"
                className="group inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-colors hover:text-accent"
              >
                চিকিৎসাসমূহ দেখুন
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs font-medium text-white/90 sm:mt-16 sm:text-sm">
              <span className="h-px w-8 bg-white/70" aria-hidden="true" />
              ভাবনাচিন্তায় নকশা করা। সবসময় আপনাকে ঘিরে।
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section aria-label="আমাদের মূল্যবোধ" className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {values.map((value, index) => (
            <div key={value} className="flex items-center gap-4 py-5 md:justify-center md:py-7">
              <span className="font-display text-xl text-moss">০{["১", "২", "৩"][index]}</span>
              <span className="text-sm font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-12">
          <div className="relative mx-auto w-full max-w-lg md:mx-0">
            <div
              className="absolute -bottom-4 -left-4 h-2/3 w-2/3 bg-secondary"
              aria-hidden="true"
            />
            <img
              src={practitionerPhoto}
              alt="উজ্জ্বল, আধুনিক ক্লিনিকে একজন চিকিৎসক"
              className="relative aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 max-w-[14rem] bg-background px-4 py-3 sm:bottom-7 sm:left-7">
              <p className="font-display text-xl leading-snug">উদ্দেশ্য নিয়ে যত্ন।</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                প্রতিটি সাক্ষাতে একটি সুচিন্তিত দৃষ্টিভঙ্গি
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold text-moss">Auré-র পদ্ধতি</p>
            <h2 className="font-display text-4xl leading-[1.25] sm:text-5xl">
              আপনার ত্বক, <span className="text-moss">আপনার গল্প।</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              দারুণ নান্দনিক সেবা শুরু হয় মন দিয়ে শোনা থেকে। আপনার কাছে কী গুরুত্বপূর্ণ তা বুঝতে আমরা
              সময় নিই, তারপর একসঙ্গে একটি স্পষ্ট ও সুচিন্তিত পরিকল্পনা তৈরি করি।
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "আপনার লক্ষ্য নিয়ে একান্ত আলাপ",
                "আপনার বৈশিষ্ট্য ও স্বাচ্ছন্দ্য অনুযায়ী পরামর্শ",
                "এমন গতি, যা আপনার কাছে ঠিক মনে হয়",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-7">
                  <Check
                    aria-hidden="true"
                    className="mt-1.5 size-4 shrink-0 text-moss"
                    strokeWidth={2}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="#experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-moss hover:text-foreground"
            >
              আমাদের পদ্ধতি জানুন <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== TREATMENTS ==================== */}
      <section id="treatments" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold text-moss">আমাদের চিকিৎসাসমূহ দেখুন</p>
              <h2 className="font-display text-4xl leading-[1.25] sm:text-5xl">
                এগিয়ে চলার একটি সুচিন্তিত পথ।
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-muted-foreground">
              প্রতিটি চিকিৎসা শুরু হয় একটি কথোপকথনে। একসঙ্গে আমরা শুরু করার সঠিক জায়গাটি খুঁজে নেব।
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
                <h3 className="mt-9 font-display text-2xl leading-snug sm:text-3xl">
                  {treatment.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                  {treatment.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-moss"
                >
                  আমাদের জিজ্ঞাসা করুন
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section
        id="experience"
        className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold text-accent">
                এমন একটি সাক্ষাৎ, যা আলাদা মনে হয়
              </p>
              <h2 className="font-display text-4xl leading-[1.25] sm:text-5xl">
                শান্ত, সুচিন্তিত এবং সম্পূর্ণ আপনার।
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-primary-foreground/80">
                আমরা বিশ্বাস করি, যখন আপনি অনুভব করেন যে আপনার কথা শোনা হচ্ছে, তখনই আত্মবিশ্বাস বাড়ে।
                প্রথম আলাপ থেকে শুরু করে আপনার ব্যক্তিগত পরিকল্পনা পর্যন্ত, আপনার অভিজ্ঞতা সাজানো হয়েছে
                আপনার কাছে যা ঠিক মনে হয়, তা ঘিরে।
              </p>
            </div>
            <div className="divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-7"
                >
                  <span className="font-display text-2xl text-accent">{step.number}</span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-primary-foreground/75">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-moss">আপনার পরবর্তী ধাপ</p>
            <h2 className="font-display text-4xl leading-[1.25] sm:text-5xl">
              চলুন, একটি কথোপকথন দিয়ে শুরু করি।
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              ব্যক্তিগত পরামর্শ হলো আপনি কী চান তা জানানোর, প্রশ্ন করার এবং আপনার কাছে ঠিক মনে হয় এমন
              একটি পরিকল্পনা খুঁজে দেখার সুযোগ।
            </p>
          </div>
          <Button asChild className="h-12 w-fit rounded-none px-6 shadow-none">
            <a
              href={`mailto:hello@aureaesthetics.com?subject=${encodeURIComponent("পরামর্শের অনুরোধ")}`}
            >
              পরামর্শের অনুরোধ করুন <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-border px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} Auré Aesthetics</span>
          <span className="inline-flex items-center gap-2">
            <Code aria-hidden="true" className="size-4 text-moss" /> ডিজাইন করেছে{" "}
            <a href="https://www.webmagpie.com" aria-label="WebMagpie">
              <Bird aria-hidden="true" />
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}