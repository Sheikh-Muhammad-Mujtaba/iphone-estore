'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { Input } from '../ui/input';
import { SearchInput } from './SearchInput';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex flex-row justify-between items-center px-[25px] md:px-[11.11vw] py-[16px] gap-[30px] xl:gap-[56.53px] w-full h-[88px] border-b-[1px] border-[#B5B5B5]'>
            <Image src={"/images/Logo.png"} alt='Logo' width={200} height={200} 
            className='flex-col items-center p-0  md:mx-[auto] my-[0] w-[65.4px] h-[22.87px] bg-[#FFFFFF]' />
            <SearchInput />
            <ul className="hidden md:flex flex-row items-start p-0 gap-[30px] lg:gap-[52px] mx-[auto] my-[0] w-[369px] h-[19px] font-['Inter'] not-italic font-medium text-[#000000] text-[16px] leading-[19px] cursor-pointer">
                <li className="h-[19px] opacity-30 hover:opacity-100 transition-opacity">
                    Home
                </li>
                <li className="h-[19px] opacity-30 hover:opacity-100 transition-opacity">
                    About
                </li>
                <li className="h-[19px] opacity-30 hover:opacity-100 transition-opacity">
                    Contact Us
                </li>
                <li className="h-[19px] opacity-30 hover:opacity-100 transition-opacity">
                    Blogs
                </li>
            </ul>


            {/* Hamburger Menu */}
            <button
                className="md:hidden flex items-center justify-center w-[40px] h-[40px] rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Navigation Links */}
            <ul
                className={`${isMenuOpen ? "flex" : "hidden"
                    } flex-col items-center p-4 gap-4 mx-[auto] my-[0] h-auto font-['Inter'] not-italic font-medium text-[#000000] text-[16px] leading-[19px] cursor-pointer absolute top-[80px] left-0 bg-white z-50 w-full shadow-md `}
            >
                <li className="opacity-30 hover:opacity-100">Home</li>
                <li className="opacity-30 hover:opacity-100">About</li>
                <li className="opacity-30 hover:opacity-100">Contact Us</li>
                <li className="opacity-30 hover:opacity-100">Blogs</li>
            </ul>


            {/* Icons */}
            <div className='hidden md:flex flex-row justify-center items-center p-0 gap-[24px] mx-[auto] my-[0] w-[144px] h-[32px] order-3 flex-grow-0'>
                {/* heart svg */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* shopping svg */}

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" fill="white" />
                    <path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* profile svg */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

        </div>
    )
}


