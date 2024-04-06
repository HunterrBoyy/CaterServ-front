import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  const array = [
    {"class":"fa-solid fa-users text-[#ffffff] text-6xl ","number":"689","detail":"HAPPY CUTOMER"},
    {"class":"fa-solid fa-user-gear text-[#ffffff] text-6xl","number":"107","detail":"EXPERT CHEFS"},
    {"class":"fa-solid fa-check text-[#ffffff] text-6xl","number":"253","detail":"EVENTS COMPLETE"}]

  return (
    <>
      <div className='bg-[#FFFFFF] pt-48 mx-20'>
        <div className=' grid grid-cols-5 '>
          <motion.div 
          animate={{y:0}}
          initial={{y:500}}
          transition={{duration:1,delay:0.3,type:"spring",bounce:0.28}}
          className='col-span-2'>
            <img className='rounded-lg' src="https://themewagon.github.io/CaterServ/img/about.jpg" alt="" height={437} width={437} />
          </motion.div>
          <motion.div 
          animate={{y:0}}
          initial={{y:500}}
          transition={{duration:1,delay:0.8,type:"spring",bounce:0.28}}
          className='col-span-3 p-[6px]'>
            <button className='border rounded-2xl px-[21px] py-[3px] border-[#d4a762] font-medium'>ABOUT US</button>
            <h1 className='font-medium text-4xl italic my-5'>Trusted By 200 + satisfied clients</h1 >
            <p className='text-[#9A9A9A] my-[10px]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
            <div className='grid grid-cols-2 grid-rows-2 text-[18px] my-5 leading-[50px]'>
              <p><i class="fa-solid fa-share text-[#d4a762]"></i>Fresh and Fast food Delivery</p>
              <p><i class="fa-solid fa-share text-[#d4a762]"></i>24/7 Customer Support</p>
              <p><i class="fa-solid fa-share text-[#d4a762]"></i>Easy Customization Options</p>
              <p><i class="fa-solid fa-share text-[#d4a762]"></i>Delicious Deals for Delicious Meals</p>
            </div>
            <button className='h-[50px] w-[140px] bg-[#d4a762] rounded-3xl hover:bg-black hover:text-[#d4a762] my-5 font-medium'>About Us <i class="fa-solid fa-arrow-right"></i></button>
          </motion.div>
        </div>
      </div>
      <div className='bg-[#ffffff] mx-24 pt-48'>
        <div className='grid grid-cols-5 items-center'>
          {array.map((data) => {
            return <motion.div
            animate={{y:0}}
          initial={{y:500}}
          transition={{duration:1,delay:0.8,type:"spring",bounce:0.28}}
            className='bg-[#D4A762] h-[185px] w-[190px] flex flex-col justify-center items-center rounded-lg'>
              <i class={data.class}></i>
              <p className='font-semibold text-[50px]'>{data.number}</p>
            <p className='font-medium text-[20px]'>{data.detail}</p>

            </motion.div>
          })}
          <motion.div
          animate={{y:0}}
          initial={{y:500}}
          transition={{duration:1,delay:0.3,type:"spring",bounce:0.28}}
          className='col-span-2'>
            <img className='rounded-lg' src="https://themewagon.github.io/CaterServ/img/fact.jpg" height={350} width={437}/>
            {/* <motion.button 
            className='border-black border-[1px] border-solid rounded-[50%] bg-[#ffffff] h- w-32 '><i class="fa-sharp fa-solid fa-play text-[70px]"></i></motion.button> */}
            {/* <dotlottie-player src="https://lottie.host/c8aa14e5-b4e7-49a6-9830-fcbd76a1d83b/pUzH1etHU7.json" background="transparent" speed="1" height={128} width={128}loop autoplay></dotlottie-player> */}
          </motion.div>
        </div>
      </div>
      
    
    </>
  )
}

export default About
