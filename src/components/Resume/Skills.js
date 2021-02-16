import React, { useState } from 'react';

const Skills = ({ skills }) => {
  const c = skills.map((i) => [...i.category]).flat(1);
  const categories = ['All'].concat([...new Set(c)]);
  const [active, setActive] = useState('All');
  skills.sort((b, a) => parseFloat(a.competency) - parseFloat(b.competency));

  return (
    <div className='mb-3'>
      <div className='flex flex-wrap' role='group'>
        {categories.map((i, key) => (
          <button
            key={key}
            onClick={() => {
              setActive(i);
            }}
            className='m-2 px-4 py-1 mb-5 transition duration-500 ease-in-out rounded-full border
                        bg-gray-100 text-gray-800
                        hover:bg-gray-50
                        focus:outline-none focus:bg-white focus:text-blue-500 focus:border-blue-500'
          >
            {i}
          </button>
        ))}
      </div>
      <div className='ml-2 mr-8 flex flex-wrap'>
        {active === 'All'
          ? skills.map((i, key) =>
              i.competency === 5 ? (
                <div key={key} className='c5'>
                  {i.title}
                </div>
              ) : i.competency === 4 ? (
                <div key={key} className='c4'>
                  {i.title}
                </div>
              ) : i.competency === 3 ? (
                <div key={key} className='c3'>
                  {i.title}
                </div>
              ) : i.competency === 2 ? (
                <div key={key} className='c2'>
                  {i.title}
                </div>
              ) : (
                <div key={key} className='c1'>
                  {i.title}
                </div>
              )
            )
          : skills
              .filter((j) => j.category.includes(active))
              .map((i, key) =>
                i.competency === 5 ? (
                  <div key={key} className='c5'>
                    {i.title}
                  </div>
                ) : i.competency === 4 ? (
                  <div key={key} className='c4'>
                    {i.title}
                  </div>
                ) : i.competency === 3 ? (
                  <div key={key} className='c3'>
                    {i.title}
                  </div>
                ) : i.competency === 2 ? (
                  <div key={key} className='c2'>
                    {i.title}
                  </div>
                ) : (
                  <div key={key} className='c1'>
                    {i.title}
                  </div>
                )
              )}
      </div>
      <div className='flex m-5'>
        <div className='mr-5 text-xs'>Most skilled</div>
        <div className='bg-blue-800 w-5 h-3 my-auto'></div>
        <div className='bg-blue-700 w-5 h-3 my-auto'></div>
        <div className='bg-blue-600 w-5 h-3 my-auto'></div>
        <div className='bg-blue-500 w-5 h-3 my-auto'></div>
        <div className='bg-blue-400 w-5 h-3 my-auto'></div>
        <div className='ml-5 text-xs'>Less skilled</div>
      </div>
    </div>
  );
};

export default Skills;
