

import { HomeProps } from '@/Types'
import CarCard from '@/component/CarCard'
import CustomFilter from '@/component/CustomFilter'
import Hero from '@/component/Hero'
import SearchBar from '@/component/SearchBar'
import ShowMore from '@/component/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { getCars } from '@/utils'


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel_type: searchParams.fuel_type|| "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });
  console.log(allCars)
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
             <CustomFilter title="fuel_type" options={fuels} />
             <CustomFilter title="year" options={yearsOfProduction}/>
            </div>

            </div>

            {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard carInfo={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />

          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}



            
          </div>
    </main>
  )
}
