//root/lektion-7-auth-middleware-und-security/middleware.ts
// @ts-nocheck

import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  // session Cookie lesen.
  const token = request.cookies.get("session")?.value;

  // Nur /dashboard schuetzen.
  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !token) {
    // Ohne Token -> Redirect auf Login.
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
