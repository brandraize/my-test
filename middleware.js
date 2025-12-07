import { NextResponse } from "next/server";

const supportedLanguages = ["en", "ar"];

export function middleware(request) {
  try {
    const nextUrl = request.nextUrl;
    const origin = (nextUrl && nextUrl.origin) || new URL(request.url).origin;
    const pathname = (nextUrl && nextUrl.pathname) || new URL(request.url).pathname;

    if (
      pathname.startsWith("/api/") ||
      pathname.startsWith("/_next/") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    if (
      pathname === "/admin" ||
      supportedLanguages.some((lang) => pathname === `/${lang}/admin`)
    ) {
      const langFromPath = supportedLanguages.find(
        (lang) => pathname === `/${lang}/admin`
      );

      const langToUse =
        langFromPath ||
        (() => {
          try {
            const acceptLang = request.headers.get("accept-language") || request.headers.get("Accept-Language") || "";
            const preferredLang = acceptLang.split(",")[0].split("-")[0];
            return supportedLanguages.includes(preferredLang)
              ? preferredLang
              : "en";
          } catch (e) {
            return "en";
          }
        })();

      return NextResponse.redirect(
        new URL(`/${langToUse}/admin/products`, origin)
      );
    }

    if (
      supportedLanguages.some(
        (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
      )
    ) {
      return NextResponse.next();
    }

    let acceptLang = "";
    try {
      acceptLang = request.headers.get("accept-language") || request.headers.get("Accept-Language") || "";
    } catch (e) {
      acceptLang = "";
    }
    const preferredLang = acceptLang.split(",")[0].split("-")[0] || "";

    const langToUse = supportedLanguages.includes(preferredLang)
      ? preferredLang
      : "en";

    return NextResponse.redirect(
      new URL(`/${langToUse}${pathname}`, origin)
    );
  } catch (err) {
    // Prevent middleware from crashing the request pipeline.
    // Log to console so Vercel can surface the error in build/runtime logs.
    try {
      const safeInfo = {
        url: request?.url,
        method: request?.method,
        // do not dump headers or body to avoid leaking secrets
      };
      console.error("Middleware error:", err && err.stack ? err.stack : err, safeInfo);
    } catch (logErr) {
      console.error("Middleware error and failed to log context:", err, logErr);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
