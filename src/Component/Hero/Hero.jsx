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
              <button className='px-4 py-2 mt-8 ml-4 gap-3 border border-gray-300 rounded-full text-2xl font-normal flex items-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out'> <Building2/> StayScape</button> 

            
               <button className='flex items-center ml-130 mt-8 gap-2 py-4 px-2 border border-gray-300 w-16 h-16 rounded-full justify-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out '><PhoneCall size={25}/></button>

            <div ref={menuRef} className='relative'>
              <button 
               onClick={() => setMenuOpen(!menuOpen) }
                    
              className=' flex items-center ml-1 mt-8 border border-gray-300 w-16 h-16 rounded-full justify-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out '><Menu size={25}/></button>
              {menuOpen && (
                <div className='absolute right-0 top-20 bg-white border border-gray-400 rounded-3xl shadow-lg p-6 m-6 w-fit z-50'>
                  <ul className='flex flex-col gap-4 mt-6 text-gray-800'>
                    
                     <div className='flex justify-between gap-50'>
                    <button
                    onClick={() => {
                      const aboutsection = document.getElementById('about');
                      if (aboutsection){
                        aboutsection.scrollIntoView({ behavior: 'smooth' });
                        setMenuOpen(false);
                      }
                      
                    }}
                    className='text-left hover:text-blue-600 text-3xl font-medium w-full'>
                      About
                      <p className='text-sm text-gray-500'>Explore this home</p>
                    </button>

                    <button
                      onClick={() => {
                        const gallerysection =document.getElementById('gallery');
                        if (gallerysection){
                          gallerysection.scrollIntoView({ behavior : 'smooth'});
                          setMenuOpen(false);
                        }
                      }}
                      className='text-left hover:text-blue-600 text-3xl font-medium w-full'
                    >
                      Gallery
                      <p className='text-sm text-gray-500'>Take a look inside</p>
                      
                    </button>
                   
                   <button onClick={() =>{
                    const featuressection = document.getElementById('features');
                    if(featuressection){
                      featuressection.scrollIntoView({
                        behavior : 'smooth'
                      });
                    }
                   } }
                    className='text-left hover:text-blue-600 text-3xl font-medium'
                   >
                    Features
                    <p className='text-sm text-gray-500'>Made for comfort</p>

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
                       className='text-left hover:text-blue-600 text-3xl font-medium'
                      >
                        Reviews
                        <p className='text-sm text-gray-500'>What guests say</p>

                      </button>

                      <button onClick={() => {
                        const pricingsection = document.getElementById('pricing');
                        if(pricingsection){
                          pricingsection.scrollIntoView({
                            behavior:'smooth'
                          });
                        }
                      }}
                      className='text-left hover:text-blue-600 text-3xl font-medium'
                      >
                        Pricing
                        <p className='text-sm text-gray-500'>Rates per night</p>

                      </button>

                      <button onClick={() => {
                        const locationsection = document.getElementById('location');
                        if (locationsection){
                          locationsection.scrollIntoView({
                            behavior:'smooth'
                          });
                        }
                      }}
                      className='text-left hover:text-blue-600 text-3xl font-medium'>
                        Location
                         <p className='text-sm text-gray-500'>Our NYC address</p>
                      </button>
                      
                    </div>
                    <div className='relative overflow-hidden rounded-4xl' onClick={handlereserveClick}>
                      <img src={Reserve_Image} alt="Reserve" className='h-50 w-full rounded-4xl transform transition-transform duration-500 hover:scale-110' />
                      <p className='absolute text-white top-15 cursor-pointer ml-45 flex items-center gap-4 text-5xl font-medium py-3 px-3'>Reserve Now <ArrowUpRight size={50} /> </p>
                    </div>
                  </ul>
                </div>
              )}
            </div>
        </div>

          <button className='flex mt-10 ml-60 border border-gray-300 rounded-full px-4 py-2 text-2xl font-light'>
              <span className='flex items-center gap-2'>
                     <MapPin/> 953 5th Ave, New York <ArrowUpRight/>
              </span>
          </button>

            <h1 className='ml-40 mt-8 text-7xl font-semibold leading-[1.2]'>Urban Comfort <br /> in New York City</h1>
               <p className='text-2xl font-light ml-70 mt-8'>Loved by 200+ happy guests</p>
               
                  
           <button className='flex px-4 py-2 items-center gap-1 border border-gray-300 rounded-full bg-black text-white mt-10 ml-70 h-20 w-70 hover:bg-blue-800 duration-200 hover:scale-105' onClick={handlereserveClick}> <div className='flex items-center justify-center bg-white text-black border rounded-full h-13 w-14' ><ArrowUpRight/></div> <span className='text-3xl'>Reserve Now</span></button>

          
               <button className='flex flex-col items-center border border-gray-300 rounded-4xl mt-12 ml-18 gap-8 px-30 py-8 shadow-sm w-fit space-x-2 '> 
                 <div className="flex items-center space-x-4">
                      <Leaf size={50}/> 
                       <div className='text-center text-2xl leading-tight'>
                       <p>Guest <br />favourite</p>
                       </div>
                       <Leaf size={50}/>
                 </div>
                  
                   <div className='flex items-center gap-15 text-3xl font-medium'>
                     <h1>100% <br /> <span className='font-light text-2xl'>Reply Rate</span></h1>
                     <span className='h-10 border-l border-gray-300'></span>
                     <h1>4.98</h1>
                     
                      <span className='h-10 border-1 border-gray-300'></span>
                     <h1>137 <br /> <span className='font-light text-2xl'>Reviews</span></h1>
                   </div>

                 </button>
           
                    
        </div>

              <div className='flex'>
                <img src={BannerImage} alt="Banner"  className='w-250 rounded-4xl h-240 shadow-md object-cover'/>
                <div className='absolute top-[53rem] right-10 border border-gray-300 rounded-full h-20 w-20 flex items-center justify-center cursor-pointer bg-white hover:bg-blue-600  transition-all duration-300 ease-in-out ' onClick={handlemapclick}><MapIcon size={35} strokeWidth={1} className='text-gray-600 hover:text-white' /></div>
              </div>
        </div> 
        <div className='relative w-fit mt-8 '> <img src={Introduction_image} alt="Introduction" />
        <h1 className='absolute text-white top-10 left-10 font-light text-2xl py-3 px-3'>
          <span className=' inline-flex h-3 w-3 mr-2 -translate-y-1'>
            <span className=' animate-pulse duration-300 rounded-full h-2 w-2 bg-white
            '></span>
          </span>
          Introduction</h1>
          <h2 className='absolute text-white text-8xl top-30 left-10 font-normal'>5th Avenue apartment <br/> in the  heart of New York</h2>

          <div className='absolute top-120 right-10 flex flex-col gap-15 font-medium border border-white bg-white text-black rounded-4xl px-10 py-6 h-fit w-fit'>
           <span className='flex items-center gap-30'>
             <p className=' text-8xl'>200+</p>
            <p className=' text-4xl'>Happy guests <br /> accommodated</p>
            <p><Smile size={65} strokeWidth={1}/> </p>
            </span>
            <hr className='border border-gray-400 w-full' />
            <span className='flex items-center gap-35'>
            <p className='text-8xl'>26%</p>
            <p className='text-4xl'>Loyal Repeat <br /> visitors hosted</p>
            <p><Users2 size={65} strokeWidth={1}/> </p>
           </span>
           <hr className='border border-gray-400 w-full' />
           <span className='flex items-center gap-34'>
            <p className='text-8xl'>24/7</p>
            <p className='text-4xl'>Professional <br /> guest support</p>
            <p><Wrench size={65} strokeWidth={1}/> </p>
           </span>
           
          </div>


        </div>
    </div>
  )
}

export default Hero