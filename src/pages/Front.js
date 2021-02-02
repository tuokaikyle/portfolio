import React, { useState } from 'react';
import { front } from '../content/data';
import PageTitile from '../components/PageTitile';

import ReactMarkdown from 'react-markdown';
import markdown from '../content/frontPage.md';
import Skills from '../components/Resume/Skills';
import { resume } from '../content/data';

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
      <article className='mx-10 mt-10'>
        <ReactMarkdown className='prose'>{text}</ReactMarkdown>
      </article>
      <div className='mx-10 mt-5 mb-12'>
        <Skills skills={resume.skills} />
      </div>
    </div>
  );
};

export default Front;
