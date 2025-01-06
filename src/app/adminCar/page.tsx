import CarStats from '@/components/carStats';
import MapCar from '@/components/mapCar';
import { SideBar } from '@/components/sideBar';
import React from 'react'
import Image from 'next/image';

function AdminCar() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
         <SideBar/>
      </div>

        {/* Main Content */}
          {/* map car div */}
        <div className=" flex-1 p-4 lg:p-8">
         <MapCar/>
         </div>

          {/* car details  in one div two section*/}
          <div className="flex-1 p-4 lg:p-8 space-y-4">
           <CarStats/>
        {/* Recent Transactions */}
        <div className="bg-white   p-4 lg:p-6  rounded-lg shadow-lg">
        
              <h2 className="font-semibold text-lg lg:text-xl mb-4 flex justify-between">
                Recent Transaction{" "}
                <span className="text-blue-500 text-xs lg:text-sm cursor-pointer">
                  View All
                </span>
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    tag: "Sport Car",
                    date: "20 July",
                    price: "$80.00",
                    img: "/car2.png",
                  },
                  {
                    name: "Koenigsegg",
                    tag: "Sport Car",
                    date: "19 July",
                    price: "$99.00",
                    img: "/car1.png",
                  },
                  {
                    name: "Rolls - Royce",
                    tag: "Sport Car",
                    date: "18 July",
                    price: "$96.00",
                    img: "/car3.png",
                  },
                  {
                    name: "CR - V",
                    tag: "SUV",
                    date: "17 July",
                    price: "$80.00",
                    img: "/car6.png",
                  },
                ].map((car, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={car.img}
                        alt={car.name}
                        width={50}
                        height={30}
                        className="rounded-md"
                      />
                      <div className="text-sm lg:text-lg">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-xs lg:text-sm">
                          {car.tag}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs lg:text-sm">
                      <p className="text-gray-500">{car.date}</p>
                      <span className="font-bold text-gray-800">
                        {car.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
           </div>
   
    




      </div>
    
  )
}

export default   AdminCar;

