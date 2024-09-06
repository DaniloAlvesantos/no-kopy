import { noKopyApi } from "@/lib/api";
import { z } from "zod";

// FORM VALIDATION
export const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  identification: z.string(),
});

// TYPE OF VALIDATION DATA
export type FormPropsSchema = z.infer<typeof FormSchema>;

// FORM FIELD TYPE
export type FormFieldDataProps = {
  name: keyof FormPropsSchema;
  componentType:
    | {
        kind: "input";
        values: {
          type: "text" | "email";
        };
      }
    | {
        kind: "inputMask";
        values: {
          inputMask: boolean;
        };
      };
};

// FORM FIELD DATA
export const FormFieldData: FormFieldDataProps[] = [
  {
    name: "email",
    componentType: {
      kind: "input",
      values: {
        type: "email",
      },
    },
  },
  {
    name: "identification",
    componentType: {
      kind: "inputMask",
      values: {
        inputMask: true,
      },
    },
  },
];

export const handleForm = async (value: FormPropsSchema) => {
  console.log(value);

  // const api = await noKopyApi.post("/client/signin", { value });
};
