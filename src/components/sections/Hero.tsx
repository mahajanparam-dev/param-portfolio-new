"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "../Magnetic";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[200vh]">

      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </motion.div>

      {/* Sticky Content */}
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex flex-col justify-center items-center text-center px-6"
      >
        {/* PM Background */}
        <div className="absolute text-[20vw] font-bold text-white/5 select-none pointer-events-none">
          PM
        </div>

        {/* Title */}
        <motion.h1
  animate={{
    opacity: [1, 0.9, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
>
  Param Mahajan
</motion.h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
         Building embedded intelligence & VLSI systems for the next generation of hardware.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">

          {/* Resume */}
          <Magnetic>
            <a
              href="/Param-Resume.pdf"
              download
              className="border border-blue-900 px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition relative z-10"
            >
              Download Resume
            </a>
          </Magnetic>

          {/* GitHub (FIXED) */}
          <Magnetic>
            <a
              href="https://github.com/mahajanparam-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-900 px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition relative z-10"
            >
              GitHub
            </a>
          </Magnetic>

          {/* LinkedIn */}
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/param-mahajan-386982383/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-900 px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition relative z-10"
            >
              LinkedIn
            </a>
          </Magnetic>

        </div>

      </motion.div>
    </section>
  );
}
