import React from 'react';

const Education = ({ degrees }) => {
  return (
    <div>
      {degrees.map((i, key) => (
        <div key={key}>
          <div>{i.degree}</div>
          <div className='text-sm gray-text'>
            {i.school}, {i.year}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
