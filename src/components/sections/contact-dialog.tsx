"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui";
import {
  contactFormSchema,
  contactServiceOptions,
  type ContactFormValues,
  type ContactPayload
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactResponse = {
  success: boolean;
  error?: string;
};

type ContactDialogProps = {
  trigger: ReactNode;
};

export function ContactDialog({ trigger }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues, unknown, ContactPayload>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });

  async function onSubmit(values: ContactPayload) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Unable to send inquiry.");
      }

      toast.success("Thank you for your inquiry. I'll get back to you soon.");
      reset();
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="pr-10">
          <DialogTitle>Tell Me About Your Project</DialogTitle>
          <DialogDescription>
            Fill out the form below and I&apos;ll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-2">
            <label
              htmlFor="contact-name"
              className="text-body-sm font-semibold text-foreground"
            >
              Full Name *
            </label>
            <input
              id="contact-name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={fieldClassName(Boolean(errors.name))}
              {...register("name")}
            />
            {errors.name?.message && (
              <p id="contact-name-error" className="text-body-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="contact-email"
              className="text-body-sm font-semibold text-foreground"
            >
              Email Address *
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={fieldClassName(Boolean(errors.email))}
              {...register("email")}
            />
            {errors.email?.message && (
              <p id="contact-email-error" className="text-body-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="contact-service"
              className="text-body-sm font-semibold text-foreground"
            >
              Service Needed *
            </label>
            <select
              id="contact-service"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "contact-service-error" : undefined
              }
              className={fieldClassName(Boolean(errors.service))}
              {...register("service")}
            >
              <option value="">Select a service</option>
              {contactServiceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service?.message && (
              <p
                id="contact-service-error"
                className="text-body-sm text-destructive"
              >
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="contact-message"
              className="text-body-sm font-semibold text-foreground"
            >
              Project Details *
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about your business, goals and design requirements..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className={cn(
                fieldClassName(Boolean(errors.message)),
                "min-h-32 resize-y"
              )}
              {...register("message")}
            />
            {errors.message?.message && (
              <p
                id="contact-message-error"
                className="text-body-sm text-destructive"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function fieldClassName(hasError: boolean) {
  return cn(
    "h-12 w-full rounded-md border bg-background px-4 text-body-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:ring-ring/30 focus-visible:ring-[4px] focus-visible:outline-none lg:rounded-[0.54rem]",
    hasError ? "border-destructive" : "border-input focus-visible:border-ring"
  );
}
