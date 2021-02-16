import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            className='transition duration-300 ease-in-out text-sm px-2 py-1 mx-2 my-1 border
            transform hover:-translate-y-1 hover:scale-110 hover:border-0'
          >
            {i}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Front;
