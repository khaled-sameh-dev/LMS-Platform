// components/course/tabs/CourseContentTab.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Badge } from "@/app/_components/ui/badge";
import {
  PlaySquare,
  FileText,
  BookOpen,
  CheckCircle,
  Lock,
} from "lucide-react";
import { Course, ChapterType, ChapterProgress } from "@/types";
import { useRouter } from "next/navigation";

interface CourseContentTabProps {
  course: Course;
  courseId: string;
  isEnrolled: boolean;
  chapterProgress?: ChapterProgress[];
  totalChapters: number;
}

const CourseContentTab = ({
  course,
  courseId,
  isEnrolled,
  chapterProgress = [],
  totalChapters,
}: CourseContentTabProps) => {
  const router = useRouter();

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

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

  return (
    <div className="bg-secondry-blue rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Course Content</h2>
        <p className="text-dirty-grey">
          {course.sections?.length || 0} sections • {totalChapters} lectures •{" "}
          {formatDuration(course.duration)}
        </p>
      </div>

      {course.sections && course.sections.length > 0 ? (
        <Accordion type="multiple" className="space-y-3">
          {course.sections.map((section) => {
            const sectionDuration = section.chapters.reduce(
              (acc, ch) => acc + ch.duration,
              0
            );
            const completedInSection =
              chapterProgress?.filter(
                (cp) =>
                  section.chapters.some((ch) => ch.id === cp.chapterId) &&
                  cp.isCompleted
              ).length || 0;

            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="bg-primary-blue border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-white/5 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-white">
                        {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-dirty-grey text-sm mt-1">
                          {section.description}
                        </p>
                      )}
                    </div>
                    <div className="text-dirty-grey text-sm flex items-center gap-4">
                      {isEnrolled && (
                        <span className="text-main-blue font-medium">
                          {completedInSection}/{section.chapters.length}{" "}
                          completed
                        </span>
                      )}
                      <span>{section.chapters.length} lectures</span>
                      <span>{formatDuration(sectionDuration)}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2">
                    {section.chapters.map((chapter) => {
                      const Icon = getChapterIcon(chapter.type);
                      const progress = chapterProgress?.find(
                        (cp) => cp.chapterId === chapter.id
                      );
                      const isCompleted = progress?.isCompleted || false;
                      const canAccess = chapter.isFree || isEnrolled;

                      return (
                        <div
                          key={chapter.id}
                          onClick={() =>
                            canAccess &&
                            router.push(
                              `/learn/course/${courseId}?chapterId=${chapter.id}`
                            )
                          }
                          className={`flex items-center justify-between p-4 rounded-lg border border-white/5 ${
                            canAccess
                              ? "hover:bg-white/5 cursor-pointer"
                              : "opacity-60 cursor-not-allowed"
                          } ${isCompleted ? "bg-success/5" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            {isCompleted ? (
                              <CheckCircle className="w-5 h-5 text-success" />
                            ) : (
                              <Icon className="w-5 h-5 text-dirty-grey" />
                            )}
                            <div>
                              <p
                                className={`font-medium ${
                                  isCompleted ? "text-success" : "text-white"
                                }`}
                              >
                                {chapter.title}
                              </p>
                              {chapter.description && (
                                <p className="text-dirty-grey text-sm line-clamp-1">
                                  {chapter.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-dirty-grey">
                            {chapter.duration > 0 && (
                              <span>{formatDuration(chapter.duration)}</span>
                            )}
                            {chapter.isFree && (
                              <Badge className="bg-success/20 text-success border-success/30">
                                Free
                              </Badge>
                            )}
                            {!canAccess && <Lock className="w-4 h-4" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">No content available yet</p>
        </div>
      )}
    </div>
  );
};

export default CourseContentTab;