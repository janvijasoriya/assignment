import React from 'react'

function AvailableTab() {
  return (
    <div className="w-96 h-24 relative">
      <div className="w-96 h-12 left-0 top-[15px] absolute opacity-50 bg-gradient-to-l from-black to-neutral-700 rounded-2xl border border-yellow-400" />
      <div className="w-56 h-12 left-[217px] top-[15px] absolute bg-gradient-to-t from-yellow-400 to-yellow-400 rounded-2xl" />
      <img
        className="w-28 h-14 left-[320px] top-0 absolute"
        src="/assets/available.png"
      />
      <div className="left-[250px] top-[73px] absolute text-center w-max">
        <span className="text-zinc-200 text-base font-medium font-['Poppins']">
          Season 1 Devices :
        </span>
        <span className="text-zinc-200 text-base font-bold font-['Poppins']">
          {' '}
          1000
        </span>
      </div>
      <div className="left-[72px] top-[29px] absolute text-zinc-200 text-base font-bold font-['Poppins']">
        Available : 800
      </div>
      <div className="left-[233px] top-[29px] absolute text-right text-zinc-900 text-base font-bold font-['Poppins']">
        Sold : 200
      </div>
    </div>
  )
}

export default AvailableTab
