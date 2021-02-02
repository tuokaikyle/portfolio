import React from 'react';

const Education = ({ degrees }) => {
  return (
    <div className=''>
      {degrees.map((i, key) => (
        <div key={key} className='mb-4'>
          <div className=''>
            <div className='font-semibold'>{i.degree}</div>
          </div>
          <div className='capitalize text-sm gray-text pb-2'>
            {i.school}, {i.year}
          </div>
          {i.description.map((j, jk) => (
            <li className='text-sm' key={jk}>
              {j}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;
