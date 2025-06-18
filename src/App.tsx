import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, GraduationCap, Briefcase, Award } from 'lucide-react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--x', `${x}px`);
        (card as HTMLElement).style.setProperty('--y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="background-gradient" />
      <div className="background-grid" />

      {/* About Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold mb-8 gradient-text"
          >
            Hi, I'm Abhishek
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            A passionate developer crafting digital experiences with modern technologies and creative solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8"
          >
            <a href="https://github.com" className="social-icon hover:scale-110 transition-transform">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="social-icon hover:scale-110 transition-transform">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your.email@example.com" className="social-icon hover:scale-110 transition-transform">
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 gradient-text">Experience</h2>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <h3 className="text-2xl font-bold mb-2">Senior Developer</h3>
              <p className="text-gray-400">Company Name • 2020 - Present</p>
              <p className="mt-4 text-gray-300">Led development of multiple high-impact projects and mentored junior developers. Specialized in building scalable web applications and implementing modern development practices.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
              <p className="text-gray-400">Previous Company • 2018 - 2020</p>
              <p className="mt-4 text-gray-300">Developed and maintained critical business applications. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 - Copy this structure for more projects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
                alt="Project 1"
                className="w-full h-52 object-cover rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
              />
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">A comprehensive web application built with React and Node.js, featuring real-time updates and seamless user experience.</p>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
                alt="Project 2"
                className="w-full h-52 object-cover rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
              />
              <h3 className="text-2xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400">An innovative solution combining modern design principles with robust backend architecture to deliver exceptional performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 gradient-text">Resume</h2>
          
          {/* Education */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-gray-400" size={28} />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <h4 className="text-2xl font-bold">Bachelor of Technology</h4>
              <p className="text-gray-400">University Name • 2014 - 2018</p>
              <p className="mt-3 text-gray-300">Computer Science and Engineering</p>
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-gray-400" size={28} />
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <ul className="space-y-6">
                <li>
                  <h4 className="text-xl font-bold">AWS Certified Solutions Architect</h4>
                  <p className="text-gray-400">Amazon Web Services • 2023</p>
                </li>
                <li>
                  <h4 className="text-xl font-bold">Professional Scrum Master I</h4>
                  <p className="text-gray-400">Scrum.org • 2022</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-gray-400" size={28} />
              <h3 className="text-3xl font-bold">Skills</h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">Frontend</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Backend</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Tools</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;