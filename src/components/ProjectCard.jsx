import React from 'react';

const ProjectCard = ({ title, description, image, tech, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer">
      {/* Image */}
      <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-xs sm:text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Code link */}
        <div className="flex gap-2">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300 text-sm sm:text-base"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
