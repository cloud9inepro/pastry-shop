// FreshCounter.jsx
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { PastryCard } from './PastryCard'

const CARDS = [
  {
    id: 'strawberry-layer-cake',
    title: 'Strawberry Dream Layer Cake',
    ingredients: 'Ingredients: Strawberry Dream Layer and Seake',
    hoverAnim: 'flip',
  },
  {
    id: 'cherry-cupcake',
    title: 'Cherry Top Chocolate Cupcake',
    ingredients: 'Ingredients: Cherry, Chocolate Cupcake',
    hoverAnim: 'bounce',
  },
  {
    id: 'currant-gateau',
    title: 'Currant Mousse Gateau',
    ingredients: 'Ingredients: Currant Mousse Gateau, Srions',
    hoverAnim: 'wobble',
  },
  {
    id: 'lemon-chiffon',
    title: 'Lemon Chiffon & Orange Slice',
    ingredients: 'Ingredients: Lemon, Orange Slice',
    hoverAnim: 'tilt',
  },
]

export const FreshCounter = () => {
  const containerRef = useRef(null)

  return (
    <section className="relative w-full px-6 md:px-16 py-16 bg-[#fdf1e7]">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-[#3d2b1f] mb-12">
        Today's Fresh Counter
      </h2>

      {/* card grid — DOM layout, each card's viewport tracked by a <View> */}
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
      >
        {CARDS.map((card) => (
          <PastryCard key={card.id} card={card} />
        ))}
      </div>

      {/* single shared Canvas, positioned to cover the grid — all <View>s render into this */}
      <Canvas
        className="!absolute !inset-0 !w-full !h-full pointer-events-none"
        eventSource={containerRef}
        eventPrefix="client"
      >
        <View.Port />
      </Canvas>
    </section>
  )
}