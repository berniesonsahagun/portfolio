import { Button } from "@/components/atoms/Button";

interface StartButtonProps {
  icon: string;
  text: string;
}

export default function TaskbarItem({ icon, text }: StartButtonProps) {
  return (
    <Button icon={icon} className="flex items-center gap-1 mr-[3px]">
      <span className="text-taskbarItem font-bold">{text}</span>
    </Button>
  );
}
