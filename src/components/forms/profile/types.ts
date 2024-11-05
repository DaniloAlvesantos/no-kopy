import {
  AtSign,
  Building2,
  Inbox,
  LucideIcon,
  UserCog,
  Briefcase,
  Fingerprint,
  MapPin,
} from "lucide-react";
import { z } from "zod";

export const FormProfileSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  instagram: z.string().optional(),
  email: z.string().email({ message: "Invalid email." }).optional(),
  personType: z.string().optional(),
  identification: z.string().optional(),
  country: z.string().max(3, { message: "The length passed by." }).optional(),
});

export type FormProfilePropsSchema = z.infer<typeof FormProfileSchema>;

export type FormProfileFieldsProps = {
  name: keyof FormProfilePropsSchema;
  icon: LucideIcon;
  style: {
    background: string;
    iconColor: string;
  },
  componenetType:
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

export const FormProfileFieldsData: FormProfileFieldsProps[] = [
  {
    name: "company",
    icon: Building2,
    componenetType: {
      kind: "input",
      values: {
        type: "text",
      },
    },
    style: {
      background: "#04BF55",
      iconColor: "#01401C"
    }
  },
  {
    name: "name",
    icon: UserCog,
    componenetType: {
      kind: "input",
      values: {
        type: "text",
      },
    },
    style: {
      background: "#71717a",
      iconColor: "#27272a"
    }
  },
  {
    name: "instagram",
    icon: AtSign,
    componenetType: {
      kind: "inputMask",
      values: {
        inputMask: true,
      },
    },
    style: {
      background: "#86198f",
      iconColor: "#d946ef"
    }
  },
  {
    name: "email",
    icon: Inbox,
    componenetType: {
      kind: "input",
      values: {
        type: "email",
      },
    },
    style: {
      background: "#e2e8f0",
      iconColor: "#ef4444"
    }
  },
  {
    name: "personType",
    icon: Briefcase,
    componenetType: {
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
    style: {
      background: "#431407",
      iconColor: "#9a3412"
    }
  },
  {
    name: "identification",
    icon: Fingerprint,
    componenetType: {
      kind: "inputMask",
      values: {
        inputMask: true,
      },
    },
    style: {
      background: "#059669",
      iconColor: "#065f46"
    }
  },
  {
    name: "country",
    icon: MapPin,
    componenetType: {
      kind: "select",
      values: {
        items: [
          { value: "BR", text: "Brazil" },
          { value: "CA", text: "Canada" },
        ],
      },
    },
    style: {
      background: "#fb7185",
      iconColor: "#e11d48"
    }
  },
];
