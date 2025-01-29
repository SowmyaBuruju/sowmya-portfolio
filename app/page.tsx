"use client"

import { motion } from "framer-motion"
import { useRef, Suspense } from "react"
import Header from "./components/Header"
import Intro from "./sections/Intro"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Certifications from "./sections/Certifications"
import Contact from "./sections/Contact"
import Background3D from "./components/Background3D"

export default function Home() {
  const containerRef = useRef(null)

  return (
    <main ref={containerRef} className="min-h-screen relative galaxy-background overflow-hidden text-white">
      <Background3D />
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <Intro />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </motion.div>
    </main>
  )
}

