// import { Bell, BookOpen, Search } from "lucide-react";
// import Link from "next/link";
// import SearchInput from "./SearchInput";

// const NonDashboardNavbar = () => {
//   return (
//     <header className="w-full py-6 px-4 shadow-2xs">
//       <div className="flex items-center justify-between gap-18">
//         <Link href="/" className="text-2xl sm:text-xl font-bold">
//           LEARN
//         </Link>
//         <div className="w-full flex items-center justify-between gap-18">
//           <div className="flex items-center justify-between w-full ">
//             <div className="flex-1 flex items-center gap-8">
//               <Link
//                 href={"/"}
//                 className="hidden lg:inline-block text-white/60 hover:text-white font-semibold "
//               >
//                 Browse Course
//               </Link>
//               <Link
//                 href={"/"}
//                 className="hidden lg:inline-block text-white/60 hover:text-white font-semibold"
//               >
//                 About us
//               </Link>
//             </div>
//             <div className="flex-3 flex justify-end">
//               <SearchInput />
//               <Link
//                 href="/search"
//                 className="hidden bg-secondry-blue text-white/50 py-2 px-6 rounded-md font-semibold hover:text-white"
//               >
//                 Search
//               </Link>
//             </div>
//           </div>
//           <button className="relative cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-secondry-blue ">
//             <span className=" absolute top-0 right-0 bg-blue-500 rounded-full w-2 h-2"></span>
//             <Bell className="text-white/50 hover:text-white" size={18} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NonDashboardNavbar;

"use client";

