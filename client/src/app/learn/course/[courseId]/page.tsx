// "use client";

// import { useState, useEffect, use } from "react";
// import { useRouter } from "next/navigation";
// import {
//   useGetCourseByIdQuery,
//   useGetEnrollmentStatusQuery,
//   useGetCourseProgressQuery,
//   useUpdateChapterProgressMutation,
//   useEnrollInCourseMutation,
// } from "@/store/api";
// import { Button } from "@/app/_components/ui/button";
// import { Progress } from "@/app/_components/ui/progress";
// import { Badge } from "@/app/_components/ui/badge";
// import {
//   Loader2,
//   CheckCircle,
//   Lock,
//   PlayCircle,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   X,
//   BookOpen,
//   Clock,
//   Award,
// } from "lucide-react";
// import { Chapter, Section } from "@/types";
// import type { ChapterType } from "@/types";

// interface LearnPageProps {
//   params: Promise<{ courseId: string }>;
//   searchParams: Promise<{ chapterId?: string }>;
// }

// const LearnPage = ({ params, searchParams }: LearnPageProps) => {
//   const { courseId } = use(params);
//   const { chapterId: initialChapterId } = use(searchParams);
//   const router = useRouter();

//   const [currentChapterId, setCurrentChapterId] = useState<string | null>(
//     initialChapterId || null
//   );
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [videoProgress, setVideoProgress] = useState(0);

//   // Queries
//   const { data: course, isLoading: courseLoading } =
//     useGetCourseByIdQuery(courseId);
//   const { data: enrollmentStatus, isLoading: enrollmentLoading } =
//     useGetEnrollmentStatusQuery(courseId);
//   const { data: progress, isLoading: progressLoading } =
//     useGetCourseProgressQuery(courseId, {
//       skip: !enrollmentStatus?.isEnrolled,
//     });

//   // Mutations
//   const [updateProgress] = useUpdateChapterProgressMutation();
//   const [enrollInCourse, { isLoading: enrolling }] =
//     useEnrollInCourseMutation();

//   const isEnrolled = enrollmentStatus?.isEnrolled || false;

//   // Get all chapters in order
//   const allChapters: (Chapter & { sectionTitle: string })[] = [];
//   course?.sections?.forEach((section: Section) => {
//     section.chapters.forEach((chapter: Chapter) => {
//       allChapters.push({
//         ...chapter,
//         sectionTitle: section.title,
//       });
//     });
//   });

//   // Set initial chapter if not set
//   useEffect(() => {
//     if (!currentChapterId && allChapters.length > 0) {
//       const firstAccessibleChapter = allChapters.find(
//         (ch) => ch.isFree || isEnrolled
//       );
//       if (firstAccessibleChapter) {
//         setCurrentChapterId(firstAccessibleChapter.id);
//       }
//     }
//   }, [allChapters.length, isEnrolled]);

//   const currentChapter = allChapters.find((ch) => ch.id === currentChapterId);
//   const currentChapterIndex = allChapters.findIndex(
//     (ch) => ch.id === currentChapterId
//   );
//   const currentProgress = progress?.chapterProgress?.find(
//     (cp) => cp.chapterId === currentChapterId
//   );

//   const canAccessChapter = (chapter: Chapter) => {
//     return chapter.isFree || isEnrolled;
//   };

//   const handleChapterSelect = (chapterId: string) => {
//     const chapter = allChapters.find((ch) => ch.id === chapterId);
//     if (chapter && canAccessChapter(chapter)) {
//       setCurrentChapterId(chapterId);
//       setVideoProgress(0);
//       router.push(`/learn/course/${courseId}?chapterId=${chapterId}`);
//     }
//   };

//   const handleNextChapter = () => {
//     if (currentChapterIndex < allChapters.length - 1) {
//       const nextChapter = allChapters[currentChapterIndex + 1];
//       if (canAccessChapter(nextChapter)) {
//         handleChapterSelect(nextChapter.id);
//       }
//     }
//   };

//   const handlePreviousChapter = () => {
//     if (currentChapterIndex > 0) {
//       const prevChapter = allChapters[currentChapterIndex - 1];
//       if (canAccessChapter(prevChapter)) {
//         handleChapterSelect(prevChapter.id);
//       }
//     }
//   };

