import React from 'react';
import { information } from '../content/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Information = () => {
  return (
    <div className=''>
      <img
        className='w-40 2xl:w-48 rounded-full mx-auto xl:ml-0'
        src={`/images/${information.image}`}
        alt='profile'
      ></img>
      <div className='font-bold title pt-10'>{information.name}</div>
      <div className='gray-text pt-2 pb-8'>{information.email}</div>
      {information.keywords.map((i, key) => (
        <div key={key} className='mb-1 capitalize'>
          {i}
        </div>
      ))}

      <div className='py-10'>
        <p className='copyright text-gray-400'>
          &copy; {information.copyRight}
        </p>
        <div className='justify-center xl:justify-start flex mt-4'>
          <a href={information.instagram.link} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='text-gray-400 text-2xl mr-4'
            />
          </a>
          <a href={information.linkedin.link}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='text-gray-400 text-2xl'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
