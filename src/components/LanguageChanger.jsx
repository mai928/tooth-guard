// 'use client';

// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '../../i18nConfig';

// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = e => {
//     const newLocale = e.target.value;

//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//     // redirect to the new locale path
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       router.push('/' + newLocale + currentPathname);
//     } else {
//       router.push(
//         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//       );
//     }

//     router.refresh();
//   };

//   return (
//     <select className='outline-none px-3  py-3   bg-transparent  hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent  ' onChange={handleChange} value={currentLocale}>
//       <option className='bg-slate-400' value="en">en</option>
//       <option className='bg-slate-400' value="ar">ar</option>
//     </select>
//   );
// }


// 'use client';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '../../i18nConfig';
// import { fetchData } from '../../utils/api';

// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = async e => {
//     const newLocale = e.target.value;

//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;


//     const segments = currentPathname.split('/').filter(Boolean);

//     const currentSlug = segments[segments.length - 1];
//     const collection = segments[segments.length - 2]


//     try {
//       // Fetch the service with current slug 
//       const service = await fetchData(`api/single-service/${currentSlug}`, currentLocale);
//       const singleService = service?.data;

//       if (singleService) {
//         console.log("newLocale:::", newLocale)
//         const translatedSlug = singleService[`slug_${newLocale}`] || singleService.slug;

//         console.log('translatedSlug::', translatedSlug)

//         let newPath = "";
//         if (newLocale === "ar") {
//           newPath = `/${collection}/${translatedSlug}`;
//         } else {
//           newPath = `/${newLocale}/${collection}/${translatedSlug}`;
//         }
//         router.push(newPath);
//         router.refresh()

//       } else {

//         if (
//           currentLocale === i18nConfig.defaultLocale &&
//           !i18nConfig.prefixDefault
//         ) {
//           router.push('/' + newLocale + currentPathname);
//         } else {
//           router.push(
//             currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//           );
//         }
//         router.refresh();
//       }
//     }
//     catch (error) {
//       console.error('Error fetching data for new locale:', error);
//     }
//   };

//   return (
//     <select
//       className="outline-none px-3  py-3   bg-transparent  hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent  "
//       onChange={handleChange}
//       value={currentLocale}
//     >
//       <option className="bg-slate-400" value="en">
//         en
//       </option>
//       <option className="bg-slate-400" value="ar">
//         ar
//       </option>
//     </select>
//   );
// }

// 'use client';

// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '../../i18nConfig';
// import { fetchData } from '../../utils/api';

// // Define route types that have slugs
// const routeTypes = ['services', 'blogs'];


// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = async e => {
//       const newLocale = e.target.value;

//       // set cookie for next-i18n-router
//       const days = 30;
//       const date = new Date();
//       date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//       const expires = date.toUTCString();
//       document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;


//     const segments = currentPathname.split('/').filter(Boolean);

//     // Determine if the route is a detail route based on routeTypes
//     const isDetailRoute =
//       segments.length >= 2 && routeTypes.includes(segments[segments.length - 2]);

//       if (isDetailRoute) {
//       const currentSlug = segments[segments.length - 1];
//       const collection = segments[segments.length - 2];


//       try{
//       // Fetch data
//       const service = await fetchData(`api/single-${collection.slice(0,-1)}/${currentSlug}`, currentLocale);
//       const singleService = service?.data;

//       if(singleService){
//           const translatedSlug = singleService[`slug_${newLocale}`] || singleService.slug;

//           let newPath = "";
//           if (newLocale === "ar") {
//           newPath = `/${collection}/${translatedSlug}`;
//           } else {
//           newPath = `/${newLocale}/${collection}/${translatedSlug}`;
//           }
//           router.push(newPath);
//           router.refresh();

//       } else {
//             if (
//                 currentLocale === i18nConfig.defaultLocale &&
//                 !i18nConfig.prefixDefault
//             ) {
//                 router.push('/' + newLocale + currentPathname);
//             } else {
//                 router.push(
//                 currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//                 );
//             }
//             router.refresh();
//             }
//         }
//         catch (error) {
//           console.error('Error fetching data for new locale:', error);
//           if (
//             currentLocale === i18nConfig.defaultLocale &&
//             !i18nConfig.prefixDefault
//           ) {
//             router.push('/' + newLocale + currentPathname);
//           } else {
//             router.push(
//               currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//             );
//           }
//           router.refresh();
//       }
//      }else {
//         // Handle non detail routes
//          if (
//             currentLocale === i18nConfig.defaultLocale &&
//             !i18nConfig.prefixDefault
//          ) {
//            router.push('/' + newLocale + currentPathname);
//          } else {
//            router.push(
//              currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//            );
//          }
//          router.refresh();
//        }
//   };

//   return (
//     <select
//       className="outline-none px-3  py-3   bg-transparent  hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent  "
//       onChange={handleChange}
//       value={currentLocale}
//     >
//       <option className="bg-slate-400" value="en">
//         en
//       </option>
//       <option className="bg-slate-400" value="ar">
//         ar
//       </option>
//     </select>
//   );
// }


'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import { fetchData } from '../../utils/api';

// Define route types that have slugs
const routeTypes = ['services', 'blogs'];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

    const handleChange = async e => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        const segments = currentPathname.split('/').filter(Boolean);

        // Determine if the route is a detail route based on routeTypes
        const isDetailRoute =
            segments.length >= 2 && routeTypes.includes(segments[segments.length - 2]);

        if (isDetailRoute) {
            const currentSlug = segments[segments.length - 1];
            const collection = segments[segments.length - 2];

            try {
                // Fetch data
                const service = await fetchData(`api/single-${collection.slice(0, -1)}/${currentSlug}`, currentLocale);
                  const singleService = service?.data;

                if (singleService) {
                  const translatedSlug = singleService[`slug_${newLocale}`] || singleService.slug;


                let newPath = "";
                if (newLocale === "ar") {
                    newPath = `/${collection}/${translatedSlug}`;
                  } else {
                    newPath = `/${newLocale}/${collection}/${translatedSlug}`;
                  }
                  router.push(newPath);
                  router.refresh();

                } else {
                      console.error(`No data found for slug: ${currentSlug} in ${currentLocale}`);

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
                  }
            } catch (error) {
                 console.error(`Error fetching data for new locale: ${newLocale} `, error);
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

            }
            } else {
                // Handle non detail routes
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
          }
    };

  return (
    <select
      className="outline-none px-3  py-3   bg-transparent  hover:bg-primary_Color_dark cursor-pointer text-color_1 border-[1px] border-solid border-transparent  "
      onChange={handleChange}
      value={currentLocale}
    >
      <option className="bg-slate-400" value="en">
        en
      </option>
      <option className="bg-slate-400" value="ar">
        ar
      </option>
    </select>
  );
}
