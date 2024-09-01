import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
const CuisineCard = ({ item }) => {
  const activeLanguage = useLocale();
  const t = useTranslations();
  return (
    <div class="md:rounded-[38px] p-[10px] rounded bg-gradient-to-r from-[#344114] to-[#252E11] col-span-4 md:col-span-2">
      <div
        className="w-[100%] h-[350px] rounded md:rounded-[38px]"
        style={{
          background: `url('${item.image}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`flex px-5 my-5 ${
          activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
        } justify-between items-center`}
      >
        <div className="flex flex-col">
          <p
            className={`${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            } font-serif md:text-[40px] text-[30px]`}
          >
            {t(item.title)}
          </p>
          <button className="bg-[#AD8749] rounded-[23px] w-[196px] py-1 mt-4">
            {t('home.finestCuisine.price')}
          </button>
        </div>
        <img
          src={`${
            activeLanguage === 'en'
              ? '/assets/RightArrow.png'
              : '/assets/LeftArrow.png'
          }`}
        />
      </div>
    </div>
  );
};

export default CuisineCard;
