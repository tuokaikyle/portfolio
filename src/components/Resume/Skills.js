import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skills }) => {
  const c = skills.map((i) => [...i.category]).flat(1);
  // .reduce((acc, j) => acc.concat(j));
  const categories = ['All'].concat([...new Set(c)]);
  const [active, setActive] = useState('All');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className='flex flex-wrap' role='group'>
        {categories.map((i, key) => (
          <button
            key={key}
            onClick={() => {
              setActive(i);
            }}
            className='m-2 px-4 py-1 mb-5 transition duration-500 ease-in-out rounded-full 
                        bg-blue-100 text-gray-600 
                        hover:bg-blue-600 hover:text-white
                        focus:outline-none focus:bg-blue-600 focus:text-white'
          >
            {i}
          </button>
        ))}
      </div>
      <div className='w-4/5 ml-2'>
        {active === 'All' ? (
          <div>
            <div className={`overflow-hidden ${!show && 'h-48'}`}>
              {skills
                .sort(
                  (b, a) => parseFloat(a.competency) - parseFloat(b.competency)
                )
                .map((i, key) => (
                  <div
                    className='shadow bg-gray-200 my-2 rounded-full'
                    key={key}
                  >
                    <div
                      className={`w-${i.competency}/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full`}
                    >
                      {i.title}
                    </div>
                  </div>
                ))}
            </div>
            <div
              className='my-2 flex justify-center shadow bg-gray-200 rounded-full'
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <FontAwesomeIcon
                  icon={faAngleDoubleUp}
                  className='my-1 text-blue-400 mx-auto text-xl'
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className='my-1 text-blue-400 mx-auto text-xl'
                />
              )}
            </div>
          </div>
        ) : (
          skills
            .sort((b, a) => parseFloat(a.competency) - parseFloat(b.competency))
            .filter((j) => j.category.includes(active))
            .map((i, key) => (
              <div className='shadow bg-gray-200 my-2 rounded-full' key={key}>
                <div
                  className={`w-${i.competency}/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full`}
                >
                  {i.title}
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Skills;
