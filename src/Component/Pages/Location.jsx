import React from 'react'
import MapImg from '../assets/map.avif'
import { Building2, Navigation2 } from 'lucide-react'

const Location = () => {
  return (
    <div id='location'>
       <div className='bg-black pb-20'>
         <div className='flex flex-col text-white items-center justify-center '>
            <h1 className='mt-10 text-2xl'>
                <span className='inline-flex'>
                    <span className='rounded-full bg-white h-2 w-2 animate-pulse mr-3 -translate-y-1' />
                </span>
                Location</h1>
                 
         <p className='text-5xl mt-5'>Where You'll Stay</p>

         <p className='flex text-3xl mt-20 gap-20 font-medium items-center text-center leading-[1.3]'> 
            <span className='flex flex-col items-center'>
                Neighborhood: <span className='text-5xl'>Upper East Side, Manhattan</span>
            </span>
            <span className='h-30 border border-gray-500' />
            <span className='flex flex-col items-center'>
                Address: <span className='text-5xl'>953 5th Avenue, New York, USA</span>
            </span>
            <span className='h-30 border border-gray-500' />
            <span className='flex flex-col items-center'>
              Floor: <span className='text-5xl'>40th Floor With Elevator</span>
            </span>
         </p>

         </div>
         
         <span className='relative flex'>
            <img src={MapImg} alt="Location" className='mt-40 h-200 w-[100rem] ml-10 rounded-4xl overflow-hidden object-cover' />
            <span className='absolute top-130 right-200 border border-white rounded-full h-18 w-18 flex items-center justify-center cursor-pointer bg-white'>
                 <span inline-flex>
                <span className='absolute top-18 right-15 rounded-full bg-white h-2 w-2' />
            </span>
                <Building2 size={50} />

                
            </span>
            <span className='absolute top-210 right-20 border border-white rounded-full h-18 w-18 flex items-center justify-center cursor-pointer bg-white hover:bg-blue-700 duration-300 hover:text-white'>
                <Navigation2 size={40} strokeWidth={1} />
            </span>
           
         </span>
 <hr className='bg-gray-500 mt-20 w-full h-0.5' />

        
       </div>

    </div>
  )
}

export default Location