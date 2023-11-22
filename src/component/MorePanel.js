/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function MorePanel() {
  return (
    <div className="w-full h-auto relative bg-zinc-900 flex">
      <div className="w-4/5 h-full left-0 top-0 absolute bg-zinc-900">
        <div className="left-12 top-[514px] absolute flex-col justify-start items-center gap-8 inline-flex">
          <div className="text-zinc-200 text-3xl font-medium font-['Poppins']">
            Dabba Lite
          </div>
          <div className="w-full h-10">
            <span className="text-zinc-200 text-base font-medium font-['Poppins']">
              Decentralized router designed for the emerging markets. Compatible
              with the{' '}
            </span>
            <span className="text-zinc-200 text-base font-medium font-['Poppins'] underline">
              Helium network*.
            </span>
          </div>
        </div>
        <div className="w-full p-4 left-12 top-[672px] absolute bg-gradient-to-t from-yellow-400 to-yellow-400 rounded-2xl justify-center items-center gap-4 inline-flex">
          <div className="flex-col justify-center items-start gap-4 inline-flex">
            <div className="flex-col justify-center items-start flex">
              <div className="text-zinc-900 text-2xl font-bold font-['Poppins']">
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full h-56 left-12 top-[236px] absolute"
          src="/assets/available.png"
        />
        <div className="w-full h-96 left-[-2px] top-[1647px] absolute">
          <img
            className="w-full h-52 left-[81px] top-[1279px] absolute"
            src="/assets/available.png"
          />
          <div className="w-full h-96 left-[2px] top-0 absolute bg-zinc-200 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-full h-96 bg-zinc-200" />
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="text-zinc-900 text-3xl font-medium font-['Poppins']">
                Learn about the India Story
              </div>
              <div className="w-full text-zinc-900 text-base font-medium font-['Poppins']">
                Watch our India film and learn everything about deployment,
                growth, management of Wifi Dabba services in India.
              </div>
            </div>
            <img
              className="w-full h-64 rounded-2xl"
              src="/assets/available.png"
            />
            <div className="w-16 h-16 relative" />
          </div>
          <div className="w-full h-96 left-[2px] top-[1561px] absolute bg-zinc-200" />
          <img
            className="w-full h-96 left-[33px] top-[542px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-full h-56 left-[46px] top-[1027px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-32 h-60 left-[221px] top-[1267px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-full h-96 left-[44px] top-[1575px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-full h-60 left-[58px] top-[2067px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-full h-96 left-0 top-[2361px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-full h-96 left-[48px] top-[3644px] absolute"
            src="/assets/available.png"
          />
        </div>
        <div className="w-full h-96 left-12 top-[769px] absolute">
          <img
            className="w-64 h-60 left-0 top-0 absolute"
            src="/assets/available.png"
          />
          <img
            className="w-64 h-60 left-0 top-[280px] absolute"
            src="/assets/available.png"
          />
          <img
            className="w-64 h-60 left-0 top-[560px] absolute"
            src="/assets/available.png"
          />
          <div className="w-36 h-24 left-[291px] top-[151px] absolute flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-zinc-200 text-3xl font-medium font-['Poppins']">
              Step 1
            </div>
            <div className="w-36 h-9 text-zinc-200 text-base font-medium font-['Poppins']">
              Buy your season 1 Dabba lite.
            </div>
          </div>
          <div className="w-40 h-28 left-[291px] top-[407px] absolute flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-zinc-200 text-3xl font-medium font-['Poppins']">
              Step 2
            </div>
            <div className="w-40 h-14 text-zinc-200 text-base font-medium font-['Poppins']">
              We deploy your Dabba lite on our network.
            </div>
          </div>
          <div className="w-40 h-36 left-[291px] top-[662px] absolute flex-col justify-center items-start gap-8 inline-flex">
            <div className="text-zinc-200 text-3xl font-medium font-['Poppins']">
              Step 3
            </div>
            <div className="w-40 h-20 text-zinc-200 text-base font-medium font-['Poppins']">
              Tokens are rewarded when data is consumed on your Dabba lite.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MorePanel
