import React from 'react';

const Intro = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '40px' }}>
        Slide-Effect for Images, Sections and Components:
      </h1>
      <h2>
        <a
          className='link'
          href='https://www.npmjs.com/package/react-slick'
          target='blank'
          title='Found Out More'
        >
          React-Slick
        </a>{' '}
        Package helps to implement such functionality easily!
      </h2>
      <h4 style={{ marginTop: '10px', marginBottom: '20px' }}>
        {' '}
        Created by{' '}
        <a
          className='link'
          href='https://github.com/rezan21'
          style={{ border: 'none' }}
        >
          Reza
        </a>{' '}
        using React.js
      </h4>
    </div>
  );
};

export default Intro;
