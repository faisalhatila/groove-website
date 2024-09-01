'use client';
import React from 'react';
import Carousel from './Carousel';

const CurateExperience = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
      <Carousel items={items} />
    </div>
  );
};

export default CurateExperience;
