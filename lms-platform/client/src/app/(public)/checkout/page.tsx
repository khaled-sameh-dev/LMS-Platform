"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useCreateCheckoutSessionMutation,
} from "@/store/api";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  Loader2,
  ShieldCheck,
  Lock,
  CheckCircle,
  CreditCard,
  Tag,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import Image from "next/image";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId") || "";
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: course, isLoading, isError } = useGetCourseByIdQuery(courseId, {
    skip: !courseId,
  });

  const [createCheckoutSession] = useCreateCheckoutSessionMutation();
  const clerkEnabled =
    process.env.NEXT_PUBLIC_ENABLE_CLERK === "true" &&
    (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "").startsWith("pk_");

  const handleCheckout = async () => {
    if (!course) return;

    setIsProcessing(true);
    try {
      const response = await createCheckoutSession({ courseId }).unwrap();
      
      // Redirect to Stripe Checkout
      if (response.url) {
        window.location.href = response.url;
      }
    } catch (error) {
      const err: any = error;
      const status = err?.status || err?.data?.status;
      if (status === 401 || status === 403) {
        router.push("/login");
      }
      // eslint-disable-next-line no-console
      console.error("Checkout failed:", err?.data || err);
      setIsProcessing(false);
      // Show error message
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (!courseId) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Checkout</h2>
          <p className="text-dirty-grey mb-4">Missing course information.</p>
          <Button onClick={() => router.push("/browse")} className="bg-main-blue text-white">
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
          <Button
            onClick={() => router.push("/courses")}
            className="bg-main-blue text-white"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  const totalChapters = course.sections?.reduce(
    (acc, section) => acc + section.chapters.length,
    0
  ) || 0;

  return (
    <div className="min-h-screen bg-primary-blue py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-dirty-grey">
            Secure checkout powered by Stripe
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Info Card */}
            <div className="bg-secondary-blue rounded-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-4 p-6">
                <img
                  src={course.thumbnail || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
                  alt={course.title}
                  className="w-full sm:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">
                        {course.title}
                      </h2>
                      <p className="text-dirty-grey text-sm">
                        by {course.instructor.firstName} {course.instructor.lastName}
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
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-secondary-blue rounded-lg p-6">
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

                {totalChapters > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-main-blue" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{totalChapters} Lectures</p>
                      <p className="text-dirty-grey text-sm">Comprehensive content</p>
                    </div>
                  </div>
                )}

                {course.duration > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                      <Loader2 className="w-5 h-5 text-main-blue" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {Math.round(course.duration / 60)}+ Hours
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

            {/* Security Notice */}
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
                    Your payment information is encrypted and secure. We use Stripe
                    for payment processing and never store your credit card details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-blue rounded-lg p-6 sticky top-4 space-y-6">
              <h3 className="text-xl font-bold text-white">Order Summary</h3>

              <div className="space-y-3 py-4 border-y border-white/10">
                <div className="flex justify-between text-dirty-grey">
                  <span>Course Price</span>
                  <span className="text-white font-semibold">
                    {course.currency === "EGP" ? "EGP" : "$"} {course.price}
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
                  {course.currency === "EGP" ? "EGP" : "$"} {course.price}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={isProcessing || course.price === 0}
                className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </>
                )}
              </Button>

              {course.price === 0 && (
                <p className="text-success text-sm text-center">
                  This course is free! You can enroll directly.
                </p>
              )}

              <div className="pt-4 border-t border-white/10">
                <p className="text-dirty-grey text-xs text-center">
                  By completing your purchase, you agree to our Terms of Service
                  and Privacy Policy. You'll get instant access to the course
                  content.
                </p>
              </div>

              {/* Trust Badges */}
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
    </div>
  );
};

export default CheckoutPage;
