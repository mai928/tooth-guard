'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { iconsNavbar, navbarLink } from '../../data';
import Social from './Social';
import LanguageChanger from './LanguageChanger';
import { useTranslation } from 'react-i18next';
import { fetchData, fetchPostData } from '../../utils/api';
// import { useTranslation } from 'react-i18next'
// import { fetchData } from '../../utils/api'

const SecondNav = ({ showmenuIcon }) => {
    const {t ,i18n}= useTranslation()
  const [isFixed, setIsFixed] = useState(false);

  const handleFixed = () => {

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }


  useEffect(() => {

    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    handleFixed()

  }, [])


  const [settings, setData] = useState('')
  const [social, setSocial] = useState('')
  useEffect(() => {
      const settingFetch = async () => {
          const data = await fetchData(`api/settings`, i18n.language)
          setData(data?.data)

      }

      const SocialFetch = async () => {
        const data = await fetchPostData(`api/social-media`, i18n.language)
        setSocial(data?.data)

    }

    SocialFetch()

      settingFetch()
  }, [])
  return (
    <>
      {
        showmenuIcon === false && (<section
          className={`w-full z-50  py-1 bg-gray-200  ${isFixed ? 'fixed top-0' : ''
            }`}>
          <div className='flex  items-center w-full justify-between px-28 '>
            <div>
              <img alt='logo' className={`${isFixed ? 'w-52' : 'w-60'}`} src={settings?.logo} />
            </div>

            <div className='flex justify-center items-center gap-5 '>
              {
                navbarLink.map((link, index) => (
                  <div className='' key={index}>
                    <Link href={link.path} className='text-color_1 mx-2 text-[16px]  hover:font-semibold'>{t(link.name)}</Link>
                  </div>
                ))
              }

            </div>

           <Social social={social} settings={settings}/>
           <LanguageChanger/>
          </div>

        </section>)
      }


    </>

  )
}

export default SecondNav