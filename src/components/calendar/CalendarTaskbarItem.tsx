type CalendarTaskbarItemProps = {
  currentTime: string;
};

export default function CalendarTaskbarItem({
  currentTime,
}: CalendarTaskbarItemProps) {
  return (
    <button className="flex items-center gap-1 shadow-windowPressed px-2 py-1 mr-[3px]">
      <div className="flex">
        <img src="./src/assets/images/loudspeaker_rays-1.png" />
        <img src="./src/assets/images/loudspeaker_rays-1.png" />
      </div>

      <span className="text-taskbarItem">{currentTime}</span>
    </button>
  );
}
