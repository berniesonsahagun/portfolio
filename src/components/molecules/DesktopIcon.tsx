import Draggable from "react-draggable";
import { Button } from "@/components/atoms/Button";

interface DesktopIconProps {
  icon: string;
  title: string;
}

export default function DesktopIcon({ icon, title }: DesktopIconProps) {
  return (
    <Draggable>
      <Button variant="desktop" icon={icon}>
        {title}
      </Button>
    </Draggable>
  );
}
