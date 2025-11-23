// app/(protected)/instructor/dashboard/page.tsx
"use client";

import { useGetCoursesQuery } from "@/store/api";
import { useUser } from "@clerk/nextjs";
import {
  Video,
  Users,
  DollarSign,
  TrendingUp,
  Plus,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function InstructorDashboardPage() {
  const { user } = useUser();

  // Fetch instructor's courses
  const {
    data: courses,
    isLoading,
    error,
  } = useGetCoursesQuery({
    status: "PUBLISHED",
  });

  // Filter courses by instructor (you'll need to add instructor filtering to your API)
  const myCourses =
    courses?.filter((course) => course.instructorId === user?.id) || [];

  // Calculate stats
  const totalStudents = myCourses.reduce(
    (acc, course) => acc + (course.studentsCount || 0),
    0
  );
  const totalRevenue = myCourses.reduce(
    (acc, course) => acc + course.price * (course.studentsCount || 0),
    0
  );
  const avgRating = myCourses.length
    ? myCourses.reduce((acc, course) => acc + (course.rating || 0), 0) /
      myCourses.length
    : 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.firstName}! 🎓
            </h1>
            <p className="text-dirty-grey">
              Here's what's happening with your courses
            </p>
          </div>
          <Link
            href="/instructor/courses/new"
            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Course
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Total Courses</p>
              <p className="text-2xl font-bold text-white">
                {myCourses.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Total Students</p>
              <p className="text-2xl font-bold text-white">{totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white">
                ${totalRevenue.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Avg Rating</p>
              <p className="text-2xl font-bold text-white">
                {avgRating.toFixed(1)} ⭐
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Your Courses</h2>
          <Link
            href="/instructor/courses"
            className="text-accent hover:text-accent/80 font-medium text-sm"
          >
            View all →
          </Link>
        </div>

        {myCourses.length === 0 ? (
          <div className="bg-secondry-blue rounded-xl p-12 border border-white/10 text-center">
            <Video className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No courses yet
            </h3>
            <p className="text-dirty-grey mb-6">
              Create your first course and start teaching
            </p>
            <Link
              href="/instructor/courses/new"
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Your First Course
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCourses.slice(0, 6).map((course) => (
              <Link
                key={course.id}
                href={`/instructor/courses/${course.id}`}
                className="bg-secondry-blue rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all group"
              >
                <div className="aspect-video relative overflow-hidden bg-primary-blue">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-white text-xs font-semibold">
                    ${course.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-dirty-grey mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.studentsCount || 0} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{course.rating?.toFixed(1) || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/instructor/courses/new"
          className="bg-secondry-blue rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group"
        >
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
            <Plus className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Create New Course
          </h3>
          <p className="text-dirty-grey text-sm">
            Start building your next course
          </p>
        </Link>

        <Link
          href="/instructor/analytics"
          className="bg-secondry-blue rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group"
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
            <TrendingUp className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            View Analytics
          </h3>
          <p className="text-dirty-grey text-sm">
            Track your course performance
          </p>
        </Link>

        <Link
          href="/instructor/earnings"
          className="bg-secondry-blue rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group"
        >
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            View Earnings
          </h3>
          <p className="text-dirty-grey text-sm">
            Check your revenue and payouts
          </p>
        </Link>
      </div>
    </div>
  );
}
