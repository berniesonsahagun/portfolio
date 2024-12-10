import { Button } from "@/components/atoms/Button";

interface TaskbarItemProps {
  icon: string;
  text: string;
}

export default function TaskbarItem({ icon, text }: TaskbarItemProps) {
  return (
    <Button icon={icon} className="flex items-center gap-1 mr-[3px]">
      <span className="text-taskbarItem">{text}</span>
    </Button>
  );
}
