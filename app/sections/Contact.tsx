"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "../components/ScrollAnimation"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <ScrollAnimation>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-xl text-center max-w-2xl text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the
              following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              <motion.a
                href="mailto:burusowmya2000@gmail.com"
                className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-2xl text-blue-400" />
                <span className="text-white">burusowmya2000@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+12015959226"
                className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-2xl text-blue-400" />
                <span className="text-white">+1 (201) 595-9226</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sowmya-b-69519830a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-2xl text-blue-400" />
                <span className="text-white">LinkedIn Profile</span>
              </motion.a>
              <motion.a
                href="https://github.com/Sow2000-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl text-blue-400" />
                <span className="text-white">GitHub Profile</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default Contact

