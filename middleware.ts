import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add authentication logic here
  // This is a simple example - in production, you'd want to check for valid session tokens
  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // For demo purposes, we'll just check if we're coming from the login page
    const referer = request.headers.get('referer');
    if (!referer?.includes('/login')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}