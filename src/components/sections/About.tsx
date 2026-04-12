"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Code2, Rocket, Users } from "lucide-react";
import { aboutText, siteConfig } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Readable, maintainable, well-structured",
  },
  {
    icon: Rocket,
    label: "Performance",
    desc: "Optimised for speed and scalability",
  },
  {
    icon: Users,
    label: "Collaboration",
    desc: "Team-first, async-friendly mindset",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutText.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {aboutText.background}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground text-sm pt-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{siteConfig.location}</span>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl glass hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
