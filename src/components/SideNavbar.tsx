"use client";

import { motion } from "framer-motion";

const links = [
  { name: "Home", short: "H", id: "hero" },
  { name: "About", short: "A", id: "about" },
  { name: "Skills", short: "S", id: "skills" },
  { name: "Projects", short: "P", id: "projects" },
  { name: "Contact", short: "C", id: "contact" },
];

export default function SideNavbar() {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <motion.div
          initial={{ width: 60 }}
          whileHover={{ width: 170 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="flex flex-col gap-6 items-center 
          bg-black/60 backdrop-blur-xl 
          border border-blue-900 
          py-6 px-2 rounded-md overflow-hidden"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.id}`}
              className="relative w-full h-10 flex flex-col items-center justify-center group"
            >
              <span className="text-gray-400 transition duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
                {link.short}
              </span>

              <span className="absolute text-white text-sm opacity-0 translate-y-3 
              transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around bg-black/80 backdrop-blur-xl border-t border-blue-900 py-2">
          {links.map((link, i) => (
            <a key={i} href={`#${link.id}`} className="text-gray-400 text-sm">
              {link.short}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}