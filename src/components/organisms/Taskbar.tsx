import TaskbarItem from "@/components/molecules/TaskbarItem";
import StartMenu from "../molecules/StartMenu";
import StartButton from "../molecules/StartButton";

import FolderIcon from "@/assets/images/directory_open_cabinet_fc-1.png";
import WindowsIcon from "@/assets/images/start-icon.png";
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover";
import Clock from "../molecules/Clock";

export default function Taskbar() {
  return (
    <nav className="bg-windows shadow-windowBorder">
      <div className="p-1 grid grid-cols-startBar items-center">
        <div className="relative">
          <Popover>
            <PopoverTrigger>
              <StartButton icon={WindowsIcon} text="Bernieson" />
            </PopoverTrigger>
            <PopoverContent
              className="grid grid-cols-[auto_1fr] bg-windows shadow-windowInactive  w-[277px] h-[255px] p-0 rounded-none -ml-[3px] mb-[1px]"
              align="start"
              side="top"
            >
              <StartMenu />
            </PopoverContent>
          </Popover>
        </div>

        <ul className="flex mx-2">
          <li>
            <TaskbarItem icon={FolderIcon} text="Sample Text" />
          </li>
          <li>
            <TaskbarItem icon={FolderIcon} text="Sample Text" />
          </li>
        </ul>

        <Clock />
      </div>
    </nav>
  );
}
