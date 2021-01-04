import React, { useState } from 'react';
import { front } from '../content/data';
import PageTitile from '../components/PageTitile';

import ReactMarkdown from 'react-markdown';
import markdown from '../content/frontPage.md';

const Front = () => {
  const [text, setText] = useState();
  fetch(markdown)
    .then((response) => response.text())
    .then((p) => {
      setText(p);
    });
  return (
    <div>
      <PageTitile title={front.title} subtitle={front.subtitle}></PageTitile>
      <article className='px-10 py-12'>
        <ReactMarkdown className='prose'>{text}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Front;
