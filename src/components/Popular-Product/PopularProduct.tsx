import React from 'react'
import Image from 'next/image';

export default function PopularProduct() {
    return (
        <div className="flex flex-row flex-wrap lg:flex-nowrap items-start p-0 w-full min-h-[640px]">
            {/* popular product */}
            <div className="flex flex-col items-start px-[20px] sm:px-[32px] pb-[56px] gap-[24px] isolate w-full md:w-[50vw] lg:w-[25vw]  h-[640px] bg-[#FFFFFF]">
                <Image src={"/images/Popular Products.png"} alt='Popular Products' width={360} height={640} className="w-[360.06px] h-[327px]" />
                <div className="flex flex-col justify-end items-start p-0 gap-[16px] w-[296px] h-[208px]">
                    <h1 className="w-[296px] h-[48px] font-light text-[33px] leading-[48px] text-[#000000]">
                        Popular Products
                    </h1>
                    <p className="w-[296px] h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                    </p>
                    <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#000000] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* ipad pro */}
            <div className="flex flex-col items-start px-[20px] sm:px-[32px] pb-[56px] gap-[24px] isolate w-full md:w-[50vw] lg:w-[25vw]  h-[640px] bg-[#F9F9F9]">
                <Image src={"/images/Ipad Pro.png"} alt='Ipad Pro' width={360} height={640} className="w-[360.06px] h-[327px]" />
                <div className="flex flex-col justify-end items-start p-0 gap-[16px] w-[296px] h-[208px]">
                    <h1 className="w-[296px] h-[48px] font-light text-[33px] leading-[48px] text-[#000000]">
                    Ipad Pro
                    </h1>
                    <p className="w-[296px] h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                    </p>
                    <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#000000] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                        Shop Now
                    </button>
                </div>
            </div>
            {/* Samsung Galaxy */}
            <div className="flex flex-col items-start px-[20px] sm:px-[32px] pb-[56px] gap-[24px] isolate w-full md:w-[50vw] lg:w-[25vw]  h-[640px] bg-[#EAEAEA]">
                <Image src={"/images/Samsung Galaxy.png"} alt='Samsung Galaxy' width={360} height={640} className="w-[360.06px] h-[327px]" />
                <div className="flex flex-col justify-end items-start p-0 gap-[16px] w-[296px] h-[208px]">
                    <h1 className="w-[296px] h-[48px] font-light text-[33px] leading-[48px] text-[#000000]">
                    Samsung Galaxy 
                    </h1>
                    <p className="w-[296px] h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                    </p>
                    <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#000000] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Macbook Pro */}
            <div className="flex flex-col items-start px-[20px] sm:px-[32px] pb-[56px] gap-[24px] isolate w-full md:w-[50vw] lg:w-[25vw]  h-[640px] bg-[#2C2C2C]">
                <Image src={"/images/Macbook Pro.png"} alt='Macbook Pro' width={360} height={640} className="w-[360.06px] h-[327px]" />
                <div className="flex flex-col justify-end items-start p-0 gap-[16px] w-[296px] h-[208px]">
                    <h1 className="w-[296px] h-[48px] font-light text-[33px] leading-[48px] text-[#FFFFFF]">
                    Macbook Pro 
                    </h1>
                    <p className="w-[296px] h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                    </p>
                    <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#FFFFFF] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#FFFFFF]">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

