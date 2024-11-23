import React from 'react'
import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex flex-row flex-wrap justify-between items-center px-[30px] md:px-[60px] lg:px-[11.111vw] py-0 gap-[24px 213px] w-full min-h-[632px] bg-[linear-gradient(90.7deg,_#211C24_0.64%,_#211C24_101%)]">
            <div className="flex flex-col items-start mt-8 xl:mt-0 p-0 gap-[24px] max-w-[714px] md:min-w-[400px] h-[256px]">
                <h1 className="h-[32px] font-semibold text-[25px] leading-[32px] opacity-40 text-[#ffffff]">
                    Pro.Beyond.
                </h1>
                <h2 className="max-h-[72px] font-thin text-[96px] max-md:text-4xl max-md:max-w-full leading-[72px] text-[#FFFFFF] 
                ">
                    IPhone 14 <span className='font-semibold'>Pro</span>
                </h2>
                <p className="text-wrap h-[24px] text-[#919191] font-medium text-[18px] leading-[24px] max-md:max-w-full">
                    Created to change everything for the better. For everyone</p>
                <button className="box-border w-[191px] h-[56px] mt-4 sm:mt-0 border-[1px] border-[solid] border-[#FFFFFF] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#FFFFFF]">
                    Shop Now
                </button>
            </div>
            <Image src={"/images/Iphone-Image.png"} alt='iPhone 14 Pro' width={1000} height={632} 
            className="max-w-[406px] max-h-[632px] object-contain w-full aspect-[0.64]"
            />
        </div>
    )
}

