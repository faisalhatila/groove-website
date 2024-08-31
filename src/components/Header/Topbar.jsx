'use client';
import Image from 'next/image';
import React from 'react';
// import { useTranslations } from 'next-intl';

const TopBar = () => {
  //   const t = useTranslations();
  const socialIcons = [
    '/assets/Tiktok.svg',
    '/assets/Insta.svg',
    '/assets/Twitter.svg',
    '/assets/Snapchat.svg',
  ];
  return (
    <div className="container mx-2 md:mx-[200px] py-2 md:py-[50px] text-white">
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
            <button className="w-[142px] h-[48px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px]">
              Log in
              {/* {t('title')} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
