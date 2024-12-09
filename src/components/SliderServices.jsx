'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'
import "swiper/css/pagination";
import 'swiper/css/autoplay'
import "swiper/css/effect-fade";
import DOMPurify from "isomorphic-dompurify";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../utils/api";
import Link from "next/link";


// export async function getStaticPaths({ locales }) {
//     const paths = [];
  
//     // Fetch all services in both languages
//     const servicesEn = await fetchData('api/services', 'en'); // Get data for English
//     const servicesAr = await fetchData('api/services', 'ar'); // Get data for Arabic
  
//     // Assuming the services API returns slugs for both languages
//     const allSlugsEn = servicesEn?.data.map(service => service.slug);
//     const allSlugsAr = servicesAr?.data.map(service => service.slug);
  
//     // Create paths for each language
//     allSlugsEn.forEach(slug => {
//       locales.forEach(locale => {
//         const translatedSlug = locale === 'ar' ? getTranslatedSlug(slug, 'ar') : slug;
//         paths.push({ params: { slug: translatedSlug }, locale });
//       });
//     });
  
//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   }
  
//   // Helper function to get translated slug for Arabic
//   function getTranslatedSlug(slug, locale) {
//     if (locale === 'ar') {
//       // Here, you should fetch the Arabic version of the slug from your API or CMS
//       // Assuming the API returns the translated slug for Arabic
//       return `translated-${slug}`; // Replace with real translation logic
//     }
//     return slug; // Return the original slug for English
//   }
  

const SliderServices = () => {
    const [services, setData] = useState([])
    const { t, i18n } = useTranslation()
    useEffect(() => {
        const AboutFetch = async () => {
            const service = await fetchData(`api/services`, i18n.language)
            setData(service.data)
        }
        AboutFetch()
    }, [i18n.language])

    return (
        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            className='overflow-hidden'
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            autoplay={{ delay: 5000 }}
        > {
                services?.map((items, index) => (
                    <SwiperSlide key={index}>
                        <div
                            key={index} className="h-80 w-full bg-gradient-to-b from-blue-700  to-green-500 text-white p-10 rounded-lg shadow-lg">
                            <img
                                src="/assets/Tooth_Guard_Logo.png"
                                alt="Dental Implants"
                                className="mx-auto w-22 h-20 mb-4"
                            />
                            <h3 className="text-2xl font-bold mb-2">{t(items.title)}</h3>

                            <div className="text-sm" dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(t(items.short_details), {
                                    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                                    ALLOWED_ATTR: ['href', 'target', 'style']
                                })
                            }} />
                            <div className="my-10">
                                {/* <Link className="text-md border-[1px] p-2 border-gray-200 border-opacity-30 rounded-sm shadow-lg  transform transition duration-500 ease-in-out hover:scale-125" href={`/services/${items.slug}`}>{t("Read More")}</Link> */}


                                <div className="group">
                                    <Link
                                        className="text-md border-[1px] p-2 border-gray-200 border-opacity-30 rounded-sm shadow-lg transform transition duration-500 ease-in-out group-hover:scale-125"
                                        href={`/services/${t(items.slug)}`}
                                    >
                                        {t("Read More")}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                ))
            }
        </Swiper>)
}

export default SliderServices