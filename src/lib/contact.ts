import { z } from "zod";

export const contactServiceOptions = [
  "Logo Design",
  "Branding",
  "Social Media Design",
  "Print Design",
  "Other"
] as const;

export type ContactService = (typeof contactServiceOptions)[number];

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Full name must be at least 2 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
  service: z
    .string()
    .min(1, "Service is required.")
    .refine(
      (value): value is ContactService =>
        contactServiceOptions.includes(value as ContactService),
      "Service is required."
    ),
  message: z
    .string()
    .trim()
    .min(20, "Project details must be at least 20 characters.")
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactPayload = z.infer<typeof contactFormSchema>;
