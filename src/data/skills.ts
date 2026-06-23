export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "code-2",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: ["Laravel", "Node.js", "MySQL", "REST API"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "terminal",
    skills: ["Git", "Docker", "VS Code", "Cline", "OpenAI", "Figma"],
  },
];
