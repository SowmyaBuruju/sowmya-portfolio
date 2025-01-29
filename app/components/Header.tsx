"use client"

import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"]

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-transparent backdrop-blur-md"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white"
        >
          Buruju Sowmya
        </motion.h1>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-300 transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

