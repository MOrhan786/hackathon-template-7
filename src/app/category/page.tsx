import PickUp from '@/components/pickUp';
import SideNavbar from '@/components/sideNavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BsHeartFill } from 'react-icons/bs';
import { cars2 } from '@/constant/cars';

function CategorySection() {
  return (
    <div className="w-full flex">
          {/* sidebar  */}
      <div className="first hidden sm:flex w-[20%]">
        <SideNavbar />
      </div>

      {/* pick up section */}
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <PickUp />    
        </section>
       

        {/* 3rd car section */}
        <section className="popular w-full  flex flex-col gap-4 ">
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars2.map(( car) => (
            <Card
             key={car.id }
            className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between  shadow-md transition-transform duration-300 hover:scale-105 ">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
               {car.name}
               <button className="text-[#ED3F3F] ">
                  <BsHeartFill className="w-6 h-6" />
                </button>
              </CardTitle>
              <CardDescription>{car.type}</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={car.image} alt={car.name} width={220} height={68}
               className=" bg-gradient-to-t from-white to-transparent " 
              />
              <Image src={"/spec1.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link href={"/detailPage"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>
          
               {/* button */}
       {/* <section id="block5" className="button w-full text-center  "> */}
        <div className="w-[50px] mt-[30px ] flex  flex-col items-center justify-between gap-4">
           
              <Link
                href={"/carDetail"}
                className="text-[16px] leading-6 hover:text-gray-600 flex items-center lg:justify-center md:justify-center sm:justify-center"
              >
                <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white px-5 py-3 rounded ml-40 ">
                  Show more car
                </Button>
              </Link>
            </div>
             </section>
            {/* </section> */}
            
              </div>
    </div>
  )
}

export default CategorySection;
 