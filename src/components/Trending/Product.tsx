import Image from 'next/image'
import React from 'react'

export default function TreandingProduct() {
    return (
        <div className='flex flex-row flex-wrap xl:flex-nowrap items-start p-0 w-fit sm:w-full min-h-[600px]'>
            <div className='flex flex-col justify-center p-0 min-h-[600px] w-full'>
                {/* Playstation 5 */}
                <div className='flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center xl:pr-[48px] py-0 isolate w-fit sm:w-full xl:w-[720px] min-h-[328px] bg-[#FFFFFF] ml-[-10px] mb-[-10px]'>
                    <Image src={'/images/PlayStation.png'} alt='PlayStation 5' width={720} height={328}
                        className='relative object-scale-down left-[-12px] w-[720px] h-[343px] mt-[10px]' />
                    <div className='flex flex-col justify-center items-center sm:items-end p-0 gap-[16px] w-[300px] sm:max-w-[404px] h-[128px] px-5 sm:px-0'>
                        <h1 className="sm:w-[310px] min-h-[40px] font-medium text-[26px] md:text-[49px] leading-[40px] text-[#000000]">
                            PlayStation 5
                        </h1>
                        <p className="w-fit sm:w-full h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </p>
                    </div>
                </div>
                {/* airpod pro, vision pro */}
                <div className="flex flex-row flex-wrap md:flex-nowrap items-start p-0 w-full h-[272px] mt-5 sm:mt-0 z-10">
                    <div className="flex flex-row justify-end items-center sm:pr-[48px] py-0 h-full w-full bg-[#EDEDED]">
                        <Image src={'/images/AirPods.png'} alt='Apple AirPods Max' width={104} height={272}
                            className="absolute left-0 w-[104px] h-[272px]" />
                        <div className="flex flex-col justify-center items-center p-0 sm:gap-[8px] sm:w-[160px] max-w-[168px] h-[143px]">
                            <h1 className="sm:w-[160px] h-[120px] font-light text-[29px] leading-[40px] text-[#000000]">
                                Apple AirPods <span className='font-medium'>Max</span>
                            </h1>
                            <p className="sm:w-[160px] h-[48px] font-medium text-[14px] leading-[24px] text-[#919191]">
                                Computational audio. Listen, it&apos;s powerful
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-center  sm:pr-[48px] py-0 h-full w-full bg-[#353535]">
                        <Image src={"/images/Apple Vision Pro.png"} alt='Apple Vision Pro' width={136} height={190}
                            className="absolute left-0 md:left-[50vw] xl:left-[26vw] w-[100px] sm:w-[136px] max-h-[190px]" />
                        <div className="flex flex-col justify-center items-center p-0 sm:gap-[8px] w-[160px] max-w-[176px] h-[144px] ">
                            <h1 className="sm:w-[160px] h-[80px] font-light text-[29px] leading-[40px] text-[#FFFFFF]">
                                Apple Vision <span className='font-medium'>Pro</span>
                            </h1>
                            <p className="sm:w-[160px] h-[72px] font-medium text-[14px] leading-[24px] text-[#919191]">
                                An immersive way to experience entertainment
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Macbook Air */}
            <div className="flex flex-row  items-end md:items-center sm:pl-[56px] isolate w-full min-h-[615px] sm:h-[900px] md:h-[615px] pb-[30px] mb:pb-0  bg-[#EDEDED]">
                {/* Text Content */}
                <div className="flex flex-col sm:items-start p-4 sm:p-0 gap-4 sm:gap-[16px] w-full sm:w-[360px]">
                    <h1 className="w-full sm:w-[360px] text-center sm:text-left text-[32px] sm:text-[64px] leading-[36px] sm:leading-[56px] font-thin text-[#000000]">
                        Macbook <span className='font-medium'>Air</span>
                    </h1>
                    <p className="w-full sm:w-[360px] text-center sm:text-left font-medium text-[14px] leading-[24px] text-[#919191]">
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#000000] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#000000]">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Image */}
                <Image
                    src={"/images/MacBook Pro 14.png"}
                    alt='Macbook Air'
                    width={292}
                    height={502}
                    className="mt-6 sm:mt-0 hidden sm:flex sm:absolute right-0  sm:w-[292px] sm:h-auto"
                />
            </div>

        </div>
    )
}

