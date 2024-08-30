"use client";

import { z } from "zod";
import InputMask from "@mona-health/react-input-mask";
import { useForm } from "react-hook-form";
import { ChangeEvent, ReactElement, ReactNode, useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import * as FormComp from "@/components/ui/form";
import { Building, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "../switch/switch";

const FormSchema = z.object({
  cpfcnpj: z.string().min(11),
  name: z.string().min(5),
  email: z.string().email({ message: "Invalid email." }),
  instagram: z.string(),
  hour: z.string(),
  personType: z.string(),
});

type FormPropsSchema = z.infer<typeof FormSchema>;

export const FormBook: React.FC = () => {
  const form = useForm<FormPropsSchema>({
    resolver: zodResolver(FormSchema),
  });
  const [date, setDate] = useState<string>();
  const [isCanada, setIsCanada] = useState<boolean>(false);
  const [checked, setChecked] = useState("CPF");

  const handleMeet = (value: FormPropsSchema) => {
    const body = { value, date: date };
    console.log(body);
  };

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <FormComp.Form {...form}>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={form.handleSubmit(handleMeet)}
      >
        <div>
          <h3>Informações</h3>
          <Switch actived={isCanada} setActived={setIsCanada} />
          <p>Agora está com o padrão {!isCanada ? "Brasileiro" : "Canadense"}</p>
        </div>

        {/* Brazilian Identifications... */}
        {!isCanada && (
          <div id="personType">
            <div className="flex flex-col gap-4 my-2">
              <label className="my-2 font-montserrat flex flex-col items-center justify-center rounded-md py-6 relative has-[:checked]:border-green-500 border-2 cursor-pointer transition-all duration-500 ease hover:bg-zinc-500 has-[:checked]:hover:bg-transparent w-72 lg:w-80">
                CPF
                <input
                  checked={checked === "CPF"}
                  {...form.register("personType")}
                  type="radio"
                  value="CPF"
                  onChange={handleCheck}
                  className="peer sr-only"
                />
                <User className="w-7 h-7 absolute left-1.5 top-1.5 bg-zinc-500 peer-checked:bg-green-500 rounded-full p-1" />
                <p
                  className={`text-[11px] w-[50%] text-center leading-3 text-zinc-400 font-firaSans`}
                >
                  Se você é uma pessoa física, utilize seu CPF.
                </p>
              </label>

              <label className="font-montserrat flex flex-col items-center justify-center rounded-md py-6 relative has-[:checked]:border-green-500 border-2 cursor-pointer transition-all duration-500 ease hover:bg-zinc-500 has-[:checked]:hover:bg-transparent w-72 lg:w-80">
                CNPJ
                <input
                  type="radio"
                  value="CNPJ"
                  onChange={handleCheck}
                  className="peer sr-only"
                  checked={checked === "CNPJ"}
                />
                <Building className="w-7 h-7 absolute left-1.5 top-1.5 bg-zinc-500 peer-checked:bg-green-500 rounded-full p-1" />
                <p
                  className={`text-[11px] w-[50%] text-center leading-3 text-zinc-400 font-firaSans`}
                >
                  Se você tem empresa, ou é uma empresa. Utilize o CNPJ
                </p>
              </label>
            </div>
          </div>
        )}

        <section className="flex flex-col items-center justify-center w-72 lg:w-80">
          {/* Name Field */}
          <div className="my-4 flex flex-col w-full">
            <FormComp.FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormComp.FormItem>
                  <FormComp.FormLabel>Nome Completo</FormComp.FormLabel>
                  <FormComp.FormControl>
                    <Input
                      type="text"
                      autoComplete="off"
                      placeholder="John Doe"
                      className="focus-visible:ring-green-500"
                      {...field}
                    />
                  </FormComp.FormControl>
                  <FormComp.FormDescription>
                    Digite seu nome para melhor comunicação
                  </FormComp.FormDescription>
                  <FormComp.FormMessage />
                </FormComp.FormItem>
              )}
            />
          </div>

          {/* Instagram Field */}
          <div className="my-4 flex flex-col w-full">
            <FormComp.FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormComp.FormItem>
                  <FormComp.FormLabel>
                    Informe o @ do instagram
                  </FormComp.FormLabel>
                  <FormComp.FormControl>
                    <Input
                      type="text"
                      className="focus-visible:ring-green-500"
                      placeholder="@agencianokopy"
                      autoComplete="off"
                      {...field}
                    />
                  </FormComp.FormControl>
                  <FormComp.FormDescription>
                    Instagram da sua empresa, negocio ou pessoal.
                  </FormComp.FormDescription>
                  <FormComp.FormMessage />
                </FormComp.FormItem>
              )}
            />
          </div>

          {/* Email Field */}
          <div className="my-4 flex flex-col w-full">
            <FormComp.FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormComp.FormItem>
                  <FormComp.FormLabel>Informe o seu email</FormComp.FormLabel>
                  <FormComp.FormControl>
                    <Input
                      type="email"
                      className="focus-visible:ring-green-500"
                      placeholder="agencianokopy@email.com"
                      autoComplete="on"
                      {...field}
                    />
                  </FormComp.FormControl>
                  <FormComp.FormDescription>
                    Informe seu email para receber comunicados.
                  </FormComp.FormDescription>
                  <FormComp.FormMessage />
                </FormComp.FormItem>
              )}
            />
          </div>

          {/* Brazilian Identification Value Field */}
          {!isCanada && (
            <div className="my-4 flex flex-col w-full">
              <FormComp.FormField
                control={form.control}
                name="cpfcnpj"
                render={({ field }) => (
                  <FormComp.FormItem>
                    <FormComp.FormLabel>
                      Digite seu {checked}
                    </FormComp.FormLabel>
                    <FormComp.FormControl>
                      <InputMask
                        placeholder={`Digite ${checked}`}
                        mask={
                          checked === "CPF"
                            ? "999.999.999-99"
                            : "99.999.999/9999-99"
                        }
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      />
                    </FormComp.FormControl>
                    <FormComp.FormDescription>
                      Informe seu {checked} para validação.
                    </FormComp.FormDescription>
                    <FormComp.FormMessage />
                  </FormComp.FormItem>
                )}
              />
            </div>
          )}

          {/* Date Field & Hour Field */}
          <div translate="no">
            <div className="my-4 flex flex-col w-full">
              <Label className="mb-3">Escolha uma data para reunião</Label>
              <DatePicker changeDate={setDate} />
              <p>Datas em verde são datas que já estão com reunião marcadas.</p>
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
                        type="time"
                        min="06:00"
                        max="19:00"
                        placeholder="Escolha a hora da sua reunião"
                        className="focus-visible:ring-green-500 cursor-pointer justify-center items-center lg:px-[7.8rem]"
                        {...field}
                      />
                    </FormComp.FormControl>
                    <FormComp.FormDescription>
                      Melhore sua experiência clicando no icone de "relógio".
                    </FormComp.FormDescription>
                    <FormComp.FormMessage />
                  </FormComp.FormItem>
                )}
              />
            </div>
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
