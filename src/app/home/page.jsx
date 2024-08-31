import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import TopBar from '@/components/Header/TopBar';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/HigherOrder/Container';
import VideoComponent from '@/components/Home/ViideoComponent';
import { useTranslations } from 'next-intl';
import React from 'react';

const page = () => {
  const t = useTranslations();
  return (
    <>
      <Hero />
      <Container
        Component={<VideoComponent />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
    </>
  );
};

export default page;
