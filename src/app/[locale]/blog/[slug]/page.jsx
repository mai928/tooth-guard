import initTranslations from '@/app/i18n';
import React from 'react'
import { fetchData } from '../../../../../utils/api';
import DOMPurify from 'isomorphic-dompurify';

const BlogDetails = async ({ params }) => {

  const i18nNamespaces = ["home"];
  const slug = params.slug
  // console.log('params:::', params)
  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const BlogtData = await fetchData(`api/single-blog/${slug}`, locale)
  const BlogDetails = BlogtData?.data;
  return (
    <section>

      <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="sm:text-4xl text-xl  font-bold mb-4">{t("Blog & Insights")}
          </h1>
          <p className="text-lg mb-8">

          </p>
        </div>
      </div>



      <div className=' px-5  lg:px-10 py-20 block lg:flex justify-between gap-20 '>
        <div className=' w-full lg:w-[50%]  text-center lg:text-start'>
          <img className='' alt='img' src={BlogDetails.photo} />
        </div>

        <div className='w-full h-[80%] lg:w-[50%] '>
          <h1 className='text-4xl font-semibold py-5'>{t(BlogDetails.title)}</h1>
          {/* <div className=" text-slate-700 text-lg leading-8 " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((t(singleProduct.details))) }} /> */}

          <div className="text-slate-700 text-lg leading-8 " dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize((t(BlogDetails.details)), {
              ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
              ALLOWED_ATTR: ['href', 'target', 'style']
            })
          }} />

        </div>

      </div>
    </section>)
}

export default BlogDetails