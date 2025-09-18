  import React from 'react'
  import Myimg from '../assets/shova.JPG'
  import { PhoneCall } from 'lucide-react'

  const About = () => {
    return (
      <div id='about' className='mt-20'>
      <div className='flex items-center border border-gray-400 rounded-4xl w-120 h-30 mt-40 ml-170 gap-5 font-medium'>
          <img src={Myimg} alt="shova" className=' ml-5 w-18 h-18 object-cover border rounded-full' /> 
          <span className='absolute ml-18 mt-13 w-4 h-4 bg-green-500 border-2 border-white rounded-full '></span>
          <h1 className='text-2xl'>Shova Sapkota <br /><span className='text-gray-500'>Apartment Host</span></h1>
          <button className='flex items-center cursor-pointer justify-center px-2 py-2 ml-20 h-15 w-15 border border-gray-400 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500 ease-in-out'>
              <PhoneCall size={30} strokeWidth={1} />
          </button>
          
      </div>
      <p className='leading-[1.3] text-center text-gray-500 mt-20 ml-30 text-4xl font-medium'>"Hi, I'm Shova. My sunny Upper East Side apartment <br/> sits beside Central Park, with museums, cafes, and shops <br/> just a stroll away - your stylish home in the city."</p>

      </div>
    )
  }

  export default About