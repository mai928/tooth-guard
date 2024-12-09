import initTranslations from '@/app/i18n';
import React from 'react'
import { fetchData } from '../../../../../utils/api';
import DOMPurify from 'isomorphic-dompurify';

const ServicesDetails = async ({ params }) => {
    const { slug } = params

    const i18nNamespaces = ["home"];
    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces)
    
    const service = await fetchData(`api/single-service/${t(slug)}`, locale)
    const singleService = service?.data;

    return (
        <section>
        <div className="bg-gradient-to-r p-1 sm:mt-0 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold h1y-5">{singleService.title}</h1>
          </div>
        </div>

        
        <div className="px-5 lg:px-10 py-20">
        <div className="relative">
          <img
            className="float-end w-full lg:w-[50%] mx-5 mb-5"
            alt="Blog"
            src={singleService.photo}
          />
          <div
            className="text-slate-700 text-lg leading-8"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize((t(singleService.details)), {
                ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
                ALLOWED_ATTR: ['href', 'target', 'style'],
              }),
            }}
          />
        </div>
        </div>
      </section>
      
    )
}

export default ServicesDetails


// import React from 'react';
// import DOMPurify from 'isomorphic-dompurify';
// import { fetchData } from '../../../../../utils/api';

// // export async function getStaticProps({ params, locale }) {
// //   const { slug } = params;

// //   // Fetch the service data based on slug and locale
// //   const service = await fetchData(`api/single-service/${slug}`, locale);
// //   const singleService = service?.data;

// //   if (!singleService) {
// //     return {
// //       notFound: true, // Return 404 if no data is found
// //     };
// //   }

// //   return {
// //     props: {
// //       singleService,
// //     },
// //     revalidate: 10, // Incremental Static Regeneration (revalidate after 10 seconds)
// //   };
// // }

// const ServicesDetails = ({ singleService }) => {
//   if (!singleService) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <section>
//       <div className="bg-gradient-to-r p-1 sm:mt-0 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-semibold">{singleService.title}</h1>
//         </div>
//       </div>

//       <div className="px-5 lg:px-10 py-20">
//         <div className="relative">
//           <img
//             className="float-end w-full lg:w-[50%] mx-5 mb-5"
//             alt="Service Image"
//             src={singleService.photo}
//           />
//           <div
//             className="text-slate-700 text-lg leading-8"
//             dangerouslySetInnerHTML={{
//               __html: DOMPurify.sanitize(singleService.details, {
//                 ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
//                 ALLOWED_ATTR: ['href', 'target', 'style'],
//               }),
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesDetails;
