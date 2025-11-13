"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Badge } from "@/app/_components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import {
  Menu,
  X,
  Search,
  BookOpen,
  GraduationCap,
  Home,
  LayoutDashboard,
  Bell,
  Video,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Plus,
  BarChart3,
  DollarSign,
} from "lucide-react";

const ProtectedHeader = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount] = useState(3); // Replace with actual notification count

  // Get user role from Clerk metadata
  const userRole = (user?.publicMetadata?.role as string) || "STUDENT";

  // Navigation based on role
  const getNavLinks = () => {
    const commonLinks = [
      { href: "/", label: "Home", icon: Home },
      { href: "/courses", label: "Courses", icon: BookOpen },
    ];

    if (userRole === "INSTRUCTOR") {
      return [
        ...commonLinks,
        {
          href: "/instructor/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
        {
          href: "/instructor/courses",
          label: "My Courses",
          icon: Video,
        },
      ];
    }

    // STUDENT
    return [
      ...commonLinks,
      {
        href: "/student/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
      },
      {
        href: "/student/courses",
        label: "My Learning",
        icon: Video,
      },
    ];
  };

  const navLinks = getNavLinks();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary-blue border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-main-blue rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              LearnHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    active
                      ? "bg-primary-blue text-white"
                      : "text-dirty-grey hover:text-white hover:bg-primary-blue/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}

            {/* Instructor Quick Actions */}
            {userRole === "INSTRUCTOR" && (
              <Link href="/instructor/courses/new">
                <Button
                  size="sm"
                  className="ml-2 bg-main-blue hover:bg-main-blue/80 text-white"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Create Course
                </Button>
              </Link>
            )}
          </nav>

          {/* Search Bar - Desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center flex-1 max-w-md mx-4"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dirty-grey" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-primary-blue border-white/10 text-white placeholder:text-dirty-grey focus:border-main-blue"
              />
            </div>
          </form>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-dirty-grey hover:text-white hover:bg-primary-blue"
                >
                  <Bell className="w-5 h-5" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-error text-white text-xs">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-80 bg-secondary-blue border-white/10"
              >
                <DropdownMenuLabel className="text-white">
                  Notifications
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="flex flex-col items-start p-4 focus:bg-primary-blue cursor-pointer">
                    <p className="text-white font-medium text-sm">
                      New course update available
                    </p>
                    <p className="text-dirty-grey text-xs mt-1">
                      React Masterclass - 2 hours ago
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-4 focus:bg-primary-blue cursor-pointer">
                    <p className="text-white font-medium text-sm">
                      Certificate earned!
                    </p>
                    <p className="text-dirty-grey text-xs mt-1">
                      JavaScript Basics - 1 day ago
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start p-4 focus:bg-primary-blue cursor-pointer">
                    <p className="text-white font-medium text-sm">
                      New student enrolled
                    </p>
                    <p className="text-dirty-grey text-xs mt-1">
                      Web Development Bootcamp - 2 days ago
                    </p>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="justify-center text-main-blue cursor-pointer focus:bg-primary-blue focus:text-main-blue">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white hover:bg-primary-blue"
                >
                  <div className="w-8 h-8 rounded-full bg-main-blue flex items-center justify-center">
                    {user?.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        alt={user.firstName || "User"}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="hidden xl:flex flex-col items-start">
                    <span className="text-sm font-medium">
                      {user?.firstName || "User"}
                    </span>
                    <span className="text-xs text-dirty-grey capitalize">
                      {userRole.toLowerCase()}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-dirty-grey" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-secondary-blue border-white/10"
              >
                <DropdownMenuLabel className="text-white">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem asChild>
                  <Link
                    href={`/${userRole.toLowerCase()}/profile`}
                    className="flex items-center gap-2 text-white cursor-pointer focus:bg-primary-blue"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href={`/${userRole.toLowerCase()}/dashboard`}
                    className="flex items-center gap-2 text-white cursor-pointer focus:bg-primary-blue"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                {userRole === "INSTRUCTOR" && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/instructor/analytics"
                        className="flex items-center gap-2 text-white cursor-pointer focus:bg-primary-blue"
                      >
                        <BarChart3 className="w-4 h-4" />
                        Analytics
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/instructor/billing"
                        className="flex items-center gap-2 text-white cursor-pointer focus:bg-primary-blue"
                      >
                        <DollarSign className="w-4 h-4" />
                        Earnings
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuItem asChild>
                  <Link
                    href={`/${userRole.toLowerCase()}/settings`}
                    className="flex items-center gap-2 text-white cursor-pointer focus:bg-primary-blue"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-white/10" />

                <DropdownMenuItem className="flex items-center gap-2 text-error cursor-pointer focus:bg-primary-blue focus:text-error">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clerk User Button (Alternative) */}
            {/* <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "bg-secondary-blue border-white/10",
                  userButtonPopoverActions: "text-white",
                },
              }}
            /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-primary-blue rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            {/* User Info */}
            <div className="flex items-center gap-3 p-4 mb-4 bg-primary-blue rounded-lg">
              <div className="w-12 h-12 rounded-full bg-main-blue flex items-center justify-center">
                {user?.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.firstName || "User"}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-dirty-grey text-sm capitalize">
                  {userRole.toLowerCase()}
                </p>
              </div>
              {notificationCount > 0 && (
                <Badge className="bg-error text-white">
                  {notificationCount}
                </Badge>
              )}
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dirty-grey" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-primary-blue border-white/10 text-white placeholder:text-dirty-grey"
                />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-2 mb-4">
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

              {userRole === "INSTRUCTOR" && (
                <Link
                  href="/instructor/courses/new"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-main-blue text-white hover:bg-main-blue/80 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">Create Course</span>
                </Link>
              )}
            </nav>

            {/* Mobile Quick Actions */}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <Link
                href={`/${userRole.toLowerCase()}/profile`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-dirty-grey hover:text-white hover:bg-primary-blue/50"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>

              <Link
                href={`/${userRole.toLowerCase()}/settings`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-dirty-grey hover:text-white hover:bg-primary-blue/50"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>

              <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-primary-blue/50">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProtectedHeader;