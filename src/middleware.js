import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ar|en)/:path*']
// };


// import { NextResponse } from 'next/server';
// import i18nConfig from '../i18nConfig';

// export function middleware(request) {
//   const { locales, defaultLocale  ,} = i18nConfig;
//   const url = request.nextUrl;

//   // Extract the pathname from the request
//   const pathname = url.pathname;

//   // Check if the pathname already has a locale
//   const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

//   if (!hasLocale) {
//     // Redirect to the default locale if no locale is found
//     return NextResponse.redirect(
//       new URL(`/${defaultLocale}${pathname}`, request.url)
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/((?!api|_next|.*\\..*).*)', // Exclude static files, API routes, and Next.js internals
// };
