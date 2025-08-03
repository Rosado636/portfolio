"use client";

import { Project } from "@/types/Projects";

import { X } from "lucide-react";

interface ProjectModalProps {
 project: Project;

  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg max-w-lg w-full relative shadow-xl">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-zinc-400"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Project title */}
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

        {/* Project description */}
        <p className="text-zinc-400 mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-zinc-800 border border-zinc-700 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub and Live links */}
        <div className="flex flex-wrap gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-400"
            >
              GitHub
            </a>
          )}
          {project.live && project.live !== "Coming soon" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Optional image or screenshot */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mt-6 rounded border border-zinc-800"
          />
        )}
      </div>
    </div>
  );
}
