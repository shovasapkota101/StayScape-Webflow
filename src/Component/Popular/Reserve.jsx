import React, { useState } from 'react'
import AirBnbLogo from '../assets/airbnblogo.jpg' 
import HomeLogo from '../assets/home.jpg'
import CookingPot from '../assets/cooking_pot.jpg'
import HotAirBalloon from '../assets/airballoon.jpg'
import AK from '../assets/Reserve1.avif'
import RK from '../assets/Reserve2.avif'
import AK2 from '../assets/Reserve3.avif'
import RL from '../assets/Reserve4.avif'
import AK3 from '../assets/Reserve5.avif'
import AK4 from '../assets/Reserve6.avif'
import CL from '../assets/Reserve7.webp'
import AK5 from '../assets/Reserve8.avif'
import Seoul1 from '../assets/Seoul1.avif'
import Seoul2 from '../assets/Seoul2.avif'
import Seoul3 from '../assets/Seoul3.avif'
import Seoul4 from '../assets/Seoul4.avif'
import Seoul5 from '../assets/Seoul5.avif'
import Seoul6 from '../assets/Seoul6.avif'
import Seoul7 from '../assets/Seoul7.avif'
import Seoul8 from '../assets/Seoul8.avif'
import Tokyo1 from '../assets/Tokyo1.avif'
import Tokyo2 from '../assets/Tokyo2.avif'
import Tokyo3 from '../assets/Tokyo3.avif'
import Tokyo4 from '../assets/Tokyo4.avif'
import Tokyo5 from '../assets/Tokyo5.avif'
import Tokyo6 from '../assets/Tokyo6.avif'
import Tokyo7 from '../assets/Tokyo7.avif'
import Tokyo8 from '../assets/Tokyo8.avif'
import Melbourne1 from '../assets/Melbourne1.avif'
import Melbourne2 from '../assets/melbourne2.avif'
import Melbourne3 from '../assets/melbourne3.avif'
import Melbourne4 from '../assets/melbourne4.avif'
import Melbourne5 from '../assets/melbourne5.avif'
import Melbourne6 from '../assets/melbourne6.avif'
import Melbourne7 from '../assets/melbourne7.avif'
import Melbourne8 from '../assets/melbourne8.avif'
import { ChevronDown, ChevronRight, Copyright, Facebook, Globe, Instagram, Menu, SearchIcon} from 'lucide-react'

