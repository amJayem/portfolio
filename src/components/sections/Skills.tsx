"use client";

import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  "Tools & DevOps": Wrench,
};

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-500",
  Backend: "text-emerald-500",
  Database: "text-orange-500",
  "Tools & DevOps": "text-purple-500",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-blue-500/10",
  Backend: "bg-emerald-500/10",
  Database: "bg-orange-500/10",
  "Tools & DevOps": "bg-purple-500/10",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
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
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Experience</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A breakdown of my technical skills across the full stack
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] ?? Wrench;
            const iconColor = categoryColors[cat.category] ?? "text-primary";
            const iconBg = categoryBg[cat.category] ?? "bg-primary/10";

            return (
              <motion.div
                key={cat.category}
                variants={cardVariant}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${iconBg}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="font-bold text-base">{cat.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs px-3 py-1 hover:bg-primary/15 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
