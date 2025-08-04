import React from "react";

const techColors: Record<string, string> = {
  Java: "bg-red-600",
  Python: "bg-yellow-400 text-black",
  "Tailwind CSS": "bg-teal-500",
  "Next.js": "bg-black",
  "React": "bg-blue-600",
  "React.js": "bg-blue-600",
  PostgreSQL: "bg-indigo-700",
  JavaScript: "bg-yellow-300 text-black",
  TypeScript: "bg-blue-500",
};

export default function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded font-medium ${
        techColors[tech] || "bg-zinc-700 text-white"
      }`}
    >
      {tech}
    </span>
  );
}
