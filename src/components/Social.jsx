import React from 'react'
import { iconsNavbar } from '../../data'
import Link from 'next/link'

const Social = ({ social ,settings }) => {
 
 const phone=   settings?.phones?.map((item)=>(item))
        
        return (
        <div className='flex gap-5'>
            {
                iconsNavbar?.map((icon, index) => (
                    <div className='bg-color_4  flex items-center  rounded-full' key={index}>
                        <Link target='_blank' href={
                            icon.name === 'FaceBook' ? social?.facebook || '/' :
                                icon.name === 'Instagram' ? '/' :
                                    icon.name === 'Twitter' ? social?.twitter || '/' :
                                        icon.name === 'Google' ? '/' :
                                        icon.name === 'Phone'? `tel:${phone}`:
                                            icon.name === 'LinkedIn' ? social?.linkedin || '/' : '/'}

                            className='hover:fill-primary_Color_Light cursor-pointer'>{icon.icon}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Social