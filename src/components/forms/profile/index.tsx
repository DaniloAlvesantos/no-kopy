import * as FormComp from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  FormProfileFieldsData,
  FormProfilePropsSchema,
  FormProfileSchema,
} from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProfileInputField, ProfileSelectField } from "./profielField";
import { UserProps } from "@/context/authContext";
import { Button } from "@/components/ui/button";

interface ProfileFormProps {
  user: UserProps;
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const form = useForm<FormProfilePropsSchema>({
    resolver: zodResolver(FormProfileSchema),
  });

  const t = useTranslations("forms.profile");
  const [mask, setMask] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleFormProfileSubmit = async (value: FormProfilePropsSchema) => {
    let values = Object.entries(value).map(([key, value]) => ({ key, value }));
    const k = Object.entries(user).map(([key, value]) => ({ key, value }));
    k.pop();
    k.shift();

    for (let i = 0; i < values.length; i++) {
      const match = k.find((entry) => entry.key === values[i].key);
      if (values[i].value === undefined) {
        values[i].value = match!.value;
      }
    }

    console.log(values);
  };

  return (
    <FormComp.Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormProfileSubmit)}>
        <div className="flex flex-col gap-8">
          {FormProfileFieldsData.map((item, idx) => {
            switch (item.componenetType.kind) {
              case "input":
                return (
                  <ProfileInputField<FormProfilePropsSchema>
                    name={item.name}
                    control={form.control}
                    label={t(`formFields.${idx}.label`)}
                    type={item.componenetType.values.type}
                    value={user[item.name]}
                    icon={item.icon}
                    style={item.style}
                    key={idx}
                  />
                );
              case "inputMask":
                return (
                  <ProfileInputField<FormProfilePropsSchema>
                    name={item.name}
                    control={form.control}
                    label={t(`formFields.${idx}.label`)}
                    type="text"
                    inputMask
                    mask={mask}
                    onBlurMask={handleMask}
                    value={user[item.name]}
                    icon={item.icon}
                    style={item.style}
                    key={idx}
                  />
                );
              case "select":
                return (
                  <ProfileSelectField<FormProfilePropsSchema>
                    name={item.name}
                    control={form.control}
                    label={t(`formFields.${idx}.label`)}
                    items={item.componenetType.values.items}
                    value={user[item.name]}
                    icon={item.icon}
                    style={item.style}
                    key={idx}
                  />
                );
              default:
                return;
            }
          })}

          <Button type="submit" className="bg-NKGreen-400 hover:bg-NKGreen-300">
            {t("button")}
          </Button>
        </div>
      </form>
    </FormComp.Form>
  );
};
