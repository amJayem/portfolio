"use client";

import {
  motion,
  type Variants,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const blobLayer =
  "pointer-events-none absolute -z-10 transform-gpu will-change-transform rounded-full blur-2xl";

export default function Hero() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const disableParallax = reduceMotion === true;

  // Parallax only on blobs (GPU-friendly). No content parallax — it fights smooth scrolling.
  const y1 = disableParallax ? [0, 0] : [0, -90];
  const y2 = disableParallax ? [0, 0] : [0, 70];
  const y3 = disableParallax ? [0, 0] : [0, -45];

  const blob1Y = useTransform(scrollY, [0, 500], y1);
  const blob2Y = useTransform(scrollY, [0, 500], y2);
  const blob3Y = useTransform(scrollY, [0, 500], y3);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background grid — static paint layer */}
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Parallax blobs — lighter blur + GPU layer */}
      <motion.div
        style={{ y: blob1Y }}
        className={`${blobLayer} top-1/4 left-1/4 w-80 h-80 bg-primary/25`}
      />
      <motion.div
        style={{ y: blob2Y }}
        className={`${blobLayer} bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/15`}
      />
      <motion.div
        style={{ y: blob3Y }}
        className={`${blobLayer} top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10`}
      />

      {/* Hero copy stays fixed to scroll — reads smoother */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Button
            size="lg"
            className="rounded-full px-8 font-semibold"
            onClick={() => scrollTo("#projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 font-semibold glass"
            onClick={() => scrollTo("#contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 pt-2"
        >
          {[
            { href: siteConfig.github, label: "GitHub", icon: <GithubIcon className="w-5 h-5" /> },
            { href: siteConfig.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="w-5 h-5" /> },
            { href: `mailto:${siteConfig.email}`, label: "Email", icon: <Mail className="w-5 h-5" /> },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
