import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import MobileAppDownloadButton from './MobileAppDownloadButton';

const FooterHeadline = () => {
  const activeLanguage = useLocale();
  const t = useTranslations();
  const downloadMobApp = [
    {
      icon: '/assets/AppleLogo.png',
      storeName: 'AppleStore',
      title: 'footer.getIOS',
    },
    {
      icon: '/assets/PlayStoreLogo.png',
      storeName: 'Google Play',
      title: 'footer.getAndroid',
    },
  ];
  return (
    <div
      className={`flex ${
        activeLanguage === 'en'
          ? 'flex-col md:flex-row'
          : 'flex-col md:flex-row-reverse'
      }`}
    >
      <div
        className={`flex-[2] flex ${
          activeLanguage === 'en' ? 'justify-start' : 'justify-end'
        }`}
      >
        <p
          className={`max-w-[100%] leading-none md:max-w-[70%] font-serif text-[20px] md:text-[60px] ${
            activeLanguage === 'en' ? 'text-left' : 'text-right'
          }`}
        >
          {t(`footer.headline`)}
        </p>
      </div>
      <div
        className={`flex flex-1 flex-col ${
          activeLanguage === 'en' ? 'items-start' : 'items-end'
        }`}
      >
        <p className="mb-6">{t('footer.downloadLine')}</p>
        <div
          className={`flex flex-col ${
            activeLanguage === 'en' ? 'justify-start' : 'justify-end'
          } md:flex-row w-[100%] items-center gap-5`}
        >
          {downloadMobApp.map((item, index) => (
            <MobileAppDownloadButton
              icon={item.icon}
              storeName={item.storeName}
              title={t(item.title)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterHeadline;
