import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const language = cookieStore.get('NEXT_LOCALE');
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  //   console.log({ item: window.localStorage.getItem('NEXT_LOCALE') });
  //   const locale = 'en';
  const locale = language?.value || 'en';
  console.log({ language });

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
