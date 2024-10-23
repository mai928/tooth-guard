import Accordion from '@/components/Accordion'
import AfterBefore from '@/components/After&Before'
import Pannar from '@/components/Pannar'
import React from 'react'

const Services = () => {
    return (
        <section className=''>
            <div className='text-center pt-20'>
                <h3 className=' text-xl lg:text-5xl font-semibold text-color_1'>
                    TOOTH <span className='text-color_2'>GUARD</span> Services

                </h3>

                <h4 className='text-color_2 font-semibold text-2xl my-4'>Your Partners in Dental Health</h4>
                <p className='text-color_1 font-extralight py-4'>At <span className='font-semibold'>Tooth</span>  <span className='text-color_2 font-semibold'>Guard</span> <span className='font-semibold'>Clinics</span>, we offer a wide array of services to cater to all your dental needs:
                </p>
            </div>

            <div className=' block lg:flex gap-5 '>
                <div className="relative z-0  mt-20 mx-auto lg:w-[20%]">
                    <div className="absolute  lg:top-7 lg:left-0 lg:w-72 lg:h-72 bg-color_1 z-10 rounded-full" />
                    <img className="w-72 z-50 relative" src="/assets/photoDr.png" />
                </div>

                <div className=' w-full  lg:w-[50%] py-14'>
                    <Accordion/>
                </div>
            </div>

            <div className='py-20 bg-color_4 px-5 lg:px-28'>
                <div className='text-center'>
                    <h3 className=' text-xl lg:text-4xl font-bold text-color_1'>Transformations That Speak Volumes</h3>
                    <p className='text-color_1 lg:py-6 lg:w-[70%] m-auto'>
                    See the incredible results achieved by our skilled team at Tooth Guard Clinics. Our before-and-after gallery showcases the transformative power of our dental treatments, from cosmetic enhancements to restorative solutions.</p>
                </div>
                        <AfterBefore/>
    
            </div>

            <Pannar/>

        </section>
    )
}

export default Services