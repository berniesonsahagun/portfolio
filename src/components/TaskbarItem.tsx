type TaskbarItemProps = {
  icon: string;
  text: string;
};

export default function TaskbarItem({ icon, text }: TaskbarItemProps) {
  return (
    <button className="flex items-center gap-1 clickable-button mr-[3px]">
      <img src={icon} />

      <span className="text-taskbarItem">{text}</span>
    </button>
  );
}
