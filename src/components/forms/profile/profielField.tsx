import { Building2, LucideIcon, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as FormComp from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import InputMask from "@mona-health/react-input-mask";
import * as SelectComp from "@/components/ui/select";

interface ProfileInputFieldProps<
  TFieldValues extends FieldValues = FieldValues
> {
  value: string;
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  type: "email" | "text";
  inputMask?: boolean;
  mask?: string;
  onBlurMask?: (event: React.FocusEvent<HTMLInputElement>) => void;
  icon: LucideIcon;
  style: {
    background: string;
    iconColor: string;
  };
}

interface ProfileSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues
> {
  value: string;
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  icon: LucideIcon;
  items: {
    value: string;
    text: string;
  }[];
  style: {
    background: string;
    iconColor: string;
  };
}

export const ProfileInputField = <TFieldValues extends FieldValues>(
  props: ProfileInputFieldProps<TFieldValues>
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <FormComp.FormField
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormComp.FormItem className="border border-accent p-4 rounded text-center">
          <FormComp.FormLabel>{props.label}</FormComp.FormLabel>
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <span
              className="p-4 rounded-full"
              style={{ backgroundColor: props.style.background }}
            >
              <props.icon color={props.style.iconColor} />
            </span>
            <span className="flex items-center gap-2">
              <FormComp.FormControl>
                {props.inputMask ? (
                  <InputMask
                    {...field}
                    placeholder={props.value}
                    mask={props.mask}
                    onBlur={props.onBlurMask}
                    value={field.value ?? ""}
                    disabled={!isEditing}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-firaSans focus-visible:ring-NKGreen-500 disabled:border-none disabled:text-center disabled:cursor-default disabled:opacity-100 ml-6"
                  />
                ) : (
                  <Input
                    {...field}
                    placeholder={props.value}
                    disabled={!isEditing}
                    className="font-firaSans focus-visible:ring-NKGreen-500 disabled:border-none disabled:text-center disabled:cursor-default disabled:opacity-100 ml-6"
                    value={field.value ?? ""}
                    type={props.type}
                  />
                )}
              </FormComp.FormControl>
              <Pencil className="cursor-pointer" onClick={handleEdit} />
            </span>
          </div>
          <FormComp.FormMessage />
        </FormComp.FormItem>
      )}
    />
  );
};

export const ProfileSelectField = <TFieldValues extends FieldValues>(
  props: ProfileSelectFieldProps<TFieldValues>
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <FormComp.FormField
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormComp.FormItem className="border border-accent p-4 rounded text-center">
          <FormComp.FormLabel>{props.label}</FormComp.FormLabel>
          <div className="flex flex-col items-center justify-center gap-2 mt-8">
            <span
              className="p-4 rounded-full"
              style={{ backgroundColor: props.style.background }}
            >
              <props.icon color={props.style.iconColor} />
            </span>
            <span className="flex items-center gap-2">
              <SelectComp.Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={!isEditing}
              >
                <FormComp.FormControl>
                  <SelectComp.SelectTrigger className="font-firaSans focus-visible:ring-NKGreen-500 disabled:border-0 disabled:text-center disabled:cursor-default disabled:opacity-100 ml-6 disabled:[&>svg]:hidden">
                    <SelectComp.SelectValue placeholder={props.value} />
                  </SelectComp.SelectTrigger>
                </FormComp.FormControl>
                <SelectComp.SelectContent>
                  {props.items.map((item, idx) => (
                    <SelectComp.SelectItem value={item.value} key={idx}>
                      {item.text}
                    </SelectComp.SelectItem>
                  ))}
                </SelectComp.SelectContent>
              </SelectComp.Select>
              <Pencil className="cursor-pointer" onClick={handleEdit} />
            </span>
          </div>
          <FormComp.FormMessage />
        </FormComp.FormItem>
      )}
    />
  );
};
