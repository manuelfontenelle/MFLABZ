"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  BriefcaseBusiness,
  ChevronDown,
  Mail,
  MessageSquareText,
  UserRound
} from "lucide-react";
import { useTranslations } from "next-intl";
import { type ReactNode, useMemo, useState } from "react";
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
  contactServiceValues,
  createContactFormSchema,
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
  const t = useTranslations("Contact");
  const [open, setOpen] = useState(false);

  const schema = useMemo(
    () =>
      createContactFormSchema({
        nameMin: t("errors.nameMin"),
        emailRequired: t("errors.emailRequired"),
        emailInvalid: t("errors.emailInvalid"),
        serviceRequired: t("errors.serviceRequired"),
        messageMin: t("errors.messageMin")
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues, unknown, ContactPayload>({
    resolver: zodResolver(schema),
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
        throw new Error(result.error ?? t("errorUnable"));
      }

      toast.success(t("success"));
      reset();
      setOpen(false);
    } catch {
      toast.error(t("error"));
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="pr-10">
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-2">
            <label
              htmlFor="contact-name"
              className="text-body-sm font-semibold text-foreground"
            >
              {t("name")}
            </label>
            <div className="relative">
              <UserRound className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground/70" />
              <input
                id="contact-name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={fieldClassName(Boolean(errors.name), "pl-11")}
                {...register("name")}
              />
            </div>
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
              {t("email")}
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground/70" />
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClassName(Boolean(errors.email), "pl-11")}
                {...register("email")}
              />
            </div>
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
              {t("service")}
            </label>
            <div className="relative">
              <BriefcaseBusiness className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground/70" />
              <select
                id="contact-service"
                aria-invalid={Boolean(errors.service)}
                aria-describedby={
                  errors.service ? "contact-service-error" : undefined
                }
                className={fieldClassName(
                  Boolean(errors.service),
                  "appearance-none pl-11 pr-12"
                )}
                {...register("service")}
              >
                <option value="">{t("selectService")}</option>
                {contactServiceValues.map((service) => (
                  <option key={service} value={service}>
                    {t(`services.${service}`)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground/70" />
            </div>
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
              {t("message")}
            </label>
            <div className="relative">
              <MessageSquareText className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground/70" />
              <textarea
                id="contact-message"
                rows={5}
                placeholder={t("messagePlaceholder")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={cn(
                  fieldClassName(Boolean(errors.message), "pl-11"),
                  "min-h-32 resize-y pt-3.5"
                )}
                {...register("message")}
              />
            </div>
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
              variant="premium"
              size="lg"
              className="w-full cursor-pointer bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/95 hover:shadow-none active:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function fieldClassName(hasError: boolean, className?: string) {
  return cn(
    "h-12 w-full rounded-md border bg-background px-4 text-body-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:ring-ring/15 focus-visible:ring-[2px] focus-visible:outline-none lg:rounded-[0.54rem]",
    hasError ? "border-destructive" : "border-input focus-visible:border-ring/60",
    className
  );
}
