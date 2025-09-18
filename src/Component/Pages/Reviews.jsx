import { ArrowDown, ArrowUpRight, Leaf, Star } from 'lucide-react'
import React from 'react'
import PawanImg from '../assets/pawan.jpg'
import BhimImg from '../assets/bhim.jpg'
import MinaImg from '../assets/mina.jpg'
import PrabinImg from '../assets/prabin.jpg'
import AakankshyaImg from '../assets/aakankshya.jpg'
import SradhaImg from '../assets/sradha.jpg'
import LaxmanImg from '../assets/laxman.jpg'
import BabitaImg from '../assets/babita.jpg'
import BhumikaImg from '../assets/bhumika.jpg'
import CentralPark from '../assets/Park.jpg'
import Location from '../assets/location.jpg'
import DogImg from '../assets/dog.jpg'
import Cancellation from '../assets/Cancel.JPG'

const Reviews = () => {
  return (
    <div id='review' className=''>
        <div className='flex flex-col items-center justify-center mt-40 '>
            <h1 className='text-3xl'>
                <span className='inline-flex'>
                    <span className='rounded-full bg-black h-2 w-2 animate-pulse mr-3 -translate-y-1' />
                </span>
                Reviews</h1>
                 <span className='flex items-center justify-center text-8xl font-medium mt-5 gap-5'>
            <Leaf size={50}/>
            <p className=''>4.98</p>
            <Leaf size={50}/>
         </span>
         <p className='text-5xl mt-5 text-gray-500'>We're proud to deliver a stay <br /> that guests consistently love.</p>

         <p className='flex text-4xl mt-10 gap-20 font-medium leading-[1.3]'> 
            <span className='flex flex-col items-center'>
                4.9 <span className='text-2xl text-gray-400'>Cleanliness</span>
            </span>
            <span className='h-20 border border-gray-200' />
            <span className='flex flex-col items-center'>
                5.0 <span className='text-2xl text-gray-400'>Accuracy</span>
            </span>
            <span className='h-20 border border-gray-200' />
            <span className='flex flex-col items-center'>
              5.0 <span className='text-2xl text-gray-400'>Check-in</span>
            </span>
            <span className='h-20 border border-gray-200' />
           
           <span className='flex flex-col items-center '>
                5.0 <span className='text-2xl text-gray-400'>Check-in</span>
           </span>
         </p>

               
        </div>

         <div className='flex mt-20 text-3xl'>

            <div className='border border-gray-300 mt-20 rounded-4xl ml-20 h-110 w-130 p-6 '>
             <span className='flex'>
                 <img src={PawanImg} alt="Pawan" className='h-15 rounded-full'/>
                <h1 className='flex flex-col ml-3'>Pawan D. <span className='text-xl text-gray-500'>Kailali, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Felt like a true home away from home! The apartment was spotless, beautifully decorated, and just steps from Central Park. The host was super responsive - I'd definitely stay again.</p>

             <p className='text-2xl mt-15 text-gray-400'>Aug 28, 2025</p>
            </div>

             <div className='border border-gray-300 rounded-4xl mt-10 ml-10 h-110 w-130 p-6 '>
             <span className='flex'>
                 <img src={BhimImg} alt="Bhim" className='h-15 rounded-full'/>
                <h1 className='flex flex-col ml-3'>Bhim S. <span className='text-xl text-gray-500'>Pyuthan, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Amazing location on 5th Avenue! Central Park is a short walk away, and the apartment was safe, clean, and welcoming. The stylish design made it a perfect base to explore the city – truly a gem!</p>

             <p className='text-2xl mt-15 text-gray-400'>Jul 03, 2025</p>
            </div>

             <div className='border border-gray-300 mt-20 rounded-4xl ml-10 h-100 w-130 p-6 '>
             <span className='flex'>
                 <img src={MinaImg} alt="Mina" className='h-15 rounded-full'/>
                <h1 className='flex flex-col ml-3'>Mina S. <span className='text-xl text-gray-500'>Pyuthan, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Great value for the location. Comfortable beds, modern decor, and the subway is so close by. Ideal choice for a weekend in the city.</p>

             <p className='text-2xl mt-10 text-gray-400'>Apr 10, 2025</p>
            </div>
         </div>


          <div className='flex text-3xl'>

            <div className='border border-gray-300 rounded-4xl mt-10 ml-20 h-90 w-130 p-6 '>
             <span className='flex'>
                 <img src={PrabinImg} alt="Prabim" className='h-15 rounded-full'/>
                <h1 className='flex flex-col ml-3'>Hemanta D. <span className='text-xl text-gray-500'>Kailali, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Perfect spot for exploring lively New York! Central Park is minutes away, the subway close, and the apartment was cozy and stylish. Love it!</p>

             <p className='text-2xl mt-8 text-gray-400'>Aug 13, 2025</p>
            </div>

             <div className='border border-gray-300 rounded-4xl ml-10 h-110 w-130 p-6 '>
             <span className='flex'>
                 <img src={SradhaImg} alt="Sradha" className='h-15 w-15 object-cover rounded-full'/>
                <h1 className='flex flex-col ml-3'>Sharadha S. <span className='text-xl text-gray-500'>Pyuthan, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Such a comfortable stay! The beds were great, the apartment was quiet, and the host made check-in super easy. With a 100% response rate, communication was smooth and stress-free. Can’t wait to return again soon!</p>

             <p className='text-2xl mt-10 text-gray-400'>Jun 08, 2025</p>
            </div>

             <div className='border border-gray-300 rounded-4xl ml-10 h-100 w-130 p-6 '>
             <span className='flex'>
                 <img src={AakankshyaImg} alt="Aakankshya" className='h-15 w-15 object-cover rounded-full'/>
                <h1 className='flex flex-col ml-3'>Aakankshya B. <span className='text-xl text-gray-500'>Butwal, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Superhost service all the way. The place was beautiful, communication was instant, and I felt right at home from the start. The atmosphere was so welcoming. Five stars without a doubt!</p>

             <p className='text-2xl mt-5 text-gray-400'>Mar 17, 2025</p>
            </div>
         </div>

          <div className='flex text-3xl'>

            <div className='border border-gray-300 rounded-4xl ml-20 h-90 w-130 p-6 '>
             <span className='flex'>
                 <img src={LaxmanImg} alt="Laxman" className='h-15 rounded-full'/>
                <h1 className='flex flex-col ml-3'>Laxman D. <span className='text-xl text-gray-500'>Kailali, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Stylish apartment with everything I needed. The host was quick to respond, making check-in super easy. Would recommend to anyone in New York.</p>

             <p className='text-2xl mt-7 text-gray-400'>Jul 20, 2025</p>
            </div>

             <div className='border border-gray-300 rounded-4xl mt-10 ml-10 h-100 w-130 p-6 '>
             <span className='flex'>
                 <img src={BabitaImg} alt="Babita" className='h-15 w-15 object-cover rounded-full'/>
                <h1 className='flex flex-col ml-3'>Babita S. <span className='text-xl text-gray-500'>Pyuthan, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Fantastic stay! Cozy, spotless, and perfectly located. The photos don’t do it justice – it’s even better in person. Everything was so comfortable and well-prepared, and I’ll definitely be back.</p>

             <p className='text-2xl mt-10 text-gray-400'>May 17, 2025</p>
            </div>

             <div className='border border-gray-300 rounded-4xl ml-10 h-100 w-130 p-6 '>
             <span className='flex'>
                 <img src={BhumikaImg} alt="Bhumika" className='h-15 w-15 object-cover rounded-full'/>
                <h1 className='flex flex-col ml-3'>Bhumika B. <span className='text-xl text-gray-500'>Kathmandu, Nepal</span> </h1>
            <span className='flex justify-center ml-35 gap-3'>5.0 <Star className='mt-2 fill-black'/> </span>
             </span>
             <p className='text-2xl mt-10'>Wonderful stay in the heart of New York! The apartment was spotless, cozy, and had everything I needed. The host was friendly and responsive, which made the whole trip stress-free.</p>

             <p className='text-2xl mt-10 text-gray-400'>Feb 5, 2025</p>
            </div>
            </div>

           <div className='flex mt-40 items-center justify-center'>
             <button className='text-3xl border h-20 w-50 rounded-full bg-black text-white hover:bg-blue-700 hover:text-white duration-300'>
                View  All
            </button>
           </div>



           <div className='flex bg-gray-100 pb-30 mt-60'>
           <div className='flex flex-col ml-30'>
             <h1 className=' text-3xl mt-30'>
                <span className='inline-flex -translate-y-1'>
                    <span className='rounded-full bg-black h-2 w-2 mr-3 animate-pulse' />
                </span>
                FAQ</h1>
                <p className='text-7xl font-medium mt-5 w-150 leading-[1.2]'>Everything You <br /> Need to Know</p>
               <button className='flex gap-4 items-center mt-10 border rounded-full h-20 w-70 bg-black text-white text-2xl px-4 hover:bg-blue-800 duration-300 '> <div className='flex items-center justify-center h-15 w-15 border rounded-full bg-white text-black '> <ArrowUpRight size={30} strokeWidth={1}/> </div>Reserve Now</button>
           </div>
             <div className='ml-70'>
                <span className='flex border border-gray-300 bg-white rounded-full h-40 font-medium items-center gap-13 justify-end mr-10  mt-25 w-190'>
                <img src={CentralPark} alt="Park" className=' h-30 w-30 rounded-full object-cover' />
                <p className='text-4xl'>How close to Central Park?</p> <ArrowDown size={40} strokeWidth={1} className='mr-10'/>
             </span>

             <span className='flex border border-gray-300 bg-white rounded-full h-40 font-medium items-center gap-11 justify-end mr-10 mt-10 w-190'>
                <img src={Location} alt="Location" className=' h-30 w-30 rounded-full object-cover' />
                <p className='text-4xl'>Why the location is special?</p> <ArrowDown size={40} strokeWidth={1} className='mr-10'/>
             </span>

             <span className='flex border border-gray-300 bg-white rounded-full h-40 font-medium items-center gap-17 justify-end mr-20 mt-10 w-190'>
                <img src={DogImg} alt="Dog" className=' h-30 w-30 rounded-full object-cover' />
                <p className='text-4xl'>Do you allow small pets?</p> <ArrowDown size={40} strokeWidth={1} className='mr-10'/>
             </span>

             <span className='flex border border-gray-300 bg-white rounded-full h-40 font-medium items-center gap-5 justify-end mr-20 mt-10 w-190'>
                <img src={Cancellation} alt="Policy" className=' h-30 w-30 rounded-full object-cover' />
                <p className='text-4xl'>What's the cancellation policy?</p> <ArrowDown size={40} strokeWidth={1} className='mr-10'/>
             </span>
             </div>
           </div>
        
    </div>
  )
}

export default Reviews