export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center gap-6 max-w-md">
      <h1 className="font-display text-4xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-[#3d2b1f]">
        TOO CUTE TO EAT.<br />
        BUT YOU TOTALLY SHOULD.
      </h1>

      <p className="font-display text-[#5c4535] text-base">
        Whimsical, handcrafted pastries baked fresh daily with magic & organic ingredients.
      </p>

      <div className="flex items-center gap-6">
        <button className="px-3 py-3 rounded-full border border-[#3d2b1f] text-[#3d2b1f] font-medium hover:bg-[#3d2b1f] bg-[#faf0e5] shadow-lg hover:animate-bounce hover:text-white transition-colors">
          Order Fresh Now
        </button>
        <a href="#menu" className="text-sm font-medium text-[#3d2b1f] underline underline-offset-4">
          View Today's Menu
        </a>
      </div>
    </div>
  )
}