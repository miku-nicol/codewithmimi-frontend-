import React from 'react'

function Store() {
  return (
    <div>

          {/* Tech Stack */}
        <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12"
              >
                <p className="text-[#F1F5F9]/60 mb-4">Tech I work with:</p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'Next.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-[#6B5BFF]/10 text-[#00E5FF] rounded-full text-sm border border-[#6B5BFF]/20 hover:bg-[#6B5BFF]/20 transition-colors cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
    </div>
  )
}

export default Store