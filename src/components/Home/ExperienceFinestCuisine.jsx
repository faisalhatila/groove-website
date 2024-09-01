import React from 'react';
import CuisineCard from './CuisineCard';
import { useTranslations } from 'next-intl';

const ExperienceFinestCuisine = () => {
  const t = useTranslations();
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
    <div>
      <div className="flex flex-col items-center">
        <p className="text-[30px] font-serif md:text-[35px] xl:text-[40px]">
          {t('home.finestCuisine.title')}
        </p>
        <p className="text-center my-10 max-w-[90%] md:max-w-[50%]">
          {t('home.finestCuisine.description')}
        </p>
      </div>

      <div class="grid grid-cols-4 gap-3">
        {cuisines.map((item, index) => (
          <CuisineCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceFinestCuisine;
