import React from 'react';
import { front } from '../content/data';
import PageTitile from '../components/PageTitile';

const Front = () => (
  <div>
    <PageTitile title={front.title} subtitle={front.subtitle}></PageTitile>
    <div className='px-10 py-12'>
      {front.content.map((i, key) => (
        <div key={key} className='text-lg pb-4'>
          {i}
        </div>
      ))}
    </div>
  </div>
);

export default Front;
