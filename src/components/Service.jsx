import React from "react";



import { fetchData } from "../../utils/api";
import initTranslations from "@/app/i18n";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import SliderServices from "./SliderServices";
// import { Service } from "../../data";

const Services = async ({ params }) => {
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
        <div >
          <SliderServices />
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
