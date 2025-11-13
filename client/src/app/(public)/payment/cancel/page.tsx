"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { XCircle, ArrowLeft, CreditCard } from "lucide-react";

const PaymentCancelPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-secondary-blue rounded-lg p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-warning/20 rounded-full flex items-center justify-center mx-auto">
          <XCircle className="w-12 h-12 text-warning" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Payment Cancelled
          </h1>
          <p className="text-dirty-grey">
            Your payment was cancelled. No charges were made to your account.
          </p>
        </div>

        <div className="bg-primary-blue rounded-lg p-6 text-left space-y-2">
          <h3 className="text-white font-semibold mb-2">What happened?</h3>
          <ul className="text-dirty-grey text-sm space-y-1">
            <li>• You clicked the back button</li>
            <li>• The payment window was closed</li>
            <li>• The session timed out</li>
          </ul>
        </div>

        <div className="space-y-3 pt-4">
          <Button
            onClick={() => router.back()}
            className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Try Again
          </Button>

          <Button
            onClick={() => router.push("/courses")}
            variant="outline"
            className="w-full border-white/10 text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Browse Courses
          </Button>
        </div>

        <p className="text-dirty-grey text-xs pt-4">
          Need help? Contact our support team for assistance.
        </p>
      </div>
    </div>
  );
};

export default PaymentCancelPage;
