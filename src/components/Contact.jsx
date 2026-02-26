// Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Github, Instagram, Mail, Send, XIcon } from 'lucide-react';
import { MdEmail, MdWhatsapp } from 'react-icons/md';
import { FiLinkedin } from 'react-icons/fi';

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
  setSubmitStatus(null);

  try {
    const response = await fetch("http://localhost:9000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitStatus("success");

      // Clear the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    setSubmitStatus("error");
  }

  setIsSubmitting(false);

  // Reset status after 5 seconds
  setTimeout(() => setSubmitStatus(null), 5000);
};

  const contactInfo = [
    {
      icon: (
         <Mail/>
      ),
      title: "Email",
      value: "miracleuwaifo9@gmail.com",
      link: "mailto:miracleuwaifo9@gmail.com"
    },
    {
       icon: (
        <MdWhatsapp/>
),
      title: "Let's Connect",
      value: "Available for chats",
      link: "https://wa.me/2348072009057?text=Hi%20there%20%F0%9F%91%8B%0AI%20found%20your%20profile%20and%20I%E2%80%99m%20interested%20in%20your%20full-stack%20development%20services.%20Can%20we%20talk%20about%20a%20project%20I%20have%20in%20mind%3F"
    },
    {
      icon: (
         <Clock/>
      ),
      title: "Response Time",
      value: "Within 24 hours,usally sooner,",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <Github/>
      ),
      url: " https://github.com/miku-nicol"
    },
    {
      name: "LinkedIn",
      icon: (
         <FiLinkedin/>
      ),
      url: "https://www.linkedin.com/in/miracle-uwaifo-b8a454389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
     {
  name: "X",
  icon: (
     <XIcon/>
  ),
  url: "https://x.com/miku_nicol24?s=21"
},

    {
      name: "Instagram",
      icon: (
         <Instagram/>
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
            <span className="text-[#00E5FF] text-sm font-medium font-mono">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4 font-serif">
            Let's <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent font-mono">Build</span> Together
          </h2>
          <p className="text-[#F1F5F9]/60 max-w-2xl mx-auto text-lg font-mono">
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
            <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8 font-mono">
              Send me a <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent font-mono">Message</span>
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
                    <h4 className="text-emerald-400 font-bold font-mono">Message Sent!</h4>
                    <p className="text-emerald-400/70 text-sm font-mono">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#F1F5F9]/80 text-sm font-medium block font-mono">
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
                  <label className="text-[#F1F5F9]/80 text-sm font-medium block font-mono">
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
                <label className="text-[#F1F5F9]/80 text-sm font-medium block font-mono">
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
                <label className="text-[#F1F5F9]/80 text-sm font-medium block font-mono ">
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
                     <Send className='w-5 h-5' />
                     
                  </>
                )}
              </button>
            </form>

            <p className="text-[#F1F5F9]/40 text-sm text-center mt-6 font-mono">
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
                      <h4 className="text-[#F1F5F9] font-bold text-lg mb-1 font-mono">{info.title}</h4>
                      <p className="text-[#F1F5F9]/70 font-mono">{info.value}</p>
                      {info.link && (
                        <span className="inline-flex items-center gap-1 text-[#6B5BFF] text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                          Click to connect
                           <ArrowRight/>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] border border-[#6B5BFF]/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-[#F1F5F9] mb-6 font-mono">
                Connect on <span className="bg-gradient-to-r from-[#6B5BFF] to-[#00E5FF] bg-clip-text text-transparent font-mono">Social Media</span>
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
             
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;