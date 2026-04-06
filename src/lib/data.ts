export const siteConfig = {
  name: "Asif Mahmud Jayem",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "asifmahmud@example.com",
  github: "https://github.com/asifmahmud-jayem",
  linkedin: "https://linkedin.com/in/asifmahmud-jayem",
  location: "Bangladesh",
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
  { name: "Express", icon: "express", color: "#000000" },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, payment integration via Stripe, and an admin dashboard. Features real-time inventory updates and order tracking.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    githubUrl: "https://github.com/asifmahmud-jayem/ecommerce-platform",
    liveUrl: "https://ecommerce.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management API",
    description:
      "A scalable REST API for team task management with role-based access control, real-time notifications via WebSockets, and comprehensive audit logging.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/asifmahmud-jayem/task-api",
    liveUrl: "https://task-api.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Blog & CMS Platform",
    description:
      "A headless CMS and blog platform with markdown support, SEO optimisation, dynamic OG image generation, and a custom admin interface.",
    techStack: ["Next.js", "MongoDB", "Node.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/asifmahmud-jayem/blog-cms",
    liveUrl: "https://blog.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description:
      "A real-time messaging application with channels, direct messages, file uploads, and emoji reactions powered by Socket.io and MongoDB.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/asifmahmud-jayem/chat-app",
    liveUrl: "https://chat.example.com",
    featured: false,
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
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "SQL", "NoSQL"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "AWS (basics)",
      "Linux",
      "Postman",
    ],
  },
];
