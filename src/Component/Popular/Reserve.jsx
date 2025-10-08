import React from 'react'
import AirBnbLogo from '../assets/airbnblogo.jpg' 
import HomeLogo from '../assets/home.jpg'
import CookingPot from '../assets/cooking_pot.jpg'
import HotAirBalloon from '../assets/airballoon.jpg'

const Reserve = () => {
  return (
    <div className=''>
        <div className='flex items-center gap-5 ml-30 mt-30 pb-30'>
            <img src={AirBnbLogo} alt="AirbnbLogo" className='h-10'/>
            <h1 className='text-red-600 font-medium text-4xl'>airbnb</h1>
             <img src={HomeLogo} alt="Home" className='ml-[20rem] h-20' />
             <h1>Homes</h1>
             <img src={HotAirBalloon} alt="AirBalloon" className='h-15' />
             <h1>Experiences</h1>
             <img src={CookingPot} alt="Cooking" className='h-20' />
             <h1>Services</h1>
        </div>
        <div>
         
        </div>
    </div>
  )
}

export default Reserve