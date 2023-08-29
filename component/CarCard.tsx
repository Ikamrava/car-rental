"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/Types'
import CustomButton from './CustomButton'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Cardetails from './Cardetails'

interface CarCardProps {
    carInfo: CarProps;
}

function CarCard({carInfo}:CarCardProps) {
const {city_mpg, make, model, year, transmission,drive} = carInfo;
const carRent = calculateCarRent(city_mpg,year)
const [isOpen,setIsopen] = useState(false)




  return (
    <div className='car-card group'>
       <div className='car-card__content'>
        <h2 className='car-card__content-title'>{make} {model}</h2>
       </div>
       <p className=' felx mt-6 text-[32px] font-extrabold'>
        <span className=' self-start text-[14px] font-semibold'>
          £
        </span>
        {carRent}
        <span className=' self-end text-[14px]  font-medium'>
           /day
        </span>
       </p>
       <div className=' relative w-full h-40 my-3 object-cobtain'>
          <Image src={generateCarImageUrl(carInfo)}   alt='car image' fill priority className=' object-contain'  />
       </div>
       <div className=' relative flex w-full mt-2'>
        <div className=' flex group-hover:invisible w-full justify-between text-gray '>
           <div className=' flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg" alt='steering wheel' width={20} height={20} />
            <p className=' text-[14px]'>
                {transmission == "a" ? "Automatic" : "Manual"}
            </p>
           </div>

           <div className=' flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg" alt='tire' width={20} height={20} />
              {drive.toLocaleUpperCase()}
           </div>
           <div className=' flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" alt='petrol' width={20} height={20} />
            <p className=' text-[14px]'>
                {city_mpg } MPG
            </p>
           </div>
        </div>
        
       
       </div>
       <div>
        
        </div>
        <CustomButton title='View More' 
        containerStyles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] mt-5 font-bold leading-[17px]' 
        rightIcon = "./right-arrow.svg"
        handleClick={()=>setIsopen(true)} />
        <Cardetails isOpen={isOpen} closeModal = {()=>setIsopen(false)} carInfo={carInfo} />
    </div>
  )
}

export default CarCard