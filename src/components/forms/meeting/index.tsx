"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as FormComp from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormPropsSchema,
  FormSchema,
  handleMeeting,
  FormFieldData,
  selectValues,
} from "./meetingType";
import { MeetingDayPickerFormField } from "./meetingDayPickerFormField";
import { FormFieldInput, FormFieldSelect } from "../formField";
import { useTranslations } from "next-intl";

export const FormBook: React.FC = () => {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });
  const t = useTranslations("forms.meeting.formFields");

  const [mask, setMask] = useState<string>();

  const handleMask = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    switch (value.length) {
      case 9:
        return setMask("999 999 999");
      case 11:
        return setMask("999.999.999-99");
      case 14:
        return setMask("99.999.999/9999-99");
      default:
        return setMask("");
    }
  };

  return (
    <FormComp.Form {...form}>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={form.handleSubmit(handleMeeting)}
      >
        <section className="flex flex-col items-center justify-center w-72 lg:w-80">
          <div className="flex flex-col w-full gap-4">
            {FormFieldData.map((item, idx) => {
              switch (item.componentType.kind) {
                case "input":
                  return (
                    <FormFieldInput
                      control={form.control}
                      name={item.name}
                      label={t(`${idx}.label`)}
                      placeholder={t(`${idx}.placeholder`)}
                      type={item.componentType.values.type}
                      key={idx}
                    />
                  );
                case "inputMask":
                  return (
                    <FormFieldInput
                      control={form.control}
                      name={item.name}
                      label={t(`${idx}.label`)}
                      placeholder={t(`${idx}.placeholder`)}
                      type="text"
                      inputMask
                      mask={mask}
                      onBlurMask={handleMask}
                      key={idx}
                    />
                  );
                case "select":
                  return (
                    <FormFieldSelect
                      control={form.control}
                      name={item.name}
                      label={t(`${idx}.label`)}
                      placeholder={t(`${idx}.label`)}
                      items={item.componentType.values.items}
                      key={idx}
                    />
                  );
              }
            })}
          </div>
          <div className="my-4 flex flex-col w-full">
            <MeetingDayPickerFormField
              control={form.control}
              label="Escolha uma data para reuniao"
              name="date"
            />
            <p className="text-xs mt-2 font-firaSans text-zinc-400">
              Datas em verde são datas que já estão com reunião marcadas.
            </p>
          </div>
          <div className="my-4 flex flex-col w-full">
            <FormComp.FormField
              control={form.control}
              name="hour"
              render={({ field }) => (
                <FormComp.FormItem>
                  <FormComp.FormLabel>
                    Informe um hora para agendar sua reuniao
                  </FormComp.FormLabel>
                  <FormComp.FormControl>
                    <Input
                      {...field}
                      type="time"
                      min="06:00"
                      max="22:00"
                      placeholder="Escolha a hora da sua reunião"
                      className="focus-visible:ring-green-500 cursor-pointer justify-center items-center lg:px-[7.8rem] min-w-full"
                    />
                  </FormComp.FormControl>
                  <FormComp.FormMessage />
                </FormComp.FormItem>
              )}
            />
          </div>
        </section>

        <Button
          type="submit"
          variant="outline"
          className="w-72 lg:w-80 border-green-500 hover:bg-green-600"
        >
          Send
        </Button>
      </form>
    </FormComp.Form>
  );
};
