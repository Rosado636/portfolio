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
      className="border rounded-lg p-4 bg-white dark:bg-zinc-800 cursor-pointer hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold">{projects.title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{projects.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {projects.tech.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-zinc-700 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-2">
        <span className="text-blue-600 underline mr-2">GitHub</span>
        {projects.live && <span className="text-green-600 underline">Live</span>}
      </div>
    </div>
  );
}