const Reserve = () => {
  const [activeTab, setActiveTab] = useState('home')

  const homes = [
    {
      id: 1,
      title: "Apartment in Kathmandu",
      price: "$62 for 2 nights",
      rating: 4.81,
      img: AK
    },
    {
      id: 2,
      title: "Room in Kathmandu",
      price: "$23 for 2 nights",
      rating:4.86 ,
      img: RK
    },
    {
      id: 3,
      title: "Apartment in Kathmandu",
      price: "$23 for 2 nights",
      rating: 4.95,
      img: AK2
    },
    {
      id: 4,
      title: "Room in Lalitpur",
      price: "$61 for 2 nights",
      rating: 4.99,
      img: RL
    },
    {
      id: 5,
      title: "Apartment in Kathmandu",
      price: "$23 for 2 nights",
      rating: 4.95,
      img:AK3 
    },
    {
      id: 6,
      title: "Apartment in Kathmandu",
      price: "121 for 2 nights",
      rating: 4.94,
      img:AK4
    },
    {
      id: 7,
      title: "Cottage in Lalitpur",
      price: "$99 for 2 nights",
      rating: 4.94,
      img: CL
    },
    {
      id: 8,
      title: "Apartment in Kathmandu",
      price: "$154 for  2 nights",
      rating: 4.96,
      img: AK5
    },
  ]

  const seoul = [
    {
      id: 1,
      title: "Home in Gahoe-dong, Jongno-gu",
      price: "$505 for 2 nights",
      rating: 4.95,
      img: Seoul1
    },
    {
      id: 2,
      title: "Apartment in Seoul",
      price: "$136 for 2 nights",
      rating: 5.0,
      img: Seoul2
    },
    {
      id: 3,
      title: "Home in Seoul",
      price: "$436 for 2 nights",
      rating: 4.99,
      img: Seoul3
    },
    {
      id: 4,
      title: "Apartment in Seoul",
      price: "$277 for 2 nights",
      rating: 4.83,
      img: Seoul4
    },
    {
      id: 5,
      title: "Home in Seoul",
      price: "$204 for 2 nights",
      rating: 4.91,
      img: Seoul5
    },
    {
      id: 6,
      title: "Apartment in Seoul",
      price: "$234 for 2 nights",
      rating: 4.96,
      img: Seoul6
    },
    {
      id: 7,
      title: "Home in Seoul",
      price: "$110 for 2 nights",
      rating: 4.88,
      img: Seoul7
    },
    {
      id: 8,
      title: "Room in Jongno-gu",
      price: "$155 for 2 nights",
      rating: 4.96,
      img: Seoul8
    }
  ]

  const tokyo = [
    {
      id: 1,
      title: "Room in Sumida-ku",
      price: "$162 for 2 nights",
      rating: 4.92,
      img: Tokyo1
    },
    {
      id: 2,
      title: "Hotel room in Taito-ku",
      price: "$124 for 2 nights",
      rating: 4.89,
      img: Tokyo2
    },
    {
      id: 3,
      title: "Boutique hotel in Shinjuku",
      price: "$146 for 2 nights",
      rating: 4.79,
      img: Tokyo3
    },
    {
      id: 4,
      title: "Hut in Taito-ku",
      price: "$94 for 2 nights",
      rating: 4.82,
      img: Tokyo4
    },
    {
      id: 5,
      title: "Apartment in Shinjuku",
      price: "$175 for 2 nights",
      rating: 4.37,
      img: Tokyo5
    },
    {
      id: 6,
      title: "Apartment in Toshima-k",
      price: "$194 for 2 nights",
      rating: 4.85,
      img: Tokyo6
    },
    {
      id: 7,
      title: "Hotel in Ota-ku",
      price: "$67 for 2 nights",
      rating: 4.83,
      img: Tokyo7
    },
    {
      id: 8,
      title: "Room in Sumida-ku",
      price: "$131 for 2 nights",
      rating: 4.97,
      img: Tokyo8
    }
    
  ]

  const melbourne = [
    {
      id: 1,
      title: "Room in Melbourne",
      price: "$143 for 2 nights",
      rating: 4.91,
      img: Melbourne1
    },
    {
      id: 2,
      title: "Place to stay in Oakleigh East",
      price: "$92 for 2 nights",
      rating: 5.0,
      img: Melbourne2
    },
    {
      id: 3,
      title: "Room in Southbank",
      price: "$131 for 2 nights",
      rating: 5.0,
      img: Melbourne3
    },
    {
      id: 4,
      title: "Room in Brunswick",
      price: "$123 for 2 nights",
      rating: 5.0,
      img: Melbourne4
    },
    {
      id: 5,
      title: "Room in Richmond",
      price: "$117 for 2 nights",
      rating: 4.8,
      img: Melbourne5
    },
    {
      id: 6,
      title: "Room in Braybrook",
      price: "$68 for 2 nights",
      rating: 5.0,
      img: Melbourne6
    },
    {
      id: 7,
      title: "Room in Abbotsford",
      price: "$143 for 2 nights",
      rating: 4.92,
      img: Melbourne7
    },
    {
      id: 8,
      title: "Place to stay in Melbourne",
      price: "$209 for 2 nights",
      rating: 5.0,
      img: Melbourne8
    }
  ]

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
    things: "Thiings to do",
    travel: "Travel tips and inspiration",
    airbnb: "Airbnb-friendly Apartment"
  }

  const currentYear = new Date().getFullYear();


  return (
    <div className='ml-10 pb-10 mr-10'>
        <div className='flex items-center gap-5 ml-30 mt-10 pb-5'>
            <img src={AirBnbLogo} alt="AirbnbLogo" className='h-10'/>
            <h1 className='text-red-600 font-medium text-4xl'>airbnb</h1>

             <span className='flex items-center ml-10 text-xl hover:font-bold '>
              <img src={HomeLogo} alt="Home" className='ml-[20rem] h-20' />
              <h1>Homes</h1>
             </span>
             <span className='flex items-center ml-20 text-xl hover:font-bold '>
              <img src={HotAirBalloon} alt="AirBalloon" className='h-15' />
              <h1>Experiences</h1>
             </span>
             <span className='flex ml-10 items-center text-xl hover:font-bold '>
              <img src={CookingPot} alt="Cooking" className=' h-20' />
              <h1>Services</h1>
              
             </span>

             <span className='ml-[8rem] font-bold text-xl  hover:rounded-full hover:bg-gray-200 duration-300 px-4 py-3'>
              <h1>Become a host</h1>
             </span>

             <span className='border bg-gray-100 border-gray-100 rounded-full hover:rounded-full hover:bg-gray-200 px-3 py-3 '>
              <Globe size={30} strokeWidth={1}/>
             </span>

             <span className='border bg-gray-100 border-gray-100 rounded-full px-3 py-3 hover:bg-gray-200'>
              <Menu strokeWidth={1} size={30}/>
             </span>
        </div>
        
        <div className='flex-col items-center justify-center ml-[10rem] pb-[4rem]'>
        <span className='flex items-center justify-center border border-gray-300 shadow-xl rounded-full gap-10 text-xl h-[6rem] w-fit px-6 '>
            <h1 className=' hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>Where <br /> <span className='text-gray-400'>Search Destinstions</span></h1>
          <span className='border h-10 border-gray-300'/>
          <h1 className='cursor-pointer hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>Check in <br /><span className='text-gray-400'>Add dates</span></h1>
          <span className='border h-10 border-gray-300'/>
          <h1 className='cursor-pointer hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>Check out <br /><span 
          className='text-gray-400'>Add dates</span></h1>
          <span className='border h-10 border-gray-300'/>
          <div className='flex justify-center items-center cursor-pointer gap-30 hover:border-gray-200 hover:bg-gray-200 rounded-full transition-all duration-200 px-12 py-5'>
            <h1>Who <br /><span className='text-gray-400'>Add guests</span></h1>
           <span className='flex items-center justify-center border border-red-500 bg-red-500  hover:border hover:bg-red-700 hover:border-red-700 rounded-full h-15 w-15'>
             <SearchIcon strokeWidth={1} className='text-white'/>
           </span>
          </div>
        </span>
        </div>
        <hr className='w-full ' />


       <div>
  <div className="flex items-center gap-2 text-2xl font-medium mb-3 mt-5">
    <h1>Popular homes in Kathmandu</h1>
    <ChevronRight />
  </div>

  {/* horizontal scroll container */}
  <div className="flex gap-4 overflow-auto p-2 scrollbar-hide">
    {homes.map((home) => (
      <div
        key={home.id}
        className="min-w-[250px] bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex-shrink-0"
      >
        <img
          src={home.img}
          alt={home.title}
          className="w-60 h-60 object-cover rounded-2xl"
        />
        <div className="p-3">
          <h3 className="font-medium">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-sm text-gray-500">{home.price}</p>
          <p className="text-sm font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

<div>
  <div className="flex items-center gap-2 text-2xl font-medium mb-3 mt-10">
    <h1>Available next months in Seoul</h1>
    <ChevronRight />
  </div>

  {/* horizontal scroll container */}
  <div className="flex gap-4 overflow-auto p-2 scrollbar-hide">
    {seoul.map((home) => (
      <div
        key={home.id}
        className="min-w-[250px] bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex-shrink-0"
      >
        <img
          src={home.img}
          alt={home.title}
          className="w-60 h-60 object-cover rounded-2xl"
        />
        <div className="p-3">
          <h3 className="font-medium">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-sm text-gray-500">{home.price}</p>
          <p className="text-sm font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


<div>
  <div className="flex items-center gap-2 text-2xl font-medium mb-3 mt-10">
    <h1>Stay in Tokyo</h1>
    <ChevronRight />
  </div>

  {/* horizontal scroll container */}
  <div className="flex gap-4 overflow-auto p-2 scrollbar-hide">
    {tokyo.map((home) => (
      <div
        key={home.id}
        className="min-w-[250px] bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex-shrink-0"
      >
        <img
          src={home.img}
          alt={home.title}
          className="w-60 h-60 object-cover rounded-2xl"
        />
        <div className="p-3">
          <h3 className="font-medium">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-sm text-gray-500">{home.price}</p>
          <p className="text-sm font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>

   {/* horizontal scroll container */}
  <div className="flex gap-4 overflow-auto p-2 scrollbar-hide">
    {melbourne.map((home) => (
      <div
        key={home.id}
        className="min-w-[250px] bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex-shrink-0"
      >
        <img
          src={home.img}
          alt={home.title}
          className="w-60 h-60 object-cover rounded-2xl"
        />
        <div className="p-3">
          <h3 className="font-medium">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-sm text-gray-500">{home.price}</p>
          <p className="text-sm font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

<footer>
  <div className=' pd-10 py-10 mt-5 bg-gray-100 cursor-pointer'>
   
   <section className='ml-5'>
     <h1 className='text-4xl font-medium'>Inspiration for future fateways</h1>
     
     <div className='flex flex-wrap text-xl mt-5 gap-6 border-b border-gray-300 pb-5 text-gray-600'>
      {tabNames.map((tab) => (
        <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative pb-1 transition-all duration-300 ${
          activeTab === tab
          ? "text-black text-xl font-medium after:absolute after:bottom-0 after:left-0  after:w-full after:h-[2px] after:bg-black"
          : "hover:text-black"
        }`}
        >
          {labelMap[tab]}

        </button>
      ))}
      </div>

      <div className='grid grid-cols-2 text-lg sm:grid-cols-3 md:grid-cols-6 gap-y-6 mt-6 text-gray-800'>
        {(tabs[activeTab] || []).map((item, index) => (
          <span key={index}>
            <p className='font-semibold truncate'>{item.city}</p>
            <p className='text-gray-600 hover:text-black'>{item.type}</p>
          </span>
        ))}
        
      <span className='flex gap-2'>
        <p class="font-semibold text-gray-800 text-lg cursor-pointer hover:underline">Show more</p>
        <ChevronDown className='mt-1'/>
      </span>
     
      </div>


     <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-15'>
      <span className='text-lg'>
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

      <span className='text-lg'>
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

      <span className='text-lg'>
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

     <div className="flex w-full  text-gray-700 items-center text-sm">
  {/* Left side */}
  <p className="flex items-center gap-2">
    <Copyright strokeWidth={1} size={20} /> {currentYear} Airbnb, Inc.
  </p>

  {/* Right side */}
  <ol className="flex w-full gap-5 list-disc list-inside">
    <li className="hover:underline cursor-pointer">Terms</li>
    <li className="hover:underline cursor-pointer">Sitemap</li>
    <li className="hover:underline cursor-pointer">Privacy</li>
    <li className="hover:underline cursor-pointer">Your Privacy Choices</li>
  </ol>

     <span className='flex items-center justify-end gap-5 text-xl font-medium mr-5 w-full cursor-pointer'>
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