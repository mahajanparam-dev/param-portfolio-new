"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10"
    >
      {/* CONTENT WRAPPER (FORCE VISIBILITY) */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        {/* HEADING (FIXED VISIBILITY) */}
       <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          About
        </h2>

        {/* TEXT */}
        <p className="text-gray-300 leading-relaxed">
          I am an aspiring Electronics & Telecommunication Engineer building strong foundations in Embedded Systems and VLSI Design, with a clear goal of becoming a high-caliber hardware engineer.

          <br /><br />

          My focus areas include: Digital Electronics, CMOS fundamentals, RTL Design, Verilog (HDL), FPGA-based development, and Microcontroller systems. Alongside hardware, I actively develop skills in Python (for VLSI & automation), Linux environments, Git, and structured problem-solving.

          <br /><br />

          Recently, at a Red Hat Open Source Developers Conference at MIT World Peace University, I gained hands-on exposure to:

          <br /><br />

          • AI-assisted Kubernetes cluster management  
          • Executing complex command-line workflows  
          • DevSecOps fundamentals and attacker mindset analysis  
          • Identifying insecure npm packages and dependency risks  

          <br /><br />

          I believe great engineers don’t just build systems — they design them to be scalable, efficient, and secure from the ground up.

          <br /><br />

          Currently learning. Consistently building. Future-focused on VLSI, Embedded Intelligence, and Secure Infrastructure.
        </p>
      </motion.div>
    </section>
  );
}