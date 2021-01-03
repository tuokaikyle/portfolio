import React, { useState } from 'react';

const Demo = ({ skills }) => {
  const c = skills.map((i) => [...i.category]).flat(1);
  const categories = ['All'].concat([...new Set(c)]);
  const [active, setActive] = useState('All');

  skills.sort((b, a) => parseFloat(a.competency) - parseFloat(b.competency));

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
    </div>
  );
};

export default Demo;
