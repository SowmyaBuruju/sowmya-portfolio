"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ScrollAnimation from "../components/ScrollAnimation"

const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollAnimation>
      <section id="about" className="py-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-4 text-white"
          >
            I'm Buruju Sowmya, a multifaceted tech enthusiast bringing together various domains to create innovative
            solutions.
          </motion.p>
          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-4"
          >
            {[
              {
                title: "Software Engineer",
                description: "Developing robust and scalable applications across various languages and frameworks.",
              },
              {
                title: "Data Analyst",
                description: "Transforming raw data into actionable insights for informed decision-making.",
              },
              {
                title: "GenAI Specialist",
                description: "Exploring and implementing cutting-edge AI models for innovative solutions.",
              },
              {
                title: "Artificial Intelligence Practitioner",
                description: "Working on diverse AI projects, from machine learning to neural networks and automation.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white"
          >
            My multidisciplinary approach allows me to bridge the gap between different technological domains, creating
            holistic solutions that leverage the best of software engineering, data analysis, and artificial
            intelligence.
          </motion.p>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default About

