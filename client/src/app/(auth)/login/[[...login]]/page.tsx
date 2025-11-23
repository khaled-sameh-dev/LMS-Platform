"use client";

import SigninComponent from "@/app/_components/shared/SigninComponent";
import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SigninComponent />
      </motion.div>
    </div>
  );
}
