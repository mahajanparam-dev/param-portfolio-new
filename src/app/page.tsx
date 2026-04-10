"use client";

import Loader from "../components/Loader";
import CursorGlow from "../components/CursorGlow";
import SideNavbar from "../components/SideNavbar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // ✅ SCROLL FIX (no glitch)
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // ✅ CURSOR ONLY HORIZONTAL (NO SCROLL BREAK)
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseX.set(x);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });

  // ✅ ONLY HORIZONTAL ROTATION
  const rotateY = useTransform(smoothX, [-1, 1], [-6, 6]);

  // ✅ LOADER FIX
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  if (loading) return <Loader show={loading} />;

  return (
    <main className="relative bg-black text-white overflow-x-hidden">

     {/* 🔥 SCROLL PROGRESS */}
<motion.div
  style={{ scaleX: smooth }}
  className="fixed top-0 left-0 right-0 h-[2px]
  bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900
  origin-left z-[100]"
/>

      {/* 🔥 BACKGROUND */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 blur-3xl
          bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,120,0.15),transparent_40%),
               radial-gradient(circle_at_70%_60%,rgba(0,0,200,0.15),transparent_40%)]"
        />
     

      {/* UI */}
      <SideNavbar />
      <CursorGlow />

      {/* 🔥 3D ENGINE (SAFE VERSION) */}
      <motion.div
        style={{
          rotateY,
          transformPerspective: 1200,
        }}
        className="relative z-10"
      >
        <div className="relative z-20">

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

        </div>
      </motion.div>

      {/* 🔥 DEPTH OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-to-b 
          from-transparent via-black/10 to-black/40"
        />
      </div>

    </main>
  );
}