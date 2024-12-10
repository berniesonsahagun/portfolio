import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover";
import { Button } from "../atoms/Button";

import NotepadIcon from "@/assets/images/notepad-icon.png";
import MSAgentIcon from "@/assets/images/msagent-icon.png";
import DownloadIcon from "@/assets/images/download-icon.png";

import UserIcon from "@/assets/images/user-icon.png";
import MSAgentBunnyIcon from "@/assets/images/msagent-bunny-icon.png";
import SmileyIcon from "@/assets/images/smiley-icon.png";

export default function StartMenu() {
  return (
    <>
      <div className="w-[28px] px-1 py-2 relative bg-window-header-bg text-nowrap">
        <h3 className="absolute font-arial text-lg text-white rotate-[-90deg] -left-[72px] bottom-[30%] font-bold">
          Bernieson Sahagun
        </h3>
      </div>

      <div className="p-1">
        <div className="border-b-[1px] border-white">
          <div className="border-b-[1px] border-window-content">
            <Popover>
              <PopoverTrigger className="w-full">
                <Button variant="flat" icon={NotepadIcon}>
                  About Me
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="rounded-none p-1 bg-windows shadow-windowBorder ml-[6px] mt-[13px]"
                side="right"
                align="start"
              >
                <Button variant="flat" icon={MSAgentIcon}>
                  About Me
                </Button>
                <Button variant="flat" icon={DownloadIcon}>
                  Download Resume
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="pt-2 border-b-[1px] border-white">
          <div className="border-b-[1px] border-window-content">
            <Button className="w-full text-left" variant="flat" icon={UserIcon}>
              LinkedIn
            </Button>
            <Button variant="flat" icon={MSAgentBunnyIcon}>
              Github
            </Button>
            <Button variant="flat" icon={SmileyIcon}>
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
