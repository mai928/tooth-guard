'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import DOMPurify from "isomorphic-dompurify";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../utils/api";
import Link from "next/link";

const BlogSlider = () => {
    const [blog, setData] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetchData(`api/blogs`, i18n.language);
            setData(response.data || []);
        };
        fetchBlogs();
    }, [i18n.language]);
    

    return (
        <Swiper
            breakpoints={
                 {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }  // Empty breakpoints when only one slide
            }
            slidesPerView={3}
            centeredSlides={true} // Center single slide
            className="overflow-hidden"
            modules={[Autoplay]}
            loop={blog.length > 1} // Disable looping for a single slide
            speed={4000}
            autoplay={blog.length > 1 ? { delay: 5000 } : false} // Disable autoplay for single slide
        >
            {blog.map((article, index) => (
                <SwiperSlide
                    key={index}
                    className={''} // For single slide, set width to 1/4 of container
                >
                    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4 mb-4">
                        <img
                            src={`${article.photo}`}
                            alt={article.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-blue-800 mb-2">
                                {t(article.title)}
                            </h3>

                            <div
                                className="text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(t(article.short_details), {
                                        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                                        ALLOWED_ATTR: ['href', 'target', 'style'],
                                    }),
                                }}
                            />

                            <div className="group mt-7 mb-4">
                                <Link
                                    className="text-md border-[1px] p-2 text-blue-800 shadow-md"
                                    href={`/blog/${(article.slug)}`}

                                    // href={i18n?.language === 'ar'? `/blog/${t(article.slug)}`}


                                >
                                    {t("Read More")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BlogSlider;
