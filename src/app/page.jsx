import Hero from '@/components/Hero/Hero';
import Container from '@/components/HigherOrder/Container';
import BookTickets from '@/components/Home/BookTickets';
import CurateExperience from '@/components/Home/CurateExperience';
import ExperienceFinestCuisine from '@/components/Home/ExperienceFinestCuisine';
import Map from '@/components/Home/Map';
import VideoComponent from '@/components/Home/ViideoComponent';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Hero />
      <Container
        Component={<VideoComponent />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
      <BookTickets />
      <Container
        Component={<ExperienceFinestCuisine />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
      <CurateExperience />
      <Container
        Component={<Map />}
        restClasses=" bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
    </>
  );
}
