import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei";
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FreshCounter } from './components/FreshCounter'

const App = () => {
  return (
    <>
    < Header/>
    <HeroSection/>
    <FreshCounter/>
   <Loader/>
    </>
  )
}

export default App