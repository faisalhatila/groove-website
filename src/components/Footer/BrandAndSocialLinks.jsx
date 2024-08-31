import React from 'react';

const BrandAndSocialLinks = () => {
  const socialIcons = [
    '/assets/Tiktok.svg',
    '/assets/Insta.svg',
    '/assets/Twitter.svg',
    '/assets/Snapchat.svg',
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center">
      <div className="w-[220px] md:mb-0 mb-5">
        <img src="/assets/TopbarLogo.png" className="max-w-[100%]" />
      </div>
      <div className="flex items-center">
        {socialIcons.map((item, index) => (
          <div key={index} className="w-[26px] mr-5">
            <img src={item} className="max-w-[100%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandAndSocialLinks;
