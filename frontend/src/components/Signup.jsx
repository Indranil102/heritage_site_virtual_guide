import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-zinc-950">

      
      <img
        src="https://images.unsplash.com/photo-1570692890937-f60db72ac6b4?q=80&w=1200&auto=format&fit=crop"
        alt="heritage background"
        className="absolute inset-0 h-full w-full object-cover scale-110"
      />

      
      <div className="absolute inset-0 bg-zinc-950/70"></div>

      
      <div className="
        relative z-10 w-[380px] p-8
        bg-zinc-900/60
        border border-amber-700
        rounded-xl
        backdrop-blur-md
        shadow-2xl
        transition-transform duration-500
        hover:scale-[1.02]
      ">

        <h2 className="text-2xl font-semibold text-center text-amber-400 tracking-wide mb-6">
          Sign Up
        </h2>

        
        <div className="mb-4">
          <label className="block text-zinc-200 mb-1">
            Email 
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full px-4 py-2 rounded
              bg-zinc-950/70
              text-zinc-200
              border border-zinc-700
              focus:outline-none
              focus:border-amber-600
              focus:ring-1 focus:ring-amber-600
            "
          />
        </div>

        
        <div className="mb-6">
          <label className="block text-zinc-200 mb-1">
            password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="
              w-full px-4 py-2 rounded
              bg-zinc-950/70
              text-zinc-200
              border border-zinc-700
              focus:outline-none
              focus:border-amber-600
              focus:ring-1 focus:ring-amber-600
            "
          />
        </div>

        <div className="mb-6">
          <label className="block text-zinc-200 mb-1">
            re-type password
          </label>
          <input
            type="password"
            placeholder="Re Enter your password"
            className="
              w-full px-4 py-2 rounded
              bg-zinc-950/70
              text-zinc-200
              border border-zinc-700
              focus:outline-none
              focus:border-amber-600
              focus:ring-1 focus:ring-amber-600
            "
          />
        </div>
        

        
        <button className="
          w-full py-2
          bg-amber-600 hover:bg-amber-500
          text-zinc-950 font-semibold
          rounded
          transition-all duration-300
        ">
          Sign Up
        </button>

        <p className="mt-4 text-sm text-zinc-200 text-center">
  If you already have account,{' '}
  <Link
    to="/login"
    className="text-amber-400 hover:text-amber-300 underline"
  >
    Login
  </Link>
</p>


      </div>
    </div>
  )
}

export default Signup
