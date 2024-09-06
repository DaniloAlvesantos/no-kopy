import { z } from "zod";

export const FormSchema = z.object({
  identification: z.string(),
  name: z.string().min(5),
  email: z.string().email({ message: "Invalid email." }),
  instagram: z.string(),
  personType: z.string(),
  hour: z.string(),
  date: z.date(),
});

export type FormPropsSchema = z.infer<typeof FormSchema>;

export const handleMeeting = (value: FormPropsSchema) => {
  console.log(value);
};

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

export const selectValues = [
  {
    value: "CPF",
    text: "CPF",
  },
  {
    value: "CNPJ",
    text: "CNPJ",
  },
  {
    value: "SIN",
    text: "SIN",
  },
  {
    value: "BIN",
    text: "BIN",
  },
];

export const FormFieldData: FormFieldDataProps[] = [
  {
    name: "name",
    componentType: {
      kind: "input",
      values: {
        type: "text",
      },
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
    name: "email",
    componentType: {
      kind: "input",
      values: {
        type: "email",
      },
    },
  },
  {
    name: "personType",
    componentType: {
      kind: "select",
      values: {
        items:selectValues
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