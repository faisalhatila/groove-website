import Container from '@/components/HigherOrder/Container';
import React from 'react';
import PageNotFound from '@/components/NotFound/PageNotFound';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations();
  return (
    <div
      className={`px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[20px] md:py-[50px]`}
    >
      <div className="min-h-[60vh] md:min-h-[80vh] xl:min-h-[60vh] flex justify-center items-center">
        <div className="bg-white/40 backdrop-blur-md p-5 rounded-lg">
          <p className="text-center text-slate-800 text-[5rem] md:text-[10rem]">
            404
          </p>
          <p className="text-center text-slate-800 text-[20px] md:text-[30px]">
            {t('404')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
