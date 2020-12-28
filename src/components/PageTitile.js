import React from 'react';

const PageTitile = (props) => {
  return (
    <div className='border-b px-10 py-12'>
      <div className='title'>{props.title}</div>
      <div className='gray-text'>{props.subtitle}</div>
    </div>
  );
};

export default PageTitile;
