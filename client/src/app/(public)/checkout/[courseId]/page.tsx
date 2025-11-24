// "use client";

// import { use, useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   useGetCourseByIdQuery,
//   useCreateCheckoutSessionMutation,
// } from "@/store/api";
// import { Button } from "@/app/_components/ui/button";
// import { Badge } from "@/app/_components/ui/badge";
// import {
//   Loader2,
//   ShieldCheck,
//   Lock,
//   CheckCircle,
//   CreditCard,
//   Tag,
//   Users,
//   BookOpen,
//   Award,
// } from "lucide-react";
// import { SignedIn, SignedOut, SignIn, useAuth, useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import { priceFormat } from "@/utilis";
// import CheckoutButton from "../_components/CheckoutButton";

// interface CheckoutPageProps {
//   params: Promise<{ courseId: string }>;
// }

// const CheckoutPage = ({ params }: CheckoutPageProps) => {
//   const router = useRouter();
//   const { courseId } = use(params);

//   const { data: course, isLoading, isError } = useGetCourseByIdQuery(courseId);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
//           <p className="text-dirty-grey text-lg">Loading checkout...</p>
//         </div>
//       </div>
//     );
//   }

//   if (isError || !course) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Course Not Found
//           </h2>
//           <Button
//             onClick={() => router.push("/browse")}
//             className="bg-main-blue text-white"
//           >
//             Browse Courses
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//           Complete Your Purchase
//         </h1>
//         <p className="text-dirty-grey">Secure checkout powered by Stripe</p>
//       </div>

//       <SignedOut>
//         <div className="max-w-3xl mx-auto mb-6">
//           <div className="bg-secondary-blue border border-white/10 rounded-lg p-4 text-dirty-grey text-sm">
//             <p>
//               Sign-in is required to purchase. Enable Clerk and provide a valid
//               publishable key to proceed, or
//               <button
//                 onClick={() => router.push("/login")}
//                 className="text-main-blue underline ml-1"
//               >
//                 sign in
//               </button>
//               .
//             </p>
//           </div>
//         </div>
//       </SignedOut>

//       <div className="grid lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-6">
//           <div className="bg-secondry-blue rounded-lg overflow-hidden">
//             <div className="flex flex-col sm:flex-row gap-4 p-6">
//               <div className="relative flex-1 w-full sm:w-48 aspect-video">
//                 <Image
//                   src={
//                     course.thumbnail ||
//                     "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//                   }
//                   alt={course.title}
//                   fill
//                   className="w-full object-cover rounded-lg"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-1">
//                       {course.title}
//                     </h2>
//                     <p className="text-dirty-grey text-sm">
//                       by {course.instructor.firstName}{" "}
//                       {course.instructor.lastName}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap items-center gap-2 mt-3">
//                   <Badge className="bg-primary-blue text-white border border-white/20">
//                     {course.level}
//                   </Badge>
//                   <Badge className="bg-primary-blue text-white border border-white/20">
//                     <Tag className="w-3 h-3 mr-1" />
//                     {course.category.name}
//                   </Badge>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-secondry-blue rounded-lg p-6">
//             <h3 className="text-xl font-bold text-white mb-4">
//               What's included
//             </h3>
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                   <Users className="w-5 h-5 text-main-blue" />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">
//                     {course.studentsCount}+ Students
//                   </p>
//                   <p className="text-dirty-grey text-sm">Join the community</p>
//                 </div>
//               </div>

//               {course.totalChapters === 0 && (
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                     <BookOpen className="w-5 h-5 text-main-blue" />
//                   </div>
//                   <div>
//                     <p className="text-dirty-grey text-sm">No Chapters Yet</p>
//                   </div>
//                 </div>
//               )}

