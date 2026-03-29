"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="relative bg-black text-white px-6 md:px-20 overflow-hidden">
  
  {/* Background gradient */}
  <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.08),transparent_40%)]" />

     <Navbar />
      {/* HERO */}
     <section className="h-screen flex flex-col justify-center relative">
        <motion.h1 id="hero"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.02 }}
  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
  >
          Param Mahajan
        </motion.h1>
         <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
        <p className="mt-4 text-gray-400 max-w-xl">
          Electronics & Telecommunication Engineer | Embedded Systems | VLSI | Secure Design
        </p>
        <a
  href="/Param-Resume.pdf"
  download
  className="inline-block mt-6 px-6 py-2 border border-gray-600 rounded-full text-sm hover:border-purple-400 hover:text-white transition"
>
  Download Resume
</a>

        </motion.h1>
      </section>

      {/* ABOUT */}
      <motion.section id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 max-w-3xl"
        >
        <h2 className="text-2xl mb-6">About</h2>
        <p className="text-gray-400">
          Results-driven Electronics and Telecommunication Engineering student specializing in Embedded Systems, VLSI design, and Verilog HDL. Strong foundation in digital architecture and secure system design. Experienced in open-source ecosystems, Kubernetes fundamentals, and cybersecurity principles. Focused on building scalable, silicon-ready, and security-conscious engineering solutions.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 max-w-3xl"
>
        <h2 className="text-2xl mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Embedded Systems","VLSI Design","Verilog HDL","Digital Electronics",
            "Linux Fundamentals","Kubernetes Basics","AI-assisted DevOps Workflows",
            "npm Security Awareness","Cybersecurity Fundamentals","Effective Communication",
            "Presentation Skills","System Design","Power Electronics"
          ].map((skill, i) => (
            <motion.div 
               key={i}
               whileHover={{ scale: 1.08 }}
              className="relative border border-gray-700 hover:border-purple-400 p-4 rounded-xl overflow-hidden group cursor-pointer transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
               <p className="relative z-10">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 max-w-3xl"
>
        <h2 className="text-2xl mb-6">Projects</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Automated Gate System (WOWKI)</li>
          <li>Portfolio Website</li>
          <li>IoT Circuit Designs</li>
        </ul>
     </motion.section>

      {/* EXPERIENCE */}
      <motion.section id="experience"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 max-w-3xl"
>
        <h2 className="text-2xl mb-6">Experience & Workshops</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Red Hat Open Source Developers Conference</li>
          <li>Kubernetes & AI Integration Workshop</li>
          <li>Cybersecurity Workshop</li>
          <li>AI for All Workshop</li>
        </ul>
      </motion.section>

      {/* CONTACT */}
        <motion.section id="contact"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 max-w-3xl">
        <h2 className="text-2xl mb-6">Contact</h2>
        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/mahajanparam-dev" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/param-mahajan-386982383/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/_i.am.param?igsh=NHowcGVjaWVvNnQ5" target="_blank">Instagram</a>
        </div>
     </motion.section>
     <CursorGlow />
    </main > 
  );
}