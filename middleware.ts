import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
/** 
const protectedRoute = createRouteMatcher([
  '/',
  '/support',
  '/docs',
  '/resource',
  '/dashboard',

]);

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware((auth, req) => {
  console.log('Request URL:', req.url); // Add this line
  if (protectedRoute(req)) {
    console.log('Protected route matched:', req.url); // Add this line
    auth().protect();
  }
});
*/
export default clerkMiddleware()
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
