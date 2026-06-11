import type { ContactPayload } from "@/lib/contact";

export type ContactEmailResult = {
  accepted: boolean;
};

export async function sendContactInquiry(
  payload: ContactPayload
): Promise<ContactEmailResult> {
  // Future Resend integration:
  // 1. Install and configure the Resend SDK with an API key from environment variables.
  // 2. Build the email subject/body from the validated contact payload below.
  // 3. Call resend.emails.send(...) and return the provider result.
  void payload;

  return { accepted: true };
}
