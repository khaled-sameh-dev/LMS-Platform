// import { SignIn } from "@clerk/nextjs";

// const SigninComponent = () => {
//   return <SignIn signUpUrl="/auth/sign-up" />;
// };

// export default SigninComponent;

import { SignIn } from "@clerk/nextjs";

const SigninComponent = () => {
  return (
    <div>
      <SignIn
        signUpUrl="/auth/sign-up"
        appearance={{
          variables: {
            colorPrimary: "oklch(61.415% 0.13274 237.902)",
            colorText: "#ffffff",
            colorBackground: "#25262f",
            colorInputBackground: "#1b1c22",
            colorInputText: "#ffffff",
            borderRadius: "8px",
            fontFamily: "Inter, sans-serif",
          },
          elements: {
            rootBox: "w-full max-w-md mx-auto",
            card: "!shadow-xl !rounded-2xl border border-white",
            socialButtonsBlockButton: "!border !border-dirty-grey !text-white",

            dividerLine: "!bg-dirty-grey",
            dividerText: "!text-white/50 !text-sm",

            formFieldInput:
              "rounded-xl  !border !border-dirty-grey px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",

            formButtonPrimary:
              "bg-blue-600 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-blue-700 transition",
          },
        }}
      />
    </div>
  );
};

export default SigninComponent;
