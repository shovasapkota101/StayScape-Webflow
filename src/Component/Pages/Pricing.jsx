import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Pricing1Img from '../assets/pricing1.avif'
import Pricing2Img from '../assets/pricing2.avif'
import Pricing3Img from '../assets/pricing3.avif'
import Pricing4Img from '../assets/pricing4.avif'
import Pricing5Img from '../assets/pricing5.avif'

const pricingImages = [
  { src: Pricing1Img, height: 'h-[20rem]', width: 'w-[13rem]' },
  { src: Pricing2Img, height: 'h-[24rem]', width: 'w-[15rem]' },
  { src: Pricing3Img, height: 'h-[22rem]', width: 'w-[14rem]' },
  { src: Pricing4Img, height: 'h-[26rem]', width: 'w-[16rem]' },
  { src: Pricing5Img, height: 'h-[25rem]', width: 'w-[15rem]' },
];


const Pricing = () => {
  return (
    <div id='pricing' className='bg-black pb-50' >
        <div className='flex flex-col items-center justify-center pb-50  text-white'>
            <h1 className=' mt-50 text-2xl '>
                <span className='inline-flex mr-2'>
                    <span className='rounded-full bg-white animate-pulse h-2 w-2 -translate-y-1' />
                </span>
                Pricing</h1>
                <p className='text-8xl mt-5 font-medium'>$290/night</p>
                <p className='mt-10 text-5xl font-medium leading-[1.3]'>Absolutely no hidden charges. <br /> All extra costs already included.</p>

                 <button className='group relative flex items-center top-10 cursor-pointer border border-white text-black h-20 w-fit rounded-full px-4 text-2xl gap-5 bg-white hover:bg-blue-700 duration-300 '> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-17 w-17 flex items-center justify-center duration-300'>
                    <ArrowUpRight size={40} strokeWidth={1} className='group-hover:text-black duration-300' />
                    </span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
        </div>
        <div className='relative w-full overflow-hidden'>
        <div className='flex animate-slide whitespace-nowrap'>
          {[
            ...pricingImages,
            ...pricingImages  
          ].map((imgObj, idx) => (
            <img
            key={idx}
              src={imgObj.src}
              alt={`Pricing ${idx}`}
              className={`${imgObj.height} ${imgObj.width} mx-3 rounded-4xl object-cover`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing