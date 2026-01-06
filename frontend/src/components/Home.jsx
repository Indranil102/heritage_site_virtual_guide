
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen overflow-hidden'>
        
      <div className="relative h-full w-full">

        
        <img
          src="https://images.unsplash.com/photo-1570692890937-f60db72ac6b4?q=80&w=987&auto=format&fit=crop"
          alt="home img"
          className="absolute inset-0 h-full w-full object-cover"
        />

        
        <div className="absolute inset-0 bg-black/60"></div>

        
        <div className="relative z-10 h-full flex flex-col justify-between items-center text-white p-8">

        
          <h1 className="mt-32 text-center font-semibold tracking-wider">
  <span className="block text-3xl md:text-4xl tracking-[6px]">
    Welcome
  </span>
  <span className="block text-2xl md:text-3xl leading-[100px] tracking-[8px]">
    to the Virtual World of Heritage Site
  </span>
</h1>

          
          <button
            onClick={() => navigate('/login')}
            className="mb-20"
          >
            <FaArrowCircleRight className="h-20 w-20 text-red-500 hover:text-yellow-300 transition cursor-pointer" />
          </button>

        </div>
      </div>
    </div>
  )
}

export default Home
