import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // Check if the path is a direct number range like /1-100
  if (pathname.match(/^\/(-?\d+-\d+)$/)) {
    const range = pathname.substring(1); // Remove the leading slash
    return NextResponse.redirect(new URL(`/number/${range}`, request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match paths like /1-100 but not paths that start with other segments
    "/((?!api|_next|number|category|popular-ranges|mothers-teachings|tempobook|favicon.ico).*)",
  ],
};
