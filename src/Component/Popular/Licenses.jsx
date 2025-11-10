import { ArrowUpRight, Icon, Image, Layers, Pencil, Text, Type } from 'lucide-react'
import React from 'react'
import Footer from '../Pages/Footer'

const Licenses = () => {

    const cards = [
        {
            title: "Images",
            text: "All images are sourced from Pexels, available free for personal and commercial use.",
            button: "Get Images",
            icon: <Image size={40} strokeWidth={1.5}/>,
        },
        {
            title: "Icons",
            text: "All icons are sourced from Phosphor Icons, available free for personal and commercial use.",
            button: "Get Icons",
            icon: <Layers size={40} strokeWidth={1.5}/>,
        },
        {
            title: "Fonts",
            text: "We chose the Figtree font from Google Fonts, available free for personal and commercial use.",
            button: "Get Font",
            icon: <Type size={40} strokeWidth={1.5}/>,
        },
        {
            title: "Context",
            text: "Context created with help from ChatGPT, an advanced AI language model.",
            button: "Open ChatGPT",
            icon: <Pencil size={40} strokeWidth={1.5}/>,
        }
    ]
  return (
    <div>
        <div className='mt-30 pb-40'>
            <span className='flex justify-center '>
                <h1 className='text-5xl font-medium'>Licenses</h1>
            </span>
            <p className='flex justify-center text-center mt-5 text-lg text-gray-400 font-medium leading-[-1]'>All graphical assets in this template are licensed for <br /> personal and commercial use. If you'd like to use a <br /> specific asset, please check the license below.</p>

            <div className='flex justify-center gap-3 text-sm font-medium mt-10'>
                <button className='flex items-center justify-center gap-3 border rounded-full px-2 py-1 bg-black text-white hover:bg-blue-800  hover:scale-110 duration-300'> <span className='flex justify-center items-center border rounded-full px-2 py-2 bg-white text-black hover:border-blue-900'>
                   <ArrowUpRight strokeWidth={1}/> </span> Our Templates</button>
            </div>
            
            <div className=' bg-neutral-50 flex  justify-center p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full h-200'>
                    {cards.map((card, i) => (
                        <div
                        key={i}
                        className='rounded-4xl border border-neutral-200 bg-white p-20 text-center shadow-sm hover:-translate-y-1 transition'
                        >
                            <div className='flex justify-center mb-4 text-neutral-800'>{card.icon}</div>
                            <h3 className='text-2xl font-semibold mb-2'>{card.title}</h3>
                            <p className='text-neutral-600 mb-6 text-sm'>{card.text}</p>
                            <button className='bg-black text-white px-2 py-2 text-sm rounded-full hover:bg-blue-700 transition'>{card.button}</button>
                        </div>
                    ) )}
                </div>
            </div>


        </div>
        <Footer/>
    </div>
  )
}

export default Licenses