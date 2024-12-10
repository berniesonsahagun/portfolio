import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const convertedHours = hours % 12 || 12; // Convert to 12-hour format
  const convertedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero

  return `${convertedHours}:${convertedMinutes}${ampm}`;
}
