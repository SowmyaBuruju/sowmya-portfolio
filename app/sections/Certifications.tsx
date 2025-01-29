"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "../components/ScrollAnimation"
import { FaGoogle, FaAws, FaPython, FaDatabase, FaCode, FaChartLine } from "react-icons/fa"
import { SiDevdotto, SiQuantcast } from "react-icons/si"
import { FaBriefcase } from "react-icons/fa"

const certifications = [
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google",
    icon: <FaGoogle className="text-blue-400" />,
    category: "Data Analytics",
    credential: "Credential ID: 12345ABC",
    issueDate: "Issued: June 2023",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/9SYJYFTW862M",
  },
  {
    name: "DevOps, Cloud, and Agile Foundations",
    issuer: "IBM",
    icon: <SiDevdotto className="text-blue-400" />,
    category: "DevOps",
    credential: "Credential ID: IBM67890",
    issueDate: "Issued: July 2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/99M6DVAGMVZE",
  },
  {
    name: "DevOps on AWS",
    issuer: "Amazon Web Services",
    icon: <FaAws className="text-blue-400" />,
    category: "Cloud",
    credential: "Credential ID: AWS54321",
    issueDate: "Issued: August 2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/2P7ATYB3LJDV",
  },
  {
    name: "Applied Python Data Engineering",
    issuer: "DataCamp",
    icon: <FaPython className="text-blue-400" />,
    category: "Data Engineering",
    credential: "Credential ID: DC98765",
    issueDate: "Issued: September 2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/QTHPJQMLK25W",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    icon: <FaDatabase className="text-blue-400" />,
    category: "Database",
    credential: "Credential ID: HR33333",
    issueDate: "Issued: December 2023",
    url: "https://www.hackerrank.com/certificates/iframe/8b55607782df",
  },
  {
    name: "Software Engineer",
    issuer: "Professional Certification",
    icon: <FaCode className="text-blue-400" />,
    category: "Engineering",
    credential: "Credential ID: SE44444",
    issueDate: "Issued: January 2024",
    url: "https://www.hackerrank.com/certificates/iframe/4d2af9e4e579",
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    icon: <FaDatabase className="text-blue-400" />,
    category: "Database",
    credential: "Credential ID: HR55555",
    issueDate: "Issued: February 2024",
    url: "https://www.hackerrank.com/certificates/iframe/2f721ad6f508",
  },
  {
    name: "BCG - GenAI Job Simulation",
    issuer: "Forage",
    icon: <FaBriefcase className="text-blue-400" />,
    category: "AI",
    credential: "Credential ID: BCG66666",
    issueDate: "Issued: March 2024",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_Sq6gjxBgh7q3eJHo4_1737962777864_completion_certificate.pdf",
  },
  {
    name: "Quantium - Data Analytics Job Simulation",
    issuer: "Forage",
    icon: <SiQuantcast className="text-blue-400" />,
    category: "Data Analytics",
    credential: "Credential ID: QT77777",
    issueDate: "Issued: April 2024",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_Sq6gjxBgh7q3eJHo4_1738113943774_completion_certificate.pdf",
  },
]

const Certifications = () => {
  return (
    <ScrollAnimation>
      <section id="certifications" className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Licenses & Certifications</h2>
            <p className="text-xl text-blue-400 italic">&quot;Do whatever you do intensely!&quot;</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl p-3 bg-gray-700 bg-opacity-50 rounded-full">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <span className="inline-block px-3 py-1 text-sm text-blue-400 bg-blue-900 bg-opacity-30 rounded-full mb-2">
                      {cert.category}
                    </span>
                    <p className="text-gray-300 text-sm">{cert.credential}</p>
                    <p className="text-gray-300 text-sm">{cert.issueDate}</p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                    >
                      View Credential
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

export default Certifications

