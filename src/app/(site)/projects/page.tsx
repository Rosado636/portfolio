"use client";

import { useState } from "react";
import { projects } from "@/static-data/projects"; // your static project data
import ProjectCard from "@/components/Project/ProjectCard"; // card display
import ProjectModal from "@/components/Modal/ProjectModal"; // modal for details
import { Projects } from "@/types/Projects";

export default function ProjectsPage() {
  // State to hold the currently selected project for the modal
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

   return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projects={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Optional modal viewer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

