import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div>
      {experiences.map((i, key) => (
        <div key={key}>
          <div className='hidden md:flex'>
            <div className='font-bold capitalize'>{i.company}</div>
            <div className='w-4 text-center'>-</div>
            <div className='capitalize'>{i.position}</div>
          </div>
          <div className='md:hidden'>
            <div className='font-semibold text-sm'>
              {i.company} - {i.position}
            </div>
          </div>
          <div className='gray-text pb-1'>{i.daterange}</div>
          <div className='pb-3'>
            {i.points.map((j, key) => (
              <ul className='text-sm list-inside list-disc' key={key}>
                <li>{j}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
