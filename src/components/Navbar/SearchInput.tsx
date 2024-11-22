import React from 'react';
import { Input } from '../ui/input';

export function SearchInput() {
  return (
    <div className="hidden md:flex relative max-w-[372px] max-h-[56px] mx-auto">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[16px] top-1/2 transform -translate-y-1/2"
      >
        <path
          d="M16.9331 17L13.1554 13.2156M15.2489 8.15789C15.2489 10.0563 14.4948 11.8769 13.1524 13.2193C11.81 14.5617 9.98939 15.3158 8.091 15.3158C6.19261 15.3158 4.37197 14.5617 3.0296 13.2193C1.68724 11.8769 0.933105 10.0563 0.933105 8.15789C0.933105 6.2595 1.68724 4.43886 3.0296 3.0965C4.37197 1.75413 6.19261 1 8.091 1C9.98939 1 11.81 1.75413 13.1524 3.0965C14.4948 4.43886 15.2489 6.2595 15.2489 8.15789V8.15789Z"
          stroke="#989898"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <Input 
        type="search" 
        placeholder="Search" 
        className="p-[16px] pl-[48px] gap-[8px] mx-[auto] my-[0] max-w-[372px] max-h-[56px] bg-[#F5F5F5] rounded-[8px]"
        aria-label="Search products"
      />
    </div>
  );
}