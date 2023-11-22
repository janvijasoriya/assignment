import React from 'react'

function BottomCard() {
  return (
    <div className="w-[650px] h-32 relative">
      <div className="w-full h-32 p-2 left-0 top-0 absolute bg-zinc-500 rounded-2xl justify-start items-start gap-2 inline-flex">
        <div className="w-36 p-4 bg-zinc-500 rounded-2xl flex-col justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 pl-0.5 pr-px justify-center items-center inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
            >
              <g id='ð¦ icon "location"'>
                <g id="Group">
                  <path
                    id="Vector"
                    d="M10.4635 14.4153C8.08693 14.4153 6.14551 12.485 6.14551 10.0973C6.14551 7.70963 8.08693 5.79053 10.4635 5.79053C12.8401 5.79053 14.7815 7.72079 14.7815 10.1085C14.7815 12.4962 12.8401 14.4153 10.4635 14.4153ZM10.4635 7.46417C9.01306 7.46417 7.81915 8.64687 7.81915 10.1085C7.81915 11.5701 9.0019 12.7528 10.4635 12.7528C11.9252 12.7528 13.1079 11.5701 13.1079 10.1085C13.1079 8.64687 11.914 7.46417 10.4635 7.46417Z"
                    fill="#19181B"
                  />
                  <path
                    id="Vector_2"
                    d="M10.4621 24C8.81077 24 7.14827 23.3752 5.85399 22.1367C2.5625 18.9679 -1.07488 13.9135 0.297507 7.89958C1.536 2.44351 6.3003 0 10.4621 0H10.4733C14.635 0 19.3993 2.44351 20.6378 7.91074C21.9991 13.9247 18.3617 18.9679 15.0702 22.1367C13.7759 23.3752 12.1134 24 10.4621 24ZM10.4621 1.67364C7.21522 1.67364 3.04228 3.40307 1.93768 8.26778C0.732654 13.523 4.0353 18.053 7.02554 20.9205C8.95582 22.7838 11.9795 22.7838 13.9098 20.9205C16.8889 18.053 20.1915 13.523 19.0088 8.26778C17.8931 3.40307 13.709 1.67364 10.4621 1.67364Z"
                    fill="#19181B"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-zinc-900 text-2xl font-bold font-['Poppins']">
              23
              <br />
            </span>
            <span className="text-zinc-900 text-xs font-medium font-['Poppins']">
              Locations
            </span>
          </div>
        </div>
        <div className="w-36 p-4 bg-zinc-500 rounded-2xl flex-col justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 pb-px justify-center items-center inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id='ð¦ icon "lite hotspots"'>
                <g id="Group">
                  <path
                    id="Vector"
                    d="M18.253 23.5925H5.7508C3.71918 23.5925 1.86617 22.0296 1.53129 20.0203L0.0466571 11.1349C-0.18776 9.75075 0.482015 7.97584 1.58712 7.09398L9.32288 0.898613C10.8186 -0.306961 13.174 -0.295787 14.6809 0.909787L22.4167 7.09398C23.5107 7.97584 24.1804 9.75075 23.9572 11.1349L22.4725 20.0203C22.1376 21.9961 20.2511 23.5925 18.253 23.5925ZM11.9907 1.69112C11.3991 1.69112 10.8075 1.86983 10.3721 2.21587L2.63639 8.41111C2.00011 8.92459 1.56477 10.0633 1.69872 10.867L3.18338 19.7524C3.38431 20.9245 4.55639 21.9181 5.7508 21.9181H18.253C19.4474 21.9181 20.6195 20.9245 20.8204 19.7413L22.3051 10.8559C22.439 10.0521 21.9926 8.90226 21.3675 8.39993L13.6317 2.21587C13.1851 1.86983 12.5935 1.69112 11.9907 1.69112Z"
                    fill="#19181B"
                  />
                  <path
                    id="Vector_2"
                    d="M14.3693 15.2989C14.1572 15.2989 13.9562 15.2207 13.7888 15.0644C12.706 14.0263 11.2996 14.0263 10.2057 15.0644C9.8708 15.3882 9.34606 15.377 9.02234 15.0421C8.69862 14.7072 8.7098 14.1825 9.04469 13.8588C10.7749 12.1955 13.1972 12.1955 14.9386 13.8588C15.2734 14.1825 15.2846 14.7072 14.9609 15.0421C14.8158 15.2096 14.5925 15.2989 14.3693 15.2989Z"
                    fill="#19181B"
                  />
                  <path
                    id="Vector_3"
                    d="M16.7355 12.932C16.5234 12.932 16.3113 12.854 16.1551 12.6977C15.6304 12.1842 15.0388 11.7711 14.4137 11.4697C12.8509 10.7218 11.143 10.7218 9.59135 11.4697C8.96624 11.7711 8.38578 12.1842 7.84997 12.6977C7.52625 13.0214 6.99044 13.0214 6.66672 12.6866C6.343 12.3517 6.35417 11.8269 6.67789 11.5032C7.33649 10.8558 8.07322 10.3423 8.86578 9.96273C10.8863 8.99159 13.1188 8.99159 15.1281 9.96273C15.9207 10.3423 16.6574 10.8558 17.316 11.5032C17.6509 11.8269 17.6509 12.3517 17.3272 12.6866C17.1709 12.8428 16.9588 12.932 16.7355 12.932Z"
                    fill="#19181B"
                  />
                  <path
                    id="Vector_4"
                    d="M12.0026 17.9443C11.7124 17.9443 11.4333 17.8326 11.2101 17.6206C10.7747 17.1852 10.7747 16.4821 11.2101 16.0467C11.6454 15.6114 12.3598 15.6114 12.7952 16.0467C13.2305 16.4821 13.2305 17.1852 12.7952 17.6206C12.5719 17.8326 12.2928 17.9443 12.0026 17.9443Z"
                    fill="#19181B"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-zinc-900 text-2xl font-bold font-['Poppins']">
              480
              <br />
            </span>
            <span className="text-zinc-900 text-xs font-medium font-['Poppins']">
              Lite Hotspot
            </span>
          </div>
        </div>
        <div className="w-36 p-4 bg-zinc-500 rounded-2xl flex-col justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 p-px justify-center items-center inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id='ð¦ icon "data consumed"'>
                <g id="Group">
                  <g id="Vector">
                    <path
                      d="M16.95 9.25L12.33 13.87L10.57 11.23L7.05005 14.75"
                      fill="#19181B"
                    />
                    <path
                      d="M16.95 9.25L12.33 13.87L10.57 11.23L7.05005 14.75"
                      stroke="#19181B"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="Vector_2">
                    <path d="M14.75 9.25H16.95V11.45" fill="#19181B" />
                    <path
                      d="M14.75 9.25H16.95V11.45"
                      stroke="#19181B"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    id="Vector_3"
                    d="M8.7 23H15.3C20.8 23 23 20.8 23 15.3V8.7C23 3.2 20.8 1 15.3 1H8.7C3.2 1 1 3.2 1 8.7V15.3C1 20.8 3.2 23 8.7 23Z"
                    stroke="#19181B"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-zinc-900 text-2xl font-bold font-['Poppins']">
              10 TB
              <br />
            </span>
            <span className="text-zinc-900 text-xs font-medium font-['Poppins']">
              Data Consumed
            </span>
          </div>
        </div>
        <div className="w-36 p-4 bg-zinc-500 rounded-2xl flex-col justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 p-px justify-center items-center inline-flex">
            <div className="w-5 h-5 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id='ð¦ icon "devices"'>
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M17.511 12.8031C18.1611 12.8031 18.688 12.2762 18.688 11.6261C18.688 10.9761 18.1611 10.4492 17.511 10.4492C16.861 10.4492 16.334 10.9761 16.334 11.6261C16.334 12.2762 16.861 12.8031 17.511 12.8031Z"
                      stroke="#19181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M20.8 5.4V7.36898C20.525 7.33598 20.206 7.31399 19.865 7.31399H15.157C12.803 7.31399 12.022 8.09503 12.022 10.449V16.07H5.4C1.88 16.07 1 15.19 1 11.67V5.4C1 1.88 1.88 1 5.4 1H16.4C19.92 1 20.8 1.88 20.8 5.4Z"
                      stroke="#19181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M8.69995 16.0698V20.7997"
                      stroke="#19181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M1 11.8901H12"
                      stroke="#19181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_5"
                      d="M5.34497 20.7998H11.9999"
                      stroke="#19181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="Group_2">
                      <path
                        id="Vector_6"
                        d="M17.511 12.8031C18.1611 12.8031 18.688 12.2762 18.688 11.6261C18.688 10.9761 18.1611 10.4492 17.511 10.4492C16.861 10.4492 16.334 10.9761 16.334 11.6261C16.334 12.2762 16.861 12.8031 17.511 12.8031Z"
                        stroke="#19181B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_7"
                        d="M20.8 7.36895C20.525 7.33595 20.206 7.31396 19.865 7.31396H15.157C12.803 7.31396 12.022 8.09501 12.022 10.449V19.865C12.022 22.219 12.803 23 15.157 23H19.865C22.219 23 23 22.219 23 19.865V10.449C23 8.43601 22.428 7.57795 20.8 7.36895ZM17.511 10.449C18.16 10.449 18.688 10.977 18.688 11.626C18.688 12.275 18.16 12.803 17.511 12.803C16.862 12.803 16.334 12.275 16.334 11.626C16.334 10.977 16.862 10.449 17.511 10.449ZM17.511 19.865C16.213 19.865 15.157 18.809 15.157 17.511C15.157 16.972 15.344 16.466 15.652 16.07C16.081 15.52 16.752 15.157 17.511 15.157C18.105 15.157 18.644 15.377 19.051 15.729C19.546 16.169 19.865 16.807 19.865 17.511C19.865 18.809 18.809 19.865 17.511 19.865Z"
                        stroke="#19181B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_8"
                        d="M19.865 17.5112C19.865 18.8092 18.809 19.8652 17.511 19.8652C16.213 19.8652 15.157 18.8092 15.157 17.5112C15.157 16.9722 15.344 16.4662 15.652 16.0702C16.081 15.5202 16.752 15.1572 17.511 15.1572C18.105 15.1572 18.644 15.3772 19.051 15.7292C19.546 16.1692 19.865 16.8072 19.865 17.5112Z"
                        stroke="#19181B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_9"
                        d="M17.511 12.8031C18.1611 12.8031 18.688 12.2762 18.688 11.6261C18.688 10.9761 18.1611 10.4492 17.511 10.4492C16.861 10.4492 16.334 10.9761 16.334 11.6261C16.334 12.2762 16.861 12.8031 17.511 12.8031Z"
                        stroke="#19181B"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-center">
            <span className="text-zinc-900 text-2xl font-bold font-['Poppins']">
              965
              <br />
            </span>
            <span className="text-zinc-900 text-xs font-medium font-['Poppins']">
              Active Devices
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCard
