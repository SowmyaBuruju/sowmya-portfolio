"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import ScrollAnimation from "../components/ScrollAnimation"

const Intro = () => {
  return (
    <ScrollAnimation>
      <section id="intro" className="py-20 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative w-[300px] h-[300px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9112%203.jpg-bGxAc2nbmhtt0VcTApR1D47IGTmTOI.jpeg"
              alt="Buruju Sowmya at Niagara Falls"
              fill
              priority
              className="rounded-full object-cover border-4 border-blue-400 shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            Buruju Sowmya
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-light text-blue-400"
          >
            <TypeAnimation
              sequence={["Software Engineer", 2000, "Data Analyst", 2000, "AI Enthusiast", 2000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default Intro

