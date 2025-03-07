import { NextRequest, NextResponse } from "next/server";
import { languages } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  // Middleware disabled to avoid dynamic path conflicts
  return NextResponse.next();
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public folder
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-icon.png|favicon.svg|.*.png$).*)",
  ],
};
