import AfterBefore from "@/components/After&Before"
import Pannar from "@/components/Pannar"
import React from "react"
import { fetchData } from "../../../../utils/api"
import initTranslations from "@/app/i18n"
import DOMPurify from "isomorphic-dompurify"



export async function generateMetadata({ params }) {
  const { locale } = params

  return {
      title: locale === 'ar' ? 'معلومات عن | TOOTH GUARD' : locale === 'en' ? "Information about  | TOOTH GUARD" : '',
      description: locale === 'ar' ? 'معلومات عن | TOOTH GUARD' : locale === 'en' ? "Information about  | TOOTH GUARD" : '',
      other: {
          title: locale === 'ar' ? 'معلومات عن | TOOTH GUARD' : locale === 'en' ? "Information about  | TOOTH GUARD" : '',
      }

  }
}



const About = async ({ params }) => {
  const i18nNamespaces = ["home"];
  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const infodoctor = await fetchData(`api/about-us`, locale)
  const info = infodoctor?.data;

  const aboutsection = await fetchData(`api/about_us_page_section`, locale)
  const aboutarr = aboutsection?.data;


  const team = await fetchData(`api/our_team`, locale)
  const teaminfo = team?.data;
  return (
    <div>
      <div className="bg-gradient-to-r p-1 sm:mt-0  from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="sm:text-5xl text-xl  font-bold mb-4">{t("About Us")}</p>
          <p className="text-lg mb-8">

          </p>
        </div>
      </div>
      <div className="sm:p-10 mt-5 flex flex-col items-center justify-center h-64 text-center">
        <h2 className="sm:text-5xl  text-xl text-blue-700 font-bold mb-2">{t("About TOOTH GUARD")}</h2>
        <p className="sm:text-2xl text-xl text-green-500 font-bold mb-2">{t("Your Partners in Dental Health")}</p>
        <p className="w-3/4 text-gray-500">{t("At Tooth Guard Clinics, we believe in a personalized approach to dental care. Our team consists of renowned professionals who are leaders in their field, including teaching staff from Egypt most prestigious universities. We are committed to staying at the forefront of dental innovation to ensure you receive the best care possible.")}</p>
      </div>
      <div className="sm:p-10 flex flex-col items-center justify-center h-64 text-center">
        <h2 className="sm:text-5xl  text-xl text-blue-700 font-bold mb-2">{t("Our Team")}</h2>
        <p className="sm:text-2xl text-xl text-green-500 font-bold mb-2">{t(teaminfo?.title)}</p>
        <div className="w-3/4 text-gray-500" dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(t(teaminfo.details), {
            ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
            ALLOWED_ATTR: ['href', 'target', 'style']
          })
        }} />
      </div>
      <div className="bg-green-500 sm:py-16">
        <div className=" sm:px-32 px-10 sm:py-0 py-10 mx-auto">
          <div className="bg-white rounded-lg flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={`${info.photo}`}
                alt="Dr. Mohamed Hegab"
                className="object-cover w-full mb-10 h-full rounded-l-lg"

              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">{t(info.title)}</h2>

              <div className="text-gray-600" dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t(info.details), {
                  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                  ALLOWED_ATTR: ['href', 'target', 'style']
                })
              }} />

            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="bg-gradient-to-r from-blue-600 to-green-400 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white px-6">
          {
            aboutarr?.map((item )=>(
              <div key={item.id} className="flex flex-col items-center md:items-start text-center md:text-left ">
              <h3 className="text-2xl font-bold mb-2">{t(item?.title)}</h3>
              <div  dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t(item?.details), {
                  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'pre', 'br', 'ul', 'li', 'ol', 'span'],
                  ALLOWED_ATTR: ['href', 'target', 'style']
                })
              }} />
            </div>
            ))
          }

        
        </div>
      </div>

      <div className="py-20 bg-color_4 px-5 lg:px-28">
        <div className="text-center">
          <h3 className=" text-xl lg:text-4xl font-bold text-color_1">{t("Transformations That Speak Volumes")}</h3>
          <p className="text-color_1 lg:py-6 lg:w-[70%] m-auto">
            {t("See the incredible results achieved by our skilled team at Tooth Guard Clinics. Our before-and-after gallery showcases the transformative power of our dental treatments, from cosmetic enhancements to restorative solutions.")}            </p>
        </div>
        <AfterBefore />

      </div>
      <Pannar params={params} />
    </div>
  )
}

export default About