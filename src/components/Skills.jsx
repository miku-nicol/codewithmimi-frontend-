import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    {
      category: 'frontend',
      title: 'Frontend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#6B5BFF',
      description: 'Building responsive, accessible, and performant user interfaces',
      skills: [
        {
          name: 'React.js',
          description: 'Building dynamic UIs with hooks, context, and custom components',
          experience: '2+ years of production experience'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid and consistent UI development',
          experience: 'Preferred styling solution for projects'
        },
        {
          name: 'JavaScript (ES6+)',
          description: 'Modern JavaScript features, async programming, and design patterns',
          experience: 'Core web development language'
        },
        {
          name: 'HTML5/CSS3',
          description: 'Semantic markup, responsive design, and CSS animations',
          experience: 'Fundamental web technologies expertise'
        },
      ]
    },
    {
      category: 'backend',
      title: 'Backend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: '#00E5FF',
      description: 'Creating scalable server-side applications and APIs',
      skills: [
        {
          name: 'Node.js',
          description: 'Building scalable server-side applications with Express ecosystem',
          experience: 'Production backend development'
        },
        {
          name: 'Express.js',
          description: 'RESTful API development, middleware implementation, and routing',
          experience: 'Primary backend framework'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL database design, aggregation pipelines, and data modeling',
          experience: 'Database solution for modern apps'
        },
      ]
    },
    {
      category: 'tools',
      title: 'Development Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: '#9D4EDD',
      description: 'Tools and platforms that enhance development workflow',
      skills: [
        {
          name: 'Git & GitHub',
          description: 'Version control, collaborative development, and CI/CD workflows',
          experience: 'Standard for all projects'
        },
        {
          name: 'Vercel',
          description: 'Modern deployment platform for frontend applications and serverless functions',
          experience: 'Preferred deployment solution'
        },
        {
          name: 'Figma',
          description: 'UI/UX design, prototyping, and design system implementation',
          experience: 'Design to development workflow'
        },
      ]
    }
  ];

  return (
    <section id="skills" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#6B5BFF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl"></div>
      
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
            <span className="text-[#00E5FF] text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            Skills & <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and experience across modern web development
          </p>
        </motion.div>

        {/* Category Filter - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all border ${
              activeCategory === 'all'
                ? 'border-[#6B5BFF] bg-[#6B5BFF]/10 text-[#F1F5F9]'
                : 'border-[#6B5BFF]/20 text-[#F1F5F9]/60 hover:text-[#F1F5F9] hover:border-[#6B5BFF]/40'
            }`}
          >
            All Categories
          </button>
          
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all border flex items-center gap-2 ${
                activeCategory === category.category
                  ? `border-[${category.color}] bg-[${category.color}]/10 text-[#F1F5F9]`
                  : `border-[${category.color}]/20 text-[#F1F5F9]/60 hover:text-[#F1F5F9] hover:border-[${category.color}]/40`
              }`}
              style={{ 
                borderColor: activeCategory === category.category ? category.color : `${category.color}33`,
                backgroundColor: activeCategory === category.category ? `${category.color}15` : 'transparent'
              }}
            >
              <span className="opacity-80">{category.icon}</span>
              <span>{category.title.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData
            .filter(cat => activeCategory === 'all' || cat.category === activeCategory)
            .map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8 hover:border-[#6B5BFF]/40 transition-all hover:transform hover:-translate-y-1">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div 
                      className="p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <div style={{ color: category.color }}>
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#F1F5F9] mb-2">
                        {category.title}
                      </h3>
                      <p className="text-[#F1F5F9]/70">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="relative"
                      >
                        {/* Connector Line */}
                        {skillIndex < category.skills.length - 1 && (
                          <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#6B5BFF]/20 to-transparent"></div>
                        )}

                        <div className="flex gap-4">
                          {/* Skill Icon */}
                          <div className="relative">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                              style={{ backgroundColor: `${category.color}15` }}
                            >
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }}></div>
                            </div>
                          </div>

                          {/* Skill Content */}
                          <div className="flex-1 pb-6">
                            <h4 className="text-lg font-semibold text-[#F1F5F9] mb-2">
                              {skill.name}
                            </h4>
                            <p className="text-[#F1F5F9]/70 text-sm mb-3">
                              {skill.description}
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                              style={{ 
                                backgroundColor: `${category.color}10`,
                                color: category.color
                              }}
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{skill.experience}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-8 pt-6 border-t border-[#6B5BFF]/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#F1F5F9]/50">
                        {category.skills.length} technologies
                      </span>
                      <div className="flex items-center gap-2">
                        {category.skills.map((_, i) => (
                          <div 
                            key={i}
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl">
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></div>
            <span className="text-[#F1F5F9]">
              Continuously learning and adapting to new technologies
            </span>
            <div className="w-2 h-2 rounded-full bg-[#6B5BFF] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;