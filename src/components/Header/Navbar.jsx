import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Navbar = () => {
  const navItems = [
    'dineWithUs',
    'planYourVisit',
    'events',
    'viewGrovesMap',
    'ourStory',
    'contactUs',
  ];
  const activeLanguage = useLocale();
  const t = useTranslations();
  return (
    // <div
    //   className={`flex ${
    //     activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
    //   } items-center justify-between border-t-white border-b-white border-t-[1px] border-b-[1px] bg-[rgba(0,0,0,0.6)] px-2 md:px-[200px] py-2 md:py-[20px]`}
    // >
    <div
      className={`flex ${
        activeLanguage === 'en' ? 'flex-row' : 'flex-row-reverse'
      } items-center justify-between`}
    >
      {navItems.map((navItem, index) => (
        <p key={index} className="text-white cursor-pointer font-[500]">
          {t(`navbar.${navItem}`)}
        </p>
      ))}
    </div>
  );
};

export default Navbar;
