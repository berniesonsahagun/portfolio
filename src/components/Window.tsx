import { PropsWithChildren } from "react";
import Draggable from "react-draggable";

type WindowProps = {
  windowTitle: string;
  windowIcon: string;
};

//base component where all types of Window gets its Window capabilities
export default function Window({
  windowTitle,
  windowIcon,
  children,
}: PropsWithChildren<WindowProps>) {
  function handleMinimize() {
    //handleMinimize window
  }

  function handleMaximize() {
    //handleMaximize window
  }

  function handleClose() {
    //handleClose window
  }

  return (
    <Draggable>
      <div className="sample-window absolute top-[300px] left-[625px] min-h-[45vh] min-w-[35vw] bg-window-bg border-2 border-white border-r-window-accent border-b-window-accent p-1 z-50">
        <div className="window-header flex justify-between bg-window-header-bg p-2">
          <div className="flex">
            <img src={windowIcon} />
            <h3 className="overflow-hidden whitespace-nowrap text-ellipsis text-white font-MSsans">
              {windowTitle}
            </h3>
          </div>
          <div className="text-right">
            <button
              onClick={handleMinimize}
              className="shadow-windowInactive active:shadow-windowPressed bg-windows px-2"
            >
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
            <button
              onClick={handleMaximize}
              className="shadow-windowInactive active:shadow-windowPressed bg-windows px-2"
            >
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
            <button
              onClick={handleClose}
              className="shadow-windowInactive active:shadow-windowPressed bg-windows px-2"
            >
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
        </div>

        {children}
      </div>
    </Draggable>
  );
}
