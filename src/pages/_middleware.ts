import { NextRequest, NextResponse } from 'next/server';
import { isUnauthorizeError } from 'utils/error';
import { PublicRoute, Redirect } from 'common';

const SESSION_COOKIE_NAME = 'session';

export async function middleware(req: NextRequest) {
  const isPublicRoute = (Object.values(PublicRoute) as string[]).includes(req.nextUrl.pathname);
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isCookie = JSON.parse(req.cookies[SESSION_COOKIE_NAME] || 'false');
  if (isCookie) {
    try {
      return NextResponse.next();
    } catch (e) {
      if (isUnauthorizeError(e)) {
        req.nextUrl.pathname = Redirect.HOME;
        return NextResponse.redirect(req.nextUrl);
      }
    }
  }

  req.nextUrl.pathname = Redirect.HOME;
  return NextResponse.redirect(req.nextUrl);
}
