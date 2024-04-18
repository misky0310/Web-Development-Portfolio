import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-screen-lg mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Technologies Used:</h3>
              <ul className="list-disc pl-6">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-600">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Year:</h3>
              <p className="text-gray-600">{project.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
