import React from "react";
import Pannar from "@/components/Pannar";
import OurSerives from "@/components/OurSerives";
import initTranslations from "@/app/i18n";
import { fetchData } from "../../../../utils/api";
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
        <h1 className="sm:text-4xl text-xl  font-bold mb-4">Blog & Insights
        </h1>
        <p className="text-lg mb-8">
          
        </p>
      </div>
    </div>
        <OurSerives service={service}/>
        <Pannar />
        </div>
    );
}
export default blog;