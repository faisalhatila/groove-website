import React from 'react';

const Container = ({ Component, pymd = '50px', py = '2', restClasses }) => {
  return (
    <div
      className={`px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[20px] md:py-[${pymd}] ${restClasses}`}
    >
      {Component}
    </div>
  );
};

export default Container;
