'use client'
import React, { useEffect, useState } from 'react'
import DOMPurify from "isomorphic-dompurify";
import { fetchData } from '../../utils/api';
import { useTranslation } from 'react-i18next';



const Accordion = () => {
    const [isOpen, setOpen] = useState(false)
    const [ID, setID] = useState(null)

    const { t, i18n } = useTranslation()


    const handleClick = (id) => {
        setOpen(!isOpen)
        setID(id)
    }



    const [accordion, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {

            const result = await fetchData('api/services', i18n.language);
            setData(result.data);

        };

        fetchDataFromAPI();
    }, []);


    return (
        <section className='  '>

            <div className={`w-full  m-auto ${isOpen && 'min-h-[30rem]'}`}> {
                accordion?.map((item, index) => (
                    <div key={index} className=' py-4'>
                        <div onClick={() => handleClick(index)} className=' flex justify-center lg:justify-start items-center  gap-4 lg:gap-10'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5  lg:w-6 fill-color_2 font-bold' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

                            </div>
                            <p className='text-color_1 lg:text-[22px] '>{t(item.title)}</p>

                            <div className="  focus:outline-none   "
                            >
                                {
                                    isOpen && index === ID ?
                                        (
                                            <div className='py-3 px-1 lg:px-32 rounded-full  transition-transform transform rotate-180'>

                                                <svg width={16} className='fill-color_1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </div>

                                        )
                                        :
                                        (
                                            <div className='py-3  px-5 lg:px-32  rounded-full  transition-transform transform rotate-0'>
                                                <svg width={16} className='fill-color_1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                            </div>

                                        )
                                }

                            </div>
                        </div>


                        <div> {
                            isOpen && index === ID && <div className='transition-transform transform rotate-0'>
                                <div className='text-sm text-center lg:text-start lg:text-lg text-color_1 lg:py-4 m-auto overflow-hidden transition-all duration-[3500ms] scale-100 transform  ease-in-out   ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(item.details)) }} />
                            </div>
                        }
                        </div>
                    </div>

                ))
            }
            </div>



        </section>
    )
}

export default Accordion