"use client";

import { useState, useEffect , useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  useGetChapterByIdQuery,
  useGetCourseByIdQuery,
  useGetEnrollmentStatusQuery,
  useUpdateChapterProgressMutation,
  useGetCourseProgressQuery,
} from "@/store/api";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  CheckCircle,
  Clock,
  FileText,
  Loader2,
  ChevronRight,
  ChevronLeft,
  Download,
  BookOpen,
} from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { useUser } from "@clerk/nextjs";

interface ChapterViewerProps {
  courseId: string;
  chapterId: string;
}

const ChapterViewer = ({ courseId, chapterId }: ChapterViewerProps) => {
  const router = useRouter();
  const [watchDuration, setWatchDuration] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

    const { isLoaded, isSignedIn, user } = useUser();

  // Queries
  const { data: course } = useGetCourseByIdQuery(courseId);
  const { data: chapter, isLoading: chapterLoading } = useGetChapterByIdQuery({
    courseId,
    chapterId,
  });
  const { data: enrollmentStatus } = useGetEnrollmentStatusQuery(courseId);
   const { data: progress } = useGetCourseProgressQuery(courseId, {
    skip: !isLoaded || !isSignedIn,
  });

  // Mutation
  const [updateProgress, { isLoading: updating }] =
    useUpdateChapterProgressMutation();

  // Check if chapter is already completed
  useEffect(() => {
    const chapterProgress = progress?.chapterProgress?.find(
      (cp) => cp.chapterId === chapterId
    );
    setIsCompleted(chapterProgress?.isCompleted || false);
    setWatchDuration(chapterProgress?.watchedDuration || 0);
  }, [chapterId, progress]);

  // Auto-save progress every 30 seconds for videos
  useEffect(() => {
    if (chapter?.type === "VIDEO" && !isCompleted) {
      const interval = setInterval(() => {
        handleUpdateProgress(false);
      }, 30000); // 30 seconds

      return () => clearInterval(interval);
    }
  }, [chapter, watchDuration, isCompleted]);

  const handleUpdateProgress = async (markComplete: boolean = false) => {
    if (!enrollmentStatus?.enrollment?.id) return;

    try {
      await updateProgress({
        chapterId,
        enrollmentId: enrollmentStatus.enrollment.id,
        watchedDuration: watchDuration,
        isCompleted: markComplete || isCompleted,
      }).unwrap();

      if (markComplete) {
        setIsCompleted(true);
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    }
  };

  const handleMarkComplete = async () => {
    await handleUpdateProgress(true);
  };

  // Navigation helpers
 const getAllChapters = useCallback(() => {
    return course?.sections?.length
      ? course.sections.flatMap((section) =>
          (section?.chapters ?? []).map((ch) => ({
            ...ch,
            sectionId: section.id,
          }))
        )
      : [];
  }, [course]);

  const allChapters = getAllChapters() || [];

  const currentIndex = allChapters.findIndex((ch) => ch.id === chapterId);

  
  const previousChapter =
    currentIndex > 0 ? allChapters[currentIndex - 1] : null;

  const nextChapter =
    currentIndex >= 0 && currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null;

  const navigateToChapter = (targetChapterId: string) => {
    // Save progress before navigation
    handleUpdateProgress(false);
    router.push(`/learn/course/${courseId}?chapterId=${targetChapterId}`);
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };


  if (chapterLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey">Loading chapter...</p>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-error" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Chapter Not Found
          </h2>
          <p className="text-dirty-grey mb-6">
            This chapter doesn't exist or has been removed.
          </p>
          <Button
            onClick={() => router.push(`/learn/course/${courseId}`)}
            className="bg-main-blue hover:bg-main-blue/80 text-white"
          >
            Back to Course
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chapter Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 lg:p-8">
          {/* Chapter Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-primary-blue text-white border-white/10">
                    {chapter.type}
                  </Badge>
                  {chapter.duration > 0 && (
                    <div className="flex items-center gap-1 text-dirty-grey text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(chapter.duration)}</span>
                    </div>
                  )}
                  {isCompleted && (
                    <Badge className="bg-dirty-grey/20 text-success border-dirty-grey/30">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {chapter.title}
                </h1>
                {chapter.description && (
                  <p className="text-dirty-grey">{chapter.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Chapter Content Based on Type */}
          <div className="bg-secondry-blue rounded-lg p-6 mb-6">
            {chapter.type === "VIDEO" && chapter.videoUrl && (
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">

                <VideoPlayer
                  chapter={chapter}
                  setWatchDuration={setWatchDuration}
                  handleMarkComplete={handleMarkComplete}
                />
              </div>
            )}

            {chapter.type === "ARTICLE" && chapter.articleContent && (
              <div className="prose prose-invert max-w-none">
                <div
                  className="text-dirty-grey leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: chapter.articleContent }}
                />
              </div>
            )}

            {chapter.type === "QUIZ" && chapter.quizQuestions && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Quiz</h3>
                {/* Quiz implementation here */}
                <p className="text-dirty-grey">Quiz content coming soon...</p>
              </div>
            )}

            {chapter.type === "ASSIGNMENT" && chapter.assignmentDetails && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Assignment
                </h3>
                {/* Assignment implementation here */}
                <p className="text-dirty-grey">
                  Assignment content coming soon...
                </p>
              </div>
            )}
          </div>

          {/* Chapter Resources */}
          {chapter.resources && chapter.resources.length > 0 && (
            <div className="bg-secondry-blue rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Resources
              </h3>
              <div className="space-y-2">
                {chapter.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-primary-blue rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-4 h-4 text-dirty-grey group-hover:text-main-blue" />
                      <div>
                        <p className="text-white text-sm font-medium">
                          {resource.name}
                        </p>
                        {resource.size && (
                          <p className="text-xs text-dirty-grey">
                            {(resource.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge className="bg-primary-blue text-dirty-grey border-white/10 text-xs">
                      {resource.type}
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Mark Complete Button */}
          {!isCompleted && (
            <div className="bg-secondry-blue rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Complete this chapter
                  </h4>
                  <p className="text-sm text-dirty-grey">
                    Mark as complete to track your progress
                  </p>
                </div>
                <Button
                  onClick={handleMarkComplete}
                  disabled={updating}
                  className="bg-white/50 hover:bg-white/30 text-white"
                >
                  {updating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark Complete
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-white/10 bg-secondry-blue">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() =>
                previousChapter && navigateToChapter(previousChapter.id)
              }
              disabled={!previousChapter}
              variant="outline"
              className="bg-primary-blue border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-center hidden sm:block">
              <p className="text-sm text-dirty-grey">
                Chapter {currentIndex + 1} of {allChapters.length}
              </p>
            </div>

            <Button
              onClick={() => nextChapter && navigateToChapter(nextChapter.id)}
              disabled={!nextChapter}
              className="bg-main-blue hover:bg-main-blue/80 text-white disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterViewer;
