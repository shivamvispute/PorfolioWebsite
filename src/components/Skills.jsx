import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaJava, FaAws, FaPython, FaJenkins, FaCogs
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiTypescript, SiFramer, SiZod, SiNextdotjs, SiVercel, SiPostman
} from 'react-icons/si';

const techStack = [
  { name: "HTML", icon: <FaHtml5 color="#f06529" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript color="#007acc" /> },
  { name: "ReactJS", icon: <FaReact color="#61dafb" /> },
  { name: "NextJS", icon: <SiNextdotjs color="white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Framer Motion", icon: <SiFramer color="white" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#3c873a" /> },
  { name: "ExpressJS", icon: <SiExpress color="white" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Prisma", icon: <SiPrisma color="white" /> },
  { name: "Zod", icon: <SiZod color="#a259ff" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
  { name: "GitHub", icon: <FaGithub color="white" /> },
  { name: "Vercel", icon: <SiVercel color="white" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Linux", icon: <FaLinux color="white" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "CI/CD Pipelines", icon: <FaCogs color="#ccc" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Jenkins", icon: <FaJenkins color="#D24939" /> },
];

// manually split tech stack into custom layout rows
const rows = [
  techStack.slice(0, 4),  // Row 1: 4 pills
  techStack.slice(4, 10), // Row 2: 6 pills
  techStack.slice(10, 14),// Row 3: 4 pills
  techStack.slice(14, 20) // Row 4: 6 pills
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-background text-foreground py-24 px-6 text-center"
    >
      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
        I constantly try to improve
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        My Tech Stack
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
            {row.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-200 backdrop-blur-sm hover:scale-105 transition shadow-sm"
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
