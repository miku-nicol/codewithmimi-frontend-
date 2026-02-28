// Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {  ExternalLink, FileStack, Folders, Github, LogInIcon } from 'lucide-react';
 

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
 const API_BASE =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_LOCAL_API
    : import.meta.env.VITE_API;

useEffect(() => {
  fetch(`${API_BASE}/project`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setProjects(data.data);
      } else {
        console.error("API error:", data.message);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Network error:", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return (
      <section id="projects" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B5BFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          
        </div>
      </section>
    );
  }


  
  return (
    <section id="projects" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6B5BFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse"></span>
            <span className="text-[#00E5FF] text-sm font-medium font-mono">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4 font-serif">
            Featured <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent font-serif">Projects</span>
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg font-mono">
            A showcase of my recent work, blending creativity with technical excellence
          </p>
        </motion.div>

        

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8 flex items-center gap-3 font-mono">
            <span className="p-2 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-lg">
               <Folders/>
            </span>
            All Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl overflow-hidden hover:border-[#6B5BFF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#6B5BFF]/10"
              >
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#6B5BFF]/10 to-[#00E5FF]/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent z-10"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
                    <div className="text-3xl font-bold text-[#6B5BFF]/20">{project.title.charAt(0)}</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      project.category === 'frontend' 
                        ? 'bg-blue-500/20 text-blue-400'
                        : project.category === 'fullstack'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}>
                      {project.category === 'fullstack' ? 'Full Stack' : project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#F1F5F9] group-hover:text-[#00E5FF] transition-colors font-serif">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-md hover:bg-[#6B5BFF]/10 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                           <Github className='w-3.5 h-3.5 text-[#F1f5F9]'/>
                           
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-white rounded-md hover:shadow-md hover:shadow-[#6B5BFF]/20 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                           <ExternalLink className='w-3.5 h-3.5'/>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#F1F5F9]/60 text-sm mb-4 line-clamp-2 font-mono">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-[#0F0F1A] border border-[#6B5BFF]/20 text-[#6B5BFF] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-[#0F0F1A] border border-[#6B5BFF]/10 text-[#F1F5F9]/50 text-xs rounded-full font-mono">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6B5BFF]/10 via-[#00E5FF]/10 to-purple-500/10 border border-[#6B5BFF]/20 rounded-2xl px-8 py-6">
            <div className="p-3 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] rounded-xl">
               <LogInIcon/>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-[#F1F5F9] font-serif">Want to see more?</h4>
              <p className="text-[#F1F5F9]/60 font-mono">
                Check out my GitHub for complete project repositories and code samples
              </p>
            </div>
            <a
              href="https://github.com/miku-nicol"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6B5BFF]/20 transition-all duration-300 font-mono"
            >
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;