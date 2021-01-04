import React from 'react';
import { front } from '../content/data';
import PageTitile from '../components/PageTitile';

const Front = () => (
  <div>
    <PageTitile title={front.title} subtitle={front.subtitle}></PageTitile>
    <div className='px-10 py-12'>
      <div className='content'>
        {front.content.map((i, key) => (
          <div key={key} className='pb-4'>
            {i}
          </div>
        ))}
      </div>
      <div className='funFacts'>
        <div className='pt-4 pb-3 font-bold uppercase'>Some random Facts</div>
        <ul className='list-disc w-11/12 mx-auto'>
          {front.facts.map((j, key) => (
            <li key={key} className='pb-4'>
              {j}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Front;
