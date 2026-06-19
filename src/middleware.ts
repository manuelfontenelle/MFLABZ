import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.mflabz.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (
    !host ||
    host === CANONICAL_HOST ||
    host.startsWith("localhost") ||
    host.endsWith(".vercel.app")
  ) {
    return NextResponse.next();
  }

  if (host === "mflabz.com") {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"
  ]
};
