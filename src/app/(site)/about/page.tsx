"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-white">
      <motion.section
        className="bg-black/60 p-10 rounded-lg max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          I'm <span className="text-white font-semibold">Anthony Rosado</span>, a passionate
          <span className="text-blue-400 font-semibold"> Full-Stack Developer</span> with a
          background in military service and a deep commitment to problem-solving through code.
        </p>

        <p className="text-zinc-400 text-lg mt-4">
          I enjoy building fast, accessible applications using modern tech like
          <span className="text-white font-medium"> Java</span>,
          <span className="text-white font-medium"> Python</span>,
          <span className="text-white font-medium"> TypeScript</span>, and
          <span className="text-white font-medium"> Next.js</span>.
        </p>

        <div className="mt-6">
          <a
            href="/Resume-Anthony-Rosado.docx"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Skills Section */}
        <SkillsSection />
        <div className="mt-12 text-left">
  <h2 className="text-3xl font-bold text-center mb-6">Education</h2>

  <div className="space-y-4 text-zinc-300">
    <div>
      <h3 className="text-lg font-semibold text-blue-400">Austin Community College</h3>
      <p>Associate of Applied Science – Computer Programming (In Progress)</p>
      <p className="text-sm text-zinc-400">2024 – Present</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-blue-400">U.S. Army Training</h3>
      <p>Wheeled Vehicle Mechanic (91B)</p>
      <p className="text-sm text-zinc-400">Completed technical and mechanical systems training</p>
    </div>
  </div>
</div>

      </motion.section>
    </main>
  );
}

// Subcomponent for scroll-in skills
function SkillsSection() {
  const skills = [
    {
      title: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "HTML & CSS", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git & GitHub", "Vercel", "MongoDB", "MySQL", "VS Code", "Linux (basic)"],
    },
    {
      title: "Additional Skills",
      items: [
        "REST APIs",
        "Responsive Web Design",
        "Agile Development",
        "Debugging & Troubleshooting",
        "Portfolio & Resume Building",
        "UX/UI Practices",
      ],
    },
  ];

  return (
    <div className="mt-12 text-left">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((group, index) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            items={group.items}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}

// Subcomponent to animate each group
function SkillGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <TooltipItem key={item} label={item} />
        ))}
      </ul>
    </motion.div>
  );
}

function TooltipItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="relative group text-zinc-300 w-fit cursor-help"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-1 text-sm text-white bg-zinc-800 border border-zinc-700 rounded px-2 py-1 z-20 whitespace-nowrap"
          >
            Skill: {label}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
  
