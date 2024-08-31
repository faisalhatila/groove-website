import React from 'react';

const MobileAppDownloadButton = ({ icon, title, storeName }) => {
  return (
    <div
      className={`flex items-center md:w-[180px] px-3 py-2 bg-white rounded`}
    >
      <div className="w-[30px] mr-2">
        <img className="max-w[100%]" src={icon} />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[13px] text-black leading-none">{title}</p>
        <p className="text-black">{storeName}</p>
      </div>
    </div>
  );
};

export default MobileAppDownloadButton;
