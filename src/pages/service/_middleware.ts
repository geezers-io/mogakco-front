import { NextRequest, NextResponse } from 'next/server';
import { UserService } from 'providers';
import { Enum } from 'common';
import RouteRoot = Enum.RouteRoot;

const SESSION_KEY = 'JSESSIONID';

// Redirect by cookie session exist
export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log(`[Middleware]: Route ${url.pathname}`);

  if (url.pathname.startsWith(RouteRoot.PROXY)) {
    return NextResponse.next();
  }

  const cookie = req.cookies[SESSION_KEY];

  if (cookie) {
    try {
      await UserService.authenticateWithFetch();
      console.log('[Middleware]: authenticate success');
      return NextResponse.next();
    } catch (e) {
      console.log('[Middleware]: authenticate failure');
      console.error(e);
      url.pathname = Enum.Redirect.HOME;
      return NextResponse.redirect(url);
    }
  }

  console.log('[Middleware]: no cookie');
  url.pathname = Enum.Redirect.HOME;
  return NextResponse.redirect(url);
}
