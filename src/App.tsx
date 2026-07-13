import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei";
import  Experience  from './components/Experience'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'

const App = () => {
  return (
    <>
    < Header/>
    <HeroSection/>
   <Loader/>
    {/* <Canvas>
        <Experience/>
    </Canvas> */}
    </>
  )
}

export default App