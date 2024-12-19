import initTranslations from '@/app/i18n';
import React from 'react';
import { fetchData } from '../../../../../utils/api';
import DOMPurify from 'isomorphic-dompurify';

const BlogDetails = async ({ params }) => {
  const i18nNamespaces = ["home"];
  const { slug } = params;
  const { locale } = params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const BlogData = await fetchData(`api/single-blog/${(slug)}`, locale);

  const BlogDetails = BlogData?.data;


  return (
    <section>
      <div className="bg-gradient-to-r p-1 sm:mt-0  from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold py-5">{t(BlogDetails.title)}</h1>
        </div>
      </div>

      <div className="px-5 lg:px-10 py-20">
        <div
          className="text-slate-700 text-lg leading-8"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize((t(BlogDetails.details))),
          }}
        />
      </div>
    </section>
  );
};

export default BlogDetails;
