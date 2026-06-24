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
    title: "Kencana Furniture",
    description:
      "A modern e-commerce platform for home furniture with complete buyer and seller features.",
    tech: ["Laravel", "Vue.js", "Bootstrap"],
    status: "Pending Development",
    featured: true,
  },
  {
    id: 3,
    title: "UrbanLab",
    description:
      "A dark-themed mobile app for UrbanLab shoe store with product catalog, live chat, and seamless checkout experience.",
    tech: ["Flutter", "Laravel", "Firebase"],
    status: "In Design",
    featured: true,
  },
  {
    id: 4,
    title: "SwiftGG",
    description:
      "A game top up platform with multi-payment support, game catalog, global rank, and rewards system for gamers.",
    tech: ["React JS", "Laravel", "Tailwind CSS"],
    status: "In Design",
    featured: true,
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "New projects will be showcased here.",
    tech: [],
    featured: false,
  },
];
