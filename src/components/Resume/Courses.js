import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div>
      {courses
        .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
        .map((i, key) => (
          <div key={key} className='flex'>
            <div className='hidden md:block gray-text'>{i.number}</div>
            <div className='hidden md:block w-2'></div>

            <p className='hidden md:block'>{i.title}</p>
            <p className='md:hidden my-2'>{i.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Courses;