//   const handleMarkComplete = async () => {
//     if (!isEnrolled || !currentChapterId || !enrollmentStatus?.enrollment)
//       return;

//     try {
//       await updateProgress({
//         chapterId: currentChapterId,
//         enrollmentId: enrollmentStatus.enrollment.id,
//         watchedDuration: currentChapter?.duration || 0,
//         isCompleted: true,
//       }).unwrap();
//     } catch (error) {
//       console.error("Failed to update progress:", error);
//     }
//   };

//   const handleEnroll = async () => {
//     try {
//       await enrollInCourse({ courseId }).unwrap();
//     } catch (error) {
//       console.error("Enrollment failed:", error);
//     }
//   };

//   const getChapterIcon = (type: ChapterType) => {
//     return type === "VIDEO" ? PlayCircle : FileText;
//   };

//   // Loading state
//   if (courseLoading || enrollmentLoading) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
//           <p className="text-dirty-grey text-lg">Loading course...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-white text-xl mb-4">Course not found</p>
//           <Button
//             onClick={() => router.push("/courses")}
//             className="bg-main-blue"
//           >
//             Browse Courses
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   // Not enrolled and no free chapters
//   if (!isEnrolled && !currentChapter?.isFree) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center p-4">
//         <div className="max-w-md w-full bg-secondary-blue rounded-lg p-8 text-center">
//           <Lock className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-white mb-4">
//             Enroll to Access
//           </h2>
//           <p className="text-dirty-grey mb-6">
//             You need to enroll in this course to access this content.
//           </p>
//           <div className="space-y-4">
//             <Button
//               onClick={handleEnroll}
//               disabled={enrolling}
//               className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6"
//             >
//               {enrolling ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Enrolling...
//                 </>
//               ) : (
//                 <>Enroll Now - ${course.price}</>
//               )}
//             </Button>
//             <Button
//               onClick={() => router.push(`/courses/${courseId}`)}
//               variant="outline"
//               className="w-full border-white/10 text-white"
//             >
//               View Course Details
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-primary-blue flex flex-col">
//       {/* Header */}
//       <header className="bg-secondary-blue border-b border-white/10 px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="lg:hidden text-white"
//           >
//             {isSidebarOpen ? (
//               <X className="w-5 h-5" />
//             ) : (
//               <Menu className="w-5 h-5" />
//             )}
//           </Button>
//           <div>
//             <h1 className="text-white font-semibold text-lg line-clamp-1">
//               {course.title}
//             </h1>
//             <p className="text-dirty-grey text-sm">
//               {currentChapter?.sectionTitle}
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           {isEnrolled && progress && (
//             <div className="hidden md:flex items-center gap-3">
//               <div className="text-right">
//                 <p className="text-sm text-dirty-grey">Your Progress</p>
//                 <p className="text-sm font-semibold text-white">
//                   {Math.round(progress.progressPercentage)}%
//                 </p>
//               </div>
//               <Progress value={progress.progressPercentage} className="w-24" />
//             </div>
//           )}
//           <Button
//             onClick={() => router.push(`/browse/${courseId}`)}
//             variant="outline"
//             className="border-white/10 text-white"
//           >
//             Course Details
//           </Button>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar - Course Content */}
//         <aside
//           className={`${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:translate-x-0 fixed lg:relative z-40 w-80 bg-secondary-blue border-r border-white/10 h-full transition-transform duration-300 overflow-y-auto`}
//         >
//           <div className="p-4 border-b border-white/10">
//             <h2 className="font-semibold text-white mb-2">Course Content</h2>
//             {isEnrolled && progress && (
//               <div className="text-sm text-dirty-grey">
//                 {progress.completedChapters} of {progress.totalChapters}{" "}
//                 completed
//               </div>
//             )}
//           </div>

//           <div className="p-4 space-y-4">
//             {course.sections?.map((section: Section) => (
//               <div key={section.id}>
//                 <h3 className="font-medium text-white mb-2 text-sm">
//                   {section.title}
//                 </h3>
//                 <div className="space-y-1">
//                   {section.chapters.map((chapter: Chapter) => {
//                     const Icon = getChapterIcon(chapter.type);
//                     const chapterProgress = progress?.chapterProgress?.find(
//                       (cp) => cp.chapterId === chapter.id
//                     );
//                     const isCompleted = chapterProgress?.isCompleted || false;
//                     const isLocked = !canAccessChapter(chapter);
//                     const isCurrent = chapter.id === currentChapterId;

//                     return (
//                       <button
//                         key={chapter.id}
//                         onClick={() => handleChapterSelect(chapter.id)}
//                         disabled={isLocked}
//                         className={`w-full text-left p-3 rounded-lg transition-colors ${
//                           isCurrent
//                             ? "bg-primary-blue border border-main-blue"
//                             : "hover:bg-primary-blue/50"
//                         } ${isLocked ? "opacity-50 cursor-not-allowed" : ""}`}
//                       >
//                         <div className="flex items-center gap-3">
//                           {isCompleted ? (
//                             <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
//                           ) : isLocked ? (
//                             <Lock className="w-4 h-4 text-dirty-grey flex-shrink-0" />
//                           ) : (
//                             <Icon className="w-4 h-4 text-dirty-grey flex-shrink-0" />
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <p
//                               className={`text-sm ${
//                                 isCurrent
//                                   ? "text-white font-medium"
//                                   : "text-dirty-grey"
//                               } line-clamp-2`}
//                             >
//                               {chapter.title}
//                             </p>
//                             <div className="flex items-center gap-2 mt-1">
//                               {chapter.duration > 0 && (
//                                 <span className="text-xs text-dirty-grey">
//                                   {Math.round(chapter.duration)}m
//                                 </span>
//                               )}
//                               {chapter.isFree && (
//                                 <Badge className="bg-success/20 text-success text-xs px-2 py-0">
//                                   Free
//                                 </Badge>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <main className="flex-1 overflow-y-auto">
//           {currentChapter ? (
//             <div className="max-w-5xl mx-auto p-6 space-y-6">
//               {/* Video/Content Player */}
//               <div className="bg-secondary-blue rounded-lg overflow-hidden">
//                 {currentChapter.type === "VIDEO" ? (
//                   <div className="aspect-video bg-black flex items-center justify-center">
//                     {currentChapter.videoUrl ? (
//                       <video
//                         src={currentChapter.videoUrl}
//                         controls
//                         className="w-full h-full"
//                         onTimeUpdate={(e) => {
//                           const video = e.currentTarget;
//                           const progress =
//                             (video.currentTime / video.duration) * 100;
//                           setVideoProgress(progress);
//                         }}
//                       />
//                     ) : (
//                       <div className="text-center text-dirty-grey">
//                         <PlayCircle className="w-16 h-16 mx-auto mb-4" />
//                         <p>Video not available</p>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="p-8">
//                     <div
//                       className="prose prose-invert max-w-none"
//                       dangerouslySetInnerHTML={{
//                         __html:
//                           currentChapter.articleContent ||
//                           "<p>No content available</p>",
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Chapter Info */}
//               <div className="bg-secondary-blue rounded-lg p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h1 className="text-2xl font-bold text-white mb-2">
//                       {currentChapter.title}
//                     </h1>
//                     <p className="text-dirty-grey">
//                       {currentChapter.sectionTitle}
//                     </p>
//                   </div>
//                   {isEnrolled && !currentProgress?.isCompleted && (
//                     <Button
//                       onClick={handleMarkComplete}
//                       className="bg-success hover:bg-success/80 text-white"
//                     >
//                       <CheckCircle className="w-4 h-4 mr-2" />
//                       Mark Complete
//                     </Button>
//                   )}
//                   {currentProgress?.isCompleted && (
//                     <Badge className="bg-success/20 text-success border-success/30 px-4 py-2">
//                       <CheckCircle className="w-4 h-4 mr-2" />
//                       Completed
//                     </Badge>
//                   )}
//                 </div>

//                 {currentChapter.description && (
//                   <p className="text-dirty-grey leading-relaxed">
//                     {currentChapter.description}
//                   </p>
//                 )}

//                 {/* Chapter Resources */}
//                 {currentChapter.resources &&
//                   currentChapter.resources.length > 0 && (
//                     <div className="mt-6 pt-6 border-t border-white/10">
//                       <h3 className="font-semibold text-white mb-3">
//                         Resources
//                       </h3>
//                       <div className="space-y-2">
//                         {currentChapter.resources.map((resource) => (
//                           <a
//                             key={resource.id}
//                             href={resource.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-3 p-3 bg-primary-blue rounded-lg hover:bg-white/5 transition-colors"
//                           >
//                             <FileText className="w-5 h-5 text-main-blue" />
//                             <div className="flex-1">
//                               <p className="text-white font-medium">
//                                 {resource.name}
//                               </p>
//                               <p className="text-dirty-grey text-sm">
//                                 {resource.type}
//                               </p>
//                             </div>
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//               </div>

//               {/* Navigation */}
//               <div className="flex items-center justify-between">
//                 <Button
//                   onClick={handlePreviousChapter}
//                   disabled={currentChapterIndex === 0}
//                   variant="outline"
//                   className="border-white/10 text-white disabled:opacity-50"
//                 >
//                   <ChevronLeft className="w-4 h-4 mr-2" />
//                   Previous
//                 </Button>

//                 <Button
//                   onClick={handleNextChapter}
//                   disabled={currentChapterIndex === allChapters.length - 1}
//                   className="bg-main-blue hover:bg-main-blue/80 text-white disabled:opacity-50"
//                 >
//                   Next
//                   <ChevronRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center text-dirty-grey">
//                 <BookOpen className="w-16 h-16 mx-auto mb-4" />
//                 <p className="text-lg">Select a chapter to start learning</p>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default LearnPage;

// app/learn/course/[courseId]/page.tsx
"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useGetCourseProgressQuery,
  useGetEnrollmentStatusQuery,
} from "@/store/api";

