"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { techStack } from "@/lib/data";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const iconMap: Record<string, string> = {
  nextjs: "https://cdn.simpleicons.org/nextdotjs",
  react: "https://cdn.simpleicons.org/react",
  typescript: "https://cdn.simpleicons.org/typescript",
  nodejs: "https://cdn.simpleicons.org/nodedotjs",
  nestjs: "https://cdn.simpleicons.org/nestjs",
  postgresql: "https://cdn.simpleicons.org/postgresql",
  prisma: "https://cdn.simpleicons.org/prisma",
  mongodb: "https://cdn.simpleicons.org/mongodb",
  mongoose: "https://cdn.simpleicons.org/mongoose",
  express: "https://cdn.simpleicons.org/express",
};

const darkIcons = new Set(["nextjs", "express", "prisma"]);

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Tech Stack</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech icons grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image
                  src={iconMap[tech.icon]}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className={darkIcons.has(tech.icon) ? "dark:invert invert-0" : ""}
                  unoptimized
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
