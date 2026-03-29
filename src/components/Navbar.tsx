"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/5 border border-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full"
    >
      <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            whileHover={{ y: -2 }}
            className="relative group transition"
          >
            <span
              className={`transition duration-300 ${
                active === link.id ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
            </span>

            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300 ${
                active === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}