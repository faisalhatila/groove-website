// import TopBar from '@/components/Header/TopBar';
import TopBar from '../../components/Header/TopBar';
import React from 'react';

const page = () => {
  return (
    <div
      className="w-[100vw] h-[100vh]"
      style={{
        background: "url('/assets/HeroBackground.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <TopBar />
    </div>
  );
};

export default page;
