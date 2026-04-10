"use client";

import { motion } from "framer-motion";
import Magnetic from "../Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-400 mb-6"
      >
        Open to internships, collaborations, and engineering opportunities.
      </motion.p>

      <Magnetic>
        <a
          href="mailto:mahajanparam361@gmail.com"
          className="border border-blue-900 px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </Magnetic>

    </section>
  );
}