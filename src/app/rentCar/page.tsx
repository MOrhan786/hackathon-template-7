// src\app\rentCar\page.tsx
import React from 'react'

import BillingInfo from '@/components/billingInfo';
import RentalInfo from '@/components/rentalInfo';
import PaymentMethod from '@/components/paymentMethod';
import ConfirmationInfo from '@/components/confirmationInfo';
import RentalSummary from '@/components/rentalSummary';

 
 function RentDetail () {
   return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        {/* bill sec */}
        <div className="form w-full lg:w-2/3 space-y-7">

        <BillingInfo/>

         {/*Rental Summary /info */}
         <RentalInfo/>

         {/*Payment Method sec  */}
           
           <PaymentMethod/>

        
             {/* confirmation sec */}
             <ConfirmationInfo/>
       
        </div>
        {/* left side div */}
          {/* rental summary sec */}
      <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
      
        <RentalSummary/>
        
      </div>



        
   </div>
   )
 }
 
 export default RentDetail;
 