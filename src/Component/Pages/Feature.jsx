import { AirVent, ArrowUpRight, Bath, Bed, Microwave, ShoppingBag, Siren, Tv2, Users, WashingMachine, Wifi } from 'lucide-react'
import React from 'react'
import OfferImg from '../assets/Offer.avif';
import { useNavigate } from 'react-router-dom';

const Feature = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  };

  return (
    <div id='features'>
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-lg'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full animate-pulse bg-black h-2 w-2 mr-2' />
                </span>
                Features
            </h1>
            <p className='text-5xl mt-5 font-medium'>Home Highlights</p>
        </div>



       <div className='flex mt-5 mr-10'>
        <div className='flex items-center justify-center border border-gray-300 h-30 w-125 rounded-4xl gap-5 ml-10 px-3 mt-5'>
        <h1 className='text-4xl'>2</h1>
        <p className=' text-xl'>Bedrooms <span className='block text-xs text-gray-500'>Master and a guests <br /> bedrooms</span></p>
        <span className=' ml-20 border border-gray-300 rounded-full px-4 py-4 items-center justify-center flex bg-gray-100'>
            <Bed size={20} strokeWidth={1} />
        </span>
       </div>
       <div className='flex ml-15 mt-5 gap-5 items-center border h-30 w-125 border-gray-300 rounded-4xl px-3'>
        <h1 className='text-4xl'>1</h1>
        <p className='text-xl'>Bathroom <span className='text-xs text-gray-500 block'>Large shared bathroom</span></p>
        <span className='ml-15 border border-gray-300 bg-gray-100 rounded-full px-4 py-4 flex items-center justify-center'>
            <Bath size={20} strokeWidth={1}/>
        </span>
       </div>

       <div className='flex items-center border rounded-4xl border-gray-300 h-30 w-125 gap-5 ml-15 mt-5 px-3'>
        <h1 className='text-4xl'>6</h1>
        <p className='text-xl'>Guests <span className='block text-xs text-gray-500'>For up to 6 people</span></p>
        <span className='border border-gray-300 rounded-full px-4 py-4 flex items-center justify-center bg-gray-100 ml-20'>
            <Users size={20} strokeWidth={1}/>
        </span>
       </div>
       </div>
        
          
         <div className="mt-10 px-10">
  <div className="flex items-center justify-center gap-2 mb-10">
    <span className="inline-flex">
      <span className="border rounded-full animate-pulse h-1 w-1 bg-black" />
    </span>
    <h1 className="text-xl">Amenities</h1>
  </div>

  <div className="flex flex-row justify-between gap-20 w-full">
   
    <div className="flex flex-col gap-5 w-1/3">
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-60">
        <p className="text-xl font-medium">Fast Wi-Fi</p>
        <Wifi size={40} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-30">
        <p className="text-xl font-medium">Equipped Kitchen</p>
        <Microwave size={30} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-35">
        <p className="text-xl font-medium">Washer & Dryer</p>
        <WashingMachine size={30} strokeWidth={1} />
      </div>
    </div>

   
    <div className="flex justify-center items-center w-1/3">
      <div className="flex flex-col items-center justify-center border border-gray-300 rounded-4xl w-full h-full py-10">
        <ShoppingBag size={40} strokeWidth={1} />
        <p className="text-xl font-medium text-center mt-4">
          Complete <br /> Essentials Kit
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-5 w-1/3">
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-20">
        <p className="text-xl font-medium">Air Conditioning</p>
        <AirVent size={30} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-30">
        <p className="text-xl font-medium">TV and Streaming</p>
        <Tv2 size={30} strokeWidth={1} />
      </div>
      <div className="flex items-center border border-gray-300 rounded-4xl h-30 px-4 gap-40">
        <p className="text-xl font-medium">Safety Features</p>
        <Siren size={40} strokeWidth={1} />
      </div>
    </div>
  </div>

  <div className='relative '>
    <img src={OfferImg} alt="OfferImage" className='rounded-4xl mt-20 h-180 w-full object-cover'/>
   <h1 className='text-xl absolute text-white top-55 ml-120 font-medium'>
     <span className=' inline-flex h-3 w-3 mr-2 -translate-y-1'>
    <span className=' rounded-full bg-white h-2 w-2 animate-pulse' />
   </span>
    Special Offer</h1>

    <p className='absolute top-65 leading-[1.3] ml-70 text-6xl font-medium text-white'>Book 30+ days ahead <br /> and enjoy 15% savings</p>

    <button className='group absolute flex items-center top-110 left-110 cursor-pointer border border-white h-13 w-fit rounded-full px-1 text-lg gap-3 bg-white hover:bg-blue-700 hover:border-blue-800 duration-300'  onClick={handleClick}> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-12 w-12 flex items-center justify-center duration-300'><ArrowUpRight size={20} strokeWidth={1} className='group-hover:text-black duration-300'/></span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
  
  </div>
    
</div>

    </div>
  )
}

export default Feature