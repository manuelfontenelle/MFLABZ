import { Resend } from "resend";

import type { ContactPayload } from "@/lib/contact";

export type ContactEmailResult = {
  accepted: boolean;
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;
const fromEmail = "MFLABZ Contact <onboarding@resend.dev>";

export async function sendContactInquiry(
  payload: ContactPayload
): Promise<ContactEmailResult> {
  if (!resendApiKey || !contactEmail) {
    return { accepted: false };
  }

  const resend = new Resend(resendApiKey);
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: contactEmail,
    replyTo: payload.email,
    subject: `New project inquiry from ${payload.name}`,
    html: renderContactInquiryEmail(payload),
    text: renderContactInquiryText(payload)
  });

  return { accepted: Boolean(data?.id) && !error };
}

function renderContactInquiryEmail(payload: ContactPayload) {
  const preview = `${payload.name} is interested in ${payload.service}.`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>New project inquiry</title>
  </head>
  <body style="margin:0;background:#f6f7fb;color:#111111;font-family:Inter,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f7fb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;overflow:hidden;border:1px solid #e7e8ee;border-radius:14px;background:#ffffff;">
            <tr>
              <td style="padding:32px 32px 24px;border-bottom:1px solid #e7e8ee;">
                <p style="margin:0 0 12px;color:#636873;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">MFLABZ Contact</p>
                <h1 style="margin:0;color:#111111;font-size:32px;line-height:1.05;letter-spacing:-0.04em;">New project inquiry</h1>
                <p style="margin:16px 0 0;color:#636873;font-size:16px;line-height:1.6;">A visitor submitted the contact form and is ready to discuss a design project.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                ${renderDetailRow("Full Name", payload.name)}
                ${renderDetailRow("Email Address", payload.email)}
                ${renderDetailRow("Service Needed", payload.service)}
                <div style="margin-top:24px;">
                  <p style="margin:0 0 8px;color:#636873;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Project Details</p>
                  <div style="border:1px solid #e7e8ee;border-radius:12px;background:#f6f7fb;padding:18px;color:#111111;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;">
                <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;border-radius:999px;background:#111111;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 22px;">Reply to ${escapeHtml(payload.name)}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderDetailRow(label: string, value: string) {
  return `<div style="padding:16px 0;border-bottom:1px solid #e7e8ee;">
    <p style="margin:0 0 6px;color:#636873;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">${escapeHtml(label)}</p>
    <p style="margin:0;color:#111111;font-size:16px;line-height:1.5;">${escapeHtml(value)}</p>
  </div>`;
}

function renderContactInquiryText(payload: ContactPayload) {
  return [
    "New project inquiry",
    "",
    `Full Name: ${payload.name}`,
    `Email Address: ${payload.email}`,
    `Service Needed: ${payload.service}`,
    "",
    "Project Details:",
    payload.message
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
