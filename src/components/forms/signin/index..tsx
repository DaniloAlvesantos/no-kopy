import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormFieldData,
  FormSchema,
  handleForm,
  FormPropsSchema,
} from "./types";

import * as FormComp from "@/components/ui/form";
import { FormFieldInput } from "../formField";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";

export const SignInForm = () => {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });

  const t = useTranslations("forms.signIn");
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
        className="flex gap-4 flex-col w-full md:w-[50%]"
      >
        {FormFieldData.map((item, idx) => {
          switch (item.componentType.kind) {
            case "input":
              return (
                <FormFieldInput<FormPropsSchema>
                  control={form.control}
                  name={item.name}
                  label={t(`formFields.${idx}.label`)}
                  placeholder={t(`formFields.${idx}.placeholder`)}
                  type={item.componentType.values.type}
                  key={idx}
                />
              );
            case "inputMask":
              return (
                <FormFieldInput<FormPropsSchema>
                  control={form.control}
                  name={item.name}
                  label={t(`formFields.${idx}.label`)}
                  placeholder={t(`formFields.${idx}.placeholder`)}
                  type="text"
                  inputMask
                  mask={mask}
                  onBlurMask={handleMask}
                  key={idx}
                />
              );
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
