"use client"
import React, { useState } from 'react'
import logo from '@/app/Assets/logo.svg'
import Image from 'next/image';
import HoverSection from './HoverSection';
import articleImage from '@/app/Assets/article/left.svg'
import article1 from '@/app/Assets/article/1.webp'
import article2 from '@/app/Assets/article/2.webp'
import article3 from '@/app/Assets/article/3.webp'
import article4 from '@/app/Assets/article/4.svg'
import article5 from '@/app/Assets/article/5.webp'

import meditationImage from '@/app/Assets/meditation/left.svg'
import meditation1 from '@/app/Assets/meditation/1.webp'
import meditation2 from '@/app/Assets/meditation/2.webp'
import meditation3 from '@/app/Assets/meditation/3.webp'
import meditation4 from '@/app/Assets/meditation/4.svg'
import meditation5 from '@/app/Assets/meditation/5.svg'

import sleepImage from '@/app/Assets/sleep/left.svg'
import sleep1 from '@/app/Assets/sleep/1.webp'
import sleep2 from '@/app/Assets/sleep/2.svg'
import sleep3 from '@/app/Assets/sleep/3.webp'
import sleep4 from '@/app/Assets/sleep/4.svg'
import sleep5 from '@/app/Assets/sleep/5.webp'

import stressImage from '@/app/Assets/stress/left.svg'
import stress1 from '@/app/Assets/stress/1.svg'
import stress2 from '@/app/Assets/stress/2.svg'
import stress3 from '@/app/Assets/stress/3.svg'
import stress4 from '@/app/Assets/stress/4.svg'
import stress5 from '@/app/Assets/stress/5.svg'

import mindfulnessImage from '@/app/Assets/mindfulness/left.svg'
import mindfulness1 from '@/app/Assets/mindfulness/1.webp'
import mindfulness2 from '@/app/Assets/mindfulness/2.webp'
import mindfulness3 from '@/app/Assets/mindfulness/3.svg'
import mindfulness4 from '@/app/Assets/mindfulness/4.webp'
import mindfulness5 from '@/app/Assets/mindfulness/5.webp'


function Navbar() {
  const article = {
    title : 'Articles',
    description : 'Explore all articles on every topic',
    images : {a1:article1,a2:article2,a3:article3,a4:article4,a5:article5},
    imageDesc : {d1:'What is mindfulness?',d2:'How to be more present',d3:`Self-care ideas that stick, even when you're busy`,d4:`How to relieve stress`,d5:`Meditation for sleep`},
    leftImage : articleImage,
    trending : true    
  }

  const meditation = {
    title : 'Meditation',
    description : 'Meditation is both a skill and an experience that can improve your health and happiness',
    images : {a1:meditation1,a2:meditation2,a3:meditation3,a4:meditation4,a5:meditation5},
    imageDesc : {d1:'Meditation 101',d2:'Meditation techniques',d3:`Meditation for beginners`,d4:`Guided meditation`,d5:`Meditation benefits`},
    leftImage : meditationImage,
    trending : true    
  }

  const sleep = {
    title : 'Sleep',
    description : 'Learn how to create the conditions for a more restful night',
    images : {a1:sleep1,a2:sleep2,a3:sleep3,a4:sleep4,a5:sleep5},
    imageDesc : {d1:'How to fall back asleep',d2:'How to sleep better',d3:`Meditation for sleep`,d4:`How to wake up easier`,d5:`Sleep hacks`},
    leftImage : sleepImage,
    trending : true    
  }


  const stress = {
    title : 'Stress',
    description : 'Learn how to manage stress and everyday anxious feelings',
    images : {a1:stress1,a2:stress2,a3:stress3,a4:stress4,a5:stress5},
    imageDesc : {d1:'How to reduce anxiety',d2:'Meditation for stress',d3:`How to stop worrying`,d4:`How to relieve stress`,d5:`Meditation for anxiety`},
    leftImage : stressImage,
    trending : true    
  }


  const mindfulness = {
    title : 'Mindfulness',
    description : 'Mindfulness is the idea of learning how to be fully present and engaged in the moment',
    images : {a1:mindfulness1,a2:mindfulness2,a3:mindfulness3,a4:mindfulness4,a5:mindfulness5},
    imageDesc : {d1:'What is mindfulness?',d5:'How to be more present',d2:`Self-care ideas that stick, even when you're busy`,d4:`Mindful parenting`,d3:`How to form a habit`},
    leftImage : mindfulnessImage,
    trending : true    
  }


  return (
    <div className="flex justify-center py-0 my-0">
      <div className='flex items-center justify-evenly pt-4 w-3/4 '>
          <div className="pb-5">
              <Image src={logo} height={33}/>
          </div>
          <ul className='flex justify-evenly group1'>
            <div className="group">
                <li className="text-[#44423f] cursor-pointer pb-5 group-hover:border-b-4 px-2 text-[15px]"> Articles </li>
                <div className="hidden group-hover:block absolute left-0 right-0 z-[10000]"> <HoverSection {...article}/> </div>
            </div>
            {/* { show ? <div className=""> Here Goes noting  </div> : <div className=""></div> } */}
            
            <div className="group">
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px] border-[#ff7e1d]"> Meditation </li>
              <div className="hidden group-hover:block absolute left-0 right-0 z-[10000]"> <HoverSection {...meditation}/> </div>
            </div>

            <div className="group">
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px] border-[#a273c6]"> Sleep </li>
              <div className="hidden group-hover:block absolute left-0 right-0 z-[10000]"> <HoverSection {...sleep}/> </div>
            </div>
            
            <div className="group">
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px] border-[#ffce00]"> Stress </li>                
              <div className="hidden group-hover:block absolute left-0 right-0 z-[10000]"> <HoverSection {...stress}/> </div>
            </div>
            
            <div className="group">
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px] border-[#2f00ff]"> Mindfulness </li>
              <div className="hidden group-hover:block absolute left-0 right-0 z-[10000]"> <HoverSection {...mindfulness}/> </div>
            </div>
            

          </ul>

          <div className="flex justify-evenly ">
            <ul className='flex justify-evenly items-center'>
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px] "> Plans </li>
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px]"> Organizations </li>
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px]"> About </li>
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px]"> Help </li>
              <li className="text-[#44423f] cursor-pointer pb-5 hover:border-b-4 px-2 text-[15px]"> Login </li>
            </ul>
            <div className='pb-2 px-5'>
              <button className=" rounded-3xl p-3 px-5 font-semibold bg-[#0061ef] hover:bg-[#0040EA] text-white  nav__button">
                Get 50% off
              </button>
            </div>
          </div>
          
          
      </div>
    </div>
  )
}

export default Navbar