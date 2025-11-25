"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Progress } from "@/app/_components/ui/progress";
import { Badge } from "@/app/_components/ui/badge";
import {
  CheckCircle,
  PlaySquare,
  FileText,
  BookOpen,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Course, ChapterType } from "@/types";
import { useGetCourseByIdQuery, useGetCourseProgressQuery } from "@/store/api";

const LearnCourseSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentChapterId = searchParams.get("chapterId");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const params = useParams();
  const courseId = params.courseId as string;

  const { data: course } = useGetCourseByIdQuery(courseId);

  const { data: progress } = useGetCourseProgressQuery(courseId);

  const getChapterIcon = (type: ChapterType) => {
    switch (type) {
      case "VIDEO":
        return PlaySquare;
      case "ARTICLE":
        return FileText;
      default:
        return BookOpen;
    }
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const isChapterCompleted = (chapterId: string) => {
    return progress?.chapterProgress?.some(
      (cp) => cp.chapterId === chapterId && cp.isCompleted
    );
  };

  const totalChapters = useMemo(() => {
    if (course) {
      return (
        course.sections?.reduce(
          (acc, section) => acc + section.chapters.length,
          0
        ) || 0
      );
    }
  }, [course]);

  if (!course) return null;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex relative flex-col bg-secondry-blue border-r border-white/10 transition-all duration-300 ${
          isCollapsed ? "w-0" : "w-80"
        }`}
      >
        {!isCollapsed && (
          <div className="flex flex-col h-full">
            {/* Progress Section */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dirty-grey">Course Progress</span>
                <span className="text-sm font-bold text-main-blue">
                  {Math.round(progress?.progressPercentage || 0)}%
                </span>
              </div>
              <Progress
                value={progress?.progressPercentage || 0}
                className="h-2 mb-2"
              />
              <p className="text-xs text-dirty-grey">
                {progress?.completedChapters || 0} of {totalChapters} completed
              </p>
            </div>

            {/* Course Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="text-lg font-bold text-white mb-4">
                Course Content
              </h3>

              <Accordion type="multiple" className="space-y-2">
                {course.sections?.map((section) => {
                  const completedInSection =
                    progress?.chapterProgress?.filter(
                      (cp) =>
                        section.chapters.some((ch) => ch.id === cp.chapterId) &&
                        cp.isCompleted
                    ).length || 0;

                  return (
                    <AccordionItem
                      key={section.id}
                      value={section.id}
                      className="border border-white/10 rounded-lg bg-primary-blue"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:bg-white/5 rounded-t-lg hover:no-underline">
                        <div className="text-left flex-1">
                          <h4 className="font-semibold text-white text-sm mb-1">
                            {section.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-dirty-grey">
                            <span>
                              {completedInSection}/{section.chapters.length}
                            </span>
                            <span>•</span>
                            <span>{section.chapters.length} lessons</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-2 pb-2">
                        <div className="space-y-1">
                          {section.chapters.map((chapter) => {
                            const Icon = getChapterIcon(chapter.type);
                            const isCompleted = isChapterCompleted(chapter.id);
                            const isActive = currentChapterId === chapter.id;

                            return (
                              <button
                                key={chapter.id}
                                onClick={() =>
                                  router.push(
                                    `/learn/course/${courseId}?chapterId=${chapter.id}`
                                  )
                                }
                                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                                  isActive
                                    ? "bg-main-blue text-white"
                                    : isCompleted
                                      ? "bg-success/10 text-white hover:bg-success/20"
                                      : "text-dirty-grey hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                                ) : (
                                  <Icon
                                    className={`w-5 h-5 flex-shrink-0 ${
                                      isActive ? "text-white" : ""
                                    }`}
                                  />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p
                                    className={`text-sm font-medium line-clamp-2 ${
                                      isActive ? "text-white" : ""
                                    }`}
                                  >
                                    {chapter.title}
                                  </p>
                                  {chapter.duration > 0 && (
                                    <p className="text-xs text-dirty-grey mt-0.5">
                                      {formatDuration(chapter.duration)}
                                    </p>
                                  )}
                                </div>
                                {chapter.isFree && (
                                  <Badge className="bg-success/20 text-success text-xs">
                                    Free
                                  </Badge>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute left-full top-1/2 -translate-y-1/2 w-6 h-12 bg-secondry-blue border border-white/10 border-l-0 rounded-r-lg flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-dirty-grey" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-dirty-grey" />
          )}
        </button>
      </aside>

      {/* Mobile Sidebar - Bottom Sheet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-secondry-blue border-t border-white/10 z-40 max-h-[50vh] overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white">Course Content</h3>
            <span className="text-xs text-dirty-grey">
              {progress?.completedChapters || 0}/{totalChapters}
            </span>
          </div>
          <Progress
            value={progress?.progressPercentage || 0}
            className="h-2 mb-4"
          />
          {/* Add mobile content list here */}
        </div>
      </div>
    </>
  );
};

export default LearnCourseSidebar;
