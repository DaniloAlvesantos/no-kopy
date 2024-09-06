import * as FormComp from "@/components/ui/form";
import * as SelectComp from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import InputMask from "@mona-health/react-input-mask";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormFieldInput<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  type: "text" | "email";
  inputMask?: boolean;
  mask?: string;
  onBlurMask?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface FormFieldSelect<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  items: {
    value: string;
    text: string;
  }[];
}

export const FormFieldInput = <TFieldValues extends FieldValues>(
  props: FormFieldInput<TFieldValues>
) => {
  return (
    <FormComp.FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormComp.FormItem>
          <FormComp.FormLabel>{props.label}</FormComp.FormLabel>
          <FormComp.FormControl>
            {props.inputMask ? (
              <InputMask
                {...field}
                mask={props.mask}
                onBlur={props.onBlurMask}
                value={field.value ?? ""}
                placeholder={props.placeholder}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-NKGreen-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            ) : (
              <Input
                {...field}
                value={field.value ?? ""}
                type={props.type}
                placeholder={props.placeholder}
                className="focus-visible:ring-NKGreen-400"
              />
            )}
          </FormComp.FormControl>
          <FormComp.FormMessage />
        </FormComp.FormItem>
      )}
    />
  );
};

export const FormFieldSelect = <TFieldValues extends FieldValues>(
  props: FormFieldSelect<TFieldValues>
) => {
  return (
    <FormComp.FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormComp.FormItem>
          <FormComp.FormLabel>{props.label}</FormComp.FormLabel>
          <SelectComp.Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormComp.FormControl>
              <SelectComp.SelectTrigger>
                <SelectComp.SelectValue placeholder={props.placeholder} />
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
          <FormComp.FormMessage />
        </FormComp.FormItem>
      )}
    />
  );
};
