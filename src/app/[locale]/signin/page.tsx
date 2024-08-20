"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import * as FormComp from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "@mona-health/react-input-mask";
import React, { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  identification: z.string(),
});

type FormPropsSchema = z.infer<typeof FormSchema>;

export default function SignIn() {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });

  const [mask, setMask] = useState<string >();

  const handleForm = (value: FormPropsSchema) => {
    console.log(value);
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
    <main className="relative flex items-center justify-center md:grid md:grid-cols-2 h-screen">
      <div className="absolute inset-x-0 -z-10 w-full h-full md:static">
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
      <div className="bg-NKBlack-500/30 backdrop-blur-md border-NKWhite rounded p-8">
        <h2>Faça login com sua conta.</h2>
        <div>
          <FormComp.Form {...form}>
            <form onSubmit={form.handleSubmit(handleForm)}>
              <FormComp.FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormComp.FormItem>
                    <FormComp.FormLabel>Email</FormComp.FormLabel>
                    <FormComp.FormControl>
                      <Input
                        type="email"
                        placeholder="Digite seu email"
                        {...field}
                      />
                    </FormComp.FormControl>
                    <FormComp.FormMessage />
                  </FormComp.FormItem>
                )}
              />

              <FormComp.FormField
                control={form.control}
                name="identification"
                render={() => (
                  <FormComp.FormItem>
                    <FormComp.FormLabel>Identificação</FormComp.FormLabel>
                    <FormComp.FormControl>
                      <InputMask
                        placeholder={`Digite sua identificação`}
                        {...form.register("identification")}
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                        mask={mask}
                        onBlur={handleMask}
                      />
                    </FormComp.FormControl>
                    <FormComp.FormMessage />
                  </FormComp.FormItem>
                )}
              />
            </form>
          </FormComp.Form>
        </div>
      </div>
    </main>
  );
}
