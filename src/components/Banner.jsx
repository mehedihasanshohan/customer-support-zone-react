import React from 'react'
import banner1 from '/vector1.png'

const Banner = ({inProgressCount, resolvedCount}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">

      {/* In-progress Box */}
      <section className="relative rounded-lg py-12 flex flex-col items-center justify-center text-white
                          bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden h-[200px]">
        {/* Left PNG */}
        <img
          src={banner1}
          alt="bg left"
          className="absolute inset-y-0 left-0 h-full w-auto opacity-80 pointer-events-none"
        />
        {/* Right PNG */}
        <img
          src={banner1}
          alt="bg right"
          className="absolute inset-y-0 right-0 h-full w-auto opacity-80 pointer-events-none scale-x-[-1]"
        />
        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-xl font-semibold mb-2">In-progress</h2>
          <p className="text-4xl font-bold">{inProgressCount}</p>
        </div>
      </section>

      {/* Resolved Box */}
      <section className="relative rounded-lg py-12 flex flex-col items-center justify-center text-white
                          bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden h-[200px]">
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
          <h2 className="text-xl font-semibold mb-2">Resolved</h2>
          <p className="text-4xl font-bold">{resolvedCount}</p>
        </div>
      </section>

    </div>
  )
}

export default Banner
