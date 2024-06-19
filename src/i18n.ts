import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'pt'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
  locale = `${locale}.json`;
  return {
    messages: (await import(`../messages/${locale}`)).default
  };
});