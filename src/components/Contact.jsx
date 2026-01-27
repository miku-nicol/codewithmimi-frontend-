// Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "miracleuwaifo9@gmail.com",
      link: "mailto:miracleuwaifo9@gmail.com"
    },
    {
       icon: (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.94.56 3.83 1.62 5.45L2 22l4.75-1.7a9.9 9.9 0 005.29 1.52h.01c5.48 0 9.95-4.46 9.95-9.94C22 6.46 17.53 2 12.04 2zm5.8 14.14c-.24.67-1.41 1.29-1.94 1.36-.5.07-1.13.1-1.82-.11-.42-.13-.97-.32-1.68-.62-2.95-1.27-4.87-4.23-5.02-4.42-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.17 1.03-2.47.27-.3.59-.37.78-.37h.56c.18 0 .43-.07.67.51.24.59.82 2.02.89 2.17.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.32.4-.45.54-.15.15-.3.31-.13.61.18.3.8 1.32 1.71 2.13 1.18 1.05 2.17 1.38 2.47 1.53.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.7.8 2 .95.3.15.5.22.57.34.07.12.07.69-.17 1.36z" />
  </svg>
),
      title: "Let's Connect",
      value: "Available for chats",
      link: "https://wa.me/2348072009057?text=Hi%20there%20%F0%9F%91%8B%0AI%20found%20your%20profile%20and%20I%E2%80%99m%20interested%20in%20your%20full-stack%20development%20services.%20Can%20we%20talk%20about%20a%20project%20I%20have%20in%20mind%3F"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      url: " https://github.com/miku-nicol"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://linkedin.com/in/codewithmimi"
    },
     {
  name: "X",
  icon: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.8l-7.77 8.88L23 22h-6.88l-5.38-6.66L4.88 22H1.32l8.32-9.5L1 2h7.05l4.86 6.05L18.244 2zm-1.21 18h1.97L7.15 3.88H5.04L17.03 20z" />
    </svg>
  ),
  url: "https://x.com/miku_nicol24?s=21"
},

    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/miku_nicol?igsh=MWxseTFkZHlsa2Q2NQ%3D%3D&utm_source=qr"
    }
  ];

  return (
    <section id="contact" className="relative bg-[#0F0F1A] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B5BFF]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
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
            <span className="text-[#00E5FF] text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4">
            Let's <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Build</span> Together
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8">
              Send me a <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Message</span>
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold">Message Sent!</h4>
                    <p className="text-emerald-400/70 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#F1F5F9]/80 text-sm font-medium block">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#6B5BFF] focus:ring-1 focus:ring-[#6B5BFF] transition-all"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-[#6B5BFF]/30 transition-colors pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#F1F5F9]/80 text-sm font-medium block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#6B5BFF] focus:ring-1 focus:ring-[#6B5BFF] transition-all"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-[#6B5BFF]/30 transition-colors pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#F1F5F9]/80 text-sm font-medium block">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#6B5BFF] focus:ring-1 focus:ring-[#6B5BFF] transition-all"
                    placeholder="Project Inquiry"
                  />
                  <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-[#6B5BFF]/30 transition-colors pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#F1F5F9]/80 text-sm font-medium block">
                  Your Message *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-[#6B5BFF] focus:ring-1 focus:ring-[#6B5BFF] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-[#6B5BFF]/30 transition-colors pointer-events-none"></div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] text-[#F1F5F9] font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-[#6B5BFF]/20 transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <p className="text-[#F1F5F9]/40 text-sm text-center mt-6">
              * All fields are required. I respect your privacy and won't share your information.
            </p>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-6 hover:border-[#6B5BFF]/40 transition-all duration-300 ${
                    info.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-[#6B5BFF]/20 to-[#00E5FF]/20 rounded-xl group-hover:from-[#6B5BFF] group-hover:to-[#00E5FF] transition-all">
                      <div className="text-[#00E5FF] group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#F1F5F9] font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-[#F1F5F9]/70">{info.value}</p>
                      {info.link && (
                        <span className="inline-flex items-center gap-1 text-[#6B5BFF] text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to connect
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-[#F1F5F9] mb-6">
                Connect on <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent">Social Media</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-[#0F0F1A] border border-[#6B5BFF]/20 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#6B5BFF] hover:bg-gradient-to-br hover:from-[#6B5BFF]/10 hover:to-[#00E5FF]/5 transition-all duration-300"
                  >
                    <div className="text-[#6B5BFF] group-hover:text-[#00E5FF] transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-[#F1F5F9] text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-[#F1F5F9]">Current Availability</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-sm font-medium">Available</span>
                </div>
              </div>
              <p className="text-[#F1F5F9]/60 text-sm">
                I'm currently accepting new projects and collaborations. 
                Whether it's a small website or a large-scale application, 
                let's discuss how we can work together.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <span className="px-3 py-1.5 bg-[#6B5BFF]/10 text-[#6B5BFF] rounded-full">Web Development</span>
                <span className="px-3 py-1.5 bg-[#00E5FF]/10 text-[#00E5FF] rounded-full">Consulting</span>
                <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 rounded-full">Mentoring</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;