"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import * as FormComp from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputMask from "@mona-health/react-input-mask";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { noKopyApi } from "@/lib/api";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  identification: z.string(),
});

type FormPropsSchema = z.infer<typeof FormSchema>;

export default function SignIn() {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });

  const [mask, setMask] = useState<string>();

  const handleForm = async (value: FormPropsSchema) => {
    if(!value.identification) {
      
    }
    
    const api = await noKopyApi.post("/client/signin", { value });
    
    if (!api.data) {
      console.log("status:", api.status);
      console.log("text:", api.statusText);
    }
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
    <main className="h-screen flex items-center justify-center md:grid md:grid-cols-2 relative">
      <div className="absolute inset-x-0 -z-10 w-full h-full md:static">
        <Image
          src="/assets/buildings.jpg"
          alt="building-image"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="h-full md:h-screen w-full object-cover"
        />
      </div>

      <div className="bg-NKBlack-500/30 md:bg-none backdrop-blur-md md:backdrop-blur-0 border-NKWhite md:border-0 rounded p-8 flex flex-col items-center">
        <h2 className="mb-4 md:mb-8 font-montserrat font-semibold text-lg md:text-xl">
          Acesse sua conta
        </h2>
        <FormComp.Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleForm)}
            className="flex gap-4 flex-col w-full md:w-[50%]"
          >
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
                      className="focus-visible:ring-NKGreen-400"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-NKGreen-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      mask={mask}
                      onBlur={handleMask}
                    />
                  </FormComp.FormControl>
                  <FormComp.FormMessage />
                </FormComp.FormItem>
              )}
            />

            <Button
              type="submit"
              variant="outline"
              className="border-NKGreen-500 hover:bg-NKGreen-500"
            >
              Entrar
            </Button>
          </form>
        </FormComp.Form>

        <div className="mt-16 w-full flex flex-col items-center">
          <hr className="h-[2px] w-full md:w-2/4 bg-accent border-0 rounded-full" />
          <Link
            href="/signup"
            className="flex flex-col w-full md:w-2/4 border border-NKGreen-500 hover:bg-accent rounded p-4 relative mt-4 transition-colors duration-300"
          >
            <p className="font-montserrat text-sm font-medium">
              Ainda não tem uma conta?
            </p>
            <span className="font-firaSans text-sm text-NKGreen-500 font-medium">
              Crie sua conta agora mesmo
            </span>
            <ChevronRight className="absolute right-1 inset-y-[1.5rem]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
