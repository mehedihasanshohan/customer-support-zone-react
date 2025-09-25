import React from 'react'
import banner1 from '/vector1.png'

const Banner = () => {
  return (
    <div className='max-w-6xl mx-auto flex mt-8 justify-center items-center gap-4'>
    <section className="w-[708px] h-[250px] rounded-lg py-16 flex flex-col items-center justify-center text-white
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative overflow-hidden">

  {/* Left PNG */}
  <img
    src={banner1}
    alt="bg left"
    className="absolute inset-y-0 left-0 h-full w-auto opacity-80 pointer-events-none"
  />

  {/* Right PNG (flipped) */}
  <img
    src={banner1}
    alt="bg right"
    className="absolute inset-y-0 right-0 h-full w-auto opacity-80 pointer-events-none scale-x-[-1]"
  />

  {/* Content */}
  <div className="relative z-10 text-center">
    <h2 className="text-2xl font-semibold mb-2">In-progress</h2>
    <p className="text-4xl font-bold">0</p>
  </div>
</section>
    <section className="w-[708px] h-[250px] rounded-lg py-16 flex flex-col items-center justify-center text-white
                    bg-gradient-to-r from-[#54CF68] to-[#00827A] relative overflow-hidden">

  {/* Left PNG */}
  <img
    src={banner1}
    alt="bg left"
    className="absolute inset-y-0 left-0 h-full w-auto opacity-80 pointer-events-none"
  />

  {/* Right PNG (flipped) */}
  <img
    src={banner1}
    alt="bg right"
    className="absolute inset-y-0 right-0 h-full w-auto opacity-80 pointer-events-none scale-x-[-1]"
  />

  {/* Content */}
  <div className="relative z-10 text-center">
    <h2 className="text-2xl font-semibold mb-2">Resolved</h2>
    <p className="text-4xl font-bold">0</p>
  </div>
</section>
</div>
  )
}

export default Banner
