  import React from 'react'
  import Myimg from '../assets/shova.JPG'
  import { Bed, Eye, EyeClosed, EyeOff, Image, Key, Locate, LocateFixed, LocateFixedIcon, LocateIcon, LocationEdit, Map, MapPin, MapPinCheck, MapPinIcon, MapPinned, PhoneCall, Pin, PinIcon, PinOff, Sofa, Star, TicketCheckIcon, View } from 'lucide-react'
  import Marquee from 'react-fast-marquee'

  const features = [
    {icon: <TicketCheckIcon size={40} strokeWidth={1}/>, text: 'Responsive host'},
    {icon: <Sofa size={40} strokeWidth={1}/>, text: 'Beautiful interior'},
    {icon: <Bed size={40} strokeWidth={1}/>, text: 'Comfortable beds'},
    {icon: <Key size={40} strokeWidth={1}/>, text: 'Great check-in'},
  ]

  const marqueeItems = [
    {icon: <Star size={40} strokeWidth={1}/>, text: 'Beautiful and walkable'},
    {icon: <Eye size={40} strokeWidth={1}/>, text: 'Stunning views'},
    {icon: <LocateFixed size={40} strokeWidth={1}/>, text: 'Great location'},
    {icon: <View size={40} strokeWidth={1}/>, text: 'Scenic anad peaceful'},
  ]

  const About = () => {
    return (
      <div id='about' className='mt-20'>
      <div className='flex items-center border border-gray-400 rounded-4xl w-110 h-25 mt-20 ml-170 gap-5 font-medium'>
          <img src={Myimg} alt="shova" className=' ml-5 w-16 h-16 object-cover border rounded-full' /> 
          <span className='absolute ml-18 mt-13 w-4 h-4 bg-green-500 border-2 border-white rounded-full '></span>
          <h1 className='text-xl'>Shova Sapkota <br /><span className='text-gray-500'>Apartment Host</span></h1>
          <button className='flex items-center cursor-pointer justify-center px-2 py-2 ml-20 h-15 w-15 border border-gray-400 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500 ease-in-out'>
              <PhoneCall size={20} strokeWidth={1} />
          </button>
          
      </div>
      <p className='leading-[1.3] text-center text-gray-500 mt-10 ml-30 text-3xl font-medium'>"Hi, I'm Shova. My sunny Upper East Side apartment <br/> sits beside Central Park, with museums, cafes, and shops <br/> just a stroll away - your stylish home in the city."</p>

        <Marquee speed={100} gradient={false}>
        {features.map((items, idx) => (
          <div key={idx} className='flex items-center rounded-full border border-gray-300 gap-20 mt-20 h-25 px-6 py-4 mr-10'>
            <div className='flex items-center gap-10 text-5xl'>
              <span className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-full h-22 w-22'>
                {items.icon}
              </span>
              {items.text}
            </div>
          </div>
        ))}
      </Marquee>

      <Marquee speed={100} direction='right' gradient={false}>
        {marqueeItems.map((item, idx) => (
          <div key={idx} className='flex items-center rounded-full border border-gray-300 gap-20 mt-8 h-25 px-6 py-4 mr-10'>
            <div className='flex items-center gap-10 text-5xl'>
              <span className='flex items-center justify-center bg-gray-100 border border-gray-300 rounded-full h-22 w-22'>
                {item.icon}
              </span>
              {item.text}
            </div>
          </div>
        ))}
      </Marquee>

      </div>
    )
  }

  export default About