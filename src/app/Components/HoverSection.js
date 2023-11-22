import Image from 'next/image';
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function HoverSection(data) {
  
    const {title,description,leftImage,trending,images,imageDesc} = data ;
    const {a1,a2,a3,a4,a5} = images ;
    const {d1,d2,d3,d4,d5} = imageDesc ;
   return (
    <div className='bg-white min:h-96 w-screen flex pt-10 justify-evenly pb-20 '>
        <div className=""> 
            <div className="text-4xl font-semibold  pb-6 text-neutral-700"> {title} </div>
            <div className="text-neutral-700 pb-4 w-52 text-[17px]"> 
                {description}
            </div>
            <div className="underline text-neutral-600 text-sm cursor-pointer"> View All <ArrowForwardIcon className='text-lg'/> </div>
        </div>
        <div className=""> 
            <div className="text-2xl font-semibold text-neutral-700">
                Top articles  
            </div>
            <div className="grid grid-cols-3 gap-4 pt-5">
                <div className="">
                    <Image src={a1} width={160} className='rounded-lg'/>
                    <div className="flex justify-between pt-2 items-center">
                        <div className="w-20 text-neutral-700 text-sm font-semibold">{d1} </div>
                        <div className="bg-blue-800 px-1 rounded-full">
                            <ArrowForwardIcon className='text-sm  text-white '/>   
                        </div>
                    </div> 
                </div>
                <div className="">
                    <Image src={a2} width={160} className='rounded-lg'/>
                    <div className="flex justify-between pt-2 items-center">
                        <div className="w-28 text-neutral-700 text-sm font-semibold">{d2} </div>
                        <div className="bg-blue-800 px-1 rounded-full">
                            <ArrowForwardIcon className='text-sm  text-white '/>   
                        </div>
                    </div>     
                </div>

                <div className="">
                    <Image src={a3} width={160} className='rounded-lg'/>
                    <div className="flex justify-between pt-2 items-center">
                        <div className="w-28 text-neutral-700 text-sm font-semibold">{d3} </div>
                        <div className="bg-blue-800 px-1 rounded-full">
                            <ArrowForwardIcon className='text-sm  text-white '/>   
                        </div>
                    </div> 
                </div>
                <div className="pt-5">
                    <Image src={a4} width={160} height={150} className='rounded-lg'/>
                    <div className="flex justify-between pt-2 items-center">
                        <div className="w-28 text-neutral-700 text-sm font-semibold">{d4} </div>
                        <div className="bg-blue-800 px-1 rounded-full">
                            <ArrowForwardIcon className='text-sm  text-white '/>   
                        </div>
                    </div> 
                </div>
                <div className="pt-5">
                    <Image src={a5} width={160} className='rounded-lg'/>
                    <div className="flex justify-between pt-2 items-center">
                        <div className="w-28 text-neutral-700 text-sm font-semibold">{d5} </div>
                        <div className="bg-blue-800 px-1 rounded-full">
                            <ArrowForwardIcon className='text-sm  text-white '/>   
                        </div>
                    </div> 
                </div>
                {/* {images.map((img) => (
                    <div className="">
                        <Image src={img} width={160}  className='rounded-xl '/>
                    </div>
                ))}
                {imageDesc.map((desc) => (
                    <div className="">
                        {desc}
                    </div>
                ))} */}
            </div>
        </div>
        {trending ? <div className="flex flex-col">
                <div className="text-2xl font-semibold text-neutral-700"> Trending </div>
                <ul className="underline text-neutral-700 list-disc pt-4 pl-6">  
                <li className='pb-3  w-[165px]'> How to find better work-life balance </li> 
                <li className='pb-3  w-[165px]'>How to deal with news anxiety</li>
                <li className='pb-3  w-[165px]'>How to deal with news anxiety</li>
                <li className='pb-3  w-[165px]'>Using your phone before bed</li>
                <li className='pb-3  w-[165px]'>How to practice self-love</li>
                <li className='pb-3 w-[165px]'>Don't get caught in the self-improvement trap</li>
                </ul>

        </div> : "" }
        <div className="w-screen absolute bottom-1">
            <Image src={leftImage} width={320} height={300} className=''/>
        </div>
    </div>
  )
}

export default HoverSection