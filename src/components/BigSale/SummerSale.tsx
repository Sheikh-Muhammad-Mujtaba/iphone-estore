import React from 'react'

export default function SummerSale() {
    return (
        <div className="flex flex-col justify-center items-center p-0 gap-[8px] isolate w-full h-[512px] md:h-[448px] bg-Summer-Sales-md md:bg-Summer-Sales bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center p-[1.111vw] sm:p-0 gap-[40px]">
                <h1 className="font-thin text-[3rem] md:text-[4.5rem] leading-[72px] text-center tracking-[-0.01em] text-[#FFFFFF]">
                    Big Summer <span className="font-medium">Sale</span>
                </h1>
                <p className="h-[32px] font-normal text-[16px] leading-[32px] text-center text-[#787878]">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <button className="box-border flex justify-center items-center w-[191px] h-[56px] border-[1px] border-solid border-[#FFFFFF] rounded-[6px] font-medium text-[16px] leading-[24px] text-center text-[#FFFFFF]">
                    Shop Now
                </button>
            </div>
        </div>
    )
}

