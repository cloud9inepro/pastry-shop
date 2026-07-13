import {  OrbitControls } from "@react-three/drei"

export default function Experience()  {
    return(
            <>
            
            <ambientLight intensity={0.5}/>
            <OrbitControls/>
            <mesh>
                <boxGeometry/>
                <meshStandardMaterial />
            </mesh>
            </> 
    )
}