import { Button } from "@/app/_components/ui/button";
import { Loader2, Lock, PlayCircle } from "lucide-react";
import ChapterViewer from "../_components/ChapterViewer";
import Link from "next/link";

const Page = () => {
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const courseId = params.courseId as string;
  // const chapterId = searchParams.get("chapterId");

  // const { data: course } = useGetCourseByIdQuery(courseId);
  // const { data: progress } = useGetCourseProgressQuery(courseId);

  // // Get first chapter if no chapter selected
  // const firstChapter = course?.sections?.[0]?.chapters?.[0];

  // const params = useParams();
  //   const courseId = params.;

  //   const { data: course, isLoading: courseLoading } =
  //     useGetCourseByIdQuery(courseId);
  //   const { data: enrollmentStatus } = useGetEnrollmentStatusQuery(courseId);

  //   if (courseLoading) {
  //     return (
  //       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
  //         <Loader2 className="w-12 h-12 text-main-blue animate-spin" />
  //       </div>
  //     );
  //   }

  //   if (!course || !enrollmentStatus?.isEnrolled) {
  //     return (
  //       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
  //         <div className="text-center">
  //           <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
  //           <p className="text-dirty-grey">
  //             You must be enrolled to access this course.
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   }

  // if (!chapterId && firstChapter) {
  //   router.push(`/learn/course/${courseId}?chapterId=${firstChapter.id}`);
  //   return null;
  // }

  // if (!chapterId) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-full p-8">
  //       <PlayCircle className="w-20 h-20 text-dirty-grey mb-4" />
  //       <h2 className="text-2xl font-bold text-white mb-2">
  //         Ready to start learning?
  //       </h2>
  //       <p className="text-dirty-grey text-center mb-6">
  //         Select a chapter from the sidebar to begin
  //       </p>
  //     </div>
  //   );
  // }

  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const chapterId = searchParams.get("chapterId");

  const {
    data: course,
    isLoading: courseLoading,
    error: courseError,
  } = useGetCourseByIdQuery(courseId);

  const {
    data: enrollmentStatus,
    isLoading: enrollmentLoading,
    error: enrollmentError,
  } = useGetEnrollmentStatusQuery(courseId);

  const { data: progress } = useGetCourseProgressQuery(courseId, {
    skip: !enrollmentStatus?.isEnrolled,
  });

  // Loading state
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
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  // Error: Not enrolled
  if (!enrollmentStatus?.isEnrolled) {
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
              href={`/courses/${courseId}`}
              className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
            >
              View Course Details
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get first chapter if no chapter selected
  const firstChapter = course.sections?.[0]?.chapters?.[0];

  if (!chapterId && firstChapter) {
    router.push(`/learn/course/${courseId}?chapterId=${firstChapter.id}`);
    return null;
  }

  return (
    <div className="h-full">
      <ChapterViewer courseId={courseId} chapterId={chapterId!} />
    </div>
  );
};

