import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const session = request.cookies.get("accessToken")?.value;
  if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
