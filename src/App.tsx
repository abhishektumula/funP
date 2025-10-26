import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Briefcase, TwitterIcon } from 'lucide-react';
import proj1 from "./assets/Screenshot from 2025-10-26 23-09-49.png";
import proj2 from "./assets/Screenshot from 2025-10-26 23-10-10.png";
import proj3 from "./assets/ai-comp.jpeg";

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
            a computer science undergraduate and full-stack developer who loves building ideas that actually work — turning concepts into functional, user-focused products.
            While I’m adaptable with any tech stack, I am currently working with Next.js, Express, and TypeScript to create fast and modern web experiences.
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
            <a href="https://x.com/axyzk9" className="social-icon hover:scale-110 transition-transform">
              <TwitterIcon size={28} />
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
              <h3 className="text-2xl font-bold mb-2">Front End Developer Intern</h3>
              <p className="text-gray-400">HCL Tech • July 2024 - Oct 2024</p>
              <p className="mt-4 text-gray-300">
                Developed and Maintained highly responsive user interfaces for web applications using HTML, CSS, and JavaScript.Ensured cross-platform compatibility through extensive testing and debugging.

              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <h3 className="text-2xl font-bold mb-2">Data Science Intern</h3>
              <p className="text-gray-400">Slash Mark • May 2024 - June 2024</p>
              <p className="mt-4 text-gray-300">
                Performed data analysis and visualization using Python, Pandas, and Matplotlib to extract actionable insights.
                Assisted in building and training machine learning models by performing data cleaning, feature engineering, and evaluation.
                Presented findings through interactive dashboards and concise reports to stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <img
                src={proj2}
                alt="Project 1"
                className="w-full h-52 object-cover rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
              />
              <h3 className="text-2xl font-bold mb-2">TweetBox</h3>
              <p className="text-gray-400">A small and fun project that randomly picks and displays tweets from a collection of tech, coding, productivity, and funny tweets that I’ve written or curated.
                Useful for quick inspiration or just to get a laugh while coding.</p>
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
                src={proj1}
                alt="Project 2"
                className="w-full h-52 object-cover rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
              />
              <h3 className="text-2xl font-bold mb-2">Random PassWord Generator</h3>
              <p className="text-gray-400">
                A simple and customizable password generator that lets you create secure passwords with options to include:
                Lowercase and uppercase letters,
                Numbers,
                Symbols,
                Custom length(8-64)
              </p>
            </motion.div>

            {/* Project Card 3*/}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <img
                src={proj3}
                alt="Project 2"
                className="w-full h-52 object-cover rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
              />
              <h3 className="text-2xl font-bold mb-2">AI Companion</h3>
              <p className="text-gray-400">
                An AI-powered companion web app built using TypeScript/React (TSX) for the frontend and Supabase as the backend. This app lets users chat with an intelligent assistant, store chat history, and customize their AI experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 gradient-text">Skills</h2>
          {/* Skills */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              {/* <Briefcase className="text-gray-400" size={28} /> */}
              {/* <h3 className="text-3xl font-bold">Skills</h3> */}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <div className="glow" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  {/* <h4 className="text-xl font-bold mb-3">Frontend</h4> */}
                  <ul className="text-gray-400 space-y-2">
                    <li>Python</li>
                    <li>Java</li>
                    <li>Java Script</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  {/* <h4 className="text-xl font-bold mb-3">Frontend</h4> */}
                  <ul className="text-gray-400 space-y-2">
                    <li>HTML and CSS</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  {/* <h4 className="text-xl font-bold mb-3">Backend</h4> */}
                  <ul className="text-gray-400 space-y-2">
                    <li>Express</li>
                    <li>Python</li>
                    <li>FastApi</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  {/* <h4 className="text-xl font-bold mb-3">Tools</h4> */}
                  <ul className="text-gray-400 space-y-2">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>MongoDB</li>
                    <li>PostMan</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
