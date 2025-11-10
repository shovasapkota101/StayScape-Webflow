import React, { useState } from 'react'
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
import { ChevronRight } from 'lucide-react'

const ReserveImg = () => {
    const [activeTab, setActiveTab] = useState('home');
    
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


  return (
    <div>
         <div>
  <div className="flex items-center gap-2 text-xl font-medium mb-3 mt-5">
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
          <h3 className="font-medium text-sm">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-xs text-gray-500">{home.price}</p>
          <p className="text-xs font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

<div>
  <div className="flex items-center gap-2 text-xl font-medium mb-3 mt-10">
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
          <h3 className="font-medium text-sm">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-xs text-gray-500">{home.price}</p>
          <p className="text-xs font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


<div>
  <div className="flex items-center gap-2 text-xl font-medium mb-3 mt-10">
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
          <h3 className="font-medium text-sm">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-xs text-gray-500">{home.price}</p>
          <p className="text-xs font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>

  <div>
     <div className="flex items-center gap-2 text-xl font-medium mb-3 mt-10">
    <h1>Available next months in Melbourne</h1>
    <ChevronRight />
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
          <h3 className="font-medium text-sm">{home.title}</h3>
          <span className='flex items-center gap-2'>
            <p className="text-xs text-gray-500">{home.price}</p>
          <p className="text-xs font-semibold mt-1">⭐ {home.rating}</p>
          </span>
        </div>
      </div>
    ))}
  </div>
  </div>
</div>
    </div>
  )
}

export default ReserveImg