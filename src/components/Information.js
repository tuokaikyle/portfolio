import React from 'react';
import { information } from '../content/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Information = () => {
  return (
    <div className=''>
      <div className='pt-8 xl:pt-2 border-t xl:border-t-0'>
        <img
          className='w-40 2xl:w-48 rounded-full mx-auto xl:ml-0 '
          src={`${process.env.PUBLIC_URL}/images/${information.image}`}
          alt='profile'
        ></img>
      </div>

      <div className='font-bold text-3xl pt-12 xl:pt-16 uppercase'>
        {information.name}
      </div>
      <div className='gray-text pt-2 pb-7'>{information.email}</div>

      <div className='py-6 border-t border-b'>
        {information.keywords.map((i, key) => (
          <div key={key} className='pt-1 capitalize'>
            {i}
          </div>
        ))}
      </div>

      <div className='py-5'>
        <div className='justify-center xl:justify-start flex mt-4'>
          <a href={information.instagram.link} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='text-gray-400 text-2xl mr-2'
            />
          </a>
          <a href={information.linkedin.link}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='text-gray-400 text-2xl mx-2'
            />
          </a>
        </div>
        <p className='copyright text-gray-400 mt-4'>&copy; 2021</p>
      </div>
    </div>
  );
};

export default Information;
