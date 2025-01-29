"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ScrollAnimation from "../components/ScrollAnimation"

const skills = [
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Kubernetes", category: "DevOps", icon: "☸️" },
  { name: "Jenkins", category: "DevOps", icon: "🔧" },
  { name: "Angular", category: "Frontend", icon: "🅰️" },
  { name: ".NET Core", category: "Backend", icon: "🔷" },
  { name: "C#", category: "Programming", icon: "🔠" },
]

const Skills = () => {
  const [filter, setFilter] = useState("All")

  const filteredSkills = filter === "All" ? skills : skills.filter((skill) => skill.category === filter)

  return (
    <ScrollAnimation>
      <section id="skills" className="py-20 bg-transparent">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Skills</h2>
        <div className="mb-8 flex justify-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-600 rounded bg-transparent text-white"
          >
            <option value="All">All</option>
            <option value="Programming">Programming</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="DevOps">DevOps</option>
            <option value="Cloud">Cloud</option>
          </select>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800 bg-opacity-30 backdrop-blur-md hover:bg-opacity-50"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-3xl">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ScrollAnimation>
  )
}

export default Skills

