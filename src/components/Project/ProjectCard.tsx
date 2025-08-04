import { Project } from "@/types/Projects";
import TechBadge from "@/components/TechBadge/TechBadge";

const techColors: Record<string, string> = {
  Java: "bg-red-600",
  Python: "bg-yellow-600 text-black",
  "Tailwind CSS": "bg-teal-500",
  "Next.js": "bg-black",
  React: "bg-blue-600",
  "React.js": "bg-blue-600",
  PostgreSQL: "bg-indigo-700",
  JavaScript: "bg-yellow-400 text-black",
  TypeScript: "bg-blue-500",
};


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
    <TechBadge key={tech} tech={tech} />
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
