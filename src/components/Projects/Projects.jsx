import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard';


const Projects = () => {
  return (
    <div id="projects" className="projects">
        <div className="textCont flex flex-col items-center justify-center text-center py-20 gap-8">
            <h1 className='text-6xl'>My Clients</h1>
            <p className='w-[60%] text-[1.1rem]'>I have had the opportunity to work with a diverge group of companies . Some of the notable companies I have worked with include</p>
        </div>
        <div className='grid grid-cols-3'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
        
    </div>
  )
}

export default Projects;

