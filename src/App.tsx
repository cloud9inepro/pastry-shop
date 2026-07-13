import { Canvas } from '@react-three/fiber'
import { Loader } from "@react-three/drei";

import  Experience  from './components/Experience'
import { Header } from './components/Header'

const App = () => {
  return (
    <>
    < Header/>

   <Loader/>
    <Canvas>
        <Experience/>
    </Canvas>
    </>
  )
}

export default App