import React from 'react'
import MapImg from '../assets/map.avif'
import { Building2, Navigation2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Location = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/map');
  }
  return (
    <div id='location'>
       <div className='bg-black pb-20'>
         <div className='flex flex-col text-white items-center justify-center '>
            <h1 className=' text-xl'>
                <span className='inline-flex'>
                    <span className='rounded-full bg-white h-2 w-2 animate-pulse mr-3 -translate-y-1' />
                </span>
                Location</h1>
                 
         <p className='text-3xl mt-5'>Where You'll Stay</p>

         <p className='flex text-xl mt-20 gap-15 font-medium items-center text-center leading-[1.3]'> 
            <span className='flex flex-col items-center'>
                Neighborhood: <span className='text-3xl'>Upper East Side, Manhattan</span>
            </span>
            <span className='h-25 border border-gray-500' />
            <span className='flex flex-col items-center pb-5'>
                Address: <span className='text-3xl'>953 5th Avenue, New York, USA</span>
            </span>
            <span className='h-25 border border-gray-500' />
            <span className='flex flex-col items-center pb-8'>
              Floor: <span className='text-3xl'>40th Floor With Elevator</span>
            </span>
         </p>

         </div>
         
         <div className="relative flex justify-center mt-20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67312.4014984501!2d85.30562536429123!3d27.73126441828219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d62f7975825%3A0xba22d46129f372b1!2sAirbnb%20Qeva%E2%80%99s%20home!5e0!3m2!1sen!2snp!4v1761883308241!5m2!1sen!2snp"
           className="rounded-3xl w-[95%] h-[700px] border-none"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <span className="absolute top-60 left-[800px] border border-white rounded-full h-18 w-18 flex items-center justify-center cursor-pointer bg-white">
            <Building2 size={50} />
          </span>
          <span className="absolute bottom-10 right-20 border border-white rounded-full h-18 w-18 flex items-center justify-center cursor-pointer bg-white hover:bg-blue-700 duration-300 hover:text-white" onClick={handleClick}>
            <Navigation2 size={40} strokeWidth={1}/>
          </span>
        </div>
 <hr className='bg-gray-500 mt-20 w-full h-0.5' />

        
       </div>

    </div>
  )
}

export default Location