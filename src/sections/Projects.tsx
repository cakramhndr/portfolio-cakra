import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import SwiftPOSModal from "../components/SwiftPOSModal";
import KencanaModal from "../components/KencanaModal";
import UrbanLabModal from "../components/UrbanLabModal";
import SwiftGGModal from "../components/SwiftGGModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [isSwiftPOSModalOpen, setIsSwiftPOSModalOpen] = useState(false);
  const [isKencanaModalOpen, setIsKencanaModalOpen] = useState(false);
  const [isUrbanLabModalOpen, setIsUrbanLabModalOpen] = useState(false);
  const [isSwiftGGModalOpen, setIsSwiftGGModalOpen] = useState(false);

  const handleViewDetails = (projectId: number) => {
    if (projectId === 1) setIsSwiftPOSModalOpen(true);
    else if (projectId === 2) setIsKencanaModalOpen(true);
    else if (projectId === 3) setIsUrbanLabModalOpen(true);
    else if (projectId === 4) setIsSwiftGGModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center section-padding"
    >
      <div className="container-main w-full">
        <SectionHeader title="My Projects" />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewDetails={
                project.featured
                  ? () => handleViewDetails(project.id)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isSwiftPOSModalOpen && (
          <SwiftPOSModal
            isOpen={isSwiftPOSModalOpen}
            onClose={() => setIsSwiftPOSModalOpen(false)}
          />
        )}
        {isKencanaModalOpen && (
          <KencanaModal
            isOpen={isKencanaModalOpen}
            onClose={() => setIsKencanaModalOpen(false)}
          />
        )}
        {isUrbanLabModalOpen && (
          <UrbanLabModal
            isOpen={isUrbanLabModalOpen}
            onClose={() => setIsUrbanLabModalOpen(false)}
          />
        )}
        {isSwiftGGModalOpen && (
          <SwiftGGModal
            isOpen={isSwiftGGModalOpen}
            onClose={() => setIsSwiftGGModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
