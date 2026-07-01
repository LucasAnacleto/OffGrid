import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  SESSION_COOKIE_NAME,
  verifySessionToken,
} from "@/features/auth/server/session";

const publicAdminRoutes = ["/admin/sign-in", "/admin/sign-up"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isPublicAdminRoute = publicAdminRoutes.includes(pathname);

  if (!token) {
    if (isPublicAdminRoute) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/admin/sign-in", request.url));
  }

  try {
    await verifySessionToken(token);

    if (isPublicAdminRoute) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  } catch {
    const response = isPublicAdminRoute
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/admin/sign-in", request.url));

    response.cookies.delete(SESSION_COOKIE_NAME);

    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
