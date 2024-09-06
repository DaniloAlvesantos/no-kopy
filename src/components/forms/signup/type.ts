import { z } from "zod";

// FORM VALIDATION
export const FormSchema = z.object({
  name: z.string(),
  instagram: z.string(),
  email: z.string().email({ message: "Invalid email." }),
  personType: z.string(),
  identification: z.string(),
  country: z.string().max(3, { message: "The length passed by." }),
});

// IDENTIFICATION VALUES VALIDATION
const IdentificationValidation = {
  CPF: (value: string) => (value.length !== 11 ? "Invalid" : "Success"),
  CNPJ: (value: string) => (value.length !== 14 ? "Invalid" : "Success"),
  SIN: (value: string) => (value.length !== 9 ? "Invalid" : "Success"),
  BIN: (value: string) => (value.length !== 9 ? "Invalid" : "Success"),
};

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
      }
    | {
        kind: "select";
        values: {
          items: {
            value: string;
            text: string;
          }[];
        };
      };
};

// FORM FIELD DATA
export const FormFieldData: FormFieldDataProps[] = [
  {
    name: "name",
    componentType: {
      kind: "input",
      values: { type: "text" },
    },
  },
  {
    name: "email",
    componentType: {
      kind: "input",
      values: { type: "email" },
    },
  },
  {
    name: "instagram",
    componentType: {
      kind: "input",
      values: {
        type: "text",
      },
    },
  },
  {
    name: "country",
    componentType: {
      kind: "select",
      values: {
        items: [
          { value: "BR", text: "Brazil" },
          { value: "CA", text: "Canada" },
        ],
      },
    },
  },
  {
    name: "personType",
    componentType: {
      kind: "select",
      values: {
        items: [
          { value: "CPF", text: "CPF" },
          { value: "CNPJ", text: "CNPJ" },
          { value: "SIN", text: "SIN" },
          { value: "BIN", text: "BIN" },
        ],
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

  // if (!api.data) {
  //   console.log("status:", api.status);
  //   console.log("text:", api.statusText);
  // }
};
