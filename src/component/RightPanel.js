import React from 'react'

function RightPanel() {
  return (
    <div className="w-40 h-max px-2 pb-2 py-4 bg-zinc-500 rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
  <div className="h-36 px-6 py-4 rounded-2xl flex-col justify-start items-center gap-1 flex">
    <div className="w-6 h-6 relative">
      <div className="w-5 h-5 left-[1px] top-[1px] absolute">
      </div>
    </div>
    <div className="text-center"><span className="text-zinc-900 text-2xl font-bold font-['Poppins']">8 GB<br/></span><span className="text-zinc-900 text-xs font-medium font-['Poppins']">Avg. data<br/>consumed<br/>per user</span></div>
  </div>
  <div className="h-36 px-6 py-4 rounded-2xl flex-col justify-start items-center gap-1 flex">
    <div className="w-6 h-6 relative">
      <div className="w-6 h-6 left-0 top-0 absolute">
      </div>
    </div>
    <div className="text-center"><span className="text-zinc-900 text-2xl font-bold font-['Poppins']">128 GB<br/></span><span className="text-zinc-900 text-xs font-medium font-['Poppins']">Avg. data<br/>consumed<br/>per hotspot</span></div>
  </div>
  <div className="h-36 px-6 py-4 rounded-2xl flex-col justify-start items-center gap-1 flex">
    <div className="w-6 h-6 relative">
      <div className="w-5 h-5 left-[1px] top-[1px] absolute">
      </div>
    </div>
    <div className="text-center"><span className="text-zinc-900 text-2xl font-bold font-['Poppins']">500 GB<br/></span><span className="text-zinc-900 text-xs font-medium font-['Poppins']">Highest data<br/>consumed<br/>by a user</span></div>
  </div>
</div>
  )
}

export default RightPanel
