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
  label: string;
  componentType:
    | {
        kind: "input";
        values: {
          placeholder: string;
          type: "text" | "email";
        };
      }
    | {
        kind: "inputMask";
        values: {
          placeholder: string;
          inputMask: boolean;
        };
      }
    | {
        kind: "select";
        values: {
          placeholder: string;
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
    label: "Nome",
    componentType: {
      kind: "input",
      values: { placeholder: "Digite seu nome", type: "text" },
    },
  },
  {
    name: "email",
    label: "Email",
    componentType: {
      kind: "input",
      values: { placeholder: "Digite seu email", type: "email" },
    },
  },
  {
    name: "instagram",
    label: "Instagram",
    componentType: {
      kind: "input",
      values: {
        placeholder: "Digite o instagram do seu negocio/empresa",
        type: "text",
      },
    },
  },
  {
    name: "country",
    label: "Pais",
    componentType: {
      kind: "select",
      values: {
        placeholder: "Escolha seu país",
        items: [
          { value: "BR", text: "Brazil" },
          { value: "CA", text: "Canada" },
        ],
      },
    },
  },
  {
    name: "personType",
    label: "PersonType",
    componentType: {
      kind: "select",
      values: {
        placeholder: "Escolha seu tipo de identificação",
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
    label: "Identificacao",
    componentType: {
      kind: "inputMask",
      values: {
        placeholder: "Digite sua identificação",
        inputMask: true,
      },
    },
  },
];
