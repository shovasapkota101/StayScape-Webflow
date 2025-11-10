import { ArrowUpRight, Building2, Leaf, MapIcon, MapPin, Menu, Phone, PhoneCall, Smile, Users2, Wrench, } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import BannerImage from '../assets/img1.avif';
import Introduction_image from '../assets/Introimg.avif';
import Reserve_Image from '../assets/reserveImg.avif';
import { Link, useNavigate } from 'react-router-dom';
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)){
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[] )
  
  const navigate = useNavigate();

  const handlereserveClick = () => {
    navigate('/reserve');
  };

  const handlemapclick = () => {
    navigate('/map');
  }


  return (
    <div>
    <div className='flex justify-between'>
      <div className=' flex-col gap-6' >
        <div className=' flex justify-between items-center px-4 py-4'> 
              <button className='px-3 py-1 mt-8 ml-4 gap-3 border border-gray-300 rounded-full text-lg font-normal flex items-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out'> <Building2 size={20} strokeWidth={1.5}/> StayScape</button> 

            
               <button className='flex items-center ml-80 mt-8  py-3 px-3 border border-gray-300 rounded-full justify-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out '><PhoneCall size={18} strokeWidth={1}/></button>

            <div ref={menuRef} className='relative'>
              <button 
               onClick={() => setMenuOpen(!menuOpen) }
                    
              className=' flex items-center mt-8 border border-gray-300 px-3 py-3 ml-2 rounded-full justify-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out '><Menu size={18} strokeWidth={1}/></button>
              {menuOpen && (
                <div className='absolute right-0 top-20 bg-white border border-gray-400 rounded-2xl shadow-lg p-4 m-6 w-fit z-50'>
                  <ul className='flex flex-col gap-4 mt-4 text-gray-800'>
                    
                     <div className='flex justify-between gap-30'>
                    <button
                    onClick={() => {
                      const aboutsection = document.getElementById('about');
                      if (aboutsection){
                        aboutsection.scrollIntoView({ behavior: 'smooth' });
                        setMenuOpen(false);
                      }
                      
                    }}
                    className='text-left hover:text-blue-600 text-xl font-medium '>
                      About
                      <p className='text-xs text-gray-500'>Explore this home</p>
                    </button>

                    <button
                      onClick={() => {
                        const gallerysection =document.getElementById('gallery');
                        if (gallerysection){
                          gallerysection.scrollIntoView({ behavior : 'smooth'});
                          setMenuOpen(false);
                        }
                      }}
                      className='text-left hover:text-blue-600 text-xl font-medium w-full'
                    >
                      Gallery
                      <p className='text-xs text-gray-500'>Take a look inside</p>
                      
                    </button>
                   
                   <button onClick={() =>{
                    const featuressection = document.getElementById('features');
                    if(featuressection){
                      featuressection.scrollIntoView({
                        behavior : 'smooth'
                      });
                    }
                   } }
                    className='text-left hover:text-blue-600 text-xl font-medium'
                   >
                    Features
                    <p className='text-xs text-gray-500'>Made for comfort</p>

                   </button>

                    </div>

                     <div className='flex justify-between gap-4'>
                      <button onClick={() => {
                        const reviewsection = document.getElementById('review');
                        if(reviewsection){
                          reviewsection.scrollIntoView({
                            behavior:'smooth'
                          });
                        }
                      }}
                       className='text-left hover:text-blue-600 text-xl font-medium'
                      >
                        Reviews
                        <p className='text-xs text-gray-500'>What guests say</p>

                      </button>

                      <button onClick={() => {
                        const pricingsection = document.getElementById('pricing');
                        if(pricingsection){
                          pricingsection.scrollIntoView({
                            behavior:'smooth'
                          });
                        }
                      }}
                      className='text-left hover:text-blue-600 text-xl font-medium'
                      >
                        Pricing
                        <p className='text-xs text-gray-500'>Rates per night</p>

                      </button>

                      <button onClick={() => {
                        const locationsection = document.getElementById('location');
                        if (locationsection){
                          locationsection.scrollIntoView({
                            behavior:'smooth'
                          });
                        }
                      }}
                      className='text-left hover:text-blue-600 ml-10 text-xl font-medium'>
                        Location
                         <p className='text-xs text-gray-500'>Our NYC address</p>
                      </button>
                      
                    </div>
                    <div className='relative overflow-hidden rounded-4xl' onClick={handlereserveClick}>
                      <img src={Reserve_Image} alt="Reserve" className='h-30 w-full rounded-4xl transform transition-transform duration-500 hover:scale-110' />
                      <p className='absolute text-white top-8 cursor-pointer ml-30 flex items-center gap-4 text-2xl font-medium py-3 px-3'>Reserve Now <ArrowUpRight size={25} strokeWidth={2} /> </p>
                    </div>
                  </ul>
                </div>
              )}
            </div>
        </div>

          <button className='flex mt-10 ml-50 border border-gray-300 rounded-full px-2 text-sm py-2 shadow-sm font-light'>
              <span className='flex items-center gap-2'>
                     <MapPin size={15} strokeWidth={1}/> 953 5th Ave, New York <ArrowUpRight size={15} strokeWidth={1}/>
              </span>
          </button>

            <h1 className='ml-35 mt-8 text-5xl font-semibold leading-[1.2]'>Urban Comfort <br /> in New York City</h1>
               <p className='text-lg font-light ml-50 mt-5'>Loved by 200+ happy guests</p>
               
                  
           <button className='flex gap-5 px-1 py-1 items-center border border-gray-300 rounded-full bg-black text-white mt-5 ml-55 hover:bg-blue-800 duration-200 hover:scale-105' onClick={handlereserveClick}> <div className='flex items-center justify-center bg-white text-black border rounded-full px-2 py-2 hover:border-blue-800' ><ArrowUpRight strokeWidth={1} /></div> <span className='text-lg'>Reserve Now</span></button>

          
               <button className='flex flex-col items-center border border-gray-300 rounded-4xl mt-12 ml-8 gap-8 px-30 py-4 shadow-sm space-x-2 '> 
                 <div className="flex items-center space-x-4">
                      <Leaf size={30}/> 
                       <div className='text-center text-xl leading-tight'>
                       <p>Guest <br />favourite</p>
                       </div>
                       <Leaf size={30}/>
                 </div>
                  
                   <div className='flex items-center gap-10 text-2xl font-medium'>
                     <h1>100% <br /> <span className='font-light text-sm'>Reply Rate</span></h1>
                     <span className='h-10 border-l border-gray-300'></span>
                     <h1>4.98</h1>
                     
                      <span className='h-10 border-1 border-gray-300'></span>
                     <h1>137 <br /> <span className='font-light text-sm'>Reviews</span></h1>
                   </div>

                 </button>
           
                    
        </div>

              <div className='flex'>
                <img src={BannerImage} alt="Banner"  className='w-150 rounded-4xl h-180 shadow-md object-cover'/>
                <div className='absolute top-[40rem] right-10 border border-gray-300 rounded-full px-3 py-3 flex items-center justify-center cursor-pointer bg-white hover:bg-blue-600  transition-all duration-300 ease-in-out ' onClick={handlemapclick}><MapIcon size={25} strokeWidth={1} className='text-gray-600 hover:text-white' /></div>
              </div>
        </div> 
        <div className='relative w-fit mt-8'> <img src={Introduction_image} alt="Introduction" />
        <h1 className='absolute text-white top-10 left-10 font-light text-xl py-3 px-3'>
          <span className=' inline-flex h-3 w-3 mr-2 -translate-y-1'>
            <span className=' animate-pulse duration-300 rounded-full h-2 w-2 bg-white
            '></span>
          </span>
          Introduction</h1>
          <h2 className='absolute text-white text-6xl top-30 left-10 font-normal'>5th Avenue apartment <br/> in the  heart of New York</h2>

          <div className='absolute top-80 right-5 flex flex-col gap-10 font-medium border border-white bg-white text-black rounded-4xl px-10 py-6 h-fit w-fit'>
           <span className='flex items-center gap-30'>
             <p className=' text-4xl'>200+</p>
            <p className=' text-xl'>Happy guests <br /> accommodated</p>
            <p><Smile size={35} strokeWidth={1}/> </p>
            </span>
            <hr className='border border-gray-400 w-full' />
            <span className='flex items-center gap-35'>
            <p className='text-4xl'>26%</p>
            <p className='text-xl'>Loyal Repeat <br /> visitors hosted</p>
            <p><Users2 size={35} strokeWidth={1}/> </p>
           </span>
           <hr className='border border-gray-400 w-full' />
           <span className='flex items-center gap-34'>
            <p className='text-4xl'>24/7</p>
            <p className='text-xl'>Professional <br /> guest support</p>
            <p><Wrench size={35} strokeWidth={1}/> </p>
           </span>
           
          </div>


        </div>
    </div>
  )
}

export default Hero