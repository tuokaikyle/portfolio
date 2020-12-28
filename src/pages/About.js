import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from '../content/aboutMe.md';
import PageTitile from '../components/PageTitile';

const About = () => {
  const [text, setText] = useState();
  fetch(markdown)
    .then((response) => response.text())
    .then((p) => {
      setText(p);
    });

  return (
    <div>
      <PageTitile
        title={'About Me'}
        subtitle={'(Appr. 2 minutes to read)'}
      ></PageTitile>
      <article className='px-10 py-12'>
        <ReactMarkdown className='prose'>{text}</ReactMarkdown>
      </article>
    </div>
  );
};

export default About;
