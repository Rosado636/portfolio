import { Project } from "@/types/Projects";

export default function ProjectCard({
  projects,
  onClick,
}: {
  projects: Project;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 text-white border border-zinc-700 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
    >
      {/* 
      ORIGINAL (commented out):
      className="border rounded-lg p-4 bg-white dark:bg-zinc-800 cursor-pointer hover:shadow-lg transition"
      */}

      <h2 className="text-xl font-bold">{projects.title}</h2>
      <p className="text-sm text-zinc-300 mt-1">{projects.description}</p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {projects.tech.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800 border border-zinc-600 text-xs px-2 py-1 rounded text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub and Live links */}
      <div className="mt-2">
        <a
          href={projects.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline mr-4"
        >
          GitHub
        </a>
        {projects.live && (
          <a
            href={projects.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
