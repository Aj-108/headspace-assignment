import React from 'react'
import left from '@/app/Assets/left.svg'
import right from '@/app/Assets/right.svg'
import Image from 'next/image';
import DoneIcon from '@mui/icons-material/Done';

function HeroSection() {
  return (
    <div className='bg-[#0061ef] py-20 flex justify-evenly'>
      <div className="">
        <Image src={right} height={510}/>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center">
          <div className="text-white text-6xl font-bold">
            5o% off for a 
          </div>
          <div className="text-white text-6xl font-bold">
            limited time
          </div> 
        </div>
        <div className="text-[#FECD2F] opacity-80"> Get our biggest deal of the year </div>
        <div className="bg-[#ffce00] relative flex py-6 px-7 rounded-xl items-center justify-between w-[470px]">
          <div className="bg-[#ff7300] absolute top-[-10px] text-white p-1 px-4 rounded-[4px] text-[10px] ">
            Best Value
          </div>
          <div className="flex flex-col ">
            <div className="card__top text-[10px] text-neutral-800">
              Annual Plan
            </div>
            <div className="card__price1 font-bold text-neutral-800"> ₹749.5 INR/yr <span className='line-through'> ₹1499 INR/yr </span>  </div>
            <div className="card__price2 text-neutral-800"> ₹62.46 INR/mo, billed annually </div>
          </div>
          <div className="tickbox bg-white p-1 rounded-md">
            <DoneIcon className='text-[#01A652]'/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white text-xs opacity-75">
          Annual: Now 50% off the first year, then your subscription will 
          </div>
          <div className="text-white text-xs opacity-75 py-1">
          annually renew at the full price.
          </div>
        </div>
        <div className="">
          <button className='hover:bg-[#44423F] bg-[#ff7300] font-semibold text-white p-5 px-10 rounded-[30px] text-[15px]'> Get this deal </button>
        </div>
      </div>
      <div className="">
        <Image src={left} height={510}/>
      </div>
    </div>
  )
}

export default HeroSection