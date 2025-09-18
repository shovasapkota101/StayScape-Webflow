import { AirVent, ArrowUpRight, Bath, Bed, Microwave, ShoppingBag, Siren, Tv2, Users, WashingMachine, Wifi } from 'lucide-react'
import React from 'react'
import OfferImg from '../assets/Offer.avif';

const Feature = () => {
  return (
    <div id='features'>
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-2xl'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full animate-pulse bg-black h-2 w-2 mr-2' />
                </span>
                Features
            </h1>
            <p className='text-7xl mt-10 font-medium'>Home Highlights</p>
        </div>



       <div className='flex mt-10'>
        <div className='flex items-center justify-center border border-gray-300 h-40 w-120 rounded-4xl gap-5 ml-25 mt-5'>
        <h1 className='text-7xl'>2</h1>
        <p className=' text-4xl font-medium'>Bedrooms <span className='block text-xl text-gray-500'>Master and a guests <br /> bedrooms</span></p>
        <span className=' ml-20 border rounded-full h-20 w-20 items-center justify-center flex bg-gray-100'>
            <Bed size={30} strokeWidth={1} />
        </span>
       </div>
       <div className='flex ml-25 mt-5 gap-5 items-center border h-40 w-120 border-gray-300 rounded-4xl'>
        <h1 className='text-7xl ml-5'>1</h1>
        <p className='text-4xl font-medium'>Bathroom <span className='text-xl text-gray-500 block'>Large shared bathroom</span></p>
        <span className='ml-15 border bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center'>
            <Bath size={30} strokeWidth={1}/>
        </span>
       </div>

       <div className='flex items-center border rounded-4xl border-gray-300 h-40 w-120 gap-5 ml-25 mt-5'>
        <h1 className='text-7xl ml-5'>6</h1>
        <p className='text-4xl font-medium'>Guests <span className='block text-xl text-gray-500'>For up to 6 people</span></p>
        <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100 ml-25'>
            <Users size={30} strokeWidth={1}/>
        </span>
       </div>
       </div>
        
          
         <div className="mt-40 px-10">
  <div className="flex items-center justify-center gap-2 mb-10">
    <span className="inline-flex">
      <span className="border rounded-full animate-pulse h-2 w-2 bg-black" />
    </span>
    <h1 className="text-2xl">Amenities</h1>
  </div>

  <div className="flex flex-row justify-between gap-20 w-full">
   
    <div className="flex flex-col gap-5 w-1/3">
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-70">
        <p className="text-3xl font-medium">Fast Wi-Fi</p>
        <Wifi size={40} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-40">
        <p className="text-3xl font-medium">Equipped Kitchen</p>
        <Microwave size={50} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-50">
        <p className="text-3xl font-medium">Washer & Dryer</p>
        <WashingMachine size={50} strokeWidth={1} />
      </div>
    </div>

   
    <div className="flex justify-center items-center w-1/3">
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-4xl w-full h-full py-10">
        <ShoppingBag size={50} strokeWidth={1} />
        <p className="text-3xl font-medium text-center mt-4">
          Complete <br /> Essentials Kit
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-5 w-1/3">
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-45">
        <p className="text-3xl font-medium">Air Conditioning</p>
        <AirVent size={40} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-40">
        <p className="text-3xl font-medium">TV and Streaming</p>
        <Tv2 size={40} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-50">
        <p className="text-3xl font-medium">Safety Features</p>
        <Siren size={50} strokeWidth={1} />
      </div>
    </div>
  </div>

  <div className='relative '>
    <img src={OfferImg} alt="OfferImage" className='rounded-4xl mt-30 h-180 w-full object-cover'/>
   <h1 className='text-3xl absolute text-white top-50 ml-200 font-medium'>
     <span className=' inline-flex h-3 w-3 mr-2 -translate-y-1'>
    <span className=' rounded-full bg-white h-2 w-2 animate-pulse' />
   </span>
    Special Offer</h1>

    <p className='absolute top-65 leading-[1.3] ml-130 text-7xl font-medium text-white'>Book 30+ days ahead <br /> and enjoy 15% savings</p>

    <button className='group absolute flex items-center top-130 left-200 cursor-pointer border border-white h-20 w-fit rounded-full px-4 text-3xl gap-5 bg-white hover:bg-blue-700 duration-300 '> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-15 w-15 flex items-center justify-center duration-300'><ArrowUpRight size={40} strokeWidth={1} className='group-hover:text-black duration-300' /></span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
  
  </div>
    
</div>

    </div>
  )
}

export default Feature