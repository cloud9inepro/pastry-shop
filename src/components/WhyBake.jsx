
import { MapPinned, CakeSlice, WandSparkles } from 'lucide-react';

const CARDS = [
  {
    id: '1',
    icon: <MapPinned  className="text-[#c96b6b]" size={28}/>,
    title: 'Local source',
    text: 'Local source ingredients, supporting local farmers and producers for the freshest flavors'
  },
  {
    id: '2',
    icon: <CakeSlice className="text-[#c96b6b]" size={28}/>,
    title: 'Fresh baking',
    text: 'We bake fresh every day, so you can enjoy the best flavors and textures'
  },
  {
    id: '3',
    icon: <WandSparkles className="text-[#c96b6b]" size={28}/>,
    title: 'Whimsical designs',
    text: 'Whimsical designs and choices your creasuies and soon seasons'
  },
]


export const WhyBake = () => {
  return (
      <section className="relative w-full px-6 md:px-16 py-16 bg-[#fdf1e7]">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-[#3d2b1f] mb-12">
        Why We Bake Differently
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center text-center p-2 "
          >
            <div className="w-16 h-16 rounded-full bg-[#fde6dc] flex items-center justify-center mb-6">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold text-[#3d2b1f] mb-3">
              {card.title}
            </h3>

            <p className="text-[#5c4535] text-sm">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>

        )
        }
        