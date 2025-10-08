import { ArrowUpRight, Building2, Copyright } from 'lucide-react'
import React from 'react'
import FooterImg from '../assets/footer.avif'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
        <div className='bg-black pb-10'>
        <div className='flex flex-row pb-20 text-white'>
           <div className='flex flex-col ml-20'>
             <h1 className=' text-3xl mt-10'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full bg-white h-2 w-2 mr-3 animate-pulse' />
                </span>
                Your Stay</h1>
                <p className='text-7xl font-medium mt-5 w-150 leading-[1.2]'>Always Here for Our Guests</p>
               <button className='group relative flex items-center top-10 cursor-pointer border border-white text-black h-20 w-fit rounded-full px-4 text-2xl gap-5 bg-white hover:bg-blue-800 duration-300 '> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white h-17 w-17 flex items-center justify-center duration-300'>
                 <ArrowUpRight size={40} strokeWidth={1} className='group-hover:text-black duration-300' />
                 </span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
           </div>
           <div className='mt-10 ml-70 cursor-pointer leading-[1.9] text-4xl text-gray-50'>
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

           <div className='mt-10 ml-50 cursor-pointer leading-[1.9] text-4xl text-gray-50'>
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

           <div className='font-medium text-gray-400 px-10 py-4   flex items-center text-center text-2xl'>
              <span className='flex items-center cursor-pointer gap-2'> <Copyright className='mt-1'/>Stayscape, {currentYear}</span>
              <p className='cursor-pointer ml-[80rem]'>Licenses</p>
           </div>
          <div className='relative overflow-hidden rounded-4xl mr-10 cursor-pointer'>
             <img src={FooterImg} alt="Footer" className='ml-10 mt-5 h-110 w-[100rem] rounded-4xl ani object-cover ease-in-out transform transition-transform duration-500 scale-100 hover:scale-110' />
             <Building2 size={210} className='absolute top-35 left-10 text-white'/>
             <p className='absolute text-white text-[15rem] bottom-10 left-60'>Stayscape</p>

          </div>
          </div>
    </div>
  )
}

export default Footer