export default Page;

// app/learn/course/[courseId]/page.tsx
// "use client";

// import { useParams, useSearchParams, useRouter } from "next/navigation";
// import {
//   useGetCourseByIdQuery,
//   useGetEnrollmentStatusQuery,
//   useGetCourseProgressQuery,
// } from "@/store/api";
// import LearnCourseHeader from "../_components/LearnCourseHeader";
// import LearnCourseSidebar from "../_components/LearnCourseSidebar";
// import ChapterViewer from "../_components/ChapterViewer";
// import { Loader2, Lock } from "lucide-react";
// import Link from "next/link";

// export default function LearnCoursePage() {
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const courseId = params.courseId as string;
//   const chapterId = searchParams.get("chapterId");

//   const {
//     data: course,
//     isLoading: courseLoading,
//     error: courseError,
//   } = useGetCourseByIdQuery(courseId);

//   const {
//     data: enrollmentStatus,
//     isLoading: enrollmentLoading,
//     error: enrollmentError,
//   } = useGetEnrollmentStatusQuery(courseId);

//   const { data: progress } = useGetCourseProgressQuery(courseId, {
//     skip: !enrollmentStatus?.isEnrolled,
//   });

//   // Loading state
//   if (courseLoading || enrollmentLoading) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
//           <p className="text-dirty-grey text-lg">Loading course...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error: Course not found
//   if (courseError || !course) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-error text-2xl">✕</span>
//           </div>
//           <h2 className="text-2xl font-bold text-white mb-2">
//             Course Not Found
//           </h2>
//           <p className="text-dirty-grey mb-6">
//             The course you're looking for doesn't exist or has been removed.
//           </p>
//           <Link
//             href="/courses"
//             className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
//           >
//             Browse Courses
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Error: Not enrolled
//   if (!enrollmentStatus?.isEnrolled) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="w-20 h-20 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-6">
//             <Lock className="w-10 h-10 text-warning" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-3">Access Denied</h2>
//           <p className="text-dirty-grey mb-2">
//             You need to enroll in this course to access the content.
//           </p>
//           <p className="text-sm text-dirty-grey mb-6">
//             Course:{" "}
//             <span className="text-white font-semibold">{course.title}</span>
//           </p>
//           <div className="flex gap-3 justify-center">
//             <Link
//               href={`/courses/${courseId}`}
//               className="inline-flex items-center px-6 py-3 bg-main-blue hover:bg-main-blue/80 text-white rounded-lg font-medium transition-colors"
//             >
//               View Course Details
//             </Link>
//             <Link
//               href="/courses"
//               className="inline-flex items-center px-6 py-3 bg-primary-blue hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/10"
//             >
//               Browse Courses
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Get first chapter if no chapter selected
//   const firstChapter = course.sections?.[0]?.chapters?.[0];

//   if (!chapterId && firstChapter) {
//     router.push(`/learn/course/${courseId}?chapterId=${firstChapter.id}`);
//     return null;
//   }

//   // Main learning interface
//   return (
//     <div className="min-h-screen bg-primary-blue flex flex-col">
//       {/* Header */}
//       <LearnCourseHeader/>

//       {/* Main Content Area */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <LearnCourseSidebar course={course} courseId={courseId} />

//         {/* Content Area */}
//         <main className="flex-1 overflow-y-auto">
//           {chapterId ? (
//             <ChapterViewer courseId={courseId} chapterId={chapterId} />
//           ) : (
//             <div className="flex flex-col items-center justify-center h-full p-8">
//               <div className="w-20 h-20 bg-main-blue/20 rounded-full flex items-center justify-center mb-6">
//                 <Lock className="w-10 h-10 text-main-blue" />
//               </div>
//               <h2 className="text-2xl font-bold text-white mb-2">
//                 No Chapter Selected
//               </h2>
//               <p className="text-dirty-grey text-center mb-6">
//                 Select a chapter from the sidebar to begin your learning journey
//               </p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
