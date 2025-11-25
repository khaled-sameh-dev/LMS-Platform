"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  useGetCourseByIdQuery,
  useGetCourseProgressQuery,
  useGetEnrollmentStatusQuery,
} from "@/store/api";

import { Loader2, Lock, PlayCircle } from "lucide-react";
import ChapterViewer from "../../_components/ChapterViewer";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const chapterId = searchParams.get("chapterId");

  // Get user authentication status from Clerk
  const { isLoaded, isSignedIn, user } = useUser();

  // Only fetch data when user is authenticated
  const {
    data: course,
    isLoading: courseLoading,
    error: courseError,
  } = useGetCourseByIdQuery(courseId, {
    skip: !isLoaded || !isSignedIn, // Skip until user is loaded and signed in
  });

  const {
    data: enrollmentStatus,
    isLoading: enrollmentLoading,
    error: enrollmentError,
  } = useGetEnrollmentStatusQuery(courseId, {
    skip: !isLoaded || !isSignedIn, // Skip until user is loaded and signed in
  });

  const { data: progress } = useGetCourseProgressQuery(courseId, {
    skip: !isLoaded || !isSignedIn || !enrollmentStatus?.isEnrolled,
  });

  // Get first chapter if no chapter selected
  const firstChapter = useMemo(() => {
    if (course) {
      return course.sections?.[0]?.chapters?.[0];
    }
  }, [course]);

  // Redirect to first chapter
  useEffect(() => {
    if (!chapterId && firstChapter) {
      router.replace(`/learn/course/${courseId}?chapterId=${firstChapter.id}`);
    }
  }, [chapterId, firstChapter, courseId, router]);

  // Loading state - Wait for Clerk to load
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Not signed in - Redirect to login
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-warning" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Authentication Required
          </h2>
          <p className="text-dirty-grey mb-6">
            You need to sign in to access course content.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/sign-in"
              className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/browse"
              className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading course data
  if (courseLoading || enrollmentLoading) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Loading course...</p>
        </div>
      </div>
    );
  }

  // Error: Course not found
  if (courseError || !course) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-error text-2xl">✕</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Course Not Found
          </h2>
          <p className="text-dirty-grey mb-6">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/browse"
            className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  // Error: Not enrolled
  if (enrollmentStatus && !enrollmentStatus.isEnrolled) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-warning" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Access Denied</h2>
          <p className="text-dirty-grey mb-2">
            You need to enroll in this course to access the content.
          </p>
          <p className="text-sm text-dirty-grey mb-6">
            Course:{" "}
            <span className="text-white font-semibold">{course.title}</span>
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href={`/browse/${courseId}`}
              className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
            >
              View Course Details
            </Link>
            <Link
              href="/browse"
              className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Still checking enrollment status
  if (!enrollmentStatus) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Verifying enrollment...</p>
        </div>
      </div>
    );
  }

  // If no chapters available
  if (!firstChapter && !chapterId) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <PlayCircle className="w-8 h-8 text-warning" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            No Content Available
          </h2>
          <p className="text-dirty-grey mb-6">
            This course doesn't have any chapters yet. Please check back later.
          </p>
          <Link
            href="/student/my-courses"
            className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
          >
            Back to My Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <ChapterViewer courseId={courseId} chapterId={chapterId!} />
    </div>
  );
};

export default Page;
