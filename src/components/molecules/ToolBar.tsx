import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";

interface ToolBarItem {
  title: string;
  items: Array<string>;
}

interface ToolBarProps {
  items: Array<ToolBarItem>;
}

export default function ToolBar({ items }: ToolBarProps) {
  return (
    <div className="p-1 flex">
      {items.map((item, index) => (
        <Popover key={`${item}_${index}`}>
          <PopoverTrigger className="first-letter:underline py-1 px-[6px]">
            {item.title}
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="rounded-none bg-windows max-w-[160px] -ml-[6px]"
          >
            {item.items.map((item, index) => (
              <p key={`${item}_${index}`}>{item}</p>
            ))}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
