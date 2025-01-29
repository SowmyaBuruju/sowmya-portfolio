"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "../components/ScrollAnimation"

const experiences = [
  {
    title: "SOFTWARE ENGINEER",
    company: "BYTE SOLUTIONS",
    period: "Sep 2023 - Present",
    details: [
      "Developed and optimized front-end UIs using Angular and React.",
      "Implemented APIs with .NET Core and C#.",
      "Enhanced application performance by 30%.",
      "Reduced API response times by 20%.",
    ],
  },
  {
    title: "ARTIFICIAL INTELLIGENCE INTERN",
    company: "TECH MAHINDRA",
    period: "May 2021 - Jan 2022",
    details: [
      "Applied advanced NLP techniques, including transformers and BERT models.",
      "Designed custom dashboards using Power BI for visualizing sentiment trends.",
      "Improved data retrieval efficiency by 25%.",
      "Increased model accuracy by 18%.",
    ],
  },
  {
    title: "APP DEVELOPER INTERN",
    company: "AWISHION ELECTROMOB SOLUTIONS",
    period: "May 2020 - Sep 2020",
    details: [
      "Developed and launched a social media app, improving software reliability by 30%.",
      "Built a microservices-based integration platform, optimizing workflows.",
    ],
  },
]

const Experience = () => {
  return (
    <ScrollAnimation>
      <section id="experience" className="py-20 bg-transparent">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Work Experience</h2>
        <div className="container mx-auto px-4">
          <div className="relative wrap overflow-hidden">
            <div className="absolute h-full border border-gray-700 left-1/2 transform -translate-x-1/2"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"}`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                </div>
                <motion.div
                  className="order-1 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl w-5/12 px-6 py-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl">{exp.title}</h3>
                  <h4 className="mb-3 font-semibold text-blue-400 text-sm">{exp.company}</h4>
                  <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{exp.period}</p>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default Experience

