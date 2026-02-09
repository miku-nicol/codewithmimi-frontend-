// Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  

   

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment integration.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'Interactive task management application with drag & drop, real-time updates, and team collaboration features.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with 3D animations, smooth transitions, and responsive design.',
      image: '/api/placeholder/400/300',
      tags: ['Three.js', 'GSAP', 'React', 'Figma'],
      category: 'uiux',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Dashboard for analyzing social media performance with data visualization and reporting tools.',
      image: '/api/placeholder/400/300',
      tags: ['Next.js', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'Mobile-first recipe application with search, filtering, and step-by-step cooking instructions.',
      image: '/api/placeholder/400/300',
      tags: ['React Native', 'Redux', 'Spoonacular API', 'Firebase'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  useEffect(() => {
    fetch("http://localhost:9000/api/project")
    .then((res) => res.json())
    .then((data) => {
      if (data.success){
        setProject(data.data)// depends on your api
      }else {
        console.error("API error:", data.message)
      }
      setLoading(false)
    })
    .catch((err) => {
      console.error("Network error:", err)
      setLoading(false);
    });

  }, [])

  if (loading) return <p>Loading Project...</p>

  
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
            <span className="text-[#00E5FF] text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            Featured <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, blending creativity with technical excellence
          </p>
        </motion.div>

        {/* Filter Buttons */}
         

        {/* Featured Projects */}
         

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8 flex items-center gap-3">
            <span className="p-2 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-lg">
              <svg className="w-5 h-5 text-[#6B5BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
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
                    <h3 className="text-lg font-bold text-[#F1F5F9] group-hover:text-[#00E5FF] transition-colors">
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
                          <svg className="w-3.5 h-3.5 text-[#F1F5F9]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
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
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#F1F5F9]/60 text-sm mb-4 line-clamp-2">
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
                      <span className="px-2 py-0.5 bg-[#0F0F1A] border border-[#6B5BFF]/10 text-[#F1F5F9]/50 text-xs rounded-full">
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
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-[#F1F5F9]">Want to see more?</h4>
              <p className="text-[#F1F5F9]/60">
                Check out my GitHub for complete project repositories and code samples
              </p>
            </div>
            <a
              href="https://github.com/miku-nicol"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6B5BFF]/20 transition-all duration-300"
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