import Image from 'next/image'
import TopBar from './Components/TopBar'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'

export default function Home() {
  return (
    <div className="">
      <TopBar/>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}
