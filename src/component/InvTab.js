import React from 'react'

function InvTab() {
  return (
    <div className="w-96 h-24 relative">
      <div className="w-96 h-12 left-0 top-[15px] absolute opacity-50 bg-gradient-to-l from-black to-neutral-700 rounded-2xl border border-lime-200" />
      <div className="w-60 h-12 left-[203px] top-[15px] absolute bg-gradient-to-t from-lime-200 to-green-600 rounded-2xl" />
      <img
        className="w-28 h-14 left-[320px] top-0 absolute"
        src="/assets/available.png"
      />
      <div className="left-[350px] top-[73px] absolute text-right w-max">
        <span className="text-zinc-200 text-base font-medium font-['Poppins']">
          Owned :
        </span>
        <span className="text-zinc-200 text-base font-bold font-['Poppins']">
          {' '}
          10
        </span>
      </div>
      <div className="left-[77px] top-[29px] absolute text-zinc-200 text-base font-bold font-['Poppins']">
        Inventory : 6
      </div>
      <div className="left-[219px] top-[29px] absolute text-right text-zinc-900 text-base font-bold font-['Poppins']">
        Claimed : 4
      </div>
      <div className="w-8 h-8 p-1 left-[16px] top-[25px] absolute rounded-2xl flex-col justify-start items-center gap-1 inline-flex">
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute"></div>
        </div>
      </div>
    </div>
  )
}

export default InvTab
