import React, { useRef, useState } from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';

const Header = () => {


  const [open,setOpen] = useState(false);
  
  const menuRef = useRef();
  const navRef = useRef();
  
  window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current && e.target !== navRef.current){
      setOpen(false);
    }
  })

  return (
    <>
      <div className='flex flex-row justify-around h-20 w-100% items-center border-b-[1px]' >
        <h1 className='font-bold text-3xl italic'><span className='text-[#d4a762]'>Cater</span>Serv</h1>
        <nav className='flex gap-4'>
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>Home</p>
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>About</p>
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>Services</p>
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>Events</p>
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>Menu</p>
          
          <p 
          className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px] '
          ref={navRef}
          onClick={() => setOpen(!open)}>Pages<i class="fa-solid fa-caret-down"></i></p>
            {open && 
              <div 
              ref={menuRef}
              className='bg-[#FFFCF8] p-0 w-48 shadow-lg absolute left-[47.5rem] top-[4rem] '>
                <ul>
                  <li 
                  onClick={() => setOpen(false)} className='p-2 text-lg cursor-pointer rounded hover:bg-[#d4a762] hover:text-[white]'>Booking</li>
                  <li 
                  onClick={() => {
                    setOpen(false);
                  }}
                  className='p-2 text-lg cursor-pointer rounded hover:bg-[#d4a762]  hover:text-[white] '> Our Blog</li>
                  <li 
                  onClick={() => {
                    setOpen(false);
                  }}
                  className='p-2 text-lg cursor-pointer rounded hover:bg-[#d4a762]  hover:text-[white] '> Our Team</li>
                  <li 
                  onClick={() => {
                    setOpen(false);
                  }}
                  className='p-2 text-lg cursor-pointer rounded hover:bg-[#d4a762]  hover:text-[white] '> Testimonial</li>
                  <li 
                  onClick={() => {
                    setOpen(false);
                  }}
                  className='p-2 text-lg cursor-pointer rounded hover:bg-[#d4a762]  hover:text-[white] '> 404 Page</li>
                </ul>
              </div>
            }
          
          <p className='hover:text-[#d4a762] cursor-pointer text-[#78746F] text-[20px]'>Contact</p>
        </nav>
        <div className='flex gap-7'><button className='rounded-full h-[45px] w-[45px] bg-[#d4a762] hover:bg-black hover:text-[#d4a762]'><i class="fa-solid fa-magnifying-glass "></i></button>
         <button className='h-[45px] w-[125px] bg-[#d4a762] rounded-3xl hover:bg-black hover:text-[#d4a762] '>Book Now</button> </div>
      </div>
      <Home />
      <About />
      <Services />
    </>
  )
}

export default Header
