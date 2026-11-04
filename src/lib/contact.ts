import { z } from "zod";

export const contactServiceValues = [
  "logo-design",
  "branding",
  "packaging",
  "social-ad",
  "print",
  "website",
  "other"
] as const;

export type ContactService = (typeof contactServiceValues)[number];

/** @deprecated Use contactServiceValues - kept alias for clarity in call sites */
export const contactServiceOptions = contactServiceValues;

type ContactErrorMessages = {
  nameMin: string;
  emailRequired: string;
  emailInvalid: string;
  serviceRequired: string;
  messageMin: string;
};

export function createContactFormSchema(messages: ContactErrorMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameMin),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    service: z
      .string()
      .min(1, messages.serviceRequired)
      .refine(
        (value): value is ContactService =>
          contactServiceValues.includes(value as ContactService),
        messages.serviceRequired
      ),
    message: z.string().trim().min(20, messages.messageMin)
  });
}

/** Server-side schema with English fallbacks (API validation). */
export const contactFormSchema = createContactFormSchema({
  nameMin: "Full name must be at least 2 characters.",
  emailRequired: "Email address is required.",
  emailInvalid: "Enter a valid email address.",
  serviceRequired: "Service is required.",
  messageMin: "Project details must be at least 20 characters."
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactPayload = z.infer<typeof contactFormSchema>;
