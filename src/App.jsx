import { useState } from 'react'
import './App.css'

import Hero from './Component/Hero/Hero'
import About from './Component/Pages/About'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Feature from './Component/Pages/Feature'
import Gallery from './Component/Pages/Gallery'
import Reviews from './Component/Pages/Reviews'
import Pricing from './Component/Pages/Pricing'
import Location from './Component/Pages/Location'
import Footer from './Component/Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
                <Hero/> <About/>
                <Gallery/> <Feature/> 
                <Reviews/>
                <Pricing/>
                <Location/>
                <Footer/>
            </>
          }
          />
         
        </Routes>
    </BrowserRouter>    
      
     </>
  )
}

export default App
