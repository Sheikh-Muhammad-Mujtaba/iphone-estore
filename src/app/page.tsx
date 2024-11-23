import React from 'react'
import Banner from '@/components/Hero/Banner';
import TreandingProduct from '@/components/Trending/Product';
import Category from '@/components/Category-Browse/Category';
import NewArrivals from '@/components/NewArrivals/NewArrivals';
import PopularProduct from '@/components/Popular-Product/PopularProduct';
import DiscountProduct from '@/components/Discount/DiscountProduct';
import SummerSale from '@/components/BigSale/SummerSale';

export default function page() {
  return (
    <>
       <Banner />
      <TreandingProduct />
     <Category />
       <NewArrivals />
    <PopularProduct />
    <DiscountProduct />
   <SummerSale />
    </>
  )
}

