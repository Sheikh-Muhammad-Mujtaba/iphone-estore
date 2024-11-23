import React from 'react'
import Image from 'next/image'

export default function DiscountProduct() {
    return (
        <div className="flex flex-col items-center py-[80px] gap-[32px] w-full min-h-[656px] bg-[#FFFFFF]">
              
                <h1 className="flex w-[95vw] sm:w-[82vw] h-[32px] sm:mx-[11.111vw] font-medium text-[24px] leading-[32px] text-left text-[#000000] px-[20px] sm:px-0">
                    Discounts up to -50%
                </h1>

            <div className="flex flex-row flex-wrap items-center justify-center content-start p-0 gap-[16px] w-full xl:max-w-[85vw] min-h-[432px]">


                {/* product 1 */}
                <div className="flex flex-col items-center px-[16px] py-[24px] gap-[16px] w-[268px] min-w-[200px] h-[432px] bg-[#F7F7F7] rounded-[9px]">
                    <div className='flex flex-row justify-end items-center p-0 gap-[8px] w-[236px] h-[32px]'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
                        </svg>
                    </div>

                    <Image src={"/images/Iphone 14 pro 1.png"} alt='iPhone 14 Pro' width={160} height={160}
                        className="w-[160px] h-[160px]" />

                    <div className="flex flex-col items-center p-0 gap-[24px] w-[236px] h-[160px]">
                        <p className="w-[236px] h-[48px] font-['Inter'] not-italic font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                            Apple iPhone 14 Pro 512GB Gold (MQ233)
                        </p>
                        <h1 className="w-[236px] h-[24px] font-['Inter'] not-italic font-semibold text-[24px] leading-[24px] text-center tracking-[0.03em] text-[#000000]">
                            $1437
                        </h1>
                        <button className="flex flex-row justify-center items-center px-[64px] py-[12px] gap-[8px] w-[188px] h-[48px] bg-[#000000] rounded-[8px] font-medium text-[14px] leading-[24px] text-center text-[#FFFFFF]">
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* product 2 */}
                <div className="flex flex-col items-center px-[16px] py-[24px] gap-[16px] w-[268px] min-w-[200px] h-[432px] bg-[#F7F7F7] rounded-[9px]">
                    <div className='flex flex-row justify-end items-center p-0 gap-[8px] w-[236px] h-[32px]'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
                        </svg>
                    </div>

                    <Image src={"/images/Ipod.png"} alt='Ipod.png' width={160} height={160}
                        className="w-[160px] h-[160px]" />

                    <div className="flex flex-col items-center p-0 gap-[24px] w-[236px] h-[160px]">
                        <p className="w-[236px] h-[48px] font-['Inter'] not-italic font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                            AirPods Max Silver
                            Starlight Aluminium                         </p>
                        <h1 className="w-[236px] h-[24px] font-['Inter'] not-italic font-semibold text-[24px] leading-[24px] text-center tracking-[0.03em] text-[#000000]">
                            $549
                        </h1>
                        <button className="flex flex-row justify-center items-center px-[64px] py-[12px] gap-[8px] w-[188px] h-[48px] bg-[#000000] rounded-[8px] font-medium text-[14px] leading-[24px] text-center text-[#FFFFFF]">
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* product 3 */}
                <div className="flex flex-col items-center px-[16px] py-[24px] gap-[16px] w-[268px] min-w-[200px] h-[432px] bg-[#F7F7F7] rounded-[9px]">
                    <div className='flex flex-row justify-end items-center p-0 gap-[8px] w-[236px] h-[32px]'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
                        </svg>
                    </div>

                    <Image src={"/images/watch.png"} alt='Apple Watch' width={160} height={160}
                        className="w-[160px] h-[160px]" />

                    <div className="flex flex-col items-center p-0 gap-[24px] w-[236px] h-[160px]">
                        <p className="w-[236px] h-[48px] font-['Inter'] not-italic font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                            Apple Watch Series 9 GPS 41mm Starlight Aluminium                         </p>
                        <h1 className="w-[236px] h-[24px] font-['Inter'] not-italic font-semibold text-[24px] leading-[24px] text-center tracking-[0.03em] text-[#000000]">
                            $399
                        </h1>
                        <button className="flex flex-row justify-center items-center px-[64px] py-[12px] gap-[8px] w-[188px] h-[48px] bg-[#000000] rounded-[8px] font-medium text-[14px] leading-[24px] text-center text-[#FFFFFF]">
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* product 4 */}
                <div className="flex flex-col items-center px-[16px] py-[24px] gap-[16px] w-[268px] min-w-[200px] h-[432px] bg-[#F7F7F7] rounded-[9px]">
                    <div className='flex flex-row justify-end items-center p-0 gap-[8px] w-[236px] h-[32px]'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
                        </svg>
                    </div>

                    <Image src={"/images/Iphone 14 pro 2.png"} alt='iPhone 14 Pro' width={160} height={160}
                        className="w-[160px] h-[160px]" />

                    <div className="flex flex-col items-center p-0 gap-[24px] w-[236px] h-[160px]">
                        <p className="w-[236px] h-[48px] font-['Inter'] not-italic font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                            Apple iPhone 14 Pro 1TB Gold (MQ2V3)                        </p>
                        <h1 className="w-[236px] h-[24px] font-['Inter'] not-italic font-semibold text-[24px] leading-[24px] text-center tracking-[0.03em] text-[#000000]">
                            $1499
                        </h1>
                        <button className="flex flex-row justify-center items-center px-[64px] py-[12px] gap-[8px] w-[188px] h-[48px] bg-[#000000] rounded-[8px] font-medium text-[14px] leading-[24px] text-center text-[#FFFFFF]">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}


