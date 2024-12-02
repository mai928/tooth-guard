
import {  navbarLink } from '../../data';
import Link from 'next/link';
import React from 'react';
import Social from './Social';
import initTranslations from '@/app/i18n';
import { fetchData, fetchPostData } from '../../utils/api';


const Footer = async ({ params }) => {
    const i18nNamespaces = ["home"];

    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces)
    const response = await fetchData(`api/settings`, locale)
    const setting = response?.data


    const socialDData = await fetchPostData(`api/social-media`, locale)
    const social = socialDData?.data

    return (
        <section className='  lg:px-40 lg:py-10 z-0'>
            <div className='  block lg:flex  pt-10  gap-16  text-center lg:text-start'>

                <div className='lg:w-[30%] text-center'>
                    <h3 className='text-color_2  text-xl mb-5 font-semibold uppercase'>{t("Contact Us")}</h3>
                    {
                        setting?.emails?.map((item ,index) => (
                            <p key={index} className='text-color_1 font-semibold my-4'>{item}</p>

                        ))
                    }

                    {

                        setting?.phones?.map((item ,index) => (
                            <p key={index} className='text-color_1 font-semibold my-4'>{item}</p>

                        ))

                    }

                    {

                        setting?.addresses?.map((item ,index) => (
                            <p key={index} className='text-color_1 font-semibold my-4'>{item}</p>

                        ))

                    }

                   
                </div>

                <div className='lg:w-[30%] text-center'>
                    <h3 className='uppercase  text-color_2 text-xl font-semibold'>{t("Useful links")}</h3>
                    <div className='mb-10'>{
                        navbarLink.map((item, index) => (
                            <div className='my-4' key={index}>
                                <Link className='text-color_1  hover:font-semibold text-sm' href={item.path}>{t(item.name)}</Link>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className='lg:w-[20%] text-center'>
                    <h3 className='text-color_2  text-xl font-semibold pb-14 uppercase'>{t("Follow Links")}</h3>
                    <div className='flex  justify-center items-center mb-10 lg:mb-0'>
                    <Social social={social} settings={setting}/>

                    </div>
                </div>



                <div className='lg:w-[20%]'>
                    <div className=''>
                        <img alt='logo' className='w-48 lg:w-52 m-auto lg:m-0' src={'/assets/ToothGuard+logo+long.png'} />
                    </div>
                </div>

            </div>
            <div>
                <div className='border-t-[1px] border-color_1 opacity-40 w-full' />
                <p className='flex justify-center items-center mt-5 text-[9px] lg:text-sm text-color_1'>{t(setting?.footer)}</p>

            </div>

        </section>
    );
}

export default Footer;