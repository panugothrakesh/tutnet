'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../assets/logotypo.svg"
import { usePathname } from 'next/navigation'
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function Navbar() {
    const Links = [
        { name: "Find Tutors", url: "/find-tutors" },
        { name: "Apply as Tutor", url: "/apply-as-tutors" },
        { name: "Courses", url: "/courses" }
    ];
    const pathname = usePathname();
    const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <div className='lg:flex hidden bg-white justify-between items-center mx-14 px-6 py-2 rounded-b-2xl border-b-2 border-x-2 border-[#F5F2FF]'>
                <div className='flex items-center gap-8 py-1'>
                    <Link href='/'>
                        <Image className='cursor-pointer' src={logo} alt='logo' />
                    </Link>
                    <div>
                        <ul className='flex items-center'>
                            {Links.map((link, index) => {
                                const isActive = pathname === link.url;
                                return (
                                    <li key={index} className={`py-3 flex items-center gap-2 px-8 text-sm rounded-full cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#522FD3] text-white' : 'hover:bg-[#F5F2FF]'}`}>
                                        <Link href={link.url}>
                                    {link.name}
                                </Link>
                                {index === 2 && <p className='text-xs translate-x-1 text-[#522FD3] bg-[#ece6ff] px-3 py-1 rounded-full'>coming soon!</p>}
                            </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <ul className='flex items-center text-sm gap-2 py-1'>
                    <li className={`py-3 px-8 rounded-full cursor-pointer transition-all duration-200 ${pathname === "/login" ? 'bg-[#522FD3] text-white' : 'hover:bg-[#F5F2FF]'}`}>
                        <Link href="/login">Login</Link>
                    </li>
                    <li className={`bg-white border border-[#C9CDD2] py-3 px-8 rounded-full cursor-pointer transition-all duration-200 ${pathname === "/signup" ? 'bg-[#522FD3] text-white' : 'hover:bg-[#522FD3] hover:text-white'}`}>
                        <Link href="/signup">Sign up</Link>
                    </li>
                </ul>
            </div>

            <div className={`lg:hidden gap-8 absolute w-full flex flex-col bg-white justify-between items-center px-4 py-5 rounded-b-3xl border-b-2 border-x-2 border-[#F5F2FF] transition-all duration-300 ${isMenu ? "" : "-translate-y-[20rem]"}`}>
                <ul className='flex items-center w-full flex-col pt-2'>
                    {Links.map((link, i) => {
                        const isActive = pathname === link.url;
                        return (
                            <li key={i} className={`py-3 flex items-center gap-2 px-8 rounded-full cursor-pointer transition-all duration-200 ${isActive ? 'bg-[#522FD3] text-white' : 'hover:bg-[#F5F2FF]'}`}>
                                <Link href={link.url}>
                                    {link.name}
                                </Link>
                                {i === 2 && <p className='text-xs translate-x-1 text-[#522FD3] bg-[#ece6ff] px-3 py-1 rounded-full'>coming soon!</p>}
                            </li>
                        );
                    })}
                <span className='border w-full opacity-40 my-4'/>
                <ul className='flex flex-col items-center text-sm gap-2 py-1'>
                    <li className={`py-3 px-8 rounded-full cursor-pointer transition-all duration-200 ${pathname === "/login" ? 'bg-[#522FD3] text-white' : 'hover:bg-[#F5F2FF]'}`}>
                        <Link href="/login">Login</Link>
                    </li>
                    <li className={`bg-white border border-[#C9CDD2] py-3 px-8 rounded-full cursor-pointer transition-all duration-200 ${pathname === "/signup" ? 'bg-[#522FD3] text-white' : 'hover:bg-[#522FD3] hover:text-white'}`}>
                        <Link href="/signup">Sign up</Link>
                    </li>
                </ul>
                </ul>
                <div className='w-full flex items-center justify-between'>
                    <Link href='/'>
                        <Image className='cursor-pointer w-28' src={logo} alt='logo' />
                    </Link>
                    <div className='flex justify-center items-center gap-8'>
                        {isMenu ? <IoCloseOutline className='text-4xl' onClick={() => setIsMenu(!isMenu)} /> : <IoMenuOutline className='text-4xl' onClick={() => setIsMenu(!isMenu)} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;