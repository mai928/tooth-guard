import React from 'react'
import { iconsNavbar } from '../../data'
import Link from 'next/link'

const Social = () => {
  return (
    <div className='flex gap-5'>
                        {
                            iconsNavbar?.map((icon, index) => (
                                <div className='bg-color_4  flex items-center  rounded-full' key={index}>
                                    <Link href={
                                        icon.name === 'FaceBook' ? '/' || '/' :
                                            icon.name === 'Instagram' ? '/' :
                                                icon.name === 'Twitter' ? '/'|| '/' :
                                                    icon.name === 'Google' ? '/' :
                                                        icon.name === 'LinkedIn' ? '/' || '/' : '/'} className='hover:fill-primary_Color_Light cursor-pointer'>{icon.icon}</Link>
                                </div>
                            ))
                        }
                    </div>
  )
}

export default Social