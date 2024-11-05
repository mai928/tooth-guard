'use client'
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchData } from '../../utils/api';
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
const Header = () => {
  const [data, setData] = useState([])
  const { t, i18n } = useTranslation()
  useEffect(() => {
    const AboutFetch = async () => {
      const aboutData = await fetchData(`api/sliders`, i18n.language)
      setData(aboutData.data)
      console.log(data)
    }
    AboutFetch()
  }, [])
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        {
          data.map((data, index) => {
            return (
              <div key={index} className="mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-10 md:px-16">
                <div className="md:w-1/2">
                  <img
                    src="/assets/Tooth_Guard_Logo_wide_black-removebg-preview.png"
                    alt="Tooth Guard Clinic"
                    className=" w-80 mb-10"
                  />
                  <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    {t(data.title)}
                  </h1>


                  <div className="text-lg md:text-xl mb-8" dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t(data.details), {
                      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                      ALLOWED_ATTR: ['href', 'target', 'style']
                    })
                  }} />


                  <div className="flex space-x-4">
                    <Link
                      href="/about"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold  text-sm  sm:text-lg sm:py-2 sm:px-24 py-2 px-3 rounded-full transition duration-300 "
                    >
                      {t("About Us")}
                    </Link>
                    <a
                      href="#appointment"
                      className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-500 text-white font-semibold  text-sm  sm:text-lg sm:py-2 sm:px-6 py-2 px-3 rounded-full transition duration-300"
                    >
                      {t("Book Your Appointment")}
                    </a>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                  <img
                    src={`${data.photo}`}
                    alt="Tooth Guard Clinic"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Header;