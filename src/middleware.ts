import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;
  const { locale } = request;

  // Check if the path starts with /vi/ and handle language routing
  if (pathname.startsWith("/vi")) {
    // Set a cookie to remember the language preference
    const response = NextResponse.next();
    response.cookies.set("language", "vi", { path: "/" });
    return response;
  }

  // We no longer redirect /1-100 to /number/1-100
  // Just continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match paths that should be processed by middleware
    "/((?!api|_next|category|popular-ranges|mothers-teachings|tempobook|favicon.ico).*)",
    // Also match Vietnamese paths
    "/vi/:path*",
  ],
};
