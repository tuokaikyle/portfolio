import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div className=''>
      <div className='md:flex md:flex-wrap md:justify-center'>
        {courses
          .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
          .map((i, key) => (
            <div key={key} className='flex px-3'>
              <div className='hidden md:block md:text-gray-400'>{i.number}</div>
              <div className='w-1'></div>
              <p className='hidden md:block'>{i.title}</p>
              <p className='md:hidden my-2'>{i.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Courses;
