import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import TopBar from '@/components/Header/TopBar';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/HigherOrder/Container';
import { useTranslations } from 'next-intl';
import React from 'react';

const page = () => {
  const t = useTranslations();
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
