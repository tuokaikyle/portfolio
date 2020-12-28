import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((i, key) => (
        <div key={key}>
          <div className='flex'>
            <div className='gray-text'>{i.number}</div> - {i.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
