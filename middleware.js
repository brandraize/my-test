import { NextResponse } from "next/server";

// Emergency no-op middleware to prevent MIDDLEWARE_INVOCATION_FAILED
// Replace with full logic once the runtime error is investigated.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

