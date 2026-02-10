import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_COLORS = {
  primary: "#6B5BFF", 
  gradientStart: "#00E5FF",
  gradientEnd: "#6B5BFF",
  background: "#0F0F1A", 
  text: "#F8FAFC",
  muted: "#94A3B8"
};

function LoadingScreen({ onFinish, brandColors = BRAND_COLORS }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  

  // Rotate through loading phrases
   

  // Smooth percentage display
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPercentage(Math.floor(progress));
    }, 50);
    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        return prev + Math.random() * 8; // Smoother progression
      });
    }, 180);

    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => onFinish(), 300); // Added delay for smooth exit
      }, 500);
    };

    window.addEventListener("load", handleLoad);
    
    // Fallback timeout
    const fallbackTimeout = setTimeout(handleLoad, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "circOut" }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${brandColors.background} 0%, #1a1a2e 50%, #0f0f1a 100%)`
          }}
        >
          {/* Animated background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full blur-3xl"
              style={{ 
                background: `radial-gradient(circle, ${brandColors.primary}20 0%, transparent 70%)`,
                left: '10%',
                top: '20%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full blur-3xl"
              style={{ 
                background: `radial-gradient(circle, ${brandColors.gradientStart}15 0%, transparent 70%)`,
                right: '15%',
                bottom: '30%'
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          {/* Grid background pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${brandColors.primary}20 1px, transparent 1px),
                               linear-gradient(90deg, ${brandColors.primary}20 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Main content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="relative z-10 text-center px-6 w-full max-w-2xl"
          >
            {/* Animated logo/brand */}
            <div className="relative mb-12">
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-xl opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${brandColors.gradientStart}, ${brandColors.primary})`
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.h1
                className="relative text-5xl md:text-7xl font-bold tracking-tight bg-clip-text font-mono"
                style={{
                  background: `linear-gradient(135deg, ${brandColors.gradientStart}, ${brandColors.primary}, ${brandColors.gradientEnd})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%'
                }}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                CodeWithMimi
              </motion.h1>
                
            </div>

            {/* Progress container */}
            <div className="max-w-md mx-auto">
              {/* Animated phrase */}
                 

              {/* Progress bar container */}
              <div className="relative">
                <div className="relative h-3 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm mb-6 border border-gray-800/50">
                  <motion.div
                    className="h-full rounded-full relative"
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", damping: 25, stiffness: 100 }}
                    style={{
                      background: `linear-gradient(90deg, 
                        ${brandColors.gradientStart} 0%, 
                        ${brandColors.primary} 50%, 
                        ${brandColors.gradientEnd} 100%)`,
                      boxShadow: `0 0 30px ${brandColors.primary}60, 
                                 0 0 60px ${brandColors.primary}30`,
                    }}
                  >
                    {/* Progress bar shine effect */}
                    <motion.div
                      className="absolute top-0 left-0 w-16 h-full opacity-50"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        transform: 'skewX(-20deg)'
                      }}
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                      }}
                    />
                  </motion.div>
                </div>

                {/* Percentage and status */}
                <div className="flex items-center justify-between text-sm">
                  <motion.div
                    className="flex items-center space-x-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: brandColors.primary }}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                    <motion.span 
                      className="font-mono font-bold text-lg"
                      style={{ color: brandColors.text }}
                    >
                      {displayPercentage}%
                    </motion.span>
                  </motion.div>
                  
                  <motion.span 
                    className="font-medium px-3 py-1 rounded-full bg-gray-900/50 backdrop-blur-sm"
                    style={{ 
                      color: brandColors.muted,
                      border: `1px solid ${brandColors.primary}30`
                    }}
                    animate={{ 
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    {progress < 33 && "🚀 Initializing"}
                    {progress >= 33 && progress < 66 && "⚡ Loading"}
                    {progress >= 66 && progress < 99 && "✨ Finalizing"}
                    {progress >= 99 && "✅ Ready"}
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;