import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SigninComponent = () => {
  return (
    <SignIn
      appearance={{
        theme: dark,
        elements:{
           socialButtonsBlockButtonText: "text-white",
        }
      }}
    />
  );
};

export default SigninComponent;
