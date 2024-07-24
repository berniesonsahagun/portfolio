interface TitleBarProps {
  iconSrc: string;
  title: string;
}

export function TitleBar({ iconSrc, title }: TitleBarProps) {
  return (
    <header className="w-full flex justify-between gap-5 bg-window-header-bg p-1">
      <div className="flex gap-2 items-center">
        <img src={iconSrc} width="16px" />
        <h3 className="overflow-hidden whitespace-nowrap text-ellipsis text-white font-MSsans text-sm">
          {title}
        </h3>
      </div>
      <div className="flex justify-end gap-[2px]">
        <button className="shadow-windowInactive h-[18px] w-[16px] flex items-end justify-center active:shadow-windowPressed bg-windows p-1">
          <svg
            width="6"
            height="2"
            viewBox="0 0 6 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1012_3201)">
              <path d="M0 0H6V2H0V0Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1012_3201">
                <rect width="6" height="2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="shadow-windowInactive h-[18px] w-[16px] active:shadow-windowPressed bg-windows p-1">
          <svg
            className="block"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1012_3204)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0H0V9H9V0ZM8 2H1V8H8V2Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1012_3204">
                <rect width="9" height="9" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="shadow-windowInactive h-[18px] w-[16px] active:shadow-windowPressed bg-windows p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <g clipPath="url(#clip0_1355_484)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0.5H2V1.5H3V2.5H5V1.5H6V0.5H8V1.5H7V2.5H6V3.5H5V4.5H6V5.5H7V6.5H8V7.5H6V6.5H5V5.5H3V6.5H2V7.5H0V6.5H1V5.5H2V4.5H3V3.5H2V2.5H1V1.5H0V0.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1355_484">
                <rect
                  width="8"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </header>
  );
}
