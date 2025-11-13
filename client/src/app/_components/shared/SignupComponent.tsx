import { SignUp } from "@clerk/nextjs";
import {dark} from "@clerk/themes"
const SignupComponent = () => {
  return (
    <SignUp
      appearance={{
        theme: dark,
        elements: {
          card: "bg-secondry-blue w-full",
          footer: {
            background: "25262f",
            "& > div:nth-child(1)": "bg-secondry-blue",
          },
        },
      }}
    />
  );
};

export default SignupComponent;
