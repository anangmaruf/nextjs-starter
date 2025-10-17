import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // This is now typed correctly thanks to your type augmentation
    const token = req.nextauth?.token;

    if (!token) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Returning true lets request proceed, false triggers redirect
        return !!token;
      },
    },
    pages: {
      signIn: "/admin/login", // Where to redirect for login
    },
  }
);

// Ensure we don't run auth checks on API auth routes
export const config = {
  matcher: [
    // Protect everything except NextAuth API routes and static assets
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
