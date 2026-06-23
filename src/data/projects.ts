export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  status?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SwiftPOS",
    description:
      "A modern Point of Sale system built with React and Laravel, designed to simplify business operations, transaction management, and inventory tracking.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    status: "Active Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "New projects will be showcased here.",
    tech: [],
    featured: false,
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "New projects will be showcased here.",
    tech: [],
    featured: false,
  },
];
