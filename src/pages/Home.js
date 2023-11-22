import React, { useState } from 'react'
import Logo from '../component/Logo'
import AvailableTab from '../component/AvailableTab'
import InvTab from '../component/InvTab'
import RightPanel from '../component/RightPanel'
import Profile from '../component/Profile'
import LeftPanel from '../component/LeftPanel'
import BottomCard from '../component/BottomCard'
import MorePanel from '../component/MorePanel'
import CardTable from '../component/CardTable'

function Home() {
    const [more, setMore] = useState(false)
    const [bottomTable, setBottomTable] = useState(false)
  return (
    <div className={`relative h-full ${more ? ' flex flex-row' : ''} `}>
      {more ? <div className="bg-zinc-900 h-[1148px] w-[560px] overflow-y-auto ">
        <MorePanel />
      </div> : <></>}
      <div>
        <div className="mt-14 ml-14">
          <Logo />
        </div>
        <div className="w-full flex justify-end pr-32">
          <AvailableTab />
        </div>
        <div className="w-full flex justify-between pr-32 pl-14">
          <Profile />
          <InvTab />
        </div>
        <div>
          <div className="w-full flex justify-between ml-12 pr-32 mt-16">
            <RightPanel />
            <LeftPanel />
          </div>

          <div className="mt-24 w-full flex justify-center ">
           {bottomTable ? <div className='absolute bottom-28'>
            <CardTable />
            </div> : <></>}
            <div onClick={() => setBottomTable(!bottomTable)}>
            <BottomCard />
            </div>
          </div>
        </div>
        <div className={`absolute bottom-20 ${more ? 'left-6/12' : 'left-0'}`} onClick={() => setMore(!more)}>
          <div className="w-36 h-20 px-6 py-4 bg-gradient-to-t from-yellow-400 to-yellow-400 rounded-tr-2xl rounded-br-2xl flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-zinc-900 text-base font-semibold font-['Poppins']">
              More about
              <br />
              Dabba Lite
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
