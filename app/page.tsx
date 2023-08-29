

import { HomeProps } from '@/Types'
import CarCard from '@/component/CarCard'
import CustomFilter from '@/component/CustomFilter'
import Hero from '@/component/Hero'
import SearchBar from '@/component/SearchBar'
import { getCars } from '@/utils'
import { all } from 'axios'
import { get } from 'http'
import { useEffect } from 'react'


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });
const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;



  return (
    <main className=" overflow-hidden">
          <Hero/>

          <div className="mt-12 padding-x padding-y max-width" id="discover">

            <div className='home__text-container'>
              <h1 className=' text-4xl font-extrabold'>Car Catalogue</h1>
              <p>Explore the cars you might like</p>
            </div>

            <div className='home__filters'>
              <SearchBar/>

            <div className='home__filter-container'>
             <CustomFilter title="fuel"/>
             <CustomFilter title="year"/>
            </div>

            </div>

            {!isDataEmpty  ? 
            (<section>
              <div className=' home__cars-wrapper'>
                  {allCars?.map((car) => (
                      <CarCard carInfo = {car} key={car.id} />
                    ))}
              </div>
            </section>)
            : 
            <div className='home__error-container'>
              <h2 className=' text-black text-xl font-bold'>No resaults</h2>
              <p>{allCars?.message}</p>
            </div>
            }



            
          </div>
    </main>
  )
}
