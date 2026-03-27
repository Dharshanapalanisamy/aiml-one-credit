/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Terminal, Database, BrainCircuit, Award, Zap, GraduationCap, Code2 } from 'lucide-react';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
    >
      <motion.div
        className="absolute bg-white rounded-full"
        animate={{
          width: isHovering ? 40 : 12,
          height: isHovering ? 40 : 12,
          x: isHovering ? -20 : -6,
          y: isHovering ? -20 : -6,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </motion.div>
  );
}

function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, var(--color-lavender) 0%, var(--color-rose) 100%)',
        }}
        animate={{
          x: ['-10%', '80%'],
          y: ['-10%', '40%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-[5%] py-6 flex justify-between items-center z-[100] backdrop-blur-md bg-bg-dark/30 border-b border-white/5">
      <div className="text-2xl font-extrabold text-lavender tracking-wider">DARSHANA</div>
      <div className="flex gap-4 items-center">
        <a href="https://github.com/Dharshanapalanisamy" target="_blank" rel="noreferrer" className="text-text-dim hover:text-lavender transition-colors hover-target"><Github size={20} /></a>
        <a href="https://linkedin.com/in/darshana-palanisamy-2410b8292" target="_blank" rel="noreferrer" className="text-text-dim hover:text-lavender transition-colors hover-target"><Linkedin size={20} /></a>
        <a href="mailto:darshanapalanisamy08@gmail.com" className="text-text-dim hover:text-lavender transition-colors hover-target"><Mail size={20} /></a>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center text-center px-[5%] md:px-[10%]">
      <div className="max-w-3xl z-10 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.2em] text-lavender mb-6 block font-semibold"
        >
          AI & ML Engineering Student
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-6 tracking-tight"
        >
          Darshana <span className="text-lavender italic">P S</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-dim max-w-lg mb-10"
        >
          Aspiring software engineer proficient in Artificial Intelligence, Machine Learning, and Web Development. Passionate about creating impactful solutions and thriving in collaborative environments.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href="#work" 
          className="inline-flex items-center gap-2 bg-lavender text-bg-dark px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(146,169,225,0.4)] hover:scale-105"
        >
          Explore Work <ArrowUpRight size={20} />
        </motion.a>
      </div>

      {/* Decorative SVG */}
      <svg className="absolute right-0 top-[20%] z-[-1] opacity-30 hidden md:block" width="400" height="800" viewBox="0 0 400 800" fill="none">
        <motion.path 
          style={{ pathLength }}
          d="M400 50C300 150 450 300 200 400C-50 500 150 750 0 800" 
          stroke="#92A9E1" 
          strokeWidth="1.5" 
          strokeDasharray="10 10"
        />
      </svg>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="text-lavender mb-4" size={28} />,
      skills: ["Python", "JavaScript", "HTML/CSS", "C", "Java (Basics)", "SQL"]
    },
    {
      title: "AI & Core",
      icon: <BrainCircuit className="text-lavender mb-4" size={28} />,
      skills: ["Machine Learning", "Artificial Intelligence", "Data Structures", "Algorithms", "NLP"]
    },
    {
      title: "Tools & Cloud",
      icon: <Database className="text-lavender mb-4" size={28} />,
      skills: ["AWS Cloud", "Oracle Cloud", "GitHub", "VS Code", "Salesforce"]
    }
  ];

  return (
    <section id="skills" className="px-[5%] md:px-[10%] py-12 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl mb-12"
      >
        Technical Arsenal
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="hover-target bg-white/[0.02] border border-white/[0.05] rounded-[30px] p-8 hover:border-lavender/50 transition-colors duration-500"
          >
            {cat.icon}
            <h3 className="font-serif text-2xl mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-4 py-1.5 rounded-full bg-white/[0.03] text-sm text-text-dim border border-white/[0.05] hover:text-lavender hover:border-lavender/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="px-[5%] md:px-[10%] py-24 z-10 relative">
      <div className="flex flex-col gap-20">
        
        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-full bg-lavender/10 text-lavender">
              <GraduationCap size={24} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">Education</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative pl-8 border-l border-white/10 ml-3 max-w-3xl"
          >
            <div className="absolute w-3 h-3 bg-lavender rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(146,169,225,0.5)]" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">B.E. CSE (AI & ML)</h3>
            <p className="text-lavender mt-2 font-medium">K S Rangasamy College of Technology</p>
            <p className="text-text-dim mt-4 leading-relaxed">
              Focused on Data Structures and Algorithms, Artificial Intelligence, Machine Learning, and Web Development.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-white">
              CGPA: 8.50
            </div>
          </motion.div>
        </div>

        {/* Project Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-full bg-rose/10 text-rose">
              <Code2 size={24} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">Featured Projects</h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-[30px] bg-white/[0.03] border border-white/[0.08] p-8 md:p-10 transition-all duration-500 hover:border-lavender hover:-translate-y-2 max-w-5xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-lavender mb-4 block font-semibold">
                  Python / NLP / APIs
                </span>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                  CholanAI: Agri-Assistant
                </h3>
                <p className="text-text-dim text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                  An innovative Telegram chatbot built with Python and NLP capabilities. Fetches live agricultural data and crop advisories to support regional farmers in their local language.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:text-lavender transition-colors">
                  View Details <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-[30px] bg-white/[0.03] border border-white/[0.08] p-8 md:p-10 transition-all duration-500 hover:border-lavender hover:-translate-y-2 max-w-5xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-lavender mb-4 block font-semibold">
                  Python / Git / NLP
                </span>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                  CLI Git Summarizer
                </h3>
                <p className="text-text-dim text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                  A command-line tool that analyzes a Git repository and generates concise summaries of commits, file changes, and project activity. Helps developers quickly understand codebases.
                </p>
                <ul className="list-disc list-inside text-text-dim mb-8 space-y-2 text-sm md:text-base">
                  <li>Fetch commit history</li>
                  <li>Summarize changes</li>
                  <li>Highlight most modified files</li>
                  <li>CLI-based interaction</li>
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:text-lavender transition-colors">
                  <Github size={18} /> View Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Achievements() {
  const certifications = [
    "AWS Cloud Practitioner",
    "Oracle Cloud Infrastructure: AI Foundations Associate",
    "Salesforce Trailhead: 2 modules completed",
    "NPTEL: Soft Skill, IoT, Practical Cyber Security, Design Thinking"
  ];

  const activities = [
    "Participated in several inter-college hackathons.",
    "Gained practical experience in rapid prototyping, AI integration, and teamwork."
  ];

  return (
    <section id="achievements" className="px-[5%] md:px-[10%] py-24 relative z-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-lavender/10 text-lavender">
              <Award size={24} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">Certifications</h2>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-text-dim"
              >
                <span className="text-lavender mt-1.5 text-lg">•</span>
                <span className="text-base md:text-lg leading-relaxed">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-rose/10 text-rose">
              <Zap size={24} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">Activities</h2>
          </div>
          <ul className="space-y-4">
            {activities.map((act, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-start gap-3 text-text-dim"
              >
                <span className="text-rose mt-1.5 text-lg">•</span>
                <span className="text-base md:text-lg leading-relaxed">{act}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 mt-20 bg-white/[0.02] pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-lavender/30 to-transparent" />
      
      <div className="px-[5%] md:px-[10%] flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-dim max-w-xl mb-10 text-lg"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a href="mailto:darshanapalanisamy08@gmail.com" className="hover-target flex items-center gap-2 px-8 py-4 rounded-full bg-lavender text-bg-dark font-semibold hover:bg-white transition-colors duration-300">
            <Mail size={18} />
            Say Hello
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover-target flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-semibold hover:bg-white/[0.1] transition-colors duration-300">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover-target flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white font-semibold hover:bg-white/[0.1] transition-colors duration-300">
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        <div className="w-full flex justify-center items-center gap-6 pt-8 border-t border-white/10 text-sm text-text-dim">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <span className="flex items-center gap-2 hover:text-lavender transition-colors cursor-pointer hover-target">
              +91 9080823399
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
            <span className="flex items-center gap-2 hover:text-lavender transition-colors cursor-pointer hover-target">
              darshanapalanisamy08@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-lavender selection:text-bg-dark font-sans">
      <NoiseOverlay />
      <CustomCursor />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
