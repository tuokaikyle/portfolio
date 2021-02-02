import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Card = ({ project }) => {
  return (
    <div className='my-16 mx-auto shadow-lg bg-gradient-to-r from-gray-100 via-gray-50 to-white'>
      <div>
        <a
          href={project.link}
          target='_blank'
          rel='noreferrer'
          className='flex'
        >
          <div className='pl-5 pt-6 font-bold uppercase text-gray-600 mr-2 text-lg'>
            {project.title}
          </div>
          <FontAwesomeIcon
            icon={faLink}
            className='text-gray-400 mt-7 text-sm'
          />
        </a>
        <div className='pl-5 pt-3 pb-7 text-xs uppercase text-gray-600'>
          {project.subtitle}
        </div>
      </div>
      <div className='grid grid-cols-1'>
        {project.image.map((i, key) => (
          <a href={project.link} target='_blank' key={key} rel='noreferrer'>
            <img
              className='col-span-1 border-b border-t'
              src={`${process.env.PUBLIC_URL}/images/projects/${i}`}
              alt='project display'
            ></img>
          </a>
        ))}
      </div>

      <div className='px-5 py-5'>{project.description}</div>
      <div className='flex px-5 pb-10 flex-wrap'>
        {project.keyword.map((i, key) => (
          <div
            key={key}
            className='transition duration-500 ease-in-out rounded-full text-sm px-2 py-1 mx-2 my-1 border
            transform hover:-translate-y-1 hover:scale-110 hover:border-0'
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
