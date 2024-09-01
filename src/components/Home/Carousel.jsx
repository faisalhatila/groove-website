import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useTranslations, useLocale } from 'next-intl';

import { Pagination } from 'swiper/modules';

const Carousel = () => {
  const t = useTranslations();
  const activeLanguage = useLocale();
  const [active, setActive] = useState(1);
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
      {activeLanguage === 'en' ? (
        <div
          className={`hidden md:grid md:grid-cols-[30%_70%] xl:grid-cols-[25%_75%] gap-[5px]`}
        >
          <div className="flex-col items-start justify-center flex">
            <p
              className={`text-white font-serif text-[20px] md:text-[40px] xl:text-[60px] ${
                activeLanguage === 'en' ? 'text-left' : 'text-right'
              }`}
            >
              {t('home.experience.title')}
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
          <div className="">
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
              className="mySwiper"
              onSlideChange={(e) => {
                console.log({ onchangeSlide: e });
                setActive(e.activeIndex + 1);
              }}
              onSwiper={(swiper) => console.log({ onSwipe: swiper })}
            >
              {carouselData.map((item, index) => (
                <SwiperSlide className="md:w-[300px] xl:w-[350px]">
                  {/* <div
                    className={`transition-all order border-1 border-white h-[450px] flex ${
                      item?.id === active
                        ? 'scale-100'
                        : item?.id > active
                        ? 'scale-90'
                        : 'scale-75'
                    }`}
                    key={index}
                  >
                    <img className="w-[350px]" src={item?.image} />
                  </div> */}
                  <div
                    className={` flex flex-col items-center transition-all  ${
                      item?.id === active
                        ? 'scale-100'
                        : item?.id > active
                        ? 'scale-90'
                        : 'scale-75'
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
        </div>
      ) : (
        <div
          className={`hidden md:grid md:grid-cols-[70%_30%] xl:grid-cols-[75%_25%] gap-[5px]`}
        >
          <div className="">
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
              className="mySwiper"
              onSlideChange={(e) => {
                console.log({ onchangeSlide: e });
                setActive(e.activeIndex + 1);
              }}
              onSwiper={(swiper) => console.log({ onSwipe: swiper })}
            >
              {carouselData.map((item, index) => (
                <SwiperSlide className="md:w-[300px] xl:w-[350px]">
                  <div
                    className={` flex flex-col items-center transition-all  ${
                      item?.id === active
                        ? 'scale-100'
                        : item?.id > active
                        ? 'scale-90'
                        : 'scale-75'
                    }`}
                  >
                    <div
                      className={`order border-1 border-white h-[450px] flex`}
                      key={index}
                    >
                      <img className="w-[350px]" src={item?.image} />
                    </div>
                    <p className="mt-10 text-[40px]">
                      {t(`home.experience.${item.title}`)}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex-col items-start justify-center flex">
            <p
              className={`text-white font-serif text-[20px] md:text-[40px] xl:text-[60px] ${
                activeLanguage === 'en' ? 'text-left' : 'text-right'
              }`}
            >
              {t('home.experience.title')}
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
        </div>
      )}
      <div className="bg-gradient-to-r from-[#283606] to-[#0F1500] flex md:hidden flex-col">
        <div
          className={`flex-col ${
            activeLanguage === 'en' ? 'items-start' : 'items-end'
          } justify-center flex`}
        >
          <p
            className={`text-white font-serif text-[20px] md:text-[40px] xl:text-[60px] ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            }`}
          >
            {t('home.experience.title')}
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
        <div className="mt-10">
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper flex justify-start"
            onSlideChange={(e) => {
              console.log({ onchangeSlide: e });
              setActive(e.activeIndex + 1);
            }}
            onSwiper={(swiper) => console.log({ onSwipe: swiper })}
          >
            {carouselData.map((item, index) => (
              <SwiperSlide className="">
                <div className={` flex flex-col items-center transition-all`}>
                  <div
                    className={`order border-1 border-white h-[450px] flex`}
                    key={index}
                  >
                    <img className="!h-[400px]" src={item?.image} />
                  </div>
                  <p className="text-[30px]">
                    {t(`home.experience.${item.title}`)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
