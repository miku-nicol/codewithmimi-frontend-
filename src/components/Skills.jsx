import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Skills data with proficiency levels (0-100)
  const skillsData = [
    {
      category: 'frontend',
      title: 'Frontend Development',
      icon: '💻',
      color: '#6B5BFF',
      skills: [
        { name: 'React.js', level: 95, description: 'Building dynamic UIs with hooks, context, and custom components' },
        { name: 'Next.js', level: 90, description: 'Server-side rendering, static generation, and API routes' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript development' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework for rapid UI development' },
        { name: 'JavaScript (ES6+)', level: 96, description: 'Modern JavaScript features and patterns' },
        { name: 'HTML5/CSS3', level: 98, description: 'Semantic markup and advanced CSS techniques' },
      ]
    },
    {
      category: 'backend',
      title: 'Backend Development',
      icon: '⚙️',
      color: '#00E5FF',
      skills: [
        { name: 'Node.js', level: 90, description: 'Building scalable server-side applications' },
        { name: 'Express.js', level: 88, description: 'RESTful API development and middleware' },
        { name: 'Python', level: 85, description: 'Scripting and backend development' },
        { name: 'MongoDB', level: 82, description: 'NoSQL database design and aggregation' },
        { name: 'PostgreSQL', level: 80, description: 'Relational database management' },
        { name: 'Firebase', level: 78, description: 'Real-time databases and authentication' },
      ]
    },
    {
      category: 'tools',
      title: 'Dev Tools & Others',
      icon: '🛠️',
      color: '#9D4EDD',
      skills: [
        { name: 'Git & GitHub', level: 94, description: 'Version control and collaborative development' },
        { name: 'Docker', level: 75, description: 'Containerization and deployment' },
        { name: 'AWS', level: 72, description: 'Cloud infrastructure and services' },
        { name: 'Figma', level: 85, description: 'UI/UX design and prototyping' },
        { name: 'Jest/Testing', level: 80, description: 'Unit and integration testing' },
        { name: 'Webpack/Vite', level: 82, description: 'Module bundling and build tools' },
      ]
    }
  ];

  const allSkills = skillsData.flatMap(category => category.skills);

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillsData.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#6B5BFF]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse"></span>
            <span className="text-[#00E5FF] text-sm font-medium">My Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            Technical <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg">
            A comprehensive showcase of my technical proficiency across modern web technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-[#F1F5F9] shadow-lg shadow-[#6B5BFF]/30'
                : 'bg-[#1A1A2E] text-[#F1F5F9]/70 border border-[#6B5BFF]/20 hover:border-[#6B5BFF]/40'
            }`}
          >
            All Skills
          </button>
          
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.category
                  ? 'bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-[#F1F5F9] shadow-lg shadow-[#6B5BFF]/30'
                  : 'bg-[#1A1A2E] text-[#F1F5F9]/70 border border-[#6B5BFF]/20 hover:border-[#6B5BFF]/40'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeCategory === 'all' ? (
            skillsData.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8 hover:border-[#6B5BFF]/40 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-xl text-2xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F1F5F9]">{category.title}</h3>
                    <p className="text-[#F1F5F9]/60 text-sm mt-1">{category.skills.length} skills</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[#F1F5F9] font-medium">{skill.name}</span>
                        <span 
                          className="text-sm font-bold"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#0F0F1A] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="p-4 rounded-xl text-3xl"
                    style={{ backgroundColor: `${skillsData.find(c => c.category === activeCategory)?.color}20` }}
                  >
                    {skillsData.find(c => c.category === activeCategory)?.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#F1F5F9]">
                      {skillsData.find(c => c.category === activeCategory)?.title}
                    </h3>
                    <p className="text-[#F1F5F9]/60 mt-2">
                      Detailed proficiency breakdown for each technology
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#0F0F1A] border border-[#6B5BFF]/10 rounded-xl p-6 hover:border-[#6B5BFF]/30 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-[#F1F5F9] mb-2">{skill.name}</h4>
                          <p className="text-[#F1F5F9]/60 text-sm">{skill.description}</p>
                        </div>
                        <div className="text-right">
                          <div 
                            className="text-2xl font-bold mb-1"
                            style={{ color: skillsData.find(c => c.category === activeCategory)?.color }}
                          >
                            {skill.level}%
                          </div>
                          <div className="text-[#F1F5F9]/50 text-sm">Proficiency</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-2 bg-[#0F0F1A] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skillsData.find(c => c.category === activeCategory)?.color }}
                          />
                        </div>
                        
                        <div className="flex justify-between text-xs text-[#F1F5F9]/50">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-[#F1F5F9] text-center mb-12">
            Additional <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Capabilities</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Responsive Design', icon: '📱', level: 'Expert' },
              { name: 'UI/UX Design', icon: '🎨', level: 'Advanced' },
              { name: 'Performance Opt.', icon: '⚡', level: 'Expert' },
              { name: 'SEO', icon: '🔍', level: 'Intermediate' },
              { name: 'Agile/Scrum', icon: '🔄', level: 'Advanced' },
              { name: 'CI/CD', icon: '🚀', level: 'Intermediate' },
              { name: 'API Design', icon: '🔗', level: 'Expert' },
              { name: 'Security', icon: '🛡️', level: 'Intermediate' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/10 rounded-xl p-6 text-center hover:border-[#00E5FF]/30 transition-all group"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="text-lg font-bold text-[#F1F5F9] mb-2">{skill.name}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  skill.level === 'Expert' 
                    ? 'bg-green-500/20 text-green-400' 
                    : skill.level === 'Advanced'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

         
      </div>
    </section>
  );
}

export default Skills;