//               {course.totalChapters! > 0 && (
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                     <BookOpen className="w-5 h-5 text-main-blue" />
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">
//                       {course.totalChapters} Lectures
//                     </p>
//                     <p className="text-dirty-grey text-sm">
//                       Comprehensive content
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {course.totalDuration! > 0 && (
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                     <Loader2 className="w-5 h-5 text-main-blue" />
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">
//                       {Math.round(course.totalDuration! / 60)}+ Hours
//                     </p>
//                     <p className="text-dirty-grey text-sm">On-demand video</p>
//                   </div>
//                 </div>
//               )}

//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                   <Award className="w-5 h-5 text-main-blue" />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Certificate</p>
//                   <p className="text-dirty-grey text-sm">Upon completion</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                   <CheckCircle className="w-5 h-5 text-main-blue" />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Lifetime Access</p>
//                   <p className="text-dirty-grey text-sm">Learn at your pace</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
//                   <ShieldCheck className="w-5 h-5 text-main-blue" />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Money-back</p>
//                   <p className="text-dirty-grey text-sm">30-day guarantee</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-secondary-blue rounded-lg p-6">
//             <div className="flex items-start gap-4">
//               <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Lock className="w-5 h-5 text-success" />
//               </div>
//               <div>
//                 <h4 className="text-white font-semibold mb-1">
//                   Secure Checkout
//                 </h4>
//                 <p className="text-dirty-grey text-sm">
//                   Your payment information is encrypted and secure. We use
//                   Stripe for payment processing and never store your credit card
//                   details.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <div className="bg-secondry-blue rounded-lg p-6 sticky top-4 space-y-6">
//             <h3 className="text-xl font-bold text-white">Order Summary</h3>

//             <div className="space-y-3 py-4 border-y border-white/10">
//               <div className="flex justify-between text-dirty-grey">
//                 <span>Course Price</span>
//                 <span className="text-white font-semibold">
//                   {priceFormat(course.price, course.currency)}
//                 </span>
//               </div>
//               <div className="flex justify-between text-dirty-grey">
//                 <span>Platform Fee</span>
//                 <span className="text-white font-semibold">$0</span>
//               </div>
//             </div>

//             <div className="flex justify-between items-center py-2">
//               <span className="text-lg font-bold text-white">Total</span>
//               <span className="text-2xl font-bold text-white">
//                 {priceFormat(course.price, course.currency)}
//               </span>
//             </div>

//             <SignedIn>
//               <CheckoutButton courseId={courseId} />
//               {course.price === 0 && (
//                 <p className="text-success text-sm text-center">
//                   This course is free! You can enroll directly.
//                 </p>
//               )}
//             </SignedIn>

//             <SignedOut>
//               <Button
//                 disabled
//                 className="w-full bg-dirty-grey text-white/60 py-6 px-4 text-lg font-semibold cursor-not-allowed"
//               >
//                 You must be signed in to continue
//               </Button>

//               <p className="text-center text-sm text-dirty-grey mt-2">
//                 <a
//                   href="/login"
//                   className="text-main-blue underline hover:text-main-blue/80"
//                 >
//                   Sign in
//                 </a>{" "}
//                 to unlock checkout
//               </p>
//             </SignedOut>

//             <div className="pt-4 border-t border-white/10">
//               <p className="text-dirty-grey text-xs text-center">
//                 By completing your purchase, you agree to our Terms of Service
//                 and Privacy Policy. You'll get instant access to the course
//                 content.
//               </p>
//             </div>

//             <div className="flex items-center justify-center gap-4 pt-4">
//               <div className="flex items-center gap-2 text-dirty-grey">
//                 <ShieldCheck className="w-5 h-5" />
//                 <span className="text-xs">Secure Payment</span>
//               </div>
//               <div className="flex items-center gap-2 text-dirty-grey">
//                 <CheckCircle className="w-5 h-5" />
//                 <span className="text-xs">SSL Encrypted</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

"use client";

import { use, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGetCourseByIdQuery, useCheckEnrollmentQuery } from "@/store/api";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  Loader2,
  ShieldCheck,
  Lock,
  CheckCircle,
  Tag,
  Users,
  BookOpen,
  Award,
  AlertCircle,
} from "lucide-react";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { priceFormat } from "@/utilis";
import CheckoutButton from "../_components/CheckoutButton";

interface CheckoutPageProps {
  params: Promise<{ courseId: string }>;
}

const CheckoutPage = ({ params }: CheckoutPageProps) => {
  const router = useRouter();
  const { courseId } = use(params);
  const { userId } = useAuth();

  const { data: course, isLoading, isError } = useGetCourseByIdQuery(courseId);

  // Check enrollment status
  const { data: enrollmentData, isLoading: checkingEnrollment } =
    useCheckEnrollmentQuery(courseId, {
      skip: !userId,
    });

  const isEnrolled = enrollmentData?.isEnrolled;

  if (isLoading || checkingEnrollment) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Course Not Found
          </h2>
          <Button
            onClick={() => router.push("/browse")}
            className="bg-main-blue text-white"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {isEnrolled ? "You're Already Enrolled!" : "Complete Your Purchase"}
        </h1>
        <p className="text-dirty-grey">
          {isEnrolled
            ? "Access your course content anytime"
            : "Secure checkout powered by Stripe"}
        </p>
      </div>

      <SignedOut>
        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-secondary-blue border border-white/10 rounded-lg p-4 text-dirty-grey text-sm">
            <p>
              Sign-in is required to purchase. Enable Clerk and provide a valid
              publishable key to proceed, or
              <button
                onClick={() => router.push("/login")}
                className="text-main-blue underline ml-1"
              >
                sign in
              </button>
              .
            </p>
          </div>
        </div>
      </SignedOut>

      {/* Already Enrolled Banner */}
      <SignedIn>
        {isEnrolled && (
          <div className="max-w-3xl mx-auto mb-6">
            <div className="bg-success/10 border border-success/30 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <div>
                <p className="text-success font-semibold">
                  You're already enrolled in this course!
                </p>
                <p className="text-dirty-grey text-sm mt-1">
                  Click the button below to access your course content and
                  continue learning.
                </p>
              </div>
            </div>
          </div>
        )}
      </SignedIn>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-secondry-blue rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-4 p-6">
              <div className="relative flex-1 w-full sm:w-48 aspect-video">
                <Image
                  src={
                    course.thumbnail ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  }
                  alt={course.title}
                  fill
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {course.title}
                    </h2>
                    <p className="text-dirty-grey text-sm">
                      by {course.instructor.firstName}{" "}
                      {course.instructor.lastName}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Badge className="bg-primary-blue text-white border border-white/20">
                    {course.level}
                  </Badge>
                  <Badge className="bg-primary-blue text-white border border-white/20">
                    <Tag className="w-3 h-3 mr-1" />
                    {course.category.name}
                  </Badge>
                  {isEnrolled && (
                    <Badge className="bg-success/20 text-success border border-success/30">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Enrolled
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondry-blue rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              What's included
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-main-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {course.studentsCount}+ Students
                  </p>
                  <p className="text-dirty-grey text-sm">Join the community</p>
                </div>
              </div>

              {course.totalChapters === 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-main-blue" />
                  </div>
                  <div>
                    <p className="text-dirty-grey text-sm">No Chapters Yet</p>
                  </div>
                </div>
              )}

              {course.totalChapters! > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-main-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {course.totalChapters} Lectures
                    </p>
                    <p className="text-dirty-grey text-sm">
                      Comprehensive content
                    </p>
                  </div>
                </div>
              )}

              {course.totalDuration! > 0 && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-main-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {Math.round(course.totalDuration! / 60)}+ Hours
                    </p>
                    <p className="text-dirty-grey text-sm">On-demand video</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-main-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Certificate</p>
                  <p className="text-dirty-grey text-sm">Upon completion</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-main-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Lifetime Access</p>
                  <p className="text-dirty-grey text-sm">Learn at your pace</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-main-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">Money-back</p>
                  <p className="text-dirty-grey text-sm">30-day guarantee</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary-blue rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Secure Checkout
                </h4>
                <p className="text-dirty-grey text-sm">
                  Your payment information is encrypted and secure. We use
                  Stripe for payment processing and never store your credit card
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-secondry-blue rounded-lg p-6 sticky top-4 space-y-6">
            <h3 className="text-xl font-bold text-white">
              {isEnrolled ? "Course Access" : "Order Summary"}
            </h3>

            {!isEnrolled && (
              <>
                <div className="space-y-3 py-4 border-y border-white/10">
                  <div className="flex justify-between text-dirty-grey">
                    <span>Course Price</span>
                    <span className="text-white font-semibold">
                      {priceFormat(course.price, course.currency)}
                    </span>
                  </div>
                  <div className="flex justify-between text-dirty-grey">
                    <span>Platform Fee</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-white">
                    {priceFormat(course.price, course.currency)}
                  </span>
                </div>
              </>
            )}

            {isEnrolled && (
              <div className="py-4 border-y border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <div>
                    <p className="text-white font-semibold">
                      Enrollment Active
                    </p>
                    <p className="text-dirty-grey text-sm">
                      You have full access to this course
                    </p>
                  </div>
                </div>
              </div>
            )}

            <SignedIn>
              <CheckoutButton courseId={courseId} />
              {!isEnrolled && course.price === 0 && (
                <p className="text-success text-sm text-center">
                  This course is free! You can enroll directly.
                </p>
              )}
            </SignedIn>

            <SignedOut>
              <Button
                disabled
                className="w-full bg-dirty-grey text-white/60 py-6 px-4 text-lg font-semibold cursor-not-allowed"
              >
                You must be signed in to continue
              </Button>

              <p className="text-center text-sm text-dirty-grey mt-2">
                <a
                  href="/login"
                  className="text-main-blue underline hover:text-main-blue/80"
                >
                  Sign in
                </a>{" "}
                to unlock checkout
              </p>
            </SignedOut>

            <div className="pt-4 border-t border-white/10">
              <p className="text-dirty-grey text-xs text-center">
                {isEnrolled
                  ? "You have lifetime access to this course. Start learning now!"
                  : "By completing your purchase, you agree to our Terms of Service and Privacy Policy. You'll get instant access to the course content."}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-dirty-grey">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-dirty-grey">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs">SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
