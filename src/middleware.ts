import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // We no longer redirect /1-100 to /number/1-100
  // Just continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match paths that should be processed by middleware
    "/((?!api|_next|category|popular-ranges|mothers-teachings|tempobook|favicon.ico).*)",
  ],
};
