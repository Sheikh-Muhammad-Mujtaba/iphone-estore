import React from 'react'
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center md:items-start px-[10px] sm:px-[11.111vw] py-[104px] gap-[24px] w-full min-h-[504px] bg-[#000000]">
            <div className="flex flex-row flex-wrap md:justify-between items-center md:items-start content-start p-0 gap-[113px] md:gap-[55px] sm:w-[77.778vw] min-h-[256px]">
                {/* logo */}
                <div className="flex flex-col items-center md:items-start p-0 gap-[24px] w-full md:max-w-[384px] h-[94.87px]">
                    <Image src={"/images/Logo.png"} alt='Logo' width={200} height={200}
                        className='flex flex-row items-center p-0 w-[65.4px] h-[22.87px] invert' />
                    <p className="max-w-[384px] h-[48px] font-medium text-[14px] leading-[170.5%] text-center md:text-start text-[#CFCFCF]">
                        We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-row flex-wrap md:justify-between items-center md:items-start p-0 gap-[32px] max-w-[623px] min-h-[256px]">
                    {/* Services */}
                    <div className="flex flex-col items-center md:items-start p-0 gap-[8px] mx-[auto] my-[0] w-[295.5px] h-[256px] ">
                        <h1 className="w-[68px] h-[16px] font-semibold text-[16px] leading-[16px] text-[#FFFFFF]">
                            Services
                        </h1>
                        <ul className="w-[295.5px] h-[32px] text-center md:text-start font-normal text-[14px] leading-[32px] text-[#CFCFCF]">
                            <li>
                                Bonus program
                            </li>
                            <li>
                                Gift cards
                            </li>
                            <li>
                                Credit and payment
                            </li>
                            <li>
                                Service contracts
                            </li>
                            <li>
                                Non-cash account
                            </li>
                            <li>
                                Payment
                            </li>
                        </ul>
                    </div>


                    {/* Assistance to the buyer */}
                    <div className="flex flex-col items-center md:items-start p-0 gap-[8px] mx-[auto] my-[0] w-[295.5px] h-[256px] ">
                        <h1 className="w-[184px] h-[16px] font-semibold text-[16px] leading-[16px] text-[#FFFFFF]">
                            Assistance to the buyer
                        </h1>
                        <ul className="w-[295.5px] h-[32px] text-center md:text-start font-normal text-[14px] leading-[32px] text-[#CFCFCF]">
                            <li>
                                Find an order
                            </li>
                            <li>
                                Terms of delivery
                            </li>
                            <li>
                                Exchange and return of goods
                            </li>
                            <li>
                                Guarantee
                            </li>
                            <li>
                                Frequently asked questions
                            </li>
                            <li>
                                Terms of use of the site
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* social Icons */}
            <div className="flex flex-row justify-between items-start p-0 gap-[15px] w-[173px] h-[16px]">
                {/* twitter */}

                <Image src={"/images/icons/Twitter.png"} alt='Twitter' width={24} height={16} className=' w-[24px] md:w-[16px] h-[24px] md:h-[16px] cursor-pointer' />
                {/* facebook */}

                <Image src={"/images/icons/Facebook.png"} alt='Facebook' width={24} height={16} className=' w-[24px] md:w-[16px] h-[24px] md:h-[16px] cursor-pointer' />

                {/* tiktok */}
                <Image src={"/images/icons/Tiktok.png"} alt='Tiktok' width={24} height={16} className=' w-[24px] md:w-[16px] h-[24px] md:h-[16px] cursor-pointer' />

                {/* instagram */}
                <Image src={"/images/icons/Instagram.png"} alt='Instagram' width={24} height={16} className=' w-[24px] md:w-[16px] h-[24px] md:h-[16px] cursor-pointer' />


            </div>

            
        </div>
    )
}

