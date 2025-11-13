// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Heart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  TrendingUp,
  Award,
  Calendar,
  Bell,
  MessageSquare,
  FileText,
  Users,
  BarChart3,
  Video,
  X,
} from "lucide-react";

interface SidebarProps {
  userRole?: "student" | "instructor" | "admin";
}

export default function Sidebar({ userRole = "student" }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Navigation items based on user role
  const studentNavItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      badge: null,
    },
    {
      label: "My Courses",
      icon: BookOpen,
      path: "/dashboard/my-courses",
      badge: "3",
    },
    {
      label: "Browse",
      icon: GraduationCap,
      path: "/courses",
      badge: null,
    },
    {
      label: "Favorites",
      icon: Heart,
      path: "/dashboard/favorites",
      badge: null,
    },
    {
      label: "Progress",
      icon: TrendingUp,
      path: "/dashboard/progress",
      badge: null,
    },
    {
      label: "Certificates",
      icon: Award,
      path: "/dashboard/certificates",
      badge: "2",
    },
    {
      label: "Calendar",
      icon: Calendar,
      path: "/dashboard/calendar",
      badge: null,
    },
    {
      label: "Messages",
      icon: MessageSquare,
      path: "/dashboard/messages",
      badge: "5",
    },
  ];

  const instructorNavItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/instructor/dashboard",
      badge: null,
    },
    {
      label: "My Courses",
      icon: Video,
      path: "/instructor/courses",
      badge: null,
    },
    {
      label: "Students",
      icon: Users,
      path: "/instructor/students",
      badge: null,
    },
    {
      label: "Analytics",
      icon: BarChart3,
      path: "/instructor/analytics",
      badge: null,
    },
    {
      label: "Reviews",
      icon: MessageSquare,
      path: "/instructor/reviews",
      badge: "12",
    },
    {
      label: "Earnings",
      icon: TrendingUp,
      path: "/instructor/earnings",
      badge: null,
    },
  ];

  const navItems =
    userRole === "instructor" ? instructorNavItems : studentNavItems;

  const bottomNavItems = [
    {
      label: "Notifications",
      icon: Bell,
      path: "/dashboard/notifications",
      badge: "3",
    },
    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
      badge: null,
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    router.push("/login");
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">LearnHub</h2>
                <p className="text-dirty-grey text-xs capitalize">{userRole}</p>
              </div>
            </motion.div>
          )}

          {/* Collapse Button (Desktop) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-8 h-8 items-center justify-center rounded-lg bg-primary-blue hover:bg-accent transition-colors text-dirty-grey hover:text-white"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>

          {/* Close Button (Mobile) */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-primary-blue hover:bg-accent transition-colors text-dirty-grey hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* User Profile */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 border-b border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-accent"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-secondry-blue" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate">
                Alex Martinez
              </h3>
              <p className="text-dirty-grey text-sm truncate">
                alex@example.com
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/profile")}
            className="w-full py-2 px-4 bg-primary-blue hover:bg-accent text-white rounded-lg text-sm font-medium transition-colors"
          >
            View Profile
          </button>
        </motion.div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => {
                router.push(item.path);
                setIsMobileOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-3 rounded-lg
                transition-all duration-200 group relative
                ${
                  isActive
                    ? "bg-accent text-white shadow-lg"
                    : "text-dirty-grey hover:bg-primary-blue hover:text-white"
                }
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                />
              )}

              <Icon className="w-5 h-5 flex-shrink-0" />

              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left font-medium text-sm">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                </>
              )}

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-secondry-blue text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 px-1.5 py-0.5 bg-accent text-white text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-white/10 px-3 py-4 space-y-1">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => {
                router.push(item.path);
                setIsMobileOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-3 rounded-lg
                transition-all duration-200 group relative
                ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-dirty-grey hover:bg-primary-blue hover:text-white"
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />

              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left font-medium text-sm">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                </>
              )}

              {isCollapsed && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-secondry-blue text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 group relative"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && (
            <span className="flex-1 text-left font-medium text-sm">Logout</span>
          )}

          {isCollapsed && (
            <div className="absolute left-full ml-2 px-3 py-2 bg-secondry-blue text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
              Logout
            </div>
          )}
        </button>
      </div>

      {/* Version Info */}
      {!isCollapsed && (
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-dirty-grey text-xs text-center">Version 1.0.0</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Desktop */}
      <motion.aside
        animate={{ width: isCollapsed ? "80px" : "280px" }}
        className="hidden lg:flex flex-col bg-secondry-blue border-r border-white/10 h-screen sticky top-0 transition-all duration-300"
      >
        {sidebarContent}
      </motion.aside>

      {/* Sidebar - Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-secondry-blue z-50 lg:hidden shadow-2xl"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed bottom-6 right-6 lg:hidden w-14 h-14 bg-accent rounded-full shadow-lg flex items-center justify-center text-white z-30 hover:scale-110 transition-transform"
      >
        <LayoutDashboard className="w-6 h-6" />
      </button>
    </>
  );
}
