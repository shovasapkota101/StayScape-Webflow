import { useState } from 'react'
import './App.css'

import Hero from './Component/Hero/Hero'
import About from './Component/Pages/About'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Feature from './Component/Pages/Feature'
import Gallery from './Component/Pages/Gallery'

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
            </>
          }
          />
         
        </Routes>
    </BrowserRouter>    
      
     </>
  )
}

export default App
