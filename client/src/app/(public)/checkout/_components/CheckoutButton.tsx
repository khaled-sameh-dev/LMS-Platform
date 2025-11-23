"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "@/app/_components/ui/button";
import { motion } from "framer-motion";
import { Loader2, CreditCard } from "lucide-react";
import { useCreateCheckoutSessionMutation } from "@/store/api";

type Props = {
  courseId: string;
};

const CheckoutButton = ({ courseId }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { sessionId } = useAuth();

  const [createCheckoutSession] = useCreateCheckoutSessionMutation();

  const handleClick = async () => {
    setError(null);
    setLoading(true);

    try {
      const stripePromise = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const { url } = await createCheckoutSession({
        courseId,
      }).unwrap();

      window.location.href = url;
    } catch (err: any) {
      setError(err?.data?.message || "Failed to start checkout");
      setLoading(false);
    }
  };

  return (
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
  );
};

export default CheckoutButton;
