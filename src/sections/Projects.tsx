import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="container-main w-full">
        <SectionHeader title="Other Projects" />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
