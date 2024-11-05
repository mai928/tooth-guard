import React from "react";
import { fetchData } from "../../utils/api";
import initTranslations from "@/app/i18n";
import DOMPurify from "isomorphic-dompurify";
const ServicesSection = async ({ params }) => {
  const i18nNamespaces = ["home"];
  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const service = await fetchData(`api/about-us-models`, locale)
  const services = service?.data;
  return (
    <div className="sm:py-16">
      <div className="sm:px-32 px-10 mx-auto text-center">
        {/* Heading */}
        <h2 className="sm:text-3xl text-lg font-bold text-blue-800 mb-12">
          {t('Your Trusted Destination for')} <br /> {t('Top-Quality Dental Care')}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            services?.map((items, index) => (
              <div key={index} className="bg-white  p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {/* Image/Icon */}
                  <img
                    src={`${items.photo}`}
                    alt="Experts You Can Trust"
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-bold  text-green-600 mb-2">
                  {t(items.title)}
                </h3>

                <div className="text-gray-600" dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t(items.details), {
                      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                      ALLOWED_ATTR: ['href', 'target', 'style']
                    })
                  }} />
              </div>
            ))}

        </div>
      </div>
    </div>

  );
};

export default ServicesSection;
