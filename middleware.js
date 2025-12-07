// middleware-debug.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware executing for:", request.url);
  
  try {
    // Add your original logic back piece by piece
    const url = request.nextUrl.clone();
    
    // Start with minimal logic
    if (url.pathname === "/protected") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next(); // Fallback
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};