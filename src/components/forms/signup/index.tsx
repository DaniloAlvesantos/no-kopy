import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleForm, FormFieldData, FormPropsSchema, FormSchema } from "./type";

import { FormFieldInput, FormFieldSelect } from "../formField";
import { Button } from "@/components/ui/button";
import * as FormComp from "@/components/ui/form";

import { useTranslations } from "next-intl";

export const SignUpForm = () => {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });

  const t = useTranslations("forms.signUp");
  const [mask, setMask] = useState<string>();

  const handleMask = (event: React.FocusEvent<HTMLInputElement>) => {
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
        onSubmit={form.handleSubmit(handleForm)}
        className="flex gap-4 flex-col w-full lg:w-[60%]"
      >
        {FormFieldData.map((item, idx) => {
          switch (item.componentType.kind) {
            case "inputMask":
              return (
                <FormFieldInput<FormPropsSchema>
                  key={idx}
                  control={form.control}
                  label={t(`formFields.${idx}.label`)}
                  name={item.name}
                  placeholder={t(`formFields.${idx}.placeholder`)}
                  type="text"
                  inputMask
                  mask={mask}
                  onBlurMask={handleMask}
                />
              );
            case "input":
              return (
                <FormFieldInput<FormPropsSchema>
                  key={idx}
                  control={form.control}
                  label={t(`formFields.${idx}.label`)}
                  name={item.name}
                  placeholder={t(`formFields.${idx}.placeholder`)}
                  type={item.componentType.values.type}
                />
              );
            case "select":
              return (
                <FormFieldSelect<FormPropsSchema>
                  key={idx}
                  control={form.control}
                  label={t(`formFields.${idx}.label`)}
                  name={item.name}
                  placeholder={t(`formFields.${idx}.placeholder`)}
                  items={item.componentType.values.items}
                />
              );
            default:
              return;
          }
        })}

        <Button
          type="submit"
          variant="outline"
          className="border-NKGreen-500 hover:bg-NKGreen-500"
        >
          {t("button")}
        </Button>
      </form>
    </FormComp.Form>
  );
};
