"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show = true }: { show?: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-96 h-96 bg-blue-900/20 blur-3xl rounded-full"
          />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-40 h-40 border border-blue-900 rounded-full"
          />

          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-xl tracking-[0.4em]"
          >
          -PM-
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}