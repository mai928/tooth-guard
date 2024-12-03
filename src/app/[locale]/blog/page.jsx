import React from "react";
import Pannar from "@/components/Pannar";
import OurSerives from "@/components/OurSerives";
import initTranslations from "@/app/i18n";
import { fetchData } from "../../../../utils/api";


export async function generateMetadata({ params }) {
  const { locale } = params

  return {
      title: locale === 'ar' ? 'مقالات عن | TOOTH GUARD' : locale === 'en' ? "Blogs about  | TOOTH GUARD" : '',
      description: locale === 'ar' ? 'مقالات عن | TOOTH GUARD' : locale === 'en' ? "Blogs about  | TOOTH GUARD" : '',
      other: {
          title: locale === 'ar' ? 'مقالات عن | TOOTH GUARD' : locale === 'en' ? "Blogs about  | TOOTH GUARD" : '',
      }

  }
}


const blog =async ({params}) => {
  const i18nNamespaces = ["home"];

  const { locale } = params
  console.log(locale)
  const { t } =  await initTranslations(locale, i18nNamespaces)
  const Dentalservice = await fetchData(`api/blogs`, locale)
  const service = Dentalservice?.data;
    return (
        <div>
            <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="sm:text-4xl text-xl  font-bold mb-4">{t("Blog & Insights")}
        </p>
        <p className="text-lg mb-8">    
        </p>
      </div>
    </div>
        <OurSerives service={service} params={params}/>
        <Pannar params={params} />
        </div>
    );
}
export default blog;