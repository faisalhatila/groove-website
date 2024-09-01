import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import TopBar from '@/components/Header/TopBar';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/HigherOrder/Container';
import ExperienceFinestCuisine from '@/components/Home/ExperienceFinestCuisine';
import Map from '@/components/Home/Map';
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
      <Container
        Component={<ExperienceFinestCuisine />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
      <Container
        Component={<Map />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
    </>
  );
};

export default page;
