import React, { useState } from 'react';
import { front, navigation } from '../content/data';
import PageTitile from '../components/PageTitile';

import ReactMarkdown from 'react-markdown';
import markdown from '../content/frontPage.md';
import { Link } from 'react-router-dom';

const Front = () => {
  const [text, setText] = useState();
  fetch(markdown)
    .then((response) => response.text())
    .then((p) => {
      setText(p);
    });
  return (
    <div className='pb-12'>
      <PageTitile title={front.title} subtitle={front.subtitle}></PageTitile>
      <article className='mx-10 mt-10'>
        <ReactMarkdown className='prose'>{text}</ReactMarkdown>
      </article>
      <div className='flex mx-10 mt-5 text-gray-700'>
        {navigation.map((i, key) => (
          <Link
            to={i.toLowerCase()}
            key={key}
            className='px-2 py-1 text-sm border mx-2 hover:bg-gray-100 focus:bg-gray-200'
          >
            {i}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Front;
