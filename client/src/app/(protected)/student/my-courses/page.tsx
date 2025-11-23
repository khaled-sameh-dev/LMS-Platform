"use client";

import { useGetUserEnrollmentsQuery } from "@/store/api";
import { useUser } from "@clerk/nextjs";
import { BookOpen, Clock, TrendingUp, Award, Loader2 } from "lucide-react";
import Link from "next/link";

const StudentMyCoursesPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const {
    data: enrollments,
    error,
  } = useGetUserEnrollmentsQuery(undefined, {
    skip: !isLoaded || !isSignedIn,
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey">Loading your courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-error/10 border border-error/20 rounded-lg p-6">
        <p className="text-white/50">
          Failed to load your courses. Please try again.
        </p>
      </div>
    );
  }

  // Calculate statistics
  const totalEnrolled = enrollments?.length || 0;
  const completedCourses =
    enrollments?.filter((e) => e.isCompleted).length || 0;
  const avgProgress = enrollments?.length
    ? enrollments.reduce((acc, e) => acc + (e.progressPercentage || 0), 0) /
      enrollments.length
    : 0;
  const totalTimeSpent =
    enrollments?.reduce((acc, e) => acc + (e.totalTimeSpent || 0), 0) || 0;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.firstName}! 👋
        </h1>
        <p className="text-dirty-grey">Continue your learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-main-blue/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-main-blue" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Enrolled Courses</p>
              <p className="text-2xl font-bold text-white">{totalEnrolled}</p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Avg Progress</p>
              <p className="text-2xl font-bold text-white">
                {Math.round(avgProgress)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Completed</p>
              <p className="text-2xl font-bold text-white">
                {completedCourses}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-main-blue/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-main-blue" />
            </div>
            <div>
              <p className="text-dirty-grey text-sm">Time Spent</p>
              <p className="text-2xl font-bold text-white">
                {Math.round(totalTimeSpent / 60)}h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">My Courses</h2>
          <Link
            href="/courses"
            className="text-main-blue hover:text-main-blue/80 font-medium text-sm"
          >
            Browse more courses →
          </Link>
        </div>

        {!enrollments || enrollments.length === 0 ? (
          <div className="bg-secondry-blue rounded-xl p-12 border border-white/10 text-center">
            <BookOpen className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No courses yet
            </h3>
            <p className="text-dirty-grey mb-6">
              Start your learning journey by enrolling in a course
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments &&
              enrollments.map((enrollment) => {
                const progress = enrollment.progressPercentage || 0;
                const totalChapters = enrollment.totalChapters || 0;
                const completedChapters = enrollment.completedChapters || 0;

                return (
                  <Link
                    key={enrollment.id}
                    href={`/learn/course/${enrollment?.course?.id}`}
                    className="bg-secondry-blue rounded-xl border border-white/10 overflow-hidden hover:border-main-blue/50 transition-all group"
                  >
                    <div className="aspect-video relative overflow-hidden bg-primary-blue">
                      <img
                        src={enrollment?.course?.thumbnail}
                        alt={enrollment?.course?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute top-3 right-3 bg-main-blue px-3 py-1 rounded-full text-white text-xs font-semibold">
                        {Math.round(progress)}%
                      </div>
                      {enrollment.isCompleted && (
                        <div className="absolute top-3 left-3 bg-success px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Completed
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-main-blue transition-colors">
                        {enrollment?.course?.title}
                      </h3>
                      <p className="text-dirty-grey text-sm mb-4 line-clamp-2">
                        {enrollment?.course?.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2 text-xs">
                          <span className="text-dirty-grey">Progress</span>
                          <span className="text-main-blue font-semibold">
                            {Math.round(progress)}%
                          </span>
                        </div>
                        <div className="w-full bg-primary-blue rounded-full h-2">
                          <div
                            className="bg-main-blue h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-dirty-grey pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {enrollment.totalTimeSpent
                              ? `${Math.round(enrollment.totalTimeSpent / 60)}h spent`
                              : "Not started"}
                          </span>
                        </div>
                        <span>
                          {completedChapters}/{totalChapters} lessons
                        </span>
                      </div>

                      {/* Last Accessed */}
                      <div className="mt-3 text-xs text-dirty-grey">
                        Last accessed:{" "}
                        {new Date(
                          enrollment.lastAccessedAt
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>

      {/* Continue Learning Section */}
      {enrollments && enrollments.length > 0 && !enrollments[0].isCompleted && (
        <div className="bg-gradient-to-r from-main-blue/20 to-main-blue/10 border border-main-blue/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Continue where you left off
              </h3>
              <p className="text-dirty-grey">
                Pick up your learning journey with{" "}
                <span className="text-white font-medium">
                  {enrollments[0]?.course?.title}
                </span>
              </p>
            </div>
            <Link
              href={`/learn/course/${enrollments[0]?.course?.id}`}
              className="px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Continue Learning
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentMyCoursesPage;
