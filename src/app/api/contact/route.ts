import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact";
import { sendContactInquiry } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid contact inquiry." },
        { status: 400 }
      );
    }

    const emailResult = await sendContactInquiry(result.data);

    if (!emailResult.accepted) {
      return NextResponse.json(
        { success: false, error: "Unable to process inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to process inquiry." },
      { status: 500 }
    );
  }
}
