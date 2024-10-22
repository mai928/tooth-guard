"use client"
import React, { useEffect, useState } from 'react'
const Form = () => {
    return (
        <section className='py-10 px-10 rounded-3xl bg-white '>
             <div>
                <h3 className='text-3xl '>Send Us Message </h3>
                <p className='text-sm py-2 text-slate-500'>if you have Question , Fill this form </p>
             </div>
         
            <form>
                <input type='text' id='name' name='name' placeholder='Name' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <input type='email' id='email' name='email'  placeholder='Email' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <input type='number' id='phone' name='phone'  placeholder='Phone' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <textarea placeholder='Message' name='message' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <div className='flex justify-end'>
                    <button type='submit' className='border-slate-200 hover:bg-blue_Color bg-blue-500 text-white rounded-sm border-[1px] px-7 py-2'>
                        Send
                    </button>
                </div>
            
            </form>
        </section>
    )
}

export default Form;