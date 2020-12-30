import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import { resume } from '../content/data';

const skills = resume.skills;
const Demo = () => {
  const c = skills.map((i) => [...i.category]).flat(1);
  const categories = ['All'].concat([...new Set(c)]);
  const [active, setActive] = useState('All');
  const [show, setShow] = useState(false);

  const skillTransitions = useTransition(show, null, {
    from: { opacity: 0, transform: 'translateY(-20%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(20%)' },
  });

  const skillsAll = skills.sort(
    (b, a) => parseFloat(a.competency) - parseFloat(b.competency)
  );
  const skillsTop = skillsAll.slice(0, 5);
  const skillsBottom = skillsAll.slice(5);

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
            {show ? (
              <div>
                {skillsAll.map((i, key) => (
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
            ) : (
              <div>
                {skillsTop.map((i, key) => (
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
            )}
            <div
              className='my-2 flex justify-center shadow bg-gray-200 rounded-full'
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <FontAwesomeIcon
                  icon={faAngleDoubleUp}
                  className='my-1 text-blue-400 mx-auto text-s'
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className='my-1 text-blue-400 mx-auto text-s'
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

export default Demo;
