import React from 'react'
import Reveal from '../Reveal/Reveal'
import {motion} from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "Vellore Institute of Technology",
      location: "Vellore",
      year: "2022-2026",
    },
    {
      title: "Higher Secondary Education",
      institution: "Sister Nivedita Public School",
      location: "Malda",
      year: "2020-2022",
    },
    {
      title: "Secondary Education",
      institution: "St. Mary's School",
      location: "Malda",
      year: "Upto 2020",
    }
    // Add more education entries as needed
  ];

  return (
    <Reveal>
      <div id="education" className="education flex flex-col items-center justify-center text-center py-20 gap-8 w-[100%]">
              <h1 className='text-6xl'>My Education</h1>
              <div className="relative w-full mt-10">
                {/* Timeline */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full shadow-glow"></div>

                {/* Education Info */}
                {educationData.map((education, index) => (
                  <Reveal key={index}>
                    <div
                    key={index}
                    className={`flex items-center mb-8  ${
                      index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Left/Right Content */}
                    <div
                      className={`flex-shrink-0 w-[45%] border-2 border-linkYellow rounded-full py-4 ${
                        index%2==0? 'mr-14' : 'ml-14'
                      } `}
                    >
                      <h3 className="text-lg font-semibold">{education.title}</h3>
                      <p className="text-gray-600">{education.institution}</p>
                      <p className="text-gray-600">{education.location}</p>
                      <p className="text-gray-600">{education.year}</p>
                    </div>
                    {/* Dot */}
                    <div className="relative w-4 h-4">
                      <motion.div
                        className="absolute w-full h-full bg-blue-300 rounded-full shadow-glow"
                        whileHover={{ scale: 1.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  </Reveal>))}  
              </div>
      </div>  
    </Reveal>
  )
}

export default Education