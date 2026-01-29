import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Fullstack Applications',
    'API Development',
    'Technical Consulting',
  ];

  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A14] pt-16 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6B5BFF] via-[#00E5FF] to-[#6B5BFF]"></div>
      
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#6B5BFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-[#F1F5F9]">C</span>
              </div>
              <h2 className="text-2xl font-bold text-[#F1F5F9]">
                <span className="text-[#6B5BFF]">Code</span>
                <span className="text-[#00E5FF]">With</span>
                <span className="text-[#F1F5F9]">Mimi</span>
              </h2>
            </div>

            <p className="text-[#F1F5F9]/70 leading-relaxed">
              Building the future of web, one line of code at a time. 
              Fullstack developer passionate about creating exceptional digital experiences.
            </p>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#F1F5F9] mb-6 pb-2 border-b border-[#6B5BFF]/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-[#F1F5F9]/70 hover:text-[#00E5FF] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-2 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 border border-[#6B5BFF]/30 rounded-full text-[#F1F5F9] hover:border-[#00E5FF]/50 transition-all flex items-center gap-2"
            >
              <span>Back to Top</span>
              <span className="text-lg">↑</span>
            </motion.button>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#F1F5F9] mb-6 pb-2 border-b border-[#6B5BFF]/30">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#00E5FF] rounded-full flex-shrink-0"></div>
                  <span className="text-[#F1F5F9]/70 hover:text-[#00E5FF] transition-colors group">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="space-y-6"
>
  {/* Section Header */}
  <div>
    <h3 className='text-xl font-bold text-[#F1F5F9] mb-6 pb-2 border-b border-[#6B5BFF]/30'>
       
      Contact 
    </h3>
    <p className="text-[#F1F5F9]/60 text-sm ">
      Feel free to reach out through any of these channels
    </p>
  </div>

  {/* Contact Cards */}
  <div className="space-y-4">
    {/* Email */}
    <motion.a
      href="mailto:miracleuwaifo9@gmail.com"
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4  hover:border-[#00E5FF]/40 transition-all group"
    >
      <div className="p-3 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-lg group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <p className="text-[#F1F5F9]/60 text-sm">Email</p>
        <p className="text-[#F1F5F9] font-medium group-hover:text-[#00E5FF] transition-colors">
          miracleuwaifo9@gmail.com
        </p>
      </div>
      <span className="ml-auto text-[#6B5BFF] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
    </motion.a>

    {/* Phone */}
    <motion.a
      href="tel:+2348072009057"
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4  hover:border-[#00E5FF]/40 transition-all group"
    >
      <div className="p-3 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-lg group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div>
        <p className="text-[#F1F5F9]/60 text-sm">Phone</p>
        <p className="text-[#F1F5F9] font-medium group-hover:text-[#00E5FF] transition-colors">
          +234 807 200 9057
        </p>
      </div>
      <span className="ml-auto text-[#6B5BFF] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
    </motion.a>

    {/* Location */}
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 hover:border-[#00E5FF]/40 transition-all group"
    >
      <div className="p-3 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-lg group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <p className="text-[#F1F5F9]/60 text-sm">Location</p>
        <p className="text-[#F1F5F9] font-medium">Lagos, Nigeria</p>
        <p className="text-[#F1F5F9]/50 text-sm mt-1">Available for remote work worldwide</p>
      </div>
    </motion.div>
     
  </div>

 
</motion.div>

          
           
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6B5BFF]/30 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-[#F1F5F9]/60 text-sm">
              © {currentYear} CodeWithMimi. All rights reserved.
            </p>
            <p className="text-[#F1F5F9]/40 text-xs mt-1">
              Built with React, Tailwind CSS, and passion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a
              href="/privacy"
              className="text-[#F1F5F9]/60 hover:text-[#00E5FF] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[#F1F5F9]/60 hover:text-[#00E5FF] text-sm transition-colors"
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[#F1F5F9]/60 text-sm">Available for hire</span>
            </div>
          </motion.div>
        </div>

        
         
      </div>
    </footer>
  );
}

export default Footer;