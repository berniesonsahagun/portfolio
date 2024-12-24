import { Cursor } from "@react95/core";
import { MouseEventHandler, ReactNode } from "react";

interface DesktopIconProps {
  icon: ReactNode;
  openEventHandler: MouseEventHandler;
  title: string;
}

export default function DesktopIcon({
  icon,
  openEventHandler,
  title,
}: DesktopIconProps) {
  return (
    <div className={Cursor.Pointer} onClick={openEventHandler}>
      {icon}
      <p
        style={{
          fontFamily: "MS Sans Serif",
          fontSize: 13,
          justifyContent: "center",
          marginTop: 5,
          width: 100,
          textAlign: "center",
          color: "black",
        }}
      >
        {title}
      </p>
    </div>
  );
}
