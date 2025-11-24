"use client";

import SignupComponent from "@/app/_components/shared/SignupComponent";
import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      >
        <SignupComponent />
      </motion.div>
    </div>
  );
};

export default SignUpPage;
