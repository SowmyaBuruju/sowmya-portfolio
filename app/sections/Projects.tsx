"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import {
  FaHeartbeat,
  FaHome,
  FaDumbbell,
  FaUserShield,
  FaComments,
  FaChartLine,
  FaUserFriends,
  FaBrain,
  FaUsers,
  FaGithub,
} from "react-icons/fa"
import ScrollAnimation from "../components/ScrollAnimation"

type Project = {
  title: string
  description: string
  icon: JSX.Element
  image?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Text Analysis for Mental Health",
    description:
      "Analyzed text data from mental health-related posts on social media using various natural language processing techniques.",
    icon: <FaBrain />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/78dc43e80c9c0b8c0a662d738db8b71d-ma27aX2V8rxxSYoXCgZ8gzRasfmi83.png",
    github: "https://github.com/Sow2000-bot/Text-Analysis-for-Mental-Health",
  },
  {
    title: "Customer Churn Predictions",
    description:
      "Analyzed the Telco Customer Churn dataset to identify patterns and predict customer churn. Performed exploratory data analysis to visualize key attributes and their relationships with churn.",
    icon: <FaUsers />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c9c07d0f0177581448bc3d55e5349702-04ICIYYGcbLvuuOrjHEI7sYGNm0w0Z.png",
    github: "https://github.com/Sow2000-bot/Customer-Churn-Prediction-model",
  },
  {
    title: "Heart Disease Data Analysis",
    description:
      "Examined the Heart Disease Health Indicators dataset from the Behavioral Risk Factor Surveillance System (BRFSS) to predict the occurrence of heart disease based on various health indicators.",
    icon: <FaHeartbeat />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8038d0dbbaa13328852eac5040b7e708-PDhZoazjAXrkFPF0l3zioOOApns2TQ.png",
    github: "https://github.com/Sow2000-bot/Heart-Disease-Prediction-system",
  },
  {
    title: "Housing Price Prediction",
    description:
      "Aimed to predict the median house values in California using data from the 1990 census. The model's performance was evaluated using metrics like MAPE, RMSE, and R², and we analyzed the influence of continuous features.",
    icon: <FaHome />,
    image: "https://sowmy-buruju.my.canva.site/images/f0f6c873c44f52a72ddd1ba9bdbf709d.png",
    github: "https://github.com/Sow2000-bot/Housing-Price-Prediction-model",
  },
  {
    title: "Fitness Portal Website",
    description:
      "I developed a comprehensive web application using Express.js to provide a platform for fitness enthusiasts to share and access fitness-related content.",
    icon: <FaDumbbell />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee94dc9bf98a66e0c4f51fd5c13058c2-ph99ONKFHFk76KWJGwLmM7hcdfNqX3.png",
  },
  {
    title: "Insurance Prediction",
    description:
      "This project provided actionable insights for targeted health and wellness interventions, demonstrating proficiency in machine learning and data analysis techniques.",
    icon: <FaUserShield />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3e94573700b1a8301853687ee2d7b1e5-E3SFM3NBh3V1T4KcDXpMJVwZD7MYeZ.png",
    github: "https://github.com/Sow2000-bot/Insurance_Prediction",
  },
  {
    title: "Premium Dating Prediction",
    description:
      "Developed a machine learning project to predict VIP subscription purchases on an online dating platform using Logistic Regression, Random Forest, and Gradient Boosting classifiers.",
    icon: <FaUserFriends />,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a48f3eea09fbc2a3f22253ad2aee9fa3-fa3ieipdX1yiJBqijFTMSAQNDQ11X6.png",
    github: "https://github.com/Sow2000-bot/Premium_Prediction_Dating",
  },
  {
    title: "Backend for a Web Forum",
    description:
      "I developed a robust API using Flask to support the operations of a web forum. The backend includes features such as random number generation, post creation, retrieval, deletion, and user management with secure authentication.",
    icon: <FaComments />,
    image: "https://sowmy-buruju.my.canva.site/images/5686c6513c8f0ffcbe34d33515eeb5be.png",
    github: "https://github.com/Sow2000-bot/Backend-for-a-Web-Forum",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <ScrollAnimation>
      <section id="projects" className="py-20 bg-transparent">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-4xl mb-4 text-blue-400">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.image && (
                <div className="relative h-64 w-full mb-6">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="text-4xl mb-4 text-blue-400">{selectedProject.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mb-4 text-blue-400 hover:text-blue-300"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>
    </ScrollAnimation>
  )
}

export default Projects

