import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useTranslations, useLocale } from 'next-intl';

import { FreeMode } from 'swiper/modules';

const BookTicketsCarousel = () => {
  const t = useTranslations();
  const activeLanguage = useLocale();
  const carouselData = [
    {
      id: 1,
      image: '/assets/Restaurants.png',
      title: 'restaurants',
    },
    {
      id: 2,
      image: '/assets/Experiences.png',
      title: 'experiences',
    },
    {
      id: 3,
      image: '/assets/Events.png',
      title: 'events',
    },
    {
      id: 4,
      image: '/assets/PicnicMarket.png',
      title: 'picnicMarket',
    },
    {
      id: 5,
      image: '/assets/HawanimGrovesCity.png',
      title: 'hawanimGrovesCity',
    },
    {
      id: 6,
      image: '/assets/LittleKrazy.png',
      title: 'littleKrazy',
    },
    {
      id: 7,
      image: '/assets/Lucaw.png',
      title: 'lucaw',
    },
  ];
  return (
    <div
      className={`overflow-hidden bg-gradient-to-r from-[#283606] to-[#0F1500] ${
        activeLanguage === 'en'
          ? 'pl-[20px] lg:pl-[50px] xl:pl-[100px] 2xl:pl-[200px]'
          : 'pr-[20px] lg:pr-[50px] xl:pr-[100px] 2xl:pr-[200px]'
      } py-[20px] md:py-[50px]`}
    >
      <div
        className={`mt-5 mb-16 flex flex-col ${
          activeLanguage === 'en' ? 'items-start' : 'items-end'
        }`}
      >
        <p
          className={`${
            activeLanguage === 'en' ? 'text-left' : 'text-right'
          } text-[30px] font-serif md:text-[35px] xl:text-[40px] md:max-w-[60%] xl:max-w-[40%]`}
        >
          {t('home.bookGeneralAccessTickers.title')}
        </p>
        <div className="mt-5">
          <button
            className={`flex ${
              activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
            } items-center justify-between w-[250px] md:h-[55px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px] text-left px-5`}
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
      </div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper hidden"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide className="md:w-[300px] xl:w-[350px]">
              <div
                className={` flex flex-col items-center transition-all  ${
                  index % 2 === 0 ? 'scale-100' : 'scale-75'
                }`}
              >
                <div
                  className={`order border-1 border-white h-[450px] flex`}
                  key={index}
                >
                  <img className="w-[350px]" src={item?.image} />
                </div>
                <p className="mt-10 text-[30px]">
                  {t(`home.experience.${item.title}`)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper hidden"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide className="md:w-[300px] xl:w-[350px]">
              <div className={` flex flex-col items-center transition-all `}>
                <div
                  className={`order border-1 border-white h-[450px] flex`}
                  key={index}
                >
                  <img className="w-[350px]" src={item?.image} />
                </div>
                <p className="mt-10 text-[30px]">
                  {t(`home.experience.${item.title}`)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookTicketsCarousel;
