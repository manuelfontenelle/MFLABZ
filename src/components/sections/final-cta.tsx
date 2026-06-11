"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui";
import { siteConfig } from "@/config/site";
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

export function FinalCTA() {
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
    <section className="bg-background py-section">
      <Container size="lg">
        <div className="overflow-hidden rounded-md border border-border bg-muted/60 px-6 py-16 shadow-sm sm:px-10 sm:py-20 lg:rounded-[0.54rem] lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
            <span className="text-caption font-semibold uppercase text-muted-foreground">
              Let&apos;s create something memorable
            </span>
            <h2 className="max-w-2xl font-heading text-heading-2 font-medium">
              Ready to Elevate Your Brand?
            </h2>
            <p className="max-w-2xl text-body-lg text-muted-foreground">
              Whether you need a logo, a complete brand identity, social media
              content or marketing materials, I&apos;d love to hear about your
              project.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="pr-10">
                    <DialogTitle>Tell Me About Your Project</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and I&apos;ll get back to you as
                      soon as possible.
                    </DialogDescription>
                  </DialogHeader>

                  <form
                    className="grid gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
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
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className={fieldClassName(Boolean(errors.name))}
                        {...register("name")}
                      />
                      {errors.name?.message && (
                        <p
                          id="contact-name-error"
                          className="text-body-sm text-destructive"
                        >
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
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className={fieldClassName(Boolean(errors.email))}
                        {...register("email")}
                      />
                      {errors.email?.message && (
                        <p
                          id="contact-email-error"
                          className="text-body-sm text-destructive"
                        >
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

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a
                  href={siteConfig.links.fiverr}
                  target="_blank"
                  rel="noreferrer"
                >
                  View My Fiverr Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function fieldClassName(hasError: boolean) {
  return cn(
    "h-12 w-full rounded-md border bg-background px-4 text-body-sm text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:ring-ring/30 focus-visible:ring-[4px] focus-visible:outline-none lg:rounded-[0.54rem]",
    hasError ? "border-destructive" : "border-input focus-visible:border-ring"
  );
}
