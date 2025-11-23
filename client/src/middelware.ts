// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define route matchers
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/courses(.*)",
  "/api/webhooks(.*)",
]);

const isStudentRoute = createRouteMatcher(["/student(.*)"]);

const isInstructorRoute = createRouteMatcher(["/instructor(.*)"]);

const isProfileRoute = createRouteMatcher(["/profile(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  const url = req.nextUrl.clone();

  // Allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Protect all other routes
  if (!userId) {
    url.pathname = "/sign-in";
    url.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(url);
  }

  // Get user role from Clerk public metadata
  const userRole = (sessionClaims?.metadata as any)?.role || "STUDENT";

  // Handle profile and settings routes (accessible to all authenticated users)
  if (isProfileRoute(req)) {
    return NextResponse.next();
  }

  // Redirect students away from instructor routes
  if (isStudentRoute(req) && userRole !== "STUDENT") {
    url.pathname = "/instructor/dashboard";
    return NextResponse.redirect(url);
  }

  // Redirect instructors away from student routes
  if (isInstructorRoute(req) && userRole !== "INSTRUCTOR") {
    url.pathname = "/student/my-courses";
    return NextResponse.redirect(url);
  }

  // Handle root dashboard redirect based on role
  if (req.nextUrl.pathname === "/dashboard") {
    if (userRole === "INSTRUCTOR") {
      url.pathname = "/instructor/dashboard";
    } else {
      url.pathname = "/student/my-courses";
    }
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
