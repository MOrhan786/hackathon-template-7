 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image';




import React from 'react'
import Link from 'next/link';
 
 function CarDetail () {
   return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        {/* bill sec */}
        <div className="form w-full lg:w-2/3 space-y-7">
         {/* Billing Info */}
         <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Name
                </label>
                <Input
                  placeholder="Your Name"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Phone Number
                </label>
                <Input
                  placeholder="Your Phone Number"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Address
                </label>
                <Input
                  placeholder="Your Address"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Town/City
                </label>
                <Input
                  placeholder="Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

           
          {/*Rental Summary /info */}
         
          <Card className=" w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
          <div className="first">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(53,99,233,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Pick - Up
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label  className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            
            <Select>
          
                
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0 flex items-center justify-between">
              <SelectValue placeholder="Select your city"  />
             
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="new-york">Lahore</SelectItem>
          <SelectItem value="los-angeles">Karachi</SelectItem>
          <SelectItem value="chicago">Islamabad</SelectItem>
       </SelectContent>
       </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your date" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-[rgba(92,175,252,0.3)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#54A6FF]" />
          </div>
          <span className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
            Drop - Off
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Locations
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your city" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">Lahore</SelectItem>
                <SelectItem value="los-angeles">Karachi</SelectItem>
                <SelectItem value="chicago">Queeta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Date
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
               <SelectValue placeholder="Select your date" />
                
               
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="text-[16px] font-semibold text-[#1A202C] tracking-[-0.02em]">
              Time
            </label>
            <Select>
              <SelectTrigger className="h-14 bg-[#F6F7F9] border-0">
                <SelectValue placeholder="Select your time" />
              
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      </CardContent>
          </Card>
         {/*Payment Method sec  */}

         <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 bg-[#f6f7f9] rounded-xl pt-6">
            <div className="first flex justify-between">
              <Image
                src={"/Credit Card.png"}
                alt="Pick Up"
                width={92}
                height={20}
              />
              <Image src={"/Visa.png"} alt="Visa" width={92} height={20} />
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Card number
                </label>
                <Input
                  placeholder="Card number"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">
                  Expration date
                </label>
                <Input
                  placeholder="DD/MM/YY"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">
                  Card Holder
                </label>
                <Input
                  placeholder="Card number"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  CVC
                </label>
                <Input
                  placeholder="CVC"
                  className="bg-white px-8 h-[56px] rounded-xl"
                />
              </div>
            </div>
          </CardContent>

          <div className="flex flex-col gap-4">
            {/* PayPal */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">PayPal</span>
              </div>
              <Image src={"/PayPal.png"} alt="PayPal" width={100} height={24} />
            </label>

            {/* Credit Card */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">Bitcoin</span>
              </div>
              <Image
                src={"/Bitcoin.png"}
                alt="Bitcoin"
                width={94}
                height={20}
              />
            </label>
          </div>
        </Card>
             {/* confirmation sec */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>
                We are getting to the end. Just a few clicks and your rental is
                ready
              </h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* PayPal */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </span>
              </label>

              {/* Credit Card */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <Link href={"/adminCar"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                Rent Now
              </button>
            </Link>

            <div>
              <Image
                src={"/ic-security.png"}
                alt="Safe Data"
                width={32}
                height={32}
                className="mb-3"
              />
              <p className="text-lg font-medium">All your data are safe</p>
              <h1 className="text-sm text-muted-foreground">
                We are using the most advanced security to provide you the best
                experience ever.
              </h1>
            </div>
          </CardContent>
        </Card>
        </div>
          {/* rental summary sec */}
      <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
        <Image
          src={"/Rental Summary.png"}
          alt="Rental Summary"
          width={492}
          height={568}
          className="w-full h-auto"
        />
      </div>



        
   </div>
   )
 }
 
 export default CarDetail;
 