import { Bell, BookOpen, Search, Menu, X, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SearchInput from "./SearchInput";

const NonDashboardNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { data: session, status } = useSession();

  const isLoading = status === "loading";

  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSignOut = async () => {
    // await signOut({ callbackUrl: "/" });
    console.log("signout");
  };

  return (
    <header className="w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <BookOpen className="w-7 h-7 text-blue-500" />
            <span className="hidden sm:inline">LEARN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link
              href="/courses"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchInput />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Button */}
            <Link
              href="/search"
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </Link>

            {/* Notifications */}
            {true && (
              <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
            )}

            {/* Auth Section */}
            {isLoading ? (
              <div className="w-20 h-9 bg-accent animate-pulse rounded-lg" />
            ) : session ? (
              // Logged In - Profile Menu
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-accent transition-colors">
                    <Avatar className="w-8 h-8 border-2 border-blue-500">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                        {getInitials(session.user?.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:inline text-sm font-medium">
                      {session.user?.name?.split(" ")[0]}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-3 p-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {getInitials(session.user?.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">
                        {session.user?.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Not Logged In - Auth Buttons
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" asChild size="sm">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                >
                  <Link href="/auth/register">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 border-t border-white/10">
          <SearchInput />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-3">
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Courses
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {!true && (
              <div className="flex flex-col gap-2 pt-3 border-t border-white/10 sm:hidden">
                <Button variant="outline" asChild className="w-full">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NonDashboardNavbar;

// components/PublicHeader.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Menu,
//   X,
//   BookOpen,
//   User,
//   GraduationCap,
//   ChevronDown,
//   LogIn,
//   UserPlus,
//   ShoppingCart,
//   Bell,
// } from "lucide-react";

// import { Badge } from "../ui/badge";
// import useDebounce from "@/hooks/useDeBounce";
// import { useLazyGetSearchSuggestionsQuery } from "@/store/api";
// import { Button } from "../ui/button";

// export default function PublicHeader() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   const debouncedQuery = useDebounce(searchQuery, 300);
//   const [triggerSuggestions, { data: suggestionsData, isFetching }] =
//     useLazyGetSearchSuggestionsQuery();

//   const suggestions = suggestionsData || [];

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Fetch suggestions
//   useEffect(() => {
//     if (debouncedQuery.trim().length >= 2) {
//       triggerSuggestions(debouncedQuery);
//       setShowSuggestions(true);
//     } else {
//       setShowSuggestions(false);
//     }
//   }, [debouncedQuery, triggerSuggestions]);

//   // Click outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         searchRef.current &&
//         !searchRef.current.contains(event.target as Node)
//       ) {
//         setShowSuggestions(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "Courses", href: "/courses" },
//     { label: "About", href: "/about" },
//     { label: "Contact", href: "/contact" },
//   ];

//   const categories = [
//     "Development",
//     "Design",
//     "Business",
//     "Marketing",
//     "Data Science",
//     "Photography",
//   ];

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/courses?q=${encodeURIComponent(searchQuery)}`);
//       setShowSuggestions(false);
//       setIsSearchOpen(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion: any) => {
//     if (suggestion.type === "Course") {
//       router.push(`/courses/${suggestion.value.id}`);
//     } else if (suggestion.type === "Category") {
//       router.push(`/courses?category=${suggestion.value.slug}`);
//     }
//     setShowSuggestions(false);
//     setSearchQuery("");
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-secondry-blue/95 backdrop-blur-lg shadow-lg border-b border-white/10"
//             : "bg-transparent"
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Logo */}
//             <div className="flex items-center gap-8">
//               <button
//                 onClick={() => router.push("/")}
//                 className="flex items-center gap-2 group"
//               >
//                 <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <GraduationCap className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-white font-bold text-xl hidden sm:block">
//                   LearnHub
//                 </span>
//               </button>

//               {/* Desktop Navigation */}
//               <div className="hidden lg:flex items-center gap-1">
//                 {navLinks.map((link) => (
//                   <button
//                     key={link.href}
//                     onClick={() => router.push(link.href)}
//                     className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
//                       pathname === link.href
//                         ? "text-white bg-accent"
//                         : "text-dirty-grey hover:text-white hover:bg-primary-blue"
//                     }`}
//                   >
//                     {link.label}
//                   </button>
//                 ))}

//                 {/* Categories Dropdown */}
//                 <div className="relative group">
//                   <button className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm text-dirty-grey hover:text-white hover:bg-primary-blue transition-colors">
//                     Categories
//                     <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {/* Dropdown Menu */}
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-secondry-blue rounded-lg border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                     <div className="py-2">
//                       {categories.map((category) => (
//                         <button
//                           key={category}
//                           onClick={() =>
//                             router.push(
//                               `/courses?category=${category.toLowerCase()}`
//                             )
//                           }
//                           className="w-full px-4 py-2 text-left text-dirty-grey hover:text-white hover:bg-primary-blue transition-colors text-sm"
//                         >
//                           {category}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Search & Actions */}
//             <div className="hidden lg:flex items-center gap-3">
//               {/* Search Bar */}
//               <div ref={searchRef} className="relative">
//                 <form onSubmit={handleSearch}>
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dirty-grey" />
//                     <input
//                       type="text"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       onFocus={() =>
//                         suggestions.length > 0 && setShowSuggestions(true)
//                       }
//                       placeholder="Search courses..."
//                       className="w-64 pl-10 pr-4 py-2 bg-primary-blue text-white placeholder:text-dirty-grey rounded-lg border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm"
//                     />
//                   </div>
//                 </form>

//                 {/* Search Suggestions Dropdown */}
//                 <AnimatePresence>
//                   {showSuggestions && searchQuery.trim().length >= 2 && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute top-full left-0 right-0 mt-2 bg-secondry-blue rounded-lg border border-white/10 shadow-xl max-h-80 overflow-y-auto"
//                     >
//                       {isFetching ? (
//                         <div className="p-4 text-center text-dirty-grey text-sm">
//                           Searching...
//                         </div>
//                       ) : suggestions.length === 0 ? (
//                         <div className="p-4 text-center text-dirty-grey text-sm">
//                           No results found
//                         </div>
//                       ) : (
//                         <div className="py-2">
//                           {suggestions.map((suggestion: any) => (
//                             <button
//                               key={`${suggestion.type}-${suggestion.value.id}`}
//                               onClick={() => handleSuggestionClick(suggestion)}
//                               className="w-full px-4 py-3 text-left hover:bg-primary-blue transition-colors"
//                             >
//                               <p className="text-white font-medium text-sm">
//                                 {suggestion.type === "Category"
//                                   ? suggestion.value.name
//                                   : suggestion.value.title}
//                               </p>
//                               <p className="text-dirty-grey text-xs mt-1">
//                                 {suggestion.type}
//                               </p>
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Auth Buttons */}
//               <Button
//                 onClick={() => router.push("/login")}
//                 variant="ghost"
//                 className="text-dirty-grey hover:text-white hover:bg-primary-blue"
//               >
//                 <LogIn className="w-4 h-4 mr-2" />
//                 Sign In
//               </Button>
//               <Button
//                 onClick={() => router.push("/register")}
//                 className="bg-accent hover:bg-accent/80 text-white"
//               >
//                 <UserPlus className="w-4 h-4 mr-2" />
//                 Sign Up
//               </Button>
//             </div>

//             {/* Mobile Actions */}
//             <div className="flex lg:hidden items-center gap-2">
//               <Button
//                 size="sm"
//                 variant="ghost"
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 className="text-dirty-grey hover:text-white"
//               >
//                 <Search className="w-5 h-5" />
//               </Button>
//               <Button
//                 size="sm"
//                 variant="ghost"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-dirty-grey hover:text-white"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 h-5" />
//                 ) : (
//                   <Menu className="w-5 h-5" />
//                 )}
//               </Button>
//             </div>
//           </div>

//           {/* Mobile Search Bar */}
//           <AnimatePresence>
//             {isSearchOpen && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 className="lg:hidden pb-4 overflow-hidden"
//               >
//                 <div ref={searchRef} className="relative">
//                   <form onSubmit={handleSearch}>
//                     <div className="relative">
//                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dirty-grey" />
//                       <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         placeholder="Search courses..."
//                         className="w-full pl-10 pr-4 py-3 bg-primary-blue text-white placeholder:text-dirty-grey rounded-lg border border-white/10 focus:border-accent focus:outline-none"
//                       />
//                     </div>
//                   </form>

//                   {/* Mobile Search Suggestions */}
//                   <AnimatePresence>
//                     {showSuggestions && searchQuery.trim().length >= 2 && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute top-full left-0 right-0 mt-2 bg-secondry-blue rounded-lg border border-white/10 shadow-xl max-h-64 overflow-y-auto"
//                       >
//                         {suggestions.map((suggestion: any) => (
//                           <button
//                             key={`${suggestion.type}-${suggestion.value.id}`}
//                             onClick={() => {
//                               handleSuggestionClick(suggestion);
//                               setIsSearchOpen(false);
//                             }}
//                             className="w-full px-4 py-3 text-left hover:bg-primary-blue"
//                           >
//                             <p className="text-white font-medium text-sm">
//                               {suggestion.type === "Category"
//                                 ? suggestion.value.name
//                                 : suggestion.value.title}
//                             </p>
//                             <p className="text-dirty-grey text-xs">
//                               {suggestion.type}
//                             </p>
//                           </button>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
//             />

//             {/* Menu Panel */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25 }}
//               className="fixed left-0 top-0 bottom-0 w-80 bg-secondry-blue z-50 lg:hidden overflow-y-auto"
//             >
//               <div className="p-6">
//                 {/* Logo */}
//                 <div className="flex items-center justify-between mb-8">
//                   <div className="flex items-center gap-2">
//                     <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
//                       <GraduationCap className="w-6 h-6 text-white" />
//                     </div>
//                     <span className="text-white font-bold text-xl">
//                       LearnHub
//                     </span>
//                   </div>
//                   <Button
//                     size="sm"
//                     variant="ghost"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="text-dirty-grey hover:text-white"
//                   >
//                     <X className="w-5 h-5" />
//                   </Button>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="space-y-2 mb-8">
//                   {navLinks.map((link) => (
//                     <button
//                       key={link.href}
//                       onClick={() => {
//                         router.push(link.href);
//                         setIsMobileMenuOpen(false);
//                       }}
//                       className={`w-full px-4 py-3 rounded-lg font-medium text-left transition-colors ${
//                         pathname === link.href
//                           ? "text-white bg-accent"
//                           : "text-dirty-grey hover:text-white hover:bg-primary-blue"
//                       }`}
//                     >
//                       {link.label}
//                     </button>
//                   ))}
//                 </nav>

//                 {/* Categories */}
//                 <div className="mb-8">
//                   <h3 className="text-white font-semibold mb-3 px-4">
//                     Categories
//                   </h3>
//                   <div className="space-y-1">
//                     {categories.map((category) => (
//                       <button
//                         key={category}
//                         onClick={() => {
//                           router.push(
//                             `/courses?category=${category.toLowerCase()}`
//                           );
//                           setIsMobileMenuOpen(false);
//                         }}
//                         className="w-full px-4 py-2 text-left text-dirty-grey hover:text-white hover:bg-primary-blue rounded-lg transition-colors text-sm"
//                       >
//                         {category}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Auth Buttons */}
//                 <div className="space-y-3 pt-6 border-t border-white/10">
//                   <Button
//                     onClick={() => {
//                       router.push("/login");
//                       setIsMobileMenuOpen(false);
//                     }}
//                     variant="outline"
//                     className="w-full bg-primary-blue border-white/10 hover:bg-primary-blue/80 text-white"
//                   >
//                     <LogIn className="w-4 h-4 mr-2" />
//                     Sign In
//                   </Button>
//                   <Button
//                     onClick={() => {
//                       router.push("/register");
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="w-full bg-accent hover:bg-accent/80 text-white"
//                   >
//                     <UserPlus className="w-4 h-4 mr-2" />
//                     Sign Up
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
