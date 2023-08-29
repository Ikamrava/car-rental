"use client"
import { ShowMoreProps } from '@/Types'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'

function ShowMore({pageNumber,isNext}:ShowMoreProps) : JSX.Element {
 const router = useRouter()


 const handleNavigation = () => {
  const newLimit = (pageNumber + 1) *10
  const newPathName = updateSearchParams("limit",String(newLimit))
   router.push(newPathName,{scroll:false})
 
 }

  return (
    <div className=' w-full flex-center gap-5 mt-10'>
     
     {!isNext && <CustomButton title='Show More' 
        containerStyles=' bg-primary-blue rounded-full text-white font-bold' 
        handleClick={handleNavigation} />}
       
    </div>
  )

}

export default ShowMore