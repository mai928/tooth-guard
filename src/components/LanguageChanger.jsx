'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = e => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select className='outline-none px-3  py-3   bg-transparent  hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent  ' onChange={handleChange} value={currentLocale}>
      <option className='bg-slate-400' value="en">en</option>
      <option className='bg-slate-400' value="ar">ar</option>
    </select>
  );
}

// 'use client';

// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import { fetchData } from '../../utils/api';
// import i18nConfig from '../../i18nConfig';

// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = async (e) => {
//     const newLocale = e.target.value;
  
//     // Set cookie for locale
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
  
//     // Extract segments from the current pathname
//     const segments = currentPathname.split('/').filter(Boolean);
  
//     // Determine the collection (e.g., 'blog', 'product', etc.) and the slug
//     const collection = segments[segments.length - 2]; // Second-to-last segment is the collection
//     const currentSlug = segments[segments.length - 1]; // Last segment is the slug
  


//     if (
//             currentLocale === i18nConfig.defaultLocale &&
//             !i18nConfig.prefixDefault
//           ) {
//             router.push('/' + newLocale + currentPathname);
//           } else {
//             router.push(
//               currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//             );
//           }

//     try {
//       // Re-fetch the data for the selected language
//       const fetchedData = await fetchData(`${collection}/${currentSlug}`, newLocale);
  
//       // Extract the translated slug (if present in the response)
//       const translatedSlug = fetchedData.slug || currentSlug;
  
//       // Build the new path
//       let newPath = '';
//       if (newLocale === 'ar') {
//         newPath = `/${collection}/${translatedSlug}`; // Arabic locale (default, no prefix)
//       } else {
//         newPath = `/${newLocale}/${collection}/${translatedSlug}`; // English locale with prefix
//       }
  
//       // Redirect to the new path
//       router.push(newPath);
//       router.refresh();
//     } catch (error) {
//       console.error('Error fetching data for new locale:', error);
//     }
//   };
  
  

//   return (
//     <select
//       className="outline-none px-3 py-3 bg-transparent hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent"
//       onChange={handleChange}
//       value={currentLocale}
//     >
//       <option className="bg-slate-400" value="en">en</option>
//       <option className="bg-slate-400" value="ar">ar</option>
//     </select>
//   );
// }

