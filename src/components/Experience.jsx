import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "California State University, Long Beach",
    role: "Graduate Research Assistant",
    location: "California, US",
    duration: "Aug 2023 – Present",
    summary: "Built scalable tools to support research and data automation workflows.",
    description: [
      "Developed a serverless dashboard for data visualization.",
      "Built React components with integrated charting.",
      "Optimized performance using caching techniques."
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Program Analyst",
    location: "India — Remote",
    duration: "June 2022 – July 2023",
    summary: "Contributed to full-stack development and agile feature delivery.",
    description: [
      "Led frontend development in enterprise-grade systems.",
      "Wrote and maintained Node.js microservices.",
      "Presented solutions in sprint demos and reviews."
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Intern",
    location: "India",
    duration: "Apr 2021 – Dec 2021",
    summary: "Completed multiple full-cycle training projects across SDLC phases.",
    description: [
      "Built mock frontend apps in React and integrated REST APIs.",
      "Practiced unit testing and bug resolution.",
      "Collaborated with mentors on project simulations."
    ]
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-background text-foreground py-24 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-zinc-500 tracking-widest">The Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Experience That Brings{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text italic">
              Ideas to Life
            </span>
          </h2>
        </div>

        {/* Experience Items */}
        <div className="space-y-20 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="md:flex md:items-start md:gap-12 relative">
              {/* Left Column */}
              <div className="md:w-1/3 mb-4 md:mb-0 pl-1 text-sm md:text-base text-zinc-300 relative">
                {/* Dot */}
                <div className="absolute left-0 top-2.5 w-2.5 h-2.5 bg-white rounded-full border-2 border-background" />
                <div className="pl-5">
                  <p className="text-zinc-400">{exp.duration}</p>
                  <h3 className="text-white font-semibold text-lg mt-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-zinc-400 text-sm">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-zinc-400 text-sm">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3 text-sm md:text-base text-zinc-300">
                <p className="mb-4">{exp.summary}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
