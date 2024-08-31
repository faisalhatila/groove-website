import React from 'react';

const Bottom = () => {
  const links = [
    'Terms & Conditions',
    'Privacy Policy',
    `${new Date().getFullYear()} The Grooves for Entertainment`,
  ];

  const acceptingCards = [
    '/assets/VISALogo.svg',
    '/assets/AMEXLogo.png',
    '/assets/MasterLogo.png',
  ];

  return (
    <div className="flex my-16 justify-between items-center flex-col md:flex-row text-center md:text-left">
      <div className="flex-[3] flex items-center">
        {links.map((item, index) => (
          <span key={index} className="flex items-center md:mr-16">
            {index === 2 && <span className="mr-1">&copy;</span>}
            <p>{item}</p>
          </span>
        ))}
      </div>
      <div className="flex-1 justify-end flex items-center">
        {acceptingCards.map((item, index) => (
          <div key={index} className="w-[60px] mr-3">
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
