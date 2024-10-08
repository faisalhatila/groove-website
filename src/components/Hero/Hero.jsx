'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Hero = () => {
  const t = useTranslations();
  const activeLanguage = useLocale();
  const [activeContent, setActiveContent] = useState(1);
  const heroContent = [
    {
      id: 1,
      title: 'home.hero.title1',
      tagline: 'home.hero.tagline1',
      desc: 'home.hero.desc1',
    },
    {
      id: 2,
      title: 'home.hero.title2',
      tagline: 'home.hero.tagline2',
      desc: 'home.hero.desc2',
    },
    {
      id: 3,
      title: 'home.hero.title3',
      tagline: 'home.hero.tagline3',
      desc: 'home.hero.desc3',
    },
    {
      id: 4,
      title: 'home.hero.title4',
      tagline: 'home.hero.tagline4',
      desc: 'home.hero.desc4',
    },
    {
      id: 5,
      title: 'home.hero.title5',
      tagline: 'home.hero.tagline5',
      desc: 'home.hero.desc5',
    },
  ];
  useEffect(() => {
    // Function to update the activeContent
    console.log({ activeContent });
    const updateContent = () => {
      // setActiveContent((prevContent) => (prevContent % 5) + 1);
      setActiveContent((prevContent) => {
        if (prevContent === 5) {
          return 1;
        } else {
          return prevContent + 1;
        }
      });
    };

    // Set up the interval
    const intervalId = setInterval(updateContent, 8000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const renderDots = (arr) => {
    if (activeLanguage === 'en') {
      return arr;
    }
    return arr.reverse();
  };
  return (
    <div
      className={`flex ${
        activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
      } `}
    >
      <div
        className={`min-h-[600px] bg-[rgba(0,0,0,0.6)] md:w-[60%] 2xl:w-[45%] ${
          activeLanguage === 'en'
            ? 'pl-[20px] md:pl-[200px]'
            : 'pr-[20px] md:pr-[200px]'
        } py-2 md:py-[50px] flex flex-col justify-center `}
      >
        <div className="transition-all">
          <p
            className={`text-white md:mt-5 ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t(heroContent[activeContent - 1]?.title)}
          </p>
        </div>
        <div
          className={`flex ${
            activeLanguage === 'en' ? 'justify-start' : 'justify-end'
          }`}
        >
          <p
            className={`text-white md:my-16 md:max-w-[80%] mb-5 text-[40px] md:text-[50px] font-serif leading-relaxed ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t(heroContent[activeContent - 1]?.tagline)}
          </p>
        </div>
        <div>
          <p
            className={`text-white mb-5 ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t(heroContent[activeContent - 1]?.desc)}
          </p>
        </div>
        <div
          className={`mt-5 flex ${
            activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <button
            className={`flex ${
              activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
            } items-center justify-between w-[90%] lg:w-[50%] h-[55px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px] text-left px-5`}
          >
            {t('home.hero.bookReservation')}
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
        <div
          className={`flex mt-16 ${
            activeLanguage === 'en'
              ? 'justify-end pr-[20px]'
              : 'justify-start pl-[20px]'
          }`}
        >
          {renderDots(heroContent).map((item) => (
            <div
              onClick={() => setActiveContent(item.id)}
              className={`cursor-pointer mr-[5px] w-[10px] h-[10px] rounded-[50%] ${
                activeContent !== item.id
                  ? 'bg-[rgba(255,255,255,0.2)]'
                  : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
