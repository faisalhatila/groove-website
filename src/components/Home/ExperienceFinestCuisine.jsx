import React from 'react';
import CuisineCard from './CuisineCard';

const ExperienceFinestCuisine = () => {
  const cuisines = [
    {
      image: '/assets/VidaVera.jpg',
      title: 'home.finestCuisine.title1',
    },
    {
      image: '/assets/ZamaZulu.jpg',
      title: 'home.finestCuisine.title2',
    },
    {
      image: '/assets/KhawajaYanni.jpg',
      title: 'home.finestCuisine.title3',
    },
    {
      image: '/assets/Yamagala.jpg',
      title: 'home.finestCuisine.title4',
    },
  ];
  return (
    <div class="grid grid-cols-4 gap-3">
      {cuisines.map((item, index) => (
        <CuisineCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ExperienceFinestCuisine;
