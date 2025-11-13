"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Download,
  FileText,
  Clock,
  ArrowLeft,
  Lock,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { useGetCourseByIdQuery, useGetChapterByIdQuery } from "@/store/api";
import Link from "next/link";

interface ChapterPageProps {
  params: { id: string; chapterId: string };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const router = useRouter();
  const { user } = useUser();
  const { id: courseId, chapterId } = params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState<any>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);

  // Fetch course and chapter data
  const {
    data: course,
    isLoading: courseLoading,
    isError: courseError,
    error: courseErrorData,
  } = useGetCourseByIdQuery(courseId);
  const {
    data: chapter,
    isLoading: chapterLoading,
    isError: chapterError,
    error: chapterErrorData,
  } = useGetChapterByIdQuery({ courseId, chapterId }, { skip: !course });

  // Check enrollment and set current chapter
  useEffect(() => {
    if (course && user) {
      const userEnrolled = course.enrollments?.some(
        (enrollment: any) => enrollment.userId === user.id
      );
      setIsEnrolled(userEnrolled || false);
    }

    if (chapter) {
      setCurrentChapter(chapter);

      // Find current section
      if (course) {
        for (const section of course.sections || []) {
          const foundChapter = section.chapters?.find(
            (ch) => ch.id === chapterId
          );
          if (foundChapter) {
            setCurrentSection(section);
            break;
          }
        }
      }
    }
  }, [course, user, chapterId, chapter]);

  // Handle chapter access
  useEffect(() => {
    if (currentChapter && !currentChapter.isFree && !isEnrolled && user) {
      // Redirect to checkout if chapter is locked and user is not enrolled
      router.push(`/checkout/${courseId}`);
    } else if (currentChapter && !currentChapter.isFree && !user) {
      // Redirect to sign in if chapter is locked and user is not logged in
      router.push(`/sign-in?redirect=/browse/${courseId}/chapter/${chapterId}`);
    }
  }, [currentChapter, isEnrolled, user, courseId, chapterId, router]);

  if (courseLoading || chapterLoading) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-blue mx-auto mb-4"></div>
          <p className="text-dirty-grey">Loading chapter...</p>
        </div>
      </div>
    );
  }

  if (courseError || chapterError) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Error Loading Chapter
          </h2>
          <p className="text-dirty-grey mb-4">
            {(courseErrorData || chapterErrorData)?.message ||
              "Failed to load chapter"}
          </p>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (!currentChapter || !course) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Chapter Not Found
          </h2>
          <p className="text-dirty-grey mb-4">
            The requested chapter could not be found.
          </p>
          <Button
            onClick={() => router.push(`/browse/${courseId}`)}
            variant="outline"
          >
            Back to Course
          </Button>
        </div>
      </div>
    );
  }

  const isFreeChapter = currentChapter.isFree;

  return (
    <div className="min-h-screen bg-primary-blue">
      {/* Header */}
      <div className="bg-secondry-blue border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push(`/browse/${courseId}`)}
                variant="ghost"
                size="sm"
                className="text-dirty-grey hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course
              </Button>
              <div className="h-6 w-px bg-white/20" />
              <div>
                <h1 className="text-lg font-semibold text-white">
                  {currentChapter.title}
                </h1>
                <p className="text-sm text-dirty-grey">{course.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isFreeChapter && (
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Free Preview
                </Badge>
              )}
              {!isFreeChapter && (
                <Badge className="bg-main-blue/20 text-main-blue border-main-blue/30">
                  <Lock className="w-3 h-3 mr-1" />
                  Enrolled Content
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            {currentChapter.videoUrl && (
              <div className="bg-secondry-blue rounded-lg overflow-hidden">
                <div className="aspect-video bg-black relative">
                  <video
                    src={currentChapter.videoUrl}
                    className="w-full h-full"
                    controls
                    poster={course.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {!isFreeChapter && !isEnrolled && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-white mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Enroll to Access
                        </h3>
                        <p className="text-dirty-grey mb-4">
                          This chapter is only available to enrolled students
                        </p>
                        <Button
                          onClick={() => router.push(`/checkout/${courseId}`)}
                          className="bg-main-blue hover:bg-main-blue/90"
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Chapter Description */}
            {currentChapter.description && (
              <div className="bg-secondry-blue rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  About this chapter
                </h3>
                <p className="text-dirty-grey leading-relaxed">
                  {currentChapter.description}
                </p>
              </div>
            )}

            {/* Resources */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Chapter Resources
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary-blue rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-main-blue" />
                    <span className="text-white">Chapter Notes</span>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary-blue rounded-lg">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-main-blue" />
                    <span className="text-white">Additional Reading</span>
                  </div>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </div>
              </div>
            </div>

            {/* Assignments & Quizzes */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Assignments & Quizzes
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary-blue rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {quizCompleted ? (
                        <CheckCircle className="w-5 h-5 text-accent" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-dirty-grey" />
                      )}
                      <span className="text-white font-medium">
                        Chapter Quiz
                      </span>
                    </div>
                    <Badge
                      className={
                        quizCompleted
                          ? "bg-accent/20 text-accent border-accent/30 text-xs"
                          : "bg-main-blue/20 text-main-blue border-main-blue/30 text-xs"
                      }
                    >
                      5 Questions
                    </Badge>
                  </div>
                  <p className="text-dirty-grey text-sm mb-3">
                    Test your understanding of this chapter's key concepts
                  </p>
                  <Button
                    size="sm"
                    className={
                      quizCompleted
                        ? "bg-accent hover:bg-accent/90"
                        : "bg-main-blue hover:bg-main-blue/90"
                    }
                    onClick={() => {
                      if (!quizCompleted) {
                        // In a real app, this would open a quiz modal
                        setQuizCompleted(true);
                      }
                    }}
                  >
                    {quizCompleted ? "Completed ✓" : "Start Quiz"}
                  </Button>
                </div>
                <div className="p-3 bg-primary-blue rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {assignmentCompleted ? (
                        <CheckCircle className="w-5 h-5 text-accent" />
                      ) : (
                        <FileText className="w-5 h-5 text-main-blue" />
                      )}
                      <span className="text-white font-medium">Assignment</span>
                    </div>
                    <Badge
                      className={
                        assignmentCompleted
                          ? "bg-accent/20 text-accent border-accent/30 text-xs"
                          : "bg-main-blue/20 text-main-blue border-main-blue/30 text-xs"
                      }
                    >
                      Required
                    </Badge>
                  </div>
                  <p className="text-dirty-grey text-sm mb-3">
                    Complete the hands-on assignment for this chapter
                  </p>
                  <Button
                    size="sm"
                    className={
                      assignmentCompleted
                        ? "bg-accent hover:bg-accent/90"
                        : "bg-main-blue hover:bg-main-blue/90"
                    }
                    onClick={() => {
                      if (!assignmentCompleted) {
                        // In a real app, this would open assignment details
                        setAssignmentCompleted(true);
                      }
                    }}
                  >
                    {assignmentCompleted ? "Completed ✓" : "View Assignment"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Discussion */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Discussion
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary-blue rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-main-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">JD</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium text-sm">
                          John Doe
                        </span>
                        <span className="text-dirty-grey text-xs">
                          2 hours ago
                        </span>
                      </div>
                      <p className="text-dirty-grey text-sm mb-2">
                        Great explanation! This really helped me understand the
                        concept better.
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-dirty-grey hover:text-accent text-xs">
                          <Star className="w-3 h-3" />
                          Like
                        </button>
                        <button className="text-dirty-grey hover:text-white text-xs">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Comment */}
                <div className="p-4 bg-primary-blue rounded-lg">
                  <textarea
                    placeholder="Share your thoughts or ask a question..."
                    className="w-full bg-transparent text-white placeholder-dirty-grey text-sm resize-none border-none outline-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-3">
                    <Button
                      size="sm"
                      className="bg-main-blue hover:bg-main-blue/90"
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Progress */}
            {isEnrolled && (
              <div className="bg-secondry-blue rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Course Progress
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-dirty-grey">Completed</span>
                      <span className="text-white">0%</span>
                    </div>
                    <div className="w-full bg-primary-blue rounded-full h-2">
                      <div
                        className="bg-main-blue h-2 rounded-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-dirty-grey">
                          Chapters Completed
                        </span>
                      </div>
                      <span className="text-white">
                        0 /{" "}
                        {course.sections?.reduce(
                          (acc: number, section: any) =>
                            acc + (section.chapters?.length || 0),
                          0
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-main-blue" />
                        <span className="text-dirty-grey">Time Spent</span>
                      </div>
                      <span className="text-white">0h 0m</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Chapter Navigation */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Course Content
              </h3>
              <div className="space-y-4">
                {course.sections?.map((section: any) => (
                  <div
                    key={section.id}
                    className="border border-white/10 rounded-lg"
                  >
                    <div className="p-3 bg-primary-blue/50">
                      <h4 className="font-medium text-white text-sm">
                        {section.title}
                      </h4>
                      <p className="text-xs text-dirty-grey">
                        {section.chapters?.length || 0} chapters
                      </p>
                    </div>
                    <div className="p-2">
                      {section.chapters?.map((chapter: any) => (
                        <Link
                          key={chapter.id}
                          href={`/browse/${courseId}/chapter/${chapter.id}`}
                          className={`flex items-center gap-3 p-2 rounded text-sm transition-colors ${
                            chapter.id === chapterId
                              ? "bg-main-blue/20 text-main-blue"
                              : "text-dirty-grey hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {chapter.isFree ? (
                            <Play className="w-4 h-4 text-accent" />
                          ) : (
                            <Lock className="w-4 h-4 text-dirty-grey" />
                          )}
                          <span className="flex-1">{chapter.title}</span>
                          {chapter.duration && (
                            <span className="text-xs">{chapter.duration}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Rating */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Rate This Course
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-dirty-grey hover:text-accent transition-colors"
                      onClick={() => {
                        // In a real app, this would submit a rating
                        console.log(`Rated ${star} stars`);
                      }}
                    >
                      <Star className="w-5 h-5" />
                    </button>
                  ))}
                </div>
                <p className="text-dirty-grey text-sm">
                  Help other students by rating this course
                </p>
              </div>
            </div>

            {/* Next Chapter */}
            <div className="bg-secondry-blue rounded-lg p-6">
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    // Find next chapter logic
                    const allChapters =
                      course.sections?.flatMap((s) => s.chapters || []) || [];
                    const currentIndex = allChapters.findIndex(
                      (ch) => ch.id === chapterId
                    );
                    const nextChapter = allChapters[currentIndex + 1];

                    if (nextChapter) {
                      router.push(
                        `/browse/${courseId}/chapter/${nextChapter.id}`
                      );
                    } else {
                      router.push(`/browse/${courseId}`);
                    }
                  }}
                  className="w-full bg-main-blue hover:bg-main-blue/90"
                >
                  Next Chapter
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  onClick={() => router.push(`/browse/${courseId}`)}
                  variant="outline"
                  className="w-full"
                >
                  Back to Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
