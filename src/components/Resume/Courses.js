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

            <pre className='hidden md:block'>{i.title}</pre>
            <div className='md:hidden my-2'>{i.title}</div>
          </div>
        ))}
    </div>
  );
};

export default Courses;
