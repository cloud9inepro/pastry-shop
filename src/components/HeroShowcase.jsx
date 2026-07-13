import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

const MODEL_PATH = '/cute_pastries-transformed.glb'

const PASTRY_GROUPS = {
  strawberryCake: {
    material: 'Cake_strawberry',
    meshes: [
      'Cake_strawberry_Cake_strawberry_0',
      'Cake_strawberry001_Cake_strawberry_0',
      'Cake_strawberry002_Cake_strawberry_0',
      'Cake_strawberry003_Cake_strawberry_0',
      'Cake_strawberry004_Cake_strawberry_0',
      'Cake_strawberry005_Cake_strawberry_0',
    ],
    outlines: [
      'Cake_strawberry_Outline_0',
      'Cake_strawberry001_Outline_0',
      'Cake_strawberry002_Outline_0',
      'Cake_strawberry003_Outline_0',
      'Cake_strawberry004_Outline_0',
      'Cake_strawberry005_Outline_0',
    ],
  },
  cupcake: {
    material: 'Cupcake',
    meshes: [
      'Cupcake_Cupcake_0',
      'Cupcake001_Cupcake_0',
      'Cupcake002_Cupcake_0',
      'Cupcake003_Cupcake_0',
    ],
    outlines: [
      'Cupcake_Outline_0',
      'Cupcake001_Outline_0',
      'Cupcake002_Outline_0',
      'Cupcake003_Outline_0',
    ],
  },
  orangeCake: {
    material: 'Cake_orange',
    meshes: ['Cake_orange_Cake_orange_0', 'Cake_orange001_Cake_orange_0'],
    outlines: ['Cake_orange_Outline_0', 'Cake_orange001_Outline_0'],
  },
}

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

     <Pastry group="strawberryCake" basePosition={[-1.4, 0, 0]} floatOffset={0} scale={0.4} rotationSpeed={0.004} baseRotation={[8, 5, 6]} />
<Pastry group="cupcake" basePosition={[0, 0.2, 0]} floatOffset={1.5} scale={0.45} rotationSpeed={0.006} rotationAxis="z" baseRotation={[1, 3, 0]} />
<Pastry group="orangeCake" basePosition={[1.4, 0, 0]} floatOffset={3} scale={0.45} rotationSpeed={-0.005} baseRotation={[2, 1, 0]} />
</>
  )
}

export const HeroShowcase = () => {
  return (
    <div className="relative w-full max-w-md md:max-w-xl aspect-[4/5] rounded-full overflow-hidden bg-[#c97b7b]">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

useGLTF.preload(MODEL_PATH)