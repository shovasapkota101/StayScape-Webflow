import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'

import Pricing1Img from '../assets/pricing1.avif'
import Pricing2Img from '../assets/pricing2.avif'
import Pricing3Img from '../assets/pricing3.avif'
import Pricing4Img from '../assets/pricing4.avif'
import Pricing5Img from '../assets/pricing5.avif'
import { useNavigate } from 'react-router-dom'

const pricingImages = [
  { src: Pricing1Img, height: 'h-[18rem]', width: 'w-[18rem]', },
  { src: Pricing2Img, height: 'h-[21rem]', width: 'w-[18rem]' },
  { src: Pricing3Img, height: 'h-[29rem]', width: 'w-[18rem]' },
  { src: Pricing4Img, height: 'h-[26rem]', width: 'w-[18rem]' },
  { src: Pricing5Img, height: 'h-[23rem]', width: 'w-[18rem]' },
];


const Pricing = () => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  };

  return (
    <div id='pricing' className='bg-black pb-20' >
        <div className='flex flex-col items-center justify-center pb-50  text-white'>
            <h1 className=' mt-15 text-xl '>
                <span className='inline-flex mr-2'>
                    <span className='rounded-full bg-white animate-pulse h-2 w-2 -translate-y-1' />
                </span>
                Pricing</h1>
                <p className='text-6xl mt-5 font-medium'>$290/night</p>
                <p className='mt-10 text-3xl font-medium leading-[1.3]'>Absolutely no hidden charges. <br /> All extra costs already included.</p>

                 <button className='group relative flex items-center top-10 cursor-pointer border border-white text-black h-14 w-fit rounded-full px-1 text-lg gap-3 bg-white hover:bg-blue-700 hover:border-blue-800 duration-300 ' onClick={handleClick}> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-12 w-12 flex items-center justify-center duration-300'>
                    <ArrowUpRight size={25} strokeWidth={1} className='group-hover:text-black duration-300' />
                    </span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
        </div>
       
     {/* Image Marque */}
     <div className=' w-full overflow-hidden mt-10'>
        <Marquee speed={100} gradient={false}>
          <div className='flex items-start'>
            {[...pricingImages, ...pricingImages].map((imgObj, idx) => (
                <img
                key={idx}
                 src={imgObj.src}
                 alt={`Pricing ${idx}`}
                 className={`${imgObj.height} ${imgObj.width} mx-3 rounded-4xl object-cover`} />
            ))}
            </div>
        </Marquee>
     </div>

    </div>
  )
}

export default Pricing