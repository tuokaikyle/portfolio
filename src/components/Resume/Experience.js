import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div>
      {experiences.map((i, key) => (
        <div key={key}>
          <div className='font-bold uppercase'>
            {i.company} - {i.position}
          </div>
          <div className='uppercase gray-text pb-1'>{i.daterange}</div>
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
