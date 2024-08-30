"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as FormComp from "@/components/ui/form";
import { FormFieldInput, FormFieldSelect } from "@/components/forms/formField";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { noKopyApi } from "@/lib/api";
import {
  FormFieldData,
  FormFieldDataProps,
  FormPropsSchema,
  FormSchema,
} from "@/components/forms/signup/type";


export default function SignUp() {
  const [mask, setMask] = useState<string>();
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });

  const handleForm = async (value: FormPropsSchema) => {
    console.log(value);

    // const api = await noKopyApi.post("/client/signin", { value });

    // if (!api.data) {
    //   console.log("status:", api.status);
    //   console.log("text:", api.statusText);
    // }
  };

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
    <main className="flex items-center justify-center md:flex-row relative w-full">
      <div className="absolute inset-x-0 -z-10 md:static w-full md:w-[50%] h-full md:h-[100vh]">
        <Image
          src="/assets/buildings.jpg"
          alt="building-image"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bg-NKBlack-500/30 md:bg-none backdrop-blur-md md:backdrop-blur-0 border-NKWhite md:border-0 rounded p-8 flex flex-col items-center md:w-[50%] lg:w-[80%]">
        <span className="mb-4 md:mb-8 text-center">
          <h2 className="font-montserrat font-semibold text-lg md:text-xl">
            Crie sua conta
          </h2>
          <p className="text-sm font-firaSans">
            Crie sua conta para seu negocio ou empresa
          </p>
        </span>
        <FormComp.Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleForm)}
            className="flex gap-4 flex-col w-full lg:w-[50%]"
          >
            {FormFieldData.map((item, idx) => {
              switch (item.componentType.kind) {
                case "inputMask":
                  return (
                    <FormFieldInput<FormPropsSchema>
                      key={idx}
                      control={form.control}
                      label={item.label}
                      name={item.name}
                      placeholder={item.componentType.values.placeholder}
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
                      label={item.label}
                      name={item.name}
                      placeholder={item.componentType.values.placeholder}
                      type={item.componentType.values.type}
                    />
                  );
                case "select":
                  return (
                    <FormFieldSelect<FormPropsSchema>
                      key={idx}
                      control={form.control}
                      label={item.label}
                      name={item.name}
                      placeholder={item.componentType.values.placeholder}
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
              Criar
            </Button>
          </form>
        </FormComp.Form>
      </div>
    </main>
  );
}
