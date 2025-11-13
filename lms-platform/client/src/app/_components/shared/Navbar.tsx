// "use client";

// import Link from "next/link";
// import SearchInput from "./SearchInput";
// import { Bell, GraduationCap, Search, User } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuLabel,
// } from "../ui/dropdown-menu";
// import { Button } from "../ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import dynamic from "next/dynamic";

// import styles from "@/styles/SignIn.module.css";
// import { usePathname } from "next/navigation";
// import { useMemo, useState } from "react";
// import { PROTECTED_ROUTES } from "@/routes";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

// const Navbar = () => {
//   const pathname = usePathname();
//   const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
//   const enableClerk = process.env.NEXT_PUBLIC_ENABLE_CLERK === "true";
//   const hasClerkKey = typeof clerkKey === "string" && clerkKey.length > 0;
//   const shouldEnableClerk = enableClerk && hasClerkKey;

//   const ClerkControls = shouldEnableClerk
//     ? dynamic(() => import("./NavbarClerkControls"), { ssr: false })
//     : null;

//   const [searchOpen, setSearchOpen] = useState(false);

//   const isProtectedRoute = useMemo(() => {
//     let isProtected = false;
//     if (PROTECTED_ROUTES.includes(pathname)) isProtected = true;
//     PROTECTED_ROUTES.forEach((ele) => {
//       if (pathname.startsWith(ele)) isProtected = true;
//     });
//     return isProtected;
//   }, [pathname]);

//   return (
//     <header className="w-full py-6">
//       <div className="w-full flex items-center gap-6 sm:gap-8 md:gap-10">
//         <div className="flex items-center gap-10 w-full">
//           {!isProtectedRoute && (
//             <Link
//               href={"/"}
//               className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center gap-2"
//             >
//               <GraduationCap className="w-8 h-8 text-main-blue" />
//               <p>
//                 LEARN<span className="text-main-blue">K</span>
//               </p>
//             </Link>
//           )}

//           <div className="hidden md:flex flex-1 max-w-md mx-4">
//             <SearchInput />
//           </div>
//         </div>

//         <div className="w-full flex justify-end-safe max-w-max relative group items-center gap-6">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setSearchOpen(true)}
//               className="p-2 rounded-lg bg-secondry-blue transition-colors cursor-pointer"
//               aria-label="Search"
//             >
//               <Search className="w-5 h-5 text-muted-foreground" />
//             </button>
//             {ClerkControls ? <ClerkControls /> : (
//               <div className="flex items-center gap-2">
//                 <Link href="/login" className="text-dirty-grey text-sm">Sign In</Link>
//                 <Link href="/register" className="text-main-blue text-sm">Sign Up</Link>
//               </div>
//             )}
//           </div>
//           <div className="relative group flex items-center gap-4" />
//         </div>
//       </div>
//       <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
//         <DialogContent className="bg-secondry-blue border-white/10">
//           <DialogHeader>
//             <DialogTitle className="text-white">Search</DialogTitle>
//           </DialogHeader>
//           <div className="mt-2">
//             <SearchInput isModelContainer placeholder="Search courses, categories, instructors..." />
//           </div>
//         </DialogContent>
//       </Dialog>
//     </header>
//   );
// };

// export default Navbar;

// "use client";

// import Link from "next/link";
// import {
//   UserButton,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   useUser,
//   SignUpButton,
// } from "@clerk/nextjs";
// import SearchInput from "./SearchInput";
// import { Bell, GraduationCap, Search, User } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuLabel,
// } from "../ui/dropdown-menu";
// import { Button } from "../ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import NotificationControl from "./NotificationControl";
// import { dark } from "@clerk/themes";

// import styles from "@/styles/SignIn.module.css";
// import { usePathname, useRouter } from "next/navigation";
// import { useMemo } from "react";
// import { PROTECTED_ROUTES } from "@/routes";

// const Navbar = () => {
//   const pathname = usePathname();
//   const { user } = useUser();

//   const isProtectedRoute = useMemo(() => {
//     let isProtected = false;
//     if (PROTECTED_ROUTES.includes(pathname)) isProtected = true;
//     PROTECTED_ROUTES.forEach((ele) => {
//       if (pathname.startsWith(ele)) isProtected = true;
//     });
//     return isProtected;
//   }, [pathname]);

//   return (
//     <header className="w-full py-6">
//       <div className="w-full flex items-center gap-6 sm:gap-8 md:gap-10">
//         <div className="flex items-center gap-10 w-full">
//           {!isProtectedRoute && (
//             <Link
//               href={"/"}
//               className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center gap-2"
//             >
//               <GraduationCap className="w-8 h-8 text-main-blue" />
//               <p>
//                 LEARN<span className="text-main-blue">K</span>
//               </p>
//             </Link>
//           )}

