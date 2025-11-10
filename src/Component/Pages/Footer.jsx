import { ArrowUpRight, Building2, Copyright } from 'lucide-react'
import React from 'react'
import FooterImg from '../assets/footer.avif'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  };

  const handleLicensesClick = () => {
    navigate('/licenses');
  };

  return (
    <div>
        <div className='bg-black pb-10'>
        <div className='flex flex-row pb-20 text-white'>
           <div className='flex flex-col ml-20'>
             <h1 className=' text-lg mt-5'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full bg-white h-2 w-2 mr-3 animate-pulse' />
                </span>
                Your Stay</h1>
                <p className='text-4xl font-medium mt-5 w-150 leading-[1.2]'>Always Here for <br /> Our Guests</p>
               <button className='group relative flex items-center top-10 cursor-pointer border border-white text-black h-13 w-fit rounded-full px-1 text-lg gap-4 bg-white hover:bg-blue-800 hover:border-blue-800 duration-300 ' onClick={handleClick}> <span className='group-hover:bg-white group-hover:border-white border rounded-full bg-black text-white px-3 py-3 flex items-center justify-center duration-300'>
                 <ArrowUpRight size={20} strokeWidth={1} className='group-hover:text-black duration-300' />
                 </span> <span className='group-hover:text-white duration-300'>Reserve Now</span> </button>
           </div>
           <div className='mt-5 ml-10 cursor-pointer leading-[1.9] text-2xl text-gray-50'>
            <h1 className='text-lg'>Menu</h1>
            <ul className='mt-5'>
                <li>About</li>
                <li> Gallery</li>
                <li>Features</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>Gallery</li>
            </ul>
           </div>

           <div className='mt-5 ml-30 cursor-pointer leading-[1.9] text-2xl text-gray-50'>
            <h1 className='text-lg'>Explore</h1>
            <ul className='mt-5'>
                <li>Templates</li>
                <li>NutsDev</li>
                <li className='text-lg mt-22'>Contact</li>
                <li>help@stayscape.com</li>
                <li>+1(212)555-0199</li>
            </ul>
           </div>
           </div>

           <div className='font-medium text-gray-400 px-10 py-4 flex items-center text-center text-lg' >
              <span className='flex items-center cursor-pointer gap-2'> <Copyright className='mt-1'/>Stayscape, {currentYear}</span>
              <p className='cursor-pointer ml-[55rem]' onClick={handleLicensesClick}>Licenses</p>
           </div>
          <div className='relative overflow-hidden rounded-4xl mr-10 cursor-pointer'>
             <img src={FooterImg} alt="Footer" className='ml-10 mt-1 h-90 w-full rounded-4xl ani object-cover ease-in-out transform transition-transform duration-500 scale-100 hover:scale-110' />
             <Building2 size={160} className='absolute top-25 left-30 text-white'/>
             <p className='absolute text-white text-[11rem] bottom-18 left-80'>Stayscape</p>

          </div>
          </div>
    </div>
  )
}

export default Footer