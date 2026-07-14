import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei";
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FreshCounter } from './components/FreshCounter'
import { WhyBake } from './components/WhyBake'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
    {/* <Loader/> */}
    < Header/>
    <HeroSection/>
    <FreshCounter/>
   <WhyBake/>
   <Footer/>
    </>
  )
}

export default App