//           <div className="hidden md:flex flex-1 max-w-md mx-4">
//             <SearchInput />
//           </div>
//         </div>

//         <div className="w-full flex justify-end-safe max-w-max relative group items-center gap-6">
//           <div className="flex items-center gap-2">
//             <Button

//               className="md:hidden p-2 rounded-lg bg-secondry-blue transition-colors cursor-pointer"
//             >
//               <Search className="w-5 h-5 text-muted-foreground" />
//             </Button>

//             <SignedIn>
//               <NotificationControl />
//             </SignedIn>
//           </div>
//           <div className="relative group flex items-center gap-4">
//             {/* When user is signed in */}
//             <SignedIn>
//               <UserButton
//                 appearance={{
//                   baseTheme: dark,
//                   elements: {
//                     rootBox: "hidden",
//                     avatarBox: "w-10 h-10",
//                     userButtonPopoverCard:
//                       "bg-secondry-blue  rounded-xl overflow-hidden !max-w-70",
//                     userButtonPopoverFooter: "!hidden",
//                   },
//                 }}
//                 userProfileMode="navigation"
//                 userProfileUrl="/profile"
//               />
//             </SignedIn>

//             {/* When user is signed out */}
//             <SignedOut>
//               <div className="flex items-center gap-2 sm:gap-3">
//                 <SignInButton>
//                   <Button
//                     variant="link"
//                     className=" text-dirty-grey  hover:scale-105 transition-all bg-transparent border border-dirty-grey  text-sm font-medium"
//                   >
//                     Sign In
//                   </Button>
//                 </SignInButton>

//                 <SignUpButton mode="modal">
//                   <Button
//                     variant="link"
//                     className=" bg-main-blue  text-white hover:opacity-90 transition-all  text-sm font-medium shadow-md"
//                   >
//                     Sign Up
//                   </Button>
//                 </SignUpButton>
//               </div>
//             </SignedOut>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  Menu,
  X,
  Search,
  BookOpen,
  GraduationCap,
  Home,
  Info,
} from "lucide-react";
import SearchInput from "./SearchInput";
import NotificationControl from "./NotificationControl";
import { dark } from "@clerk/themes";
import { PROTECTED_ROUTES } from "@/routes";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUser();

  const isProtectedRoute = useMemo(() => {
    let isProtected = false;
    if (PROTECTED_ROUTES.includes(pathname)) isProtected = true;
    PROTECTED_ROUTES.forEach((ele) => {
      if (pathname.startsWith(ele)) isProtected = true;
    });
    return isProtected;
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/courses", label: "Courses", icon: BookOpen },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  if (isProtectedRoute) {
    return (
      <div className="py-4 w-full bg-secondry-blue">
        <SearchInput />
      </div>
    );
  }

  return (
    <header className="w-full ">
      <div className=" mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="w-full flex-1 flex items-center justify-between">
            {/* Logo */}
            {!isProtectedRoute && (
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-main-blue rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl  font-bold text-white hidden sm:block uppercase">
                  learn<span className="text-main-blue">k</span>
                </span>
              </Link>
            )}

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <SearchInput />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SignedIn>
              <NotificationControl />
            </SignedIn>

            <SignedIn>
              <UserButton
                appearance={{
                  baseTheme: dark,
                  elements: {
                    avatarBox: "w-12 h-12",
                    userButtonPopoverCard:
                      "bg-secondry-blue  rounded-lg overflow-hidden !max-w-80",
                      userButtonPopoverActionButton:"text-white/50! hover:text-white! border-dirty-grey! ",
                    userButtonPopoverFooter: "!hidden",
                  },
                }}
                userProfileMode="navigation"
                userProfileUrl="/profile"
              />
            </SignedIn>

            <SignedOut>
              <div className="hidden md:flex items-center gap-3">
                <SignInButton mode="modal">
                  <Button variant={"custom"}>Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-main-blue hover:bg-main-blue/80 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-primary-blue rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden my-4 py-4 border-y border-white/10 animate-fade-in">
            {/* Mobile Search */}
            <div className="w-full mx-auto flex justify-center">
              <SearchInput />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-2 my-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? "bg-primary-blue text-white"
                        : "text-dirty-grey hover:text-white hover:bg-primary-blue/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="flex flex-col gap-2">
                <SignInButton>
                  <Button variant="custom" className="w-full ">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="w-full bg-main-blue hover:bg-main-blue/80 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
