import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Serverless ToDo App',
    image: '/images/Todo.png',
    description: 'A modern serverless task management tool leveraging AWS services.',
    bullets: [
      'Built with Lambda, DynamoDB, S3, and API Gateway for a fully serverless backend.',
      'Reduced infrastructure costs by over 70% compared to traditional hosting.',
      'Supports real-time sync with efficient data storage and retrieval.'
    ],
    techStack: ['React', 'AWS Lambda', 'DynamoDB', 'S3', 'API Gateway'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Book Tracker App',
    image: '/images/BookTracker.webp',
    description: 'An interactive application to manage, review, and recommend books.',
    bullets: [
      'Implemented user authentication and CRUD features using MongoDB and Express.',
      'Tracked over 1,000 books with advanced filtering and recommendations.',
      'Fully responsive and accessible design with smooth animations.'
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Portfolio Website',
    image: '/images/Portfolio.png',
    description: 'Personal portfolio showcasing skills, experience, and projects.',
    bullets: [
      'Designed with a modern layout using Tailwind CSS and Framer Motion.',
      'Features a fully functional contact form connected to Nodemailer and MongoDB.',
      'Visited by 500+ recruiters monthly with optimized SEO and performance.'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Nodemailer'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Weather Forecast App',
    image: '/images/WeatherForecast.png',
    description: 'Live weather dashboard providing forecasts with a sleek UI.',
    bullets: [
      'Integrated OpenWeatherMap API for real-time data retrieval.',
      'Displayed hourly and weekly trends with intuitive charts.',
      'Achieved 99.9% uptime and responsive performance across devices.'
    ],
    techStack: ['React', 'OpenWeatherMap API', 'Chart.js', 'Tailwind CSS'],
    githubLink: '#',
    liveLink: '#'
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-background text-foreground py-24 px-6 overflow-x-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2 text-center">
          The Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Curated Work That <span className="italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Delivers Impact</span>
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md border border-white/10">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-zinc-300">
                  {project.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline">
                    GitHub →
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-green-400 text-sm hover:underline">
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
