import React from 'react';
import initTranslations from '@/app/i18n';
import Link from 'next/link';
import { fetchData, fetchPostData } from '../../utils/api';


const Pannar =async ({params}) => {
  const i18nNamespaces = ["home"];

  const { locale } = params
  const { t } =  await initTranslations(locale, i18nNamespaces)

  const response = await fetchData(`api/settings`, locale)
  const setting = response?.data

  const phone=   setting?.phones?.map((item)=>(item))


  return (
    <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[350px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="sm:text-4xl text-xl  font-bold mb-4">{t("Get in Touch today to start your journey to a healthier smile.")}</h1>
        <p className=" text-sm lg:text-lg mb-8">
          {t("Our team is ready to assist with appointments, answer your questions, and guide you towards achieving your perfect smile.")}
        </p>
        <div className="flex space-x-4  justify-center">
          <Link href={'/contact-us'} className="bg-green-500 hover:bg-green-700 text-white  font-semibold lg:font-bold  text-sm lg:text-lg   sm:py-2 px-2 sm:px-6 rounded-full">
            {t("Contact Us")}
          </Link>
          <span className="text-white-300   lg:mt-2 text-xl">{t("or")}</span>
          <Link target='_blank' href={`https://wa.me/${phone}`} className="text-white font-semibold   px-1  sm:py-2 sm:px-6   text-sm lg:text-[16px] rounded-full border-2 border-inherit">
            {t("Book Your Appointment")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pannar;