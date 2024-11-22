"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";

export default function NewArrivals() {
    const [activeLink, setActiveLink] = useState('#l1');

    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    const products = [
        {
          id: 1,
          image: "/images/iPhone 14 Pro 3.png",
          alt: "iPhone 14 Pro",
          description: "Apple iPhone 14 Pro Max 128GB Deep Purple",
          price: "$900",
        },
        {
          id: 2,
          image: "/images/Camera.png",
          alt: "Cinema Camera 6k",
          description: "Blackmagic Pocket Cinema Camera 6k",
          price: "$2535",
        },
        {
          id: 3,
          image: "/images/watch.png",
          alt: "Apple Watch",
          description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
          price: "$399",
        },
        {
          id: 4,
          image: "/images/AirPod.png",
          alt: "AirPods Max",
          description: "AirPods Max Silver Starlight Aluminium",
          price: "$549",
        },
        {
          id: 5,
          image: "/images/SamgsungWatch.png",
          alt: "Samsung Galaxy Watch6",
          description: "Samsung Galaxy Watch6 Classic 47mm Black",
          price: "$369",
        },
        {
          id: 6,
          image: "/images/Galaxy Z Fold5.png",
          alt: "Galaxy Z Fold5",
          description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
          price: "$1799",
        },
        {
            id: 7,
            image: "/images/Galaxy Buds.png",
            alt: "Galaxy Buds",
            description: "Galaxy Buds FE Graphite",
            price: "$99.99",
          },
          {
            id: 8,
            image: "/images/Apple iPad.png",
            alt: "Apple iPad",
            description: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
            price: "$398",
          },
      ];

    return (
        <div className="flex flex-col items-start px-[10px] sm:px-[11.111vw] py-[56px] gap-[32px] w-full min-h-[1056px] bg-[#FFFFFF]">
            <div className="flex flex-row items-center pl-[15px] sm:pl-0 p-0 gap-[20px] sm:gap-[32px] sm:max-w-[77.778vw] h-[32px]">
                <Link
                    href="#l1"
                    id="l1"
                    onClick={() => handleClick('#l1')}
                    className={`w-fit h-[32px] font-medium text-[12px] sm:text-[18px] leading-[32px] text-center ${activeLink === '#l1'
                            ? 'text-[#000000] border-b-2 border-[solid] border-[#000000]'
                            : 'text-[#8B8B8B]'
                        }`}
                >
                    New Arrival
                </Link>

                <Link
                    href="#l2"
                    id="l2"
                    onClick={() => handleClick('#l2')}
                    className={`w-fit h-[32px] font-medium text-[12px] sm:text-[18px] leading-[32px] text-center ${activeLink === '#l2'
                            ? 'text-[#000000] border-b-2 border-[solid] border-[#000000]'
                            : 'text-[#8B8B8B]'
                        }`}
                >
                    Bestseller
                </Link>

                <Link
                    href="#l3"
                    id="l3"
                    onClick={() => handleClick('#l3')}
                    className={`w-fit h-[32px] font-medium text-[12px] sm:text-[18px] leading-[32px] text-center ${activeLink === '#l3'
                            ? 'text-[#000000] border-b-2 border-[solid] border-[#000000]'
                            : 'text-[#8B8B8B]'
                        }`}
                >
                    Featured Products
                </Link>

            </div>

            <div className="flex flex-row flex-wrap items-start justify-center p-0 gap-[16px] max-w-[1120px] min-h-[880px]">
            {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center px-[16px] py-[24px] gap-[16px] w-[268px] min-w-[200px] h-[432px] bg-[#F7F7F7] rounded-[9px]"
        >
          <div className="flex flex-row justify-end items-center p-0 gap-[8px] w-[236px] h-[32px]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.93415 18.5442L15.3152 27.3567C15.6397 27.6615 15.8019 27.8139 15.9999 27.8139C16.1979 27.8139 16.3602 27.6615 16.6846 27.3567L26.0657 18.5442C28.6739 16.094 28.9907 12.0621 26.797 9.23467L26.3845 8.70304C23.7603 5.32069 18.4928 5.88794 16.6488 9.75145C16.3883 10.2972 15.6115 10.2972 15.351 9.75145C13.5071 5.88794 8.23955 5.32069 5.61531 8.70304L5.20284 9.23467C3.00918 12.0621 3.32592 16.094 5.93415 18.5442Z"
                stroke="#919191"
                strokeOpacity="0.77"
                strokeWidth="1.4"
              />
            </svg>
          </div>

          <Image
            src={product.image}
            alt={product.alt}
            width={160}
            height={160}
            className="w-[160px] h-[160px]"
          />

          <div className="flex flex-col items-center p-0 gap-[24px] w-[236px] h-[160px]">
            <p className="w-[236px] h-[48px] font-['Inter'] not-italic font-medium text-[16px] leading-[24px] text-center text-[#000000]">
              {product.description}
            </p>
            <h1 className="w-[236px] h-[24px] font-['Inter'] not-italic font-semibold text-[24px] leading-[24px] text-center tracking-[0.03em] text-[#000000]">
              {product.price}
            </h1>
            <button className="flex flex-row justify-center items-center px-[64px] py-[12px] gap-[8px] w-[188px] h-[48px] bg-[#000000] rounded-[8px] font-medium text-[14px] leading-[24px] text-center text-[#FFFFFF]">
              Buy Now
            </button>
          </div>
        </div>
      ))}


            </div>
        </div>
    )
}
