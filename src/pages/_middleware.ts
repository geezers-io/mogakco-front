import { NextRequest, NextResponse } from 'next/server';
import { UserService } from 'providers';
import { Enums, SESSION_KEY } from 'common';
import Page = Enums.Page;

// Redirect by cookie session exist on public route
export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log(`[Middleware]: Route ${url.pathname}`);

  const publicRoutes: string[] = [Page.HOME, Page.JOIN];
  if (!publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  const sessionValue = req.cookies[SESSION_KEY];

  if (sessionValue) {
    try {
      await UserService.authenticateWithSSR(sessionValue);
      console.log('[Middleware]: authenticate success');
      url.pathname = Enums.Redirect.SERVICE;
      return NextResponse.redirect(url);
    } catch {
      console.log('[Middleware]: authenticate failure');
      return NextResponse.next();
    }
  }

  console.log('[Middleware]: no cookie');
  return NextResponse.next();
}
