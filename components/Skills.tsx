'use client';

import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 5 },
    { name: 'Next.js', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'Tailwind CSS', level: 5 },
    { name: 'JavaScript', level: 5 },
  ],
  backend: [
    { name: 'Node.js', level: 5 },
    { name: 'Express.js', level: 5 },
    { name: 'REST APIs', level: 5 },
    { name: 'GraphQL', level: 3 },
    { name: 'JWT', level: 4 },
  ],
  database: [
    { name: 'MongoDB', level: 5 },
    { name: 'Mongoose', level: 5 },
    { name: 'Redis', level: 3 },
  ],
  devops: [
    { name: 'Docker', level: 4 },
    { name: 'Nginx', level: 4 },
    { name: 'CI/CD', level: 4 },
    { name: 'AWS', level: 3 },
    { name: 'Git', level: 5 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-primary-600 mx-auto mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-200 dark:border-dark-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-600 dark:text-primary-400 capitalize">
                {category}
              </h3>
              <div>
                {skillList.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

