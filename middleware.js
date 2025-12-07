// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Production no-op mode
  if (process.env.NODE_ENV === "production") {
    return NextResponse.next();
  }
  
  // Development: Test your logic
  try {
    // Your actual middleware logic here
    return actualMiddlewareLogic(request);
  } catch (error) {
    console.error("Dev middleware error:", error);
    return NextResponse.next();
  }
}