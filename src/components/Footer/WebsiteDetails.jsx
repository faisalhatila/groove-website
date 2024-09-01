import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const WebsiteDetails = () => {
  const activeLanguage = useLocale();
  const t = useTranslations();
  const webDetails = [
    {
      title: 'footer.websiteDetails.address.title',
      data: [
        'footer.websiteDetails.address.valueLine1',
        'footer.websiteDetails.address.valueLine2',
        'footer.websiteDetails.address.valueLine3',
      ],
    },
    {
      title: 'footer.websiteDetails.workingHours.title',
      data: [
        'footer.websiteDetails.workingHours.time1',
        'footer.websiteDetails.workingHours.time2',
      ],
      data2: [
        'footer.websiteDetails.offHours.title',
        'footer.websiteDetails.offHours.time1',
        'footer.websiteDetails.offHours.time2',
      ],
    },
    {
      title: 'footer.websiteDetails.contact.title',
      data: [
        'footer.websiteDetails.contact.email',
        'footer.websiteDetails.contact.number',
        'footer.websiteDetails.contact.phoneNumber',
      ],
    },
  ];
  return (
    <div
      className={`my-10 flex flex-col md:flex-row ${
        activeLanguage === 'en' ? 'justify-start' : 'justify-end'
      }`}
    >
      {webDetails.map((item) => (
        <div className=" md:w-[30%]">
          <p
            className={`text-white ${
              activeLanguage === 'en' ? 'text-left' : 'text-right'
            } mb-3 tracking-widest`}
          >
            {t(item.title)}
          </p>
          <div className="mb-4">
            {item?.data?.map((detail) => (
              <p
                className={`text-white ${
                  activeLanguage === 'en' ? 'text-left' : 'text-right'
                }`}
              >
                {t(detail)}
              </p>
            ))}
          </div>
          <div>
            {item?.data2 &&
              item?.data2?.map((detail) => (
                <p
                  className={`text-white ${
                    activeLanguage === 'en' ? 'text-left' : 'text-right'
                  }`}
                >
                  {t(detail)}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteDetails;
