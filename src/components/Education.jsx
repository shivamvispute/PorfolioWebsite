import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const educationList = [
  {
    degree: "Master of Science in Computer Science",
    university: "California State University, Long Beach",
    location: "California, US",
    duration: "2023 – Present",
    summary: "Focused on advanced topics in software development, cloud computing, and data structures & algorithms.",
    highlights: [
      "Gained deep expertise in cloud-native architecture and backend APIs.",
      "Led team projects applying AI and modern DevOps pipelines.",
      "Learned AWS technologies while working part-time as a research assistant."
    ]
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    university: "Savitribai Phule Pune University",
    location: "India",
    duration: "2018 – 2022",
    summary: "Built a strong foundation in computer science fundamentals, programming languages, and full-stack web development.",
    highlights: [
      "Won 2 hackathons and published 1 research paper.",
      "Built 3 production-ready apps using MERN stack.",
      "Led final-year team project focused on NLP-based chatbot."
    ]
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="bg-background text-foreground py-24 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-zinc-500 tracking-widest">The Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Education That{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text italic">
              Builds the Future
            </span>
          </h2>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {educationList.map((edu, index) => (
            <div key={index} className="md:flex md:items-start md:gap-12 relative">
              {/* Dot */}
              <div className="absolute -left-1 top-2.5 w-2.5 h-2.5 bg-white rounded-full border-2 border-background" />

              {/* Left Column */}
              <div className="md:w-1/3 mb-4 md:mb-0 pl-6 text-sm md:text-base text-zinc-300">
                <p className="text-zinc-400">{edu.duration}</p>
                <h3 className="text-white font-semibold text-lg mt-1">{edu.degree}</h3>
                <div className="flex items-center gap-2 mt-1 text-zinc-400 text-sm">
                  <GraduationCap size={16} />
                  {edu.university}
                </div>
                <div className="flex items-center gap-2 mt-1 text-zinc-400 text-sm">
                  <MapPin size={16} />
                  {edu.location}
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3 text-sm md:text-base text-zinc-300">
                <p className="mb-4">{edu.summary}</p>
                <ul className="list-disc list-inside space-y-2">
                  {edu.highlights.map((point, idx) => (
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

export default Education;
