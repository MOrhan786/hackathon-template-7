import SideNavbar from "@/components/sideNavbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/components/reviews";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsHeartFill } from "react-icons/bs";
import { cars3, cars4 } from "@/constant/cars";

function CarDetail() {
    return (
        <div className="w-full flex">
       {/* side bar div */}
       <div className="first hidden sm:flex w-[25%]">
        <SideNavbar />
      </div>
      {/* 2nd div */}

      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          {/* four car img */}
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div>
            <div className=" flex items-center justify-between gap-2 lg:gap-2">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2 .png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>
          {/* second div  rent button */}
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
          <Image
              src={"/Detail Car (1).png"}
              alt="Detail Car"
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />

            <div className="p-4 flex  items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    day $100.00
                  </span>
                </h1>
              </div>
              <Link href={"/rentCar"}>
                <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
            </div>
         

          </section>
             {/* review sec */}
             <section className=" w-full flex items-center justify-">
             <Reviews />
                </section>

                {/* car sec */}
            
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Popular Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars3.map (( car) => (
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
              <Image src={car.spec} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link href={"/rentCar"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        {/* recomendation car div */}
        <div className="first w-full flex justify-between items-center mb-[20px] mt-[20px] ">
          <span className="text-[#90A3BF] font-semibold text-lg sm:text-xl">
            Recomendation Car
          </span>
          <span className="text-[#3563E9] font-semibold text-[16px] cursor-pointer">
            View All
          </span>
        </div>
        
        {/* Cards Section */}
        <div className="sec  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cars4.map (( car) => (
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
              <Image src={car.spec} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="text-[20px] font-bold text-[#1A202C]  leading-none tracking-tight">
               {car.price}
                <span className="text-sm font-medium text-gray-500">/day</span>
              </p>
              <Link href={"/rentCar"}>
                <Button className="bg-[#3563e9] p-2 text-white rounded-md">
                  Rent Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
              
          ))}
        </div>

        </section>
          

     
        </div>
  </div>
    )
}
    export default  CarDetail;