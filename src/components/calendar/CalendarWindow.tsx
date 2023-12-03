import Calendar from "react-calendar";
import Window from "../Window";

export default function CalendarWindow() {
  return (
    <Window
      windowTitle="Calendar"
      windowIcon="./src/assets/images/calendar-1.png"
      className="absolute w-[250px] bottom-[30px] right-[-10px]"
    >
      <Calendar prev2Label={null} next2Label={null} />
    </Window>
  );
}
