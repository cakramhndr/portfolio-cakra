export interface Focus {
  id: number;
  title: string;
  description: string;
}

export const currentFocus: Focus[] = [
  {
    id: 1,
    title: "Building SwiftPOS",
    description: "Modern Point of Sale System built with React and Laravel.",
  },
  {
    id: 2,
    title: "AI-Assisted Development",
    description:
      "Leveraging AI tools to accelerate development and improve productivity.",
  },
  {
    id: 3,
    title: "Continuous Learning",
    description:
      "Exploring scalable frontend architecture, system design, and modern development practices.",
  },
];
