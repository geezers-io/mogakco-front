import { NextRequest, NextResponse } from 'next/server';
import { UserService } from 'providers';
import { Enums, SESSION_KEY } from 'common';
import RouteRoot = Enums.RouteRoot;

// Redirect by cookie session exist
export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log(`[Middleware]: Route ${url.pathname}`);

  if (url.pathname.startsWith(RouteRoot.PROXY)) {
    return NextResponse.next();
  }

  const sessionValue = req.cookies[SESSION_KEY];

  if (sessionValue) {
    try {
      await UserService.authenticateWithSSR(sessionValue);
      console.log('[Middleware]: authenticate success');
      return NextResponse.next();
    } catch (e) {
      console.log('[Middleware]: authenticate failure');
      console.error(e);
      url.pathname = Enums.Redirect.HOME;
      return NextResponse.redirect(url);
    }
  }

  console.log('[Middleware]: no cookie');
  url.pathname = Enums.Redirect.HOME;
  return NextResponse.redirect(url);
}
