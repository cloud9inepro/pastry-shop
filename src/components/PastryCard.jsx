import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { View, PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { Heart } from 'lucide-react';
import { CardPastry } from './CardPastry'

export const PastryCard = ({ card }) => {
  const viewportRef = useRef(null)
  const cardRef = useRef(null)
  const quickX = useRef(null)
  const quickY = useRef(null)

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
  if (!cardRef.current) return
  const rect = cardRef.current.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5

  if (!quickX.current) {
    quickX.current = gsap.quickTo(cardRef.current, 'rotationY', { duration: 0.4, ease: 'power2.out' })
    quickY.current = gsap.quickTo(cardRef.current, 'rotationX', { duration: 0.4, ease: 'power2.out' })
  }

  quickX.current(x * 12)
  quickY.current(-y * 12)
}

  const handleMouseLeave = () => {
    quickX.current?.(0)
    quickY.current?.(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => {
    setHovered(false);
    handleMouseLeave();
  }}
  onMouseMove={handleMouseMove}
      // style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative flex bg-[#fdf1e7] rounded-2xl overflow-hidden border  border-[#e8d5c4] p-4 gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div  className="relative w-32 h-32 shrink-0 rounded-xl  bg-[#c97b7b]">
        <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <CardPastry hoverAnim={card.hoverAnim} />
        </Canvas>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-lg text-[#3d2b1f]">{card.title}</h3>
          <p className="font-body text-sm text-[#5c4535] mt-1">{card.ingredients}</p>
        </div>
      </div>

      <button className="absolute top-3 right-3 text-[#3d2b1f]" aria-label="Like">
        <Heart size={16} />
      </button>
    </div>
  )
}