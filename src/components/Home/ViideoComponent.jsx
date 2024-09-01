import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '../HigherOrder/Container';

const VideoComponent = () => {
  const t = useTranslations();
  const activeLanguage = useLocale();
  return (
    <div className="flex flex-col items-center">
      <div className="md:max-w-[60%]">
        <div className="mb-10">
          <div className="flex justify-center">
            <p className="text-white md:w-[80%] text-center text-[20px] font-serif md:text-[50px]">
              {t('home.videoSection.title')}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-white md:w-[80%] text-center">
              {t('home.videoSection.description')}
            </p>
          </div>
        </div>
        <div
          className="cursor-pointer flex justify-center items-center w-[100%] h-[450px] mb-10"
          style={{
            background: "url('/assets/VideoComp.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex justify-end items-center  w-[70px] h-[70px] rounded-[50%] p-[8px] bg-white">
            <img
              src="/assets/Play.png"
              className="max-w-[70%] translate-x-[-2px]"
            />
          </div>
        </div>
        <div className="p-5 md:p-8 rounded-[25px] w-[100%] bg-gradient-to-r from-[#344114] to-[#252E11]">
          <p
            className={`text-white ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t('home.videoSection.getAccessTicket.priceInfo')}
          </p>
          <p
            className={`text-white my-5 font-serif text-[20px] md:text-[40px] ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t('home.videoSection.getAccessTicket.title')}
          </p>
          <div
            className={`flex ${
              activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
            } justify-between items-center`}
          >
            <p
              className={`text-white md:w-[70%] ${
                activeLanguage === 'en' ? 'text-left' : 'text-right'
              }`}
            >
              {t('home.videoSection.getAccessTicket.description')}
            </p>
            <img
              src={`${
                activeLanguage === 'en'
                  ? '/assets/RightArrow.png'
                  : '/assets/LeftArrow.png'
              }`}
              className="max-w-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
