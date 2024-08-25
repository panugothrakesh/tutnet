import React from 'react'
import cloud from '../assets/cloud.svg'
import home from '../assets/home.svg'
import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='flex bg-[#F7F7F8] flex-col justify-between items-center pt-40 pb-20 lg:py-20 gap-4'>
        <Image src={cloud} alt='' className='pb-6'/>
        <div className='flex flex-col gap-6 justify-between items-center'>
        <h1 className='lg:text-6xl text-4xl font-semibold text-center'>Page not found</h1>
        <p className='md:w-2/3 lg:text-base text-sm text-center px-4 text-[#45484F]'>We&apos;re sorry, but the page you&apos;re looking for could not be found. It may have been moved, deleted, or never existed in the first place.</p>
        <div className='flex gap-4 pt-4'>
            <Link href="/"><button className='flex items-center justify-center text-white bg-[#522FD3] py-3 px-8 rounded-full gap-2'><Image src={home} alt=''/> Go back home</button></Link>
            <Link href="/contact-us"><button className='flex items-center justify-center bg-white border border-[#C9CDD2] py-3 px-8 rounded-full gap-2'>Contact Us</button></Link>
        </div>
        </div>
    </div>
  )
}

export default NotFound