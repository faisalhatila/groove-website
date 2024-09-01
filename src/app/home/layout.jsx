import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import TopBar from '@/components/Header/Topbar';
import Container from '@/components/HigherOrder/Container';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      // className="w-[100vw] h-[100vh]"
      className="h-[100vh]"
      style={{
        background: "url('/assets/HeroBackground.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container
        Component={<TopBar />}
        restClasses="flex bg-[rgba(0,0,0,0.6)]"
      />
      <Container
        Component={<Navbar />}
        pymd="20px"
        restClasses="border-t-white border-b-white border-t-[1px] border-b-[1px] bg-[rgba(0,0,0,0.6)] hidden md:block"
      />
      {children}
      <Container
        Component={<Footer />}
        // restClasses="border-t-[2px] border-t-[#ccc] mt-5 bg-gradient-to-r from-[#283606] to-[#0F1500] absolute bottom-0 w-[100%]"
        restClasses="border-t-[2px] border-t-[#ccc] bg-gradient-to-r from-[#283606] to-[#0F1500]"
      />
    </div>
  );
};

export default Layout;
