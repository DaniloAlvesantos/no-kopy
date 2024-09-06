import * as FormComp from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { MeetingDayPicker } from "./meetingDayPicker";

interface meetingDayPickerProps<
  TFieldValues extends FieldValues = FieldValues
> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
}

export const MeetingDayPickerFormField = <TFieldValues extends FieldValues>(
  props: meetingDayPickerProps<TFieldValues>
) => {
  return (
    <FormComp.FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormComp.FormItem>
          <FormComp.FormLabel>{props.label}</FormComp.FormLabel>
          <FormComp.FormControl>
            <MeetingDayPicker field={field} />
          </FormComp.FormControl>
          <FormComp.FormMessage />
        </FormComp.FormItem>
      )}
    />
  );
};
