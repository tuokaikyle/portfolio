import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Card = ({ project }) => {
  const { PUBLIC_URL } = process.env;
  return (
    <div className='py-10 w-11/12 mx-auto border-b'>
      <div>
        <a
          href={project.link}
          target='_blank'
          rel='noreferrer'
          className='flex'
        >
          <div className='text-2xl mr-2'>{project.title}</div>
          <FontAwesomeIcon icon={faLink} className='text-gray-400 mt-2' />
        </a>
        <div className='pt-3 pb-7'>{project.subtitle}</div>
      </div>
      <div className='grid grid-cols-1 border'>
        {project.image.map((i, key) => (
          <img
            className='col-span-1'
            key={key}
            src={`${process.env.PUBLIC_URL}/images/projects/${i}`}
            alt='project display'
          ></img>
        ))}
      </div>

      <ul className='list-disc list-inside w-4/5 mx-auto mt-10'>
        {project.description.map((i, key) => (
          <li key={key} className='pb-4'>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
