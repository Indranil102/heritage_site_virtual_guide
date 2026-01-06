import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='h-screen overflow-hidden'>
        
      <div className="relative h-full w-full">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1570692890937-f60db72ac6b4?q=80&w=987&auto=format&fit=crop"
          alt="home img"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between items-center text-white p-8">

          {/* Text */}
          <h1 className="mt-32 text-center font-semibold tracking-wider">
  <span className="block text-3xl md:text-4xl tracking-[6px]">
    Welcome
  </span>
  <span className="block text-2xl md:text-3xl leading-[100px] tracking-[8px]">
    to the Virtual World of Heritage Site
  </span>
</h1>

          {/* Arrow Button */}
          <button className="mb-20">
            <FaArrowCircleRight className="h-20 w-20 text-red-500 hover:text-yellow-300 transition cursor-pointer" />
          </button>

        </div>
      </div>
    </div>
  )
}

export default Home
