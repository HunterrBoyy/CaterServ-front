import { motion } from 'framer-motion'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-2 mx-20 mt-24'>
        <div>
          <motion.div
           animate={{y:0}} 
           initial={{y:-500}}
           transition={{duration:0.5,delay:0.3}} >
            <button className='border rounded-2xl px-[21px] py-[3px] border-[#d4a762] font-medium'>WELCOME TO CATERSERV</button>
            <p className='font-medium text-6xl italic my-8'>Book Cater<span className='text-[#d4a762]'>Serv</span> For Your Dream Event</p>
          </motion.div>
          <motion.div 
          animate={{x:0}}
          initial={{x:-500}}
          transition={{duration:0.5,delay:0.3}}
          className='grid grid-cols-4'>
            <button className='h-[45px] w-[125px] bg-[#d4a762] rounded-3xl hover:bg-black hover:text-[#d4a762] '>Book Now</button>
            <button className='h-[45px] w-[125px] bg-[#d4a762] rounded-3xl hover:bg-black hover:text-[#d4a762] '>Know More</button>
          </motion.div>
        </div>
        <div className='flex flex-row-reverse'>
            <motion.img 
            animate={{scale:1}}
            initial={{scale:0}}
            transition={{duration:1}}
             src="https://themewagon.github.io/CaterServ/img/hero.png" alt="" height={437} width={437}  />
        </div>
      </div>
    </>
  )
}

export default Home
