export const siteConfig = {
  name: "Asif Mahmud Jayem",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "csejayem19@gmail.com",
  github: "https://github.com/amJayem",
  linkedin: "https://www.linkedin.com/in/amjayem/",
  location: "Dhaka, Bangladesh",
};

export const aboutText = {
  intro:
    "I'm a passionate Full Stack Developer who loves turning complex problems into elegant, efficient solutions. With a strong foundation in both frontend and backend technologies, I build end-to-end applications that are fast, scalable, and user-friendly.",
  background:
    "Over the years I've worked across the entire stack — crafting intuitive UIs with React and Next.js, building robust REST and GraphQL APIs with Node.js and NestJS, and designing reliable databases with PostgreSQL, MongoDB, and Prisma. I'm driven by clean code, great developer experience, and the satisfaction of shipping products that make a real impact.",
};

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export const techStack: TechItem[] = [
  { name: "Next.js", icon: "nextjs", color: "#000000" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "NestJS", icon: "nestjs", color: "#E0234E" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
  { name: "Prisma", icon: "prisma", color: "#2D3748" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Mongoose", icon: "mongoose", color: "#880000" },
  { name: "Express", icon: "express", color: "#000000" },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  /** Public demo URL; omit when only the repo is available */
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform (Frontend)",
    description:
      "Customer-facing storefront with modern UX and scalable architecture — product browsing, cart flows, and a polished checkout experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/amJayem/ecommerce-web",
    featured: true,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Role-based admin panel for managing products, users, and store operations with a fast, maintainable SPA architecture.",
    techStack: ["React", "Vite", "TypeScript"],
    githubUrl: "https://github.com/amJayem/ecommerce-dashboard-r",
    featured: true,
  },
  {
    id: 3,
    title: "Backend & Authentication System",
    description:
      "Production-ready REST API with authentication, authorization, and core business logic for the e-commerce ecosystem.",
    techStack: ["NestJS", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/amJayem/ecommerce-backend",
    featured: true,
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "JWT Auth",
    ],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Mongoose", "Redis", "Prisma ORM", "SQL", "NoSQL"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Linux",
      "Postman",
    ],
  },
];
