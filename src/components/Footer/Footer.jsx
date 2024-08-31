import React from 'react';
import Bottom from './Bottom';
import BrandAndSocialLinks from './BrandAndSocialLinks';
import FooterHeadline from './FooterHeadline';
import WebsiteDetails from './WebsiteDetails';

const Footer = () => {
  return (
    <footer className="">
      <FooterHeadline />
      <WebsiteDetails />
      <BrandAndSocialLinks />
      <Bottom />
    </footer>
  );
};

export default Footer;
