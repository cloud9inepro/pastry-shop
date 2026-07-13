// PastryCard.jsx
import { useRef } from 'react'
import { View } from '@react-three/drei'
// import { CardPastry } from './CardPastry'

export const PastryCard = ({ card }) => {
  const viewportRef = useRef(null)

  return (
    <div className="relative flex bg-[#fdf1e7] rounded-2xl overflow-hidden border border-[#e8d5c4] p-4 gap-4">
      {/* 3D viewport slot — tracked by drei's View */}
      <div ref={viewportRef} className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-[#c97b7b]">
        <View track={viewportRef}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          {/* <CardPastry hoverAnim={card.hoverAnim} /> */}
        </View>
      </div>

      {/* text content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-lg text-[#3d2b1f]">{card.title}</h3>
          <p className="font-body text-sm text-[#5c4535] mt-1">{card.ingredients}</p>
        </div>
      </div>

      {/* heart icon placeholder — micro-interaction wired in next */}
      <button className="absolute top-3 right-3 text-[#3d2b1f]" aria-label="Like">
        ♥
      </button>
    </div>
  )
}