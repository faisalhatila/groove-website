'use client';
import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import axios from 'axios';
import LanguageDropdown from './LanguageDropdown';

const TopBar = () => {
  const activeLanguage = useLocale();
  const t = useTranslations();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const socialIcons = [
    '/assets/Tiktok.svg',
    '/assets/Insta.svg',
    '/assets/Twitter.svg',
    '/assets/Snapchat.svg',
  ];
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navItems = [
    'dineWithUs',
    'planYourVisit',
    'events',
    'viewGrovesMap',
    'ourStory',
    'contactUs',
  ];

  return (
    <>
      <div className="hidden md:flex flex-1 text-white">
        <div className="flex flex-1 justify-between items-center">
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
                {t('login')}
              </button>
            </div>
            <LanguageDropdown />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-1 ${
          activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
        } justify-between items-center md:hidden`}
      >
        <div className="w-[150px] md:w-[220px]">
          <img src="/assets/TopbarLogo.png" className="max-w-[100%]" />
        </div>
        <div className="" onClick={toggleDrawer}>
          <img src="/assets/MobileNavBtn.svg" className="max-w-[100%]" />
        </div>
      </div>
      <div
        className={`fixed overflow-y-auto top-0 h-full w-[100%] z-10 bg-gradient-to-r from-[#283606] to-[#0F1500] shadow-lg transform ${
          isDrawerOpen
            ? 'translate-x-0'
            : activeLanguage === 'en'
            ? '-translate-x-full'
            : 'translate-x-full'
        } transition-transform duration-300 ease-in-out ${
          activeLanguage === 'en' ? 'left-0' : 'right-0'
        } md:hidden`}
      >
        <div className="">
          <div
            className={`p-5 flex flex-1 ${
              activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
            } justify-between items-center md:hidden`}
          >
            <div className="w-[150px] md:w-[220px]">
              <img src="/assets/TopbarLogo.png" className="max-w-[100%]" />
            </div>
            <div className="" onClick={toggleDrawer}>
              <img
                src="/assets/CloseMobMenuIcon.svg"
                className="max-w-[100%]"
              />
            </div>
          </div>
          <button
            onClick={toggleDrawer}
            className="text-gray-800 focus:outline-none"
          >
            Close
          </button>
          {navItems.map((item, index) => (
            <div
              className={`p-5 text-white border-t-white border-t-[1px] ${
                index === navItems.length - 1 && 'border-b-white border-b-[1px]'
              } ${activeLanguage === 'en' ? 'text-left' : 'text-right'}`}
              key={index}
            >
              {t(`navbar.${item}`)}
            </div>
          ))}
          <div className="p-5">
            <LanguageDropdown mobile={true} />
            <button className="mt-5 w-[142px] h-[48px] bg-gradient-to-b from-[#AD8749] to-[#DCBB75] text-white rounded-[16px]">
              {t('login')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
