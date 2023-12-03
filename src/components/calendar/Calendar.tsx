import { useEffect, useState } from "react";
import CalendarTaskbarItem from "./CalendarTaskbarItem";
import CalendarWindow from "./CalendarWindow";

export default function Calendar() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );

  useEffect(() => {
    const calendarInterval = setInterval(() => {
      const currentDate = new Date();

      setCurrentTime(
        currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000 * 60);

    return () => {
      calendarInterval;
    };
  }, []);

  return (
    <div className="relative">
      <CalendarWindow />
      <CalendarTaskbarItem currentTime={currentTime} />
    </div>
  );
}
