import React, { useState } from 'react'
import AirBnbLogo from '../assets/airbnblogo.jpg' 
import HomeLogo from '../assets/home.jpg'
import CookingPot from '../assets/cooking_pot.jpg'
import HotAirBalloon from '../assets/airballoon.jpg'

import { ChevronDown, Copyright, Facebook, Globe, Instagram, Menu, SearchIcon} from 'lucide-react'
import ReserveImg from './ReserveImg'

const Reserve = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = {
    popular: [
      {city: "Philadelphia",type:"Villa rentals"},
      {city: "Mount Pocono",type:"Cottage rentals"},
      {city: "Savannah",type:"Apartment rentals"},
      {city: "Manhattan",type:"Apartment rentals"},
      {city: "Brooklyn",type:"House rentals"},
      {city: "Detroit",type:"Condo rentals"},
      {city: "Albuquerque",type:"House rentals"},
      {city: "Kyoto",type:"Vacation rentals"},
      {city: "Chaeleston",type:"Condo rentals"},
      {city: "London",type:"Vacation rentals"},
    ],

    arts: [
      {city: "Snowbird Ski Resort Heliport", type: "Condo rentals"},
      {city: "Coronado Island", type: "Cottage rentals"},
      {city: "Playas Samara", type: "Condo rentals"},
      {city: "Telluride Ski Resort", type: "Cabin rentals"},
      {city: "Hondik University", type: "Vacation rentals"},
      {city: "Le Marais", type: "Vacation rentals"},
      {city: "Beech Mountain Ski Resort", type: "Cabin rentals"},
      {city: "Everglades", type: "Villa rentals"},
      {city: "Jack Frost Ski Resort", type: "House rentals"},
      {city: "Northstar At Tahoe Resort", type: "Vacation rentals"},
      {city: "Namba Sta.", type: "Condo rentals"},
    ],

    beach: [
      {city:"Zipolite, Oaxaca", type:"Pet-friendly rentals"},
      {city:"Misquamicut State Beach", type:"Pet-friendly rentals"},
      {city:"Playa Cocles", type:"Beachfront rentals"},
      {city:"Jamica Beach", type:"Beachfront rentals"},
      {city:"Playa Negra", type:"Villa rentals"},
      {city:"Playa Norte", type:"Apartment rentals"},
      {city:"Caya Caulker", type:"Beachfront rentals"},
      {city:"Upham Beach", type:"House rentals"},
      {city:"Guarapari", type:""},
      {city:"Bridgetown", type:"Apartment rentals"},
      {city:"Newquay", type:"Apartment rentals"},
    ],

    mountains: [
      {city:"Durango", type:"Cabin rentals"},
      {city:"Ogden", type:"Pet-friendly rentals"},
      {city:"Glendale", type:"Pet-friendly rentals"},
      {city:"St. Moritz", type:"Condo rentals"},
      {city:"Kalispell", type:"Condo rentals"},
      {city:"Denver", type:"Condo rentals"},
      {city:"Fullerton", type:"pet-friendly rentals"},
      {city:"Visalia", type:"Apartment rentals"},
      {city:"Alpharetta", type:"Vella rentals"},
      {city:"Oslo", type:"Pet-friendly rentals"},
      {city:"Staunton", type:"Cabin rentals"},
    ],

    outdoors: [
      {city:"Palm Springs", type:"Cottage rentals"},
      {city:"Orderville", type:"Cabin rentals"},
      {city:"Carolina", type:"Condo rentals"},
      {city:"Quepos", type:"Apartment rentals"},
      {city:"Sequim", type:"Apartment rentals"},
      {city:"Falmouth", type:"Vacation rentals"},
      {city:"Santa Marta", type:"Cabin rentals"},
      {city:"Juan Dolio", type:"House rentals"},
      {city:"Kanab", type:"Cabin rentals"},
      {city:"Evergreen", type:"Apartment rentals"},
    ],

    things: [
      {city:"Puebla", type:"Nature and outdoors"},
      {city:"Maxico City", type:"Entertainment"},
      {city:"Homshu", type:"Art and culture"},
      {city:"Rome", type:"Nature and outdoors"},
      {city:"Tokyo", type:"Things to do"},
      {city:"Plainview", type:"Things to do"},
      {city:"Tama River", type:"Sports activities"},
      {city:"Florence", type:"Tours"},
      {city:"Medellin River", type:"Things to do"},
      {city:"Rome Norte", type:"Things to do"},
      {city:"Medellin", type:"Nature and outdoors"},
    ],

    travel: [
      {city:"Familt travel hub", type:"Tips and inspiration"},
      {city:"Famiy budget travel", type:"Get there for less"},
      {city:"Vacation ideas for any budget", type:"Make it special without makin..."},
      {city:"Travel Europe on a budget", type:"How to take the  kids to Euro..."},
      {city:"Outdoor Aventure", type:"Explore nature with the fam..."},
      {city:"Bucket list national park", type:"Must see parks for family tra..."},
      {city:"Kid-friendly state parks", type:"Check out these family-friend..."},
    ],

    airbnb: [
      {city:"Albuquerque", type:"New Maxico"},
      {city:"Arlington, TX", type:"Texas"},
      {city:"Atlanta Metro", type:"Georgia"},
      {city:"Augusta", type:"Georgia"},
      {city:"Bentonville", type:"Arkansas"},
      {city:"Birmingham", type:"Alabama"},
      {city:"Boise", type:"Idaho"},
      {city:"Chicago Metro", type:"Illinois"},
      {city:"Cincinnati", type:"Ohio"},
      {city:"Columbus", type:"Ohio"},
      {city:"Crestview", type:"Florida"},
    ]
  }

  const tabNames = [
    "popular",
    "arts",
    "beach",
    "mountains",
    "outdoors",
    "things",
    "travel",
    "airbnb"
  ]

  const labelMap = {
    popular: "Popular",
    arts: "Arts & culture",
    beach: "Beach",
    mountains: "Mountains",
    outdoors: "Outdoors",
    things: "Things to do",
    travel: "Travel tips and inspiration",
    airbnb: "Airbnb-friendly Apartment"
  }

  const currentYear = new Date().getFullYear();


  return (
    <div className='ml-10 pb-10 mr-10'>
        <div className='flex items-center gap-3 ml-5 mt-5 pb-5'>
            <img src={AirBnbLogo} alt="AirbnbLogo" className='h-8'/>
            <h1 className='text-red-600 font-medium text-2xl'>airbnb</h1>

             <span className='flex items-center ml-10 text-sm hover:font-bold '>
              <img src={HomeLogo} alt="Home" className='ml-[18rem] h-15' />
              <h1>Homes</h1>
             </span>
             <span className='flex items-center ml-20 text-sm hover:font-bold '>
              <img src={HotAirBalloon} alt="AirBalloon" className='h-13' />
              <h1>Experiences</h1>
             </span>
             <span className='flex ml-10 items-center text-sm hover:font-bold '>
              <img src={CookingPot} alt="Cooking" className=' h-13' />
              <h1>Services</h1>
              
             </span>

             <span className='ml-[8rem] font-bold text-sm  hover:rounded-full hover:bg-gray-200 duration-300 px-4 py-3'>
              <h1>Become a host</h1>
             </span>

             <span className='border bg-gray-100 border-gray-100 rounded-full hover:rounded-full hover:bg-gray-200 px-2 py-2 '>
              <Globe size={20} strokeWidth={1}/>
             </span>

             <span className='border bg-gray-100 border-gray-100 rounded-full px-2 py-2 hover:bg-gray-200'>
              <Menu strokeWidth={1} size={20}/>
             </span>
        </div>
        
        <div className='flex-col items-center justify-center ml-[6rem] pb-[4rem]'>
        <span className='flex items-center justify-center border border-gray-300 shadow-xl rounded-full gap- text-sm h-[5rem] w-fit px-6 '>
            <h1 className=' hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-8 py-5'>Where <br /> <span className='text-gray-400'>Search Destinstions</span></h1>
          <span className='border h-7 border-gray-300'/>
          <h1 className='cursor-pointer hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>Check in <br /><span className='text-gray-400'>Add dates</span></h1>
          <span className='border h-7 border-gray-300'/>
          <h1 className='cursor-pointer hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>Check out <br /><span 
          className='text-gray-400'>Add dates</span></h1>
          <span className='border h-7 border-gray-300'/>
          <div className='flex justify-center items-center cursor-pointer gap-30 hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-8 py-3'>
            <h1>Who <br /><span className='text-gray-400'>Add guests</span></h1>
           <span className='flex items-center justify-center border border-red-500 bg-red-500  hover:border hover:bg-red-700 hover:border-red-700 rounded-full h-14 w-14'>
             <SearchIcon strokeWidth={1} className='text-white'/>
           </span>
          </div>
        </span>
        </div>
        <hr className='w-full ' />

        <ReserveImg/>


<footer>
  <div className=' pd-10 py-10 mt-5 bg-gray-100 cursor-pointer'>
   
   <section className='ml-5'>
     <h1 className='text-2xl font-medium'>Inspiration for future fateways</h1>
     
     <div className='flex flex-wrap text-lg mt-5 gap-6 border-b border-gray-300 pb-5 text-gray-600'>
      {tabNames.map((tab) => (
        <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative pb-1 transition-all duration-300 ${
          activeTab === tab
          ? "text-black text-lg font-medium after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black"
          : "hover:text-black"
        }`}
        >
          {labelMap[tab]}

        </button>
      ))}
      </div>

      <div className='grid grid-cols-2 text-sm sm:grid-cols-3 md:grid-cols-6 gap-y-6 mt-6 text-gray-800'>
        {(tabs[activeTab] || []).map((item, index) => (
          <span key={index}>
            <p className='font-semibold truncate'>{item.city}</p>
            <p className='text-gray-600 hover:text-black'>{item.type}</p>
          </span>
        ))}
        
      <span className='flex gap-2'>
        <p class="font-semibold text-gray-800 text-sm cursor-pointer hover:underline">Show more</p>
        <ChevronDown className='mt-1'/>
      </span>
     
      </div>


     <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-15'>
      <span className='text-sm'>
        <h3 className='font-semibold mb-2'>Support</h3>
        <ul className='space-y-4'>
          <li><a href="#" className='hover:underline'>Help center</a></li>
          <li><a href="#" className='hover:underline'>Get help with a safety issue</a></li>
          <li><a href="#" className='hover:underline'>AirCover</a></li>
          <li><a href="#" className='hover:underline'>Anti-discrimination</a></li>
          <li><a href="#" className='hover:underline'>Disabillity support</a></li>
          <li><a href="#" className='hover:underline'>Cancellation option</a></li>
          <li><a href="#" className='hover:underline'>Report neighborhood concern</a></li>
        </ul>
      </span>

      <span className='text-sm'>
        <h1 className='font-semibold mb-2'>Hosting</h1>
        <ul className='space-y-4'>
          <li><a href="#" className='hover:underline'>Airbnb your home</a></li>
          <li><a href="#" className='hover:underline'>Airbnb your experience</a></li>
          <li><a href="#" className='hover:underline'>Airbnb your service</a></li>
          <li><a href="#" className='hover:underline'>AirCover for Hosts</a></li>
          <li><a href="#" className='hover:underline'>Hosting resources</a></li>
          <li><a href="#" className='hover:underline'>Community forum</a></li>
          <li><a href="#" className='hover:underline'>Hosting responsibly</a></li>
          <li><a href="#" className='hover:underline'>Airbnb-friendly apartment</a></li>
          <li><a href="#" className='hover:underline'>Join a free Hosting class</a></li>
          <li><a href="#" className='hover:underline'>Find a co-host</a></li>
        </ul>
      </span>

      <span className='text-sm'>
        <h1 className='font-semibold mb-2'>Airbnb</h1>
        <ul className='space-y-4'>
          <li><a href="#" className='hover:underline'>2025 Summer Release</a></li>
          <li><a href="#" className='hover:underline'>Newsroom</a></li>
          <li><a href="#" className='hover:underline'>Careers</a></li>
          <li><a href="#" className='hover:underline'>Investors</a></li>
          <li><a href="#" className='hover:underline'>Gift cards</a></li>
          <li><a href="#" className='hover:underline'>Airbnb.org emergency stays</a></li>
        </ul>
      </span>

     </div>
     <hr className='ml-5 mr-5 mt-7 border-gray-300' />

     <div className="flex w-full  text-gray-700 items-center text-xs">
  {/* Left side */}
  <p className="flex items-center gap-2 whitespace-nowrap">
    <Copyright strokeWidth={1} size={20} /> {currentYear} Airbnb, Inc.
  </p>

  {/* Right side */}
  <ol className="flex w-full gap-5 list-disc list-inside ml-5">
    <li className="hover:underline cursor-pointer">Terms</li>
    <li className="hover:underline cursor-pointer">Sitemap</li>
    <li className="hover:underline cursor-pointer">Privacy</li>
    <li className="hover:underline cursor-pointer">Your Privacy Choices</li>
  </ol>

     <span className='flex items-center justify-end gap-5 text-sm font-medium mr-5 w-full cursor-pointer'>
      <Globe strokeWidth={1}/><p>English (US)</p>
      <p>$ USD</p>
      <span className='flex items-center justify-center hover:border rounded-full h-10 w-10 hover:bg-gray-200 hover:border-gray-200  '><Facebook strokeWidth={1}/></span>
      <span className='flex items-center justify-center hover:border rounded-full h-10 w-10 hover:bg-gray-200 hover:border-gray-200  '><Instagram strokeWidth={1}/></span>
     </span>
     </div>

   </section>
  </div>
</footer>


    </div>
  )
}

export default Reserve