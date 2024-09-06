"use client";

import * as React from "react";
import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { useLocale } from "next-intl";

interface Props<TFieldValues extends FieldValues> {
  field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
}

const array = [
  new Date(2024, 8, 10),
  new Date(2024, 8, 13),
  new Date("2024-09-14T03:00:00.000Z"),
]; // Example of dates. Mounth needs to be -1.
const bookedStyle = "opacity-60 pointer-events-none text-NKGreen-500 bg-accent"; // Style.

export function MeetingDayPicker<TFieldValues extends FieldValues>(
  props: Props<TFieldValues>
) {
  const locale = useLocale();
  const localePath = locale === "en" ? enUS : ptBR;
  let minDate = new Date();
  minDate.setUTCDate(minDate.getDate() + 3);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-72 lg:w-80 justify-start text-left font-normal",
            !props.field.value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {props.field.value ? (
            format(props.field.value, "PPP", { locale: localePath })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props.field.value}
          onSelect={props.field.onChange}
          initialFocus
          modifiers={{ booked: array }} // Booked it's just a var, you can change for anything.
          modifiersClassNames={{ booked: bookedStyle }} // You need to match with the var.
          disabled={(date) => date < new Date() || date <= minDate}
          locale={localePath}
        />
      </PopoverContent>
    </Popover>
  );
}
