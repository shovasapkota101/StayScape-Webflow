import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import BathroomImg from '../assets/bathroom.avif'
import BedroomImg from '../assets/bedroom.avif'
import DiningroomImg from '../assets/diningroom.avif'
import DecorativeFoyer from '../assets/foyer.avif'
import GuestroomImg from '../assets/guestroom.avif'
import HomeOffice from '../assets/homeoffice.avif'
import KitchenRoom from '../assets/kitchen.avif'
import LivingRoom from '../assets/livingroom.avif'
import CreativeWorkspace from '../assets/workspace.avif'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {

  const navigate = useNavigate();

  const handleClick =() => {
    navigate('/reserve')
  };

  return (
    <div id='gallery' className='mt-10 pb-10 bg-gray-100'>
        <div className='flex flex-col justify-center items-center gap-3'>
        
        <h1 className='text-xl mt-10'> 
            <span className='inline-flex -translate-y-1'>
                <span className=' animate-pulse duration-300 rounded-full bg-black w-2 h-2 mr-2 '/>
            </span>
             Gallery</h1>
        <p className='text-5xl font-medium'>Inside the Cozy <br />NYC Apartment</p>
        <button className='flex  cursor-pointer gap-3 items-center mt-5 border rounded-full bg-black text-white text-lg py-1 px-1 hover:bg-blue-800 duration-300 ' onClick={handleClick} > <div className='flex items-center justify-center h-11 w-11 border rounded-full bg-white text-black '> <ArrowUpRight size={20} strokeWidth={1} className=''/> </div> <span className=''>Reserve Now</span></button>
    </div>

    <div>
      <div className='flex mr-10'>
        <span className='relative mt-30 ml-10 '>
          <img src={DiningroomImg} alt="DiningRoom" className='rounded-4xl h-80 w-130 object-cover'/>
          <p className='absolute top-50 font-medium text-sm text-white left-10'>01 <span className='text-2xl block'>Dining Room</span></p>
        </span>
      
      <span className='relative mt-10 ml-5 '>
          <img src={BedroomImg} alt="BedRoom" className='rounded-4xl h-130 w-130 object-cover'/>
          <p className='absolute top-100 font-medium text-sm text-white left-10'>04 <span className='text-2xl block'> BedRoom</span></p>
        </span>

        <span className='relative mt-30 ml-5 '>
          <img src={CreativeWorkspace} alt="Workspace" className='rounded-4xl h-110 w-130 object-cover'/>
          <p className='absolute top-80 font-medium text-sm text-white left-10'>07 <span className='text-2xl block'> Creative Workspace</span></p>
        </span>
      </div>

      <div className='flex mr-10'>
        <span className='relative ml-10'>
          <img src={KitchenRoom} alt="Kitchen" className='rounded-4xl h-140 w-130 object-cover -translate-y-25'/>
          <p className='absolute top-85 font-medium text-sm text-white left-10'>02 <span className='text-2xl block'>Kitchen</span></p>
        </span>
      
      <span className='relative mt-5 ml-5 '>
          <img src={LivingRoom} alt="LivingRoom" className='rounded-4xl h-130 w-130 object-cover'/>
          <p className='absolute top-100 font-medium text-sm text-white left-10'>05 <span className='text-2xl block'> Living Room</span></p>
        </span>

        <span className='relative mt-5 ml-5 '>
          <img src={GuestroomImg} alt="GuestRoom" className='rounded-4xl h-110 w-130 object-cover'/>
          <p className='absolute top-80 font-medium text-sm text-white left-10'>08 <span className='text-2xl block'> Guest Bedroom</span></p>
        </span>
      </div>

      <div className='flex mr-10'>
        <span className='relative ml-10 '>
          <img src={DecorativeFoyer} alt="Decoration" className='rounded-4xl h-100 w-130 object-cover -translate-y-20'/>
          <p className='absolute top-45 font-medium text-sm text-white left-10'>03 <span className='text-2xl block'>Decorative Foyer</span></p>
        </span>
      
      <span className='relative ml-5 '>
          <img src={HomeOffice} alt="HomeOffice" className='rounded-4xl h-100 w-130 object-cover'/>
          <p className='absolute top-70 font-medium text-sm text-white left-10'>06 <span className='text-2xl block'> Home Office</span></p>
        </span>

        <span className='relative ml-5 '>
          <img src={BathroomImg} alt="Bathroom" className='rounded-4xl h-100 w-130 object-cover -translate-y-20'/>
          <p className='absolute top-45 font-medium text-sm text-white left-10'>09 <span className='text-2xl block'> Bathroom</span></p>
        </span>
      </div>

    </div>
    </div>
  )
}

export default Gallery