// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Install with: npm install framer-motion

function Hero() {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block:'center'});
  };

  return (
    <>
      <section className="relative bg-[#0F0F1A] min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6B5BFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00E5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,91,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,91,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Welcome/Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6B5BFF]/10 to-[#00E5FF]/10 border border-[#6B5BFF]/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-[#00E5FF] rounded-full animate-ping"></span>
                <span className="text-[#00E5FF] text-sm font-medium">Fullstack Developer</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="block text-[#F1F5F9]">Hello, I'm</span>
                <span className="bg-gradient-to-r from-[#6B5BFF] via-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">
                  CodeWithMimi
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-[#F1F5F9]/80 mb-8 max-w-2xl"
              >
                I build <span className="text-[#00E5FF] font-semibold">immersive digital experiences</span> 
                {' '}from frontend elegance to backend robustness
              </motion.p>
              

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-[#F1F5F9] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#6B5BFF]/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get In Touch
                </button>
                <button className="px-8 py-3 border border-[#6B5BFF] text-[#F1F5F9] font-semibold rounded-lg hover:bg-[#6B5BFF]/10 transition-all duration-300">
                  View Projects
                </button>
              </motion.div>

              
            </div>

            {/* Right Content - Illustration/Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:w-1/2 relative"
            >
              {/* Code Illustration */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] rounded-3xl blur-2xl opacity-20"></div>
                
                {/* Code Window */}
                <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/30 rounded-3xl p-6 shadow-2xl">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-[#F1F5F9]/50 ml-4 text-sm">portfolio.js</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="font-mono text-sm md:text-base space-y-4">
                    <div className="flex">
                      <span className="text-[#00E5FF] mr-4">1</span>
                      <span className="text-[#6B5BFF]">const</span>
                      <span className="text-[#F1F5F9] ml-2">developer</span>
                      <span className="text-[#F1F5F9]"> = </span>
                      <span className="text-[#6B5BFF]">{'{'}</span>
                    </div>
                    <div className="flex ml-8">
                      <span className="text-[#00E5FF] mr-4">2</span>
                      <span className="text-[#F1F5F9]">name:</span>
                      <span className="text-[#00E5FF] ml-2">"CodeWithMimi"</span>
                      <span className="text-[#F1F5F9]">,</span>
                    </div>
                    <div className="flex ml-8">
                      <span className="text-[#00E5FF] mr-4">3</span>
                      <span className="text-[#F1F5F9]">role:</span>
                      <span className="text-[#00E5FF] ml-2">"Fullstack Developer"</span>
                      <span className="text-[#F1F5F9]">,</span>
                    </div>
                    <div className="flex ml-8">
                      <span className="text-[#00E5FF] mr-4">4</span>
                      <span className="text-[#F1F5F9]">passion:</span>
                      <span className="text-[#00E5FF] ml-2">"Building digital solutions"</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#00E5FF] mr-4">5</span>
                      <span className="text-[#6B5BFF]">{'}'}</span>
                      <span className="text-[#F1F5F9]">;</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#00E5FF] mr-4">6</span>
                      <span className="text-[#F1F5F9]">// Ready to build your next project?</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] rounded-full blur-xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#00E5FF] to-[#6B5BFF] rounded-full blur-xl opacity-30"></div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-[#F1F5F9]/50">
              <span className="mb-2 text-sm">Scroll down</span>
              <div className="w-6 h-10 border-2 border-[#6B5BFF]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#00E5FF] rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;