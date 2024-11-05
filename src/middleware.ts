import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

let publicPages = ["/", "/signin", "/signup"];

export default function middleware(req: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["pt", "en"],
    defaultLocale: "pt",
  });

  let url = req.nextUrl.pathname.replace("en", "");
  url = url.length > 1 ? url.slice(1) : url;
  const isPublicPage = publicPages.includes(url);
  const isAuthenticated = req.cookies.get("nokopy.token")?.value;

  if (!isPublicPage && !isAuthenticated) {
    const locale = req.nextUrl.pathname.split("").slice(1, 3).join("");
    return NextResponse.redirect(new URL(`/${locale}/signin`, req.url));
  }

  return handleI18nRouting(req);
}

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
