'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import axios from 'axios';
import LanguageDropdown from './LanguageDropdown';

const TopBar = () => {
  const t = useTranslations();
  const socialIcons = [
    '/assets/Tiktok.svg',
    '/assets/Insta.svg',
    '/assets/Twitter.svg',
    '/assets/Snapchat.svg',
  ];

  //   useEffect(() => {
  //     cookies().set('NEXT_LOCALE', 'ur');
  //     // localStorage.setItem('NEXT_LOCALE', 'ur');
  //   }, []);

  return (
    // <div className="bg-[rgba(0,0,0,0.6)] px-2 md:px-[200px] py-2 md:py-[50px] text-white">
    <div className="flex-1 bg-[rgba(0,0,0,0.6)] text-white">
      <div className="flex justify-between items-center">
        <div className="w-[120px] md:w-[220px]">
          <img src="/assets/TopbarLogo.png" className="max-w-[100%]" />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            {socialIcons.map((item, index) => (
              <div key={index} className="w-[22px] mr-5">
                <img src={item} className="max-w-[100%]" />
              </div>
            ))}
          </div>
          <div className="mr-5">
            <button
              onClick={() => {
                axios
                  .get('http://localhost:3000/api/cookieinfo?newLang=en')
                  .then((res) => console.log({ res }))
                  .catch((err) => console.log({ err }));
              }}
              className="w-[142px] h-[48px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px]"
            >
              {t('login')}
            </button>
          </div>
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
