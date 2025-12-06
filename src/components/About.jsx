// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const techStack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'],
    backend: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack']
  };

  const timeline = [
    { year: '2025', title: 'Started Coding Journey', desc: 'Began learning web development fundamentals' },
    { year: '2025', title: 'First Fullstack Project', desc: 'Built and deployed a complete an ecomerce stack application' },
    { year: '2025', title: 'Professional Experience', desc: 'Started freelancing and contributing to open source' },
    { year: '2026', title: 'CodeWithMimi Brand', desc: 'Launched personal brand and portfolio' }
  ];

  return (
    <section id="about" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
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
            <span className="text-[#00E5FF] text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            More Than Just <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Code</span>
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg">
            Crafting digital experiences with passion, precision, and purpose
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] rounded-lg">
                  <svg className="w-6 h-6 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">My Philosophy</h3>
                  <p className="text-[#F1F5F9]/70">
                    I believe great software is built at the intersection of elegant design, robust engineering, 
                    and user-centric thinking. Every line of code should serve a purpose.
                  </p>
                </div>
              </div>

              <p className="text-[#F1F5F9]/80 text-lg mb-6">
                Hi, I'm <span className="text-[#00E5FF] font-semibold">CodeWithMimi</span>, a passionate fullstack developer 
                dedicated to creating digital solutions that make a difference. With expertise spanning both frontend 
                and backend technologies, I bridge the gap between beautiful interfaces and powerful functionality.
              </p>

              <p className="text-[#F1F5F9]/70 mb-8">
                My journey in tech began with curiosity and has evolved into a career focused on building 
                scalable applications, mentoring other developers, and contributing to the open-source community. 
                When I'm not coding, you'll find me exploring new frameworks, writing technical articles, 
                or contributing to developer communities.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00E5FF] rounded-full animate-pulse"></div>
                  <span className="text-[#F1F5F9] font-medium">Available for projects</span>
                </div>
                <div className="h-4 w-px bg-[#6B5BFF]/40"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#F1F5F9] font-medium">Open to collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8">My Journey</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6B5BFF] via-[#00E5FF] to-transparent"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6B5BFF] to-[#00E5FF] rounded-full flex items-center justify-center z-10">
                      <span className="text-[#F1F5F9] font-bold">{item.year}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6B5BFF] to-[#00E5FF] rounded-full blur-md opacity-50"></div>
                  </div>
                  
                  {/* Timeline content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold text-[#F1F5F9] mb-2">{item.title}</h4>
                    <p className="text-[#F1F5F9]/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-[#F1F5F9] text-center mb-12">
            My <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Tech Stack</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${
                    category === 'frontend' ? 'bg-[#6B5BFF]/20' :
                    category === 'backend' ? 'bg-[#00E5FF]/20' :
                    'bg-purple-500/20'
                  }`}>
                    <svg className="w-5 h-5 text-[#F1F5F9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d={category === 'frontend' ? "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" :
                        category === 'backend' ? "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" :
                        "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"} 
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#F1F5F9] capitalize">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' : 'Dev Tools'}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {technologies.map((tech, index) => (
                    <div 
                      key={tech}
                      className="flex items-center justify-between p-3 bg-[#0F0F1A] rounded-lg border border-[#6B5BFF]/10 hover:border-[#6B5BFF]/30 transition-all group cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-[#F1F5F9] group-hover:text-[#00E5FF] transition-colors">
                        {tech}
                      </span>
                      <span className="text-[#6B5BFF] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
         
      </div>
    </section>
  );
}

export default About;