import React from "react";
import { fetchData } from '../../utils/api';
import initTranslations from "@/app/i18n";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import BlogSlider from "./BlogSlider";
const OurSerives = async ({ params }) => {

  const i18nNamespaces = ["home"];

  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const Dentalservice = await fetchData(`api/blogs`, locale)
  const service = Dentalservice?.data;



  return (
    <div className="sm:px-16 mx-auto p-4 bg-gray-100">
      <div className="sm:px-16 px-10 sm:py-4 py-10 mx-auto text-center">
        <h2 className="sm:text-4xl text-lg font-bold text-blue-800 mb-6">
          {t("Stay Informed with Our")}
          <br />
          {t("Dental Insights")}
        </h2>
        <p className="text-gray-500">{t("Visit the Tooth Guard Clinics blog for the latest tips, trends, and insights into dental health. Our articles cover everything you need to know to maintain a bright, healthy smile.")}</p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {service?.map((respons, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden mt-4 mb-4"
            >
              <img
                src={`${respons.photo}`}
                alt={respons.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  {t(respons.title)}
                </h3>

                <div className="text-gray-600" dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(t(respons.short_details), {
                    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                    ALLOWED_ATTR: ['href', 'target', 'style']
                  })
                }} />

                <div className="group mt-7 mb-4">
                  <Link
                    className="text-md border-[1px] p-2  text-blue-800 shadow-md "
                    href={`/blog/${respons.slug}`}
                  >
                    {t("Read More")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="">
          <BlogSlider />

        </div>
      </div>
    </div>
  );
};

export default OurSerives;
