"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "VLSI", "Verilog", "SystemVerilog", "Embedded Systems",
    "ESP32", "Arduino", "C Programming", "Circuit Design",
    "Circuit Simulation", "System Design", "Power Electronics",
    "Effective Communication", "Presentation Skills", "Strategy"
  ];

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center items-center px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-white z-20"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative border border-blue-900 p-3 rounded-xl bg-white/5 backdrop-blur-xl overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-900/20 blur-2xl" />
            </div>

            <span className="relative z-10 text-white">{skill}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}