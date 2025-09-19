import { ArrowUpRight, Building2, Copyright } from 'lucide-react'
import React from 'react'
import FooterImg from '../assets/footer.avif'

const Footer = () => {
  return (
    <div>
        <div className='bg-black pb-40'>
        <div className='flex flex-row pb-50 text-white'>
           <div className='flex flex-col ml-20'>
             <h1 className=' text-3xl mt-30'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full bg-white h-2 w-2 mr-3 animate-pulse' />
                </span>
                Your Stay</h1>
                <p className='text-7xl font-medium mt-5 w-150 leading-[1.2]'>Always Here for Our Guests</p>
               <button className='group relative flex items-center top-10 cursor-pointer border border-white text-black h-20 w-fit rounded-full px-4 text-2xl gap-5 bg-white hover:bg-blue-800 duration-300 '> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-17 w-17 flex items-center justify-center duration-300'>
                 <ArrowUpRight size={40} strokeWidth={1} className='group-hover:text-black duration-300' />
                 </span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
           </div>
           <div className='mt-30 ml-80 leading-[1.9] text-4xl text-gray-50'>
            <h1 className='text-2xl'>Menu</h1>
            <ul className='mt-5'>
                <li>About</li>
                <li> Gallery</li>
                <li>Features</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>Gallery</li>
            </ul>
           </div>

           <div className='mt-30 ml-80 leading-[1.9] text-4xl text-gray-50'>
            <h1 className='text-2xl'>Explore</h1>
            <ul className='mt-5'>
                <li>Templates</li>
                <li>NutsDev</li>
                <li className='text-2xl mt-22'>Contact</li>
                <li>help@stayscape.com</li>
                <li>+1(212)555-0199</li>
            </ul>
           </div>
           </div>

           <div className=' font-medium text-gray-400 ml-10 mt-40 flex items-center text-center text-2xl'>
              <span className='flex items-center gap-2'> <Copyright className='mt-1'/>Stayscape, 2025</span>
              <p className=' ml-350'>Licenses</p>
           </div>
          <div className='relative'>
             <img src={FooterImg} alt="Footer" className='ml-10 mt-5 h-110 w-430 rounded-4xl object-cover' />
             <Building2 size={250} className='absolute top-20 left-30 text-white'/>
             <p className='absolute text-white text-[18rem] bottom-10 left-100'>Stayscape</p>

          </div>
          </div>
    </div>
  )
}

export default Footer