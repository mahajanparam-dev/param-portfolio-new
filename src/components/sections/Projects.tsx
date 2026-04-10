"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    "ESP32 Smart System",
    "Maze Solver Robot",
    "Portfolio Website",
    "Fridge Chef AI",
    "ESP32 Motion Detection System",
    "Hackathons Participation"
  ];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center items-center px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-white z-20"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative border border-blue-900 p-6 rounded-xl bg-white/5 backdrop-blur-xl overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-900/20 blur-2xl" />
            </div>

            <h3 className="relative z-10 text-xl text-white">
              {project}
            </h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}