import { useState } from 'react'
import './App.css'

import Hero from './Component/Hero/Hero'
import About from './Component/Hero/About'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Gallery from './Component/Hero/Gallery'
import Feature from './Component/Hero/Feature'

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
