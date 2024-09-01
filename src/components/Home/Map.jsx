import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

const Map = () => {
  const activeLanguage = useLocale();
  const t = useTranslations();
  return (
    <div
      className={`flex flex-col  md:items-center ${
        activeLanguage === 'en' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className="flex-1  w-[100%] h-[550px]"
        style={{
          background: `url('/assets/Map.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: activeLanguage === 'en' ? 'right' : 'left',
        }}
      />
      <div className="flex-1">
        <p
          className={`text-white ${
            activeLanguage === 'en' ? 'text-left' : 'text-right'
          }`}
        >
          {t('home.map.title1')}
        </p>
        <p
          className={`text-white text-[20px] my-5 md:text-[40px] ${
            activeLanguage === 'en' ? 'text-left' : 'text-right'
          }`}
        >
          {t('home.map.title2')}
        </p>
        <p
          className={`text-white ${
            activeLanguage === 'en' ? 'text-left' : 'text-right'
          }`}
        >
          {t('home.map.desc')}
        </p>
        <div
          className={`mt-5 flex ${
            activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <button
            className={`flex ${
              activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
            } items-center justify-between lg:w-[50%] md:h-[55px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px] text-left px-5`}
          >
            {t('home.map.openMapButton')}
            <img
              src={`${
                activeLanguage === 'en'
                  ? '/assets/RightArrow.png'
                  : '/assets/LeftArrow.png'
              }`}
              className="max-w-[30px]"
              alt="bookReservation"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
