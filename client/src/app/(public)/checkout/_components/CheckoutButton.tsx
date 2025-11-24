// "use client";

// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { useAuth, useUser } from "@clerk/nextjs";
// import { Button } from "@/app/_components/ui/button";
// import { motion } from "framer-motion";
// import { Loader2, CreditCard } from "lucide-react";
// import { useCreateCheckoutSessionMutation } from "@/store/api";

// type Props = {
//   courseId: string;
// };

// const CheckoutButton = ({ courseId }: Props) => {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { user } = useUser();

//   const [createCheckoutSession] = useCreateCheckoutSessionMutation();

//   const handleClick = async () => {
//     setError(null);
//     setLoading(true);

//     try {
//       const stripePromise = await loadStripe(
//         process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
//       );
//       const { url } = await createCheckoutSession({
//         courseId,
//       }).unwrap();

//       window.location.href = url;
//     } catch (err: any) {
//       setError(err?.data?.message || "Failed to start checkout");
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div whileTap={{ scale: 0.97 }} className="w-full">
//       <Button
//         onClick={handleClick}
//         disabled={loading}
//         className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold rounded-xl transition"
//       >
//         {loading ? (
//           <>
//             <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//             Redirecting...
//           </>
//         ) : (
//           <>
//             <CreditCard className="w-5 h-5 mr-2" />
//             Pay Securely with Stripe
//           </>
//         )}
//       </Button>
//     </motion.div>
//   );
// };

// export default CheckoutButton;

"use client";

import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/app/_components/ui/button";
import { motion } from "framer-motion";
import { Loader2, CreditCard, CheckCircle } from "lucide-react";
import {
  useCreateCheckoutSessionMutation,
  useCheckEnrollmentQuery,
} from "@/store/api";

type CheckoutButtonProps = {
  courseId: string;
};

const CheckoutButton = ({ courseId }: CheckoutButtonProps) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  // Check if user is already enrolled
  const { data: enrollmentData, isLoading: checkingEnrollment } =
    useCheckEnrollmentQuery(courseId, {
      skip: !userId, // Only check if user is authenticated
    });

  const [createCheckoutSession] = useCreateCheckoutSessionMutation();

  const isEnrolled = enrollmentData?.isEnrolled;

  const handleClick = async () => {
    if (isEnrolled) {
      // Redirect to course content if already enrolled
      window.location.href = `/browse/${courseId}`;
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const { url } = await createCheckoutSession({
        courseId,
      }).unwrap();

      window.location.href = url;
    } catch (err: any) {
      setError(err?.data?.message || "Failed to start checkout");
      setLoading(false);
    }
  };

  // Show loading state while checking enrollment
  if (checkingEnrollment) {
    return (
      <Button
        disabled
        className="w-full bg-dirty-grey text-white/60 py-6 text-lg font-semibold rounded-xl"
      >
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        Checking enrollment...
      </Button>
    );
  }

  // If already enrolled, show "Go to Course" button
  if (isEnrolled) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="w-full">
        <Button
          onClick={handleClick}
          className="w-full bg-primary-blue hover:bg-primary-blue/80 cursor-pointer text-white py-6 text-lg font-semibold rounded-xl transition"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Go to Course
        </Button>
      </motion.div>
    );
  }

  // Show regular checkout button
  return (
    <>
      <motion.div whileTap={{ scale: 0.97 }} className="w-full">
        <Button
          onClick={handleClick}
          disabled={loading}
          className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold rounded-xl transition"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Redirecting...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Pay Securely with Stripe
            </>
          )}
        </Button>
      </motion.div>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}
    </>
  );
};

export default CheckoutButton;
