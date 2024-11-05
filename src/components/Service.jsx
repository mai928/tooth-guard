import React from "react";
import { fetchData } from "../../utils/api";
import initTranslations from "@/app/i18n";
import DOMPurify from "isomorphic-dompurify";
// import { Service } from "../../data";

const Services =async ({params}) => {
  const i18nNamespaces = ["home"];
  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const service = await fetchData(`api/services`, locale)
  const services = service?.data;
  return (
    <div className="sm:py-16 ">
      <div className="sm:px-32 px-10 sm:py-0 py-10 mx-auto text-center">
       
        <h2 className="sm:text-4xl text-lg font-bold text-blue-800 mb-12">
          {t("Comprehensive Dental")}   <br /> {t("for Every Need")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {
            services?.map((items,index)=> (
                <div key={index} className="h-80 bg-gradient-to-b from-blue-700  to-green-500 text-white p-10 rounded-lg shadow-lg">
            <img 
              src="/assets/Tooth_Guard_Logo.png"
              alt="Dental Implants"
              className="mx-auto w-22 h-20 mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{t(items.title)}</h3>
        
            <div className="text-sm" dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t(items.details), {
                      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                      ALLOWED_ATTR: ['href', 'target', 'style']
                    })
                  }} />
          </div>
            ))
          }
        </div>
        <div className="mt-8">
          <a
            href="/services"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 mt-10 px-6 rounded-full shadow-md"
          >
            {t("Explore Our Services")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
