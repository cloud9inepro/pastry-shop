
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { MODEL_PATH, PASTRY_GROUPS } from '../hooks/pastryModel'

const GROUP_BY_ANIM = {
  flip: 'strawberryCake',
  bounce: 'cupcake',
  wobble: 'souffle',
  tilt: 'orangeCake',
}

// same upright correction used in the hero — reuse those values once confirmed
const BASE_ROTATION = [-Math.PI / 2, 0, 0]

export const CardPastry = ({ hoverAnim, hovered }) => {
  const outerGroup = useRef(null) // static base rotation + position
  const spinGroup = useRef(null)  // live animated transform
  // const [hovered, setHovered] = useState(false)

  const groupKey = GROUP_BY_ANIM[hoverAnim]
  const config = PASTRY_GROUPS[groupKey]
  const { nodes, materials } = useGLTF(MODEL_PATH)

  // idle gentle spin, same pattern as hero, paused on hover
  useFrame(() => {
    if (!spinGroup.current || hovered) return
    spinGroup.current.rotation.z += 0.004
  })

  useEffect(() => {
    if (!spinGroup.current) return
    const target = spinGroup.current
    gsap.killTweensOf([target.rotation, target.position, target.scale])

    if (hoverAnim === 'flip') {
      gsap.to(target.rotation, {
        y: hovered ? target.rotation.y + Math.PI * 2 : target.rotation.y,
        duration: 0.8,
        ease: 'power2.inOut',
      })
    }

    if (hoverAnim === 'bounce') {
      if (hovered) {
        gsap.to(target.position, {
          y: '+=1.25',
          duration: 0.25,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
        })
      }
    }

    if (hoverAnim === 'wobble') {
      if (hovered) {
        gsap.to(target.rotation, {
          z: 0.25,
          duration: 0.15,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: 5,
          onComplete: () => {
            gsap.set(target.rotation, { z: 0 })
          },
        })
      }
    }

    if (hoverAnim === 'tilt') {
      gsap.to(target.rotation, {
        x: hovered ? BASE_ROTATION[0] + 0.3 : BASE_ROTATION[0],
        z: hovered ? 0.15 : 0,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    // shared hover scale pop across all variants
    gsap.to(target.scale, {
      x: hovered ? 1.1 : 1,
      y: hovered ? 1.1 : 1,
      z: hovered ? 1.1 : 1,
      duration: 0.3,
      ease: 'back.out(1.7)',
    })
  }, [hovered, hoverAnim])

  return (
    <group ref={outerGroup} rotation={BASE_ROTATION}>
      <group ref={spinGroup} scale={0.012}>
        <mesh
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
          visible={false}
        >
          <sphereGeometry args={[1.5, 8, 8]} />
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


