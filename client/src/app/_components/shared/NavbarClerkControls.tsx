"use client";

import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NotificationControl from "./NotificationControl";
import { Button } from "../ui/button";

const NavbarClerkControls = () => {
  return (
    <>
      <SignedIn>
        <NotificationControl />
      </SignedIn>

      {/* When user is signed in */}
      <SignedIn>
        <UserButton
          appearance={{
            baseTheme: dark,
            elements: {
              rootBox: "hidden",
              avatarBox: "w-10 h-10",
              userButtonPopoverCard:
                "bg-secondry-blue  rounded-xl overflow-hidden !max-w-70",
              userButtonPopoverFooter: "!hidden",
            },
          }}
          userProfileMode="navigation"
          userProfileUrl="/profile"
        />
      </SignedIn>

      {/* When user is signed out */}
      <SignedOut>
        <div className="flex items-center gap-2 sm:gap-3">
          <SignInButton>
            <Button
              variant="link"
              className=" text-dirty-grey  hover:scale-105 transition-all bg-transparent border border-dirty-grey  text-sm font-medium"
            >
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              variant="link"
              className=" bg-main-blue  text-white hover:opacity-90 transition-all  text-sm font-medium shadow-md"
            >
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </>
  );
};

export default NavbarClerkControls;