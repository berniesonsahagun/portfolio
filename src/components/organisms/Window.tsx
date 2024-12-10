import { PropsWithChildren } from "react";
import Draggable from "react-draggable";
import TitleBar from "../molecules/TitleBar";
import ToolBar from "../molecules/ToolBar";

interface ToolBarItem {
  title: string;
  items: Array<string>;
}

interface WindowProps {
  title: string;
  icon: string;
  toolBarItems?: Array<ToolBarItem>;
  className?: string;
}

//base component where all types of Window gets its Window capabilities
export default function Window({
  title,
  icon,
  toolBarItems,
  className,
  children,
}: PropsWithChildren<WindowProps>) {
  return (
    <Draggable>
      <div
        className={`absolute bg-window-bg border-2 border-white border-r-window-accent border-b-window-accent p-1 z-50 ${className}`}
      >
        <TitleBar icon={icon} title={title} />
        {toolBarItems && <ToolBar items={toolBarItems} />}

        {children}
      </div>
    </Draggable>
  );
}
