import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { MODEL_PATH, PASTRY_GROUPS } from '../hooks/pastryModel'
import { CardPastry } from './CardPastry'


function Pastry({ group: groupKey, basePosition, floatOffset, scale = 1, rotationSpeed = 0.005, rotationAxis = 'z', baseRotation = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF(MODEL_PATH)
  const group = useRef(null)
  const [hovered, setHovered] = useState(false)
  const config = PASTRY_GROUPS[groupKey]

  useEffect(() => {
    if (!group.current) return
    gsap.to(group.current.scale, {
      x: hovered ? scale * 1.15 : scale,
      y: hovered ? scale * 1.15 : scale,
      z: hovered ? scale * 1.15 : scale,
      duration: hovered ? 0.4 : 0.6,
      ease: hovered ? 'back.out(1.7)' : 'power2.out',
    })
  }, [hovered, scale])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime() + floatOffset
    group.current.position.y = basePosition[1] + Math.sin(t * 1.2) * 0.08
    if (!hovered) {
      group.current.rotation[rotationAxis] += rotationSpeed
    }
  })

  return (
  <group position={basePosition} rotation={baseRotation}>
    <group ref={group}>
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} visible={false}>
        <sphereGeometry args={[1.2, 8, 8]} />
      </mesh>
      {config.meshes.map((meshName) => (
        <mesh key={meshName} geometry={nodes[meshName].geometry} material={materials[config.material]} raycast={() => null} />
      ))}
      {config.outlines.map((outlineName) => (
        <mesh key={outlineName} geometry={nodes[outlineName].geometry} material={materials.Outline} raycast={() => null} />
      ))}
    </group>
  </group>
)
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />

     <Pastry group="strawberryCake" basePosition={[-1.4, 0, 0]} floatOffset={0} scale={0.4} rotationSpeed={0.004} baseRotation={[-1, 0, 0]} />
<Pastry group="cupcake" basePosition={[0, 0.2, 0]} floatOffset={1.5} scale={0.45} rotationSpeed={0.006} rotationAxis="z" baseRotation={[-11, 3, 0]} />
<Pastry group="orangeCake" basePosition={[1.4, 0, 0]} floatOffset={3} scale={0.45} rotationSpeed={-0.005} baseRotation={[-7, 0, 0]} />
</>
  )
}

export const HeroShowcase = () => {
  return (
    <div className="relative w-full max-w-md md:max-w-xl aspect-[4/5] lg:aspect-[8/7] rounded-full overflow-hidden bg-[#c97b7b]">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <Scene />
        {/* <CardPastry hoverAnim={card.hoverAnim} /> */}
           
      </Canvas>
    </div>
  )
}

useGLTF.preload(MODEL_PATH)