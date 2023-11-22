import React from 'react'

function LeftPanel() {
  return (
    <div className="w-24 h-80 my-auto flex-col justify-start items-start gap-12 inline-flex">
      <div className="h-20 w-full px-6 py-4 bg-zinc-500 rounded-2xl flex-col justify-start items-center gap-1 flex">
        {/* <div className="w-6 h-6 relative" /> */}
        <div className="text-center flex flex-col items-center gap-1 text-zinc-900 text-xs font-medium font-['Poppins']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="#000"
          >
            <g id='ð¦ icon "coin line"'>
              <path
                id="Vector"
                d="M12 0.839844C18.6273 0.839844 24 3.75434 24 7.35026V11.6905C24 15.2865 18.6273 18.201 12 18.201C5.49055 18.201 0.192 15.3895 0.00545454 11.8826L0 11.6905V7.35026C0 3.75434 5.37273 0.839844 12 0.839844ZM12 13.8607C7.94182 13.8607 4.35273 12.768 2.18182 11.0938V11.6905C2.18182 13.7326 6.41782 16.0308 12 16.0308C17.4655 16.0308 21.6415 13.8281 21.8127 11.8186L21.8182 11.6905L21.8193 11.0938C19.6484 12.7669 16.0593 13.8607 12 13.8607ZM12 3.00998C6.41782 3.00998 2.18182 5.30816 2.18182 7.35026C2.18182 9.39236 6.41782 11.6905 12 11.6905C17.5822 11.6905 21.8182 9.39236 21.8182 7.35026C21.8182 5.30816 17.5822 3.00998 12 3.00998Z"
                fill="#000"
              />
            </g>
          </svg>
          Dabba Token
        </div>
      </div>
      <div className="h-20 w-full px-6 py-4 bg-zinc-500 rounded-2xl flex-col justify-start items-center gap-1 flex">
        <div className="text-center flex flex-col items-center gap-1 text-zinc-900 text-xs font-medium font-['Poppins']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
          >
            <g id='ð¦ icon "course"'>
              <path
                id="Vector"
                d="M20.1385 15.81C20.1245 18.9985 20.0005 20.7 18.8944 21.8117C17.6487 23.0637 15.6435 23.0637 11.6334 23.0637H9.50675C5.49663 23.0637 3.49158 23.0637 2.24578 21.8117C1 20.5596 1 18.5444 1 14.514V10.2391C1 6.20877 1 4.19359 2.24578 2.94151C2.89966 2.28433 3.7627 1.97208 5.01504 1.82373"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M10.5768 6.93911C10.4803 6.5094 10.0536 6.2393 9.62393 6.33585C9.19425 6.43239 8.92407 6.85902 9.02061 7.28874L10.5768 6.93911ZM18.8738 7.35893C18.9725 6.92969 18.7044 6.50176 18.2752 6.40315C17.8459 6.30454 17.4181 6.57258 17.3194 7.00183L18.8738 7.35893ZM17.2266 10.9679L16.4493 10.7894L16.4484 10.7931L17.2266 10.9679ZM21.424 5.79562C21.424 5.35519 21.067 4.99815 20.6265 4.99815C20.1861 4.99815 19.8291 5.35519 19.8291 5.79562H21.424ZM19.8291 10.769C19.8291 11.2094 20.1861 11.5665 20.6265 11.5665C21.067 11.5665 21.424 11.2094 21.424 10.769H19.8291ZM8.17721 5.12025C8.17721 5.26856 8.12201 5.35419 8.12101 5.3558C8.11642 5.36319 8.12892 5.34199 8.17967 5.29253C8.28109 5.19366 8.45537 5.05851 8.70896 4.89429C9.20999 4.56991 9.91325 4.20052 10.6778 3.84902C11.4386 3.49919 12.2362 3.17797 12.9164 2.94606C13.2568 2.83 13.5594 2.73917 13.8081 2.67823C14.0704 2.61398 14.2258 2.59494 14.2911 2.59494V1C14.0292 1 13.7232 1.05693 13.4286 1.1291C13.1204 1.20461 12.7706 1.31067 12.4017 1.43646C11.6632 1.68824 10.8148 2.03053 10.0115 2.39993C9.21169 2.76767 8.43253 3.17324 7.84217 3.55548C7.5501 3.74458 7.27647 3.94565 7.0664 4.15039C6.96139 4.25274 6.85225 4.37521 6.76496 4.51617C6.68126 4.65137 6.58228 4.86048 6.58228 5.12025H8.17721ZM22 5.12025C22 4.86048 21.901 4.65137 21.8173 4.51617C21.73 4.37521 21.6208 4.25274 21.5159 4.15039C21.3058 3.94565 21.0322 3.74458 20.7401 3.55548C20.1498 3.17324 19.3706 2.76767 18.5708 2.39993C17.7675 2.03053 16.9191 1.68824 16.1806 1.43646C15.8116 1.31067 15.4618 1.20461 15.1537 1.1291C14.859 1.05693 14.553 1 14.2911 1V2.59494C14.3564 2.59494 14.5119 2.61398 14.7742 2.67823C15.0229 2.73917 15.3255 2.83 15.6659 2.94606C16.346 3.17797 17.1436 3.49919 17.9045 3.84902C18.669 4.20052 19.3723 4.56991 19.8733 4.89429C20.1269 5.05851 20.3012 5.19366 20.4026 5.29253C20.4533 5.34199 20.4659 5.36319 20.4613 5.3558C20.4602 5.35419 20.4051 5.26856 20.4051 5.12025H22ZM20.4051 5.12025C20.4051 4.97194 20.4602 4.88632 20.4613 4.8847C20.4659 4.87731 20.4533 4.89851 20.4026 4.94798C20.3012 5.04684 20.1269 5.18201 19.8733 5.34621C19.3723 5.67059 18.669 6.03999 17.9045 6.39148C17.1436 6.74131 16.346 7.06253 15.6659 7.29445C15.3255 7.4105 15.0229 7.50134 14.7742 7.56227C14.5119 7.62652 14.3564 7.64557 14.2911 7.64557V9.2405C14.553 9.2405 14.859 9.18357 15.1537 9.1114C15.4618 9.03589 15.8116 8.92983 16.1806 8.80404C16.9191 8.55227 17.7675 8.20997 18.5708 7.84057C19.3706 7.47284 20.1498 7.06726 20.7401 6.68502C21.0322 6.49593 21.3058 6.29486 21.5159 6.09011C21.6208 5.98776 21.73 5.86529 21.8173 5.72433C21.901 5.58913 22 5.38002 22 5.12025H20.4051ZM6.58228 5.12025C6.58228 5.38002 6.68126 5.58913 6.76496 5.72433C6.85225 5.86529 6.96139 5.98776 7.0664 6.09011C7.27647 6.29486 7.5501 6.49593 7.84217 6.68502C8.43253 7.06726 9.21169 7.47284 10.0115 7.84057C10.8148 8.20997 11.6632 8.55227 12.4017 8.80404C12.7706 8.92983 13.1204 9.03589 13.4286 9.1114C13.7232 9.18357 14.0292 9.2405 14.2911 9.2405V7.64557C14.2258 7.64557 14.0704 7.62652 13.8081 7.56227C13.5594 7.50134 13.2568 7.4105 12.9164 7.29445C12.2362 7.06253 11.4386 6.74131 10.6778 6.39148C9.91325 6.03999 9.20999 5.67059 8.70896 5.34621C8.45537 5.18201 8.28109 5.04684 8.17967 4.94798C8.12892 4.89851 8.11642 4.87731 8.12101 4.8847C8.12201 4.88632 8.17721 4.97194 8.17721 5.12025H6.58228ZM9.02061 7.28874L9.88656 11.1427L11.4427 10.7931L10.5768 6.93911L9.02061 7.28874ZM17.3194 7.00183L16.4493 10.7894L18.0037 11.1465L18.8738 7.35893L17.3194 7.00183ZM10.6366 12.2925C11.57 12.9355 12.7831 13.2278 13.9456 13.2278C15.1081 13.2278 16.3212 12.9355 17.2545 12.2925L16.3496 10.9792C15.7453 11.3955 14.8707 11.6329 13.9456 11.6329C13.0204 11.6329 12.1458 11.3955 11.5416 10.9792L10.6366 12.2925ZM16.4484 10.7931C16.4216 10.9125 16.3737 10.9625 16.3496 10.9792L17.2545 12.2925C17.6869 11.9945 17.9128 11.5512 18.0046 11.1427L16.4484 10.7931ZM9.88656 11.1427C9.97832 11.5512 10.2043 11.9945 10.6366 12.2925L11.5416 10.9792C11.5174 10.9625 11.4695 10.9125 11.4427 10.7931L9.88656 11.1427ZM19.8291 5.79562V10.769H21.424V5.79562H19.8291Z"
                fill="#19181B"
              />
            </g>
          </svg>
          FAQ
        </div>
      </div>
      <div className="h-20 w-full px-6 py-4 bg-zinc-500 rounded-2xl flex-col justify-start items-center gap-1 flex">
        <div className="text-center flex flex-col items-center gap-1 text-zinc-900 text-xs font-medium font-['Poppins']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id='ð¦ icon "message"'>
              <g id="Group">
                <path
                  id="Vector"
                  d="M8.12861 19.6441H7.58026C3.19342 19.6441 1 18.5474 1 13.0638V7.58026C1 3.19342 3.19342 1 7.58026 1H16.3539C20.7408 1 22.9342 3.19342 22.9342 7.58026V13.0638C22.9342 17.4506 20.7408 19.6441 16.3539 19.6441H15.8056C15.4656 19.6441 15.1366 19.8086 14.9282 20.0828L13.2832 22.2762C12.5593 23.2413 11.3749 23.2413 10.651 22.2762L9.00598 20.0828C8.83051 19.8415 8.42473 19.6441 8.12861 19.6441Z"
                  stroke="#19181B"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group_2">
                  <path
                    id="Vector_2"
                    d="M16.3501 10.8701H16.3599"
                    stroke="#19181B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M11.9629 10.8701H11.9728"
                    stroke="#19181B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M7.57397 10.8701H7.58385"
                    stroke="#19181B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
          </svg>
          Community
        </div>
      </div>
    </div>
  )
}

export default LeftPanel