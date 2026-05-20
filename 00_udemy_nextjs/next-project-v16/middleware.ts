//root/middleware.ts
/**
 * Request-Gate fuer geschuetzte Backend-Routen, erzwingt Token-Pruefung vor Seiten- oder API-Ausfuehrung.
 * NextRequest und NextResponse APIs, Cookie-Lesen, Redirect-Control-Flow, matcher-basierte Pfadselektion.
 * Input eingehender Request mit Cookies und Pathname, Logic Auth-Entscheidung, Output Next oder Redirect auf Login.
 * Next.js Besonderheit root-level Middleware laeuft vor Route-Matching, matcher /backend/:path* begrenzt Ausfuehrungsbereich.
 */

import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {

    const token = request.cookies.get('token')?.value;
    const {pathname} = request.nextUrl;

    if (pathname === '/backend/login') {
        return NextResponse.next();
    }

    if (pathname.startsWith('/backend')) {
        if (token !== process.env.TOKEN) {
            return NextResponse.redirect(new URL('/backend/login', request.url));
        }
    }

    return NextResponse.next();
}
export const config = {
    matcher: '/backend/:path*',
};
