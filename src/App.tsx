import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei";
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FreshCounter } from './components/FreshCounter'
import { WhyBake } from './components/WhyBake'

const App = () => {
  return (
    <>
    {/* <Loader/> */}
    < Header/>
    <HeroSection/>
    <FreshCounter/>
   <WhyBake/>
    </>
  )
}

export default App