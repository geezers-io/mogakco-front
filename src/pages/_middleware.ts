import { NextRequest, NextResponse } from 'next/server';
import { UserService } from 'providers';
import { Enums, SESSION_KEY } from 'common';
import RouteRoot = Enums.RouteRoot;

// Redirect by cookie session exist on public route
export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log(`[Middleware]: Route ${url.pathname}`);

  const publicRoutes: string[] = [RouteRoot.HOME, RouteRoot.JOIN];
  if (!publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  const cookie = req.cookies[SESSION_KEY];

  if (cookie) {
    try {
      await UserService.authenticateWithFetch();
      console.log('[Middleware]: authenticate success');
      url.pathname = Enums.Redirect.SERVICE;
      return NextResponse.redirect(url);
    } catch (e) {
      console.log('[Middleware]: authenticate failure');
      console.error(e);
      return NextResponse.next();
    }
  }

  console.log('[Middleware]: no cookie');
  return NextResponse.next();
}
