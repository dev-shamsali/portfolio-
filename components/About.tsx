'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Authentication'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Mongoose', 'Redis', 'Database Design'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Nginx', 'CI/CD', 'Git', 'AWS'],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary-600 mx-auto mb-12"
        />

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate MERN Stack Developer with over 3 years of experience building
              scalable web applications. I specialize in creating modern, responsive, and
              performant full-stack solutions using React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My expertise includes designing RESTful APIs, implementing authentication and
              authorization systems, optimizing database queries, and deploying applications
              using Docker and cloud platforms. I'm committed to writing clean, maintainable
              code and following best practices for security and performance.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy contributing to open-source projects, learning new
              technologies, and sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.category}
                className="p-6 bg-gray-50 dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                  {highlight.category}
                </h3>
                <ul className="space-y-2">
                  {highlight.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {/* TODO: Replace /resume.pdf with your actual resume file */}
              PDF Format
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

