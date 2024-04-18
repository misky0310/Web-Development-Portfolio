import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard';


const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "project1.jpg",
    technologies: ["React", "Node.js", "Express"],
    year: 2022
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "project2.jpg",
    technologies: ["Angular", "Java", "Spring Boot"],
    year: 2021
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "project2.jpg",
    technologies: ["Angular", "Java", "Spring Boot"],
    year: 2021
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="projects w-full">
        <div className="textCont flex flex-col items-center justify-center text-center py-20 gap-8 w-full border">
            <h1 className='text-6xl'>My Clients</h1>
        </div>
        <div className='grid grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>    
    </div>
  )
}

export default Projects;

