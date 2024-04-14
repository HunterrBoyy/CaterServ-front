import React from 'react'
import { useGetAllServicesQuery, useGetServicesQuery } from '../features/serviceApi'

const Services = () => {
  const data = useGetAllServicesQuery
  console.log("data",data)
  return (
    <>
      <div className='bg-[#FFFFFF] pt-48 mx-20'>
        <div className='flex flex-col items-center'>
        <button className='border rounded-2xl px-[21px] py-[3px] border-[#d4a762] font-medium'>OUR SERVICES</button>
        <h1 className='font-medium text-4xl italic my-5'>What We Offer</h1 >
        </div>
        <div>
          offered services haru yeta rakhne backend bata data tanera
        </div>
      </div>
    </>
  )
}

export default Services
