"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";
import * as React from "react";
import { DayFlag, DayPicker, SelectionState, UI } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/atoms/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        [UI.Months]: "relative bg-windows",
        [UI.Month]: "space-y-2 ml-0",
        [UI.MonthCaption]: "flex justify-center items-center h-7 bg-[#DFDFDF]",
        [UI.CaptionLabel]: "text-sm font-medium",
        [UI.PreviousMonthButton]: cn(
          buttonVariants({ variant: "default" }),
          "absolute left-0 top-0 h-7 w-7 bg-transparent p-0 justify-center bg-windows opacity-50 hover:opacity-100"
        ),
        [UI.NextMonthButton]: cn(
          buttonVariants({ variant: "default" }),
          "absolute right-0 top-0 h-7 w-7 bg-transparent p-0 justify-center bg-windows opacity-50 hover:opacity-100"
        ),
        [UI.MonthGrid]: "w-full border-collapse bg-white",
        [UI.Weekdays]: "flex justify-between bg-[#656565]",
        [UI.Weekday]:
          "text-white py-1 rounded-md w-9 font-normal text-[0.8rem]",
        [UI.Week]: "flex w-full mt-2 justify-between",
        [UI.Day]:
          "h-9 w-9 text-center rounded-md text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        [UI.DayButton]: cn(
          buttonVariants({ variant: "flat" }),
          "h-9 w-9 p-0  font-normal aria-selected:opacity-100 justify-center hover:bg-primary hover:text-primary-foreground"
        ),
        [SelectionState.range_end]: "day-range-end",
        [SelectionState.selected]:
          "bg-[#CD141463] text-primary-foreground hover:bg-[#CD141463] hover:text-primary-foreground focus:bg-[#CD141463] focus:text-primary-foreground",
        [SelectionState.range_middle]:
          "aria-selected:bg-[#CD141463] aria-selected:text-accent-foreground",
        [DayFlag.today]:
          "bg-accent text-accent-foreground border border-[#E23830] rounded-full",
        [DayFlag.outside]:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        [DayFlag.disabled]: "text-muted-foreground opacity-50",
        [DayFlag.hidden]: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => <Chevron {...props} />,
      }}
      {...props}
    />
  );
};

const Chevron = ({ orientation = "left" }) => {
  switch (orientation) {
    case "left":
      return <ChevronLeftIcon className="h-4 w-4" />;
    case "right":
      return <ChevronRightIcon className="h-4 w-4" />;
    case "up":
      return <ChevronUpIcon className="h-4 w-4" />;
    case "down":
      return <ChevronDownIcon className="h-4 w-4" />;
    default:
      return null;
  }
};
