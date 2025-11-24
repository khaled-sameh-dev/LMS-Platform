
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyPaymentMutation } from "@/store/api";
import { Button } from "@/app/_components/ui/button";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";

const PaymentSuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [verifyPayment, { isLoading }] = useVerifyPaymentMutation();
  const [verification, setVerification] = useState<{
    success: boolean;
    courseId?: string;
    error?: string;
  } | null>(null);

  useEffect(() => {
    if (sessionId) {
      verifyPayment({ sessionId })
        .unwrap()
        .then((result) => {
          setVerification({
            success: true,
            courseId: result.enrollment?.courseId,
          });
        })
        .catch((error) => {
          setVerification({
            success: false,
            error: error.data?.error || "Failed to verify payment",
          });
        });
    }
  }, [sessionId]);

  if (isLoading || !verification) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (!verification.success) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-secondary-blue rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-error text-2xl">✕</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Verification Failed
          </h2>
          <p className="text-dirty-grey mb-6">
            {verification.error || "We couldn't verify your payment."}
          </p>
          <Button
            onClick={() => router.push("/courses")}
            className="w-full bg-main-blue hover:bg-main-blue/80 text-white"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Success Animation */}
        <div className="bg-secondry-blue rounded-lg p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto animate-fade-in">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Payment Successful!
            </h1>
            <p className="text-dirty-grey">
              You're all set! Your enrollment is now active.
            </p>
          </div>

          <div className="bg-primary-blue rounded-lg p-6 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-dirty-grey">Status</span>
              <span className="text-success font-semibold">Completed</span>
            </div>
            
          </div>

          <div className="space-y-3 pt-4">
            {verification.courseId && (
              <Button
                onClick={() => router.push(`/learn/course/${verification.courseId}`)}
                className="w-full bg-main-blue hover:bg-main-blue/50  text-white py-6"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}

            <Button
              onClick={() => router.push("/student/my-courses")}
              
              className="w-full border border-white/10 text-white"
            >
              View My Courses
            </Button>
          </div>

          <p className="text-dirty-grey text-xs pt-4">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;