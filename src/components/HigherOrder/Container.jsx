import React from 'react';

const Container = ({ Component, pymd = '50px', py = '2', restClasses }) => {
  return (
    <div
      className={`px-2 md:px-[200px] py-${py} md:py-[${pymd}] ${restClasses}`}
    >
      {Component}
    </div>
  );
};

export default Container;
