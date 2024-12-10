import { formatTime } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/Popover";
import { Button } from "../atoms/Button";
import { Calendar } from "../atoms/Calendar";

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      setTime(formatTime(now));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="min-w-[80px] justify-center" variant="engraved">
          <span className="text-taskbarItem">{time}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" side="top" className="p-0 rounded-none block">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-windows"
        />
      </PopoverContent>
    </Popover>
  );
};

export default Clock;
