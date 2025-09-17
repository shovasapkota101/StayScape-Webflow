import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='mt-20 bg-gray-100 '>
        <div className='flex flex-col justify-center items-center gap-3'>
        
        <h1 className='text-2xl mt-20'> 
            <span className='inline-flex '>
                <span className=' animate-pulse duration-300 rounded-full bg-black w-2 h-2 mr-2 '/>
            </span>
             Gallery</h1>
        <p className='text-7xl font-medium'>Inside the Cozy <br />NYC Apartment</p>
        <button className='flex gap-3 items-center mt-5 border rounded-full h-20 w-80 bg-black text-white text-4xl py-2 px-4 hover:bg-blue-800 duration-300 hover:scale-105 '> <div className='flex items-center justify-center h-13 w-13 border rounded-full bg-white text-black '> <ArrowUpRight size={35} strokeWidth={1} className=''/> </div> <span className=''>Reserve Now</span></button>
    </div>
    </div>
  )
}

export default Gallery