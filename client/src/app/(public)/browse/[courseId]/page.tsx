// // app/courses/[courseId]/page.tsx
// "use client";

// import { Button } from "@/app/_components/ui/button";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/app/_components/ui/tabs";
// import {
//   useGetCourseByIdQuery,
//   useGetEnrollmentStatusQuery,
//   useGetCourseProgressQuery,
//   useEnrollInCourseMutation,
//   useGetCourseReviewsQuery,
// } from "@/store/api";
// import { useUser } from "@clerk/nextjs";
// import { Loader2 } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { use, useState } from "react";

// // Import split components
// import CourseHero from "./_components/CourseHero";
// import ProgressBanner from "./_components/ProgressBanner";
// import CourseSidebar from "./_components/CourseSidebar";
// import CourseOverviewTab from "./_components/CourseOverviewTab";
// import CourseContentTab from "./_components/CourseContentTab";
// import CourseReviewsTab from "./_components/CourseReviewsTab";

// interface CoursePageProps {
//   params: Promise<{ courseId: string }>;
// }

// const CoursePage = ({ params }: CoursePageProps) => {
//   const { courseId } = use(params);
//   const router = useRouter();
//   const { user } = useUser();
//   const [activeTab, setActiveTab] = useState("overview");

//   // Queries
//   const {
//     data: course,
//     isLoading: courseLoading,
//     isError: courseError,
//   } = useGetCourseByIdQuery(courseId);

//   const { data: enrollmentStatus, isLoading: enrollmentLoading } =
//     useGetEnrollmentStatusQuery(courseId, {
//       skip: !user,
//     });

//   const { data: progress, isLoading: progressLoading } =
//     useGetCourseProgressQuery(courseId, {
//       skip: !enrollmentStatus?.isEnrolled,
//     });

//   const { data: reviewsData, isLoading: reviewsLoading } =
//     useGetCourseReviewsQuery(courseId);

//   // Mutations
//   const [enrollInCourse, { isLoading: enrolling }] =
//     useEnrollInCourseMutation();

//   // Computed values
//   const isEnrolled = enrollmentStatus?.isEnrolled || false;
//   const totalChapters =
//     course?.sections?.reduce(
//       (acc, section) => acc + section.chapters.length,
//       0
//     ) || 0;

//   // Handlers
//   const handleEnroll = async () => {
//     try {
//       await enrollInCourse({ courseId }).unwrap();
//     } catch (error) {
//       console.error("Enrollment failed:", error);
//     }
//   };

//   const handleCheckout = () => {
//     router.push(`/checkout/${courseId}`);
//   };

//   const handleContinueLearning = () => {
//     router.push(`/learn/course/${courseId}`);
//   };

//   // Loading state
//   if (courseLoading || enrollmentLoading) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
//           <p className="text-dirty-grey text-lg">Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
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
//           <Button
//             onClick={() => router.push("/courses")}
//             className="bg-main-blue hover:bg-main-blue/80 text-white"
//           >
//             Browse All Courses
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full text-white">
//       {/* Progress Banner (for enrolled students) */}
//       {isEnrolled && progress && (
//         <ProgressBanner
//           courseId={courseId}
//           progressPercentage={progress.progressPercentage}
//           completedChapters={progress.completedChapters}
//           totalChapters={progress.totalChapters}
//         />
//       )}

//       {/* Hero Section */}
//       <div className="bg-secondry-blue rounded-lg p-8 my-10">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Content - Course Hero */}
//           <div className="lg:col-span-2">
//             <CourseHero
//               course={course}
//               isEnrolled={isEnrolled}
//               totalChapters={totalChapters}
//             />
//           </div>

//           {/* Right Sidebar - Course Info & Actions */}
//           <div className="lg:col-span-1">
//             <CourseSidebar
//               course={course}
//               isEnrolled={isEnrolled}
//               enrolling={enrolling}
//               progressPercentage={progress?.progressPercentage}
//               totalChapters={totalChapters}
//               onEnroll={handleEnroll}
//               onCheckout={handleCheckout}
//               onContinueLearning={handleContinueLearning}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Tabs Section */}
//       <div className="my-10">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="bg-transparent max-w-max justify-start overflow-x-auto gap-4">
//             <TabsTrigger
//               value="overview"
//               className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
//             >
//               What You'll Learn
//             </TabsTrigger>
//             <TabsTrigger
//               value="content"
//               className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
//             >
//               Lectures{" "}
//               {isEnrolled &&
//                 progress &&
//                 `• ${Math.round(progress.progressPercentage)}%`}
//             </TabsTrigger>
//             <TabsTrigger
//               value="reviews"
//               className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
//             >
//               Reviews ({course.reviewsCount})
//             </TabsTrigger>
//           </TabsList>

//           {/* Overview Tab */}
//           <TabsContent value="overview" className="mt-6">
//             <CourseOverviewTab course={course} />
//           </TabsContent>

//           {/* Content Tab */}
//           <TabsContent value="content" className="mt-6">
//             <CourseContentTab
//               course={course}
//               courseId={courseId}
//               isEnrolled={isEnrolled}
//               chapterProgress={progress?.chapterProgress}
//               totalChapters={totalChapters}
//             />
//           </TabsContent>

//           {/* Reviews Tab */}
//           <TabsContent value="reviews" className="mt-6">
//             <CourseReviewsTab
//               reviewsData={reviewsData}
//               isLoading={reviewsLoading}
//             />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default CoursePage;

"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import {
  useGetCourseByIdQuery,
  useGetEnrollmentStatusQuery,
  useGetCourseProgressQuery,
  useEnrollInCourseMutation,
  useGetCourseReviewsQuery,
} from "@/store/api";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

// Import split components
import CourseHero from "./_components/CourseHero";
import ProgressBanner from "./_components/ProgressBanner";
import CourseSidebar from "./_components/CourseSidebar";
import CourseOverviewTab from "./_components/CourseOverviewTab";
import CourseContentTab from "./_components/CourseContentTab";
import CourseReviewsTab from "./_components/CourseReviewsTab";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

const CoursePage = ({ params }: CoursePageProps) => {
  const { courseId } = use(params);
  const router = useRouter();
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("overview");

  // Queries
  const {
    data: course,
    isLoading: courseLoading,
    isError: courseError,
  } = useGetCourseByIdQuery(courseId);

  const { data: enrollmentStatus, isLoading: enrollmentLoading } =
    useGetEnrollmentStatusQuery(courseId, {
      skip: !user,
    });

  const { data: progress, isLoading: progressLoading } =
    useGetCourseProgressQuery(courseId, {
      skip: !enrollmentStatus?.isEnrolled,
    });

  const { data: reviewsData, isLoading: reviewsLoading } =
    useGetCourseReviewsQuery(courseId);

  // Mutations
  const [enrollInCourse, { isLoading: enrolling }] =
    useEnrollInCourseMutation();

  // Computed values
  const isEnrolled = enrollmentStatus?.isEnrolled || false;
  const totalChapters =
    course?.sections?.reduce(
      (acc, section) => acc + section.chapters.length,
      0
    ) || 0;

  // Handlers
  const handleEnroll = async () => {
    try {
      await enrollInCourse({ courseId }).unwrap();
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  const handleCheckout = () => {
    router.push(`/checkout/${courseId}`);
  };

  const handleContinueLearning = () => {
    router.push(`/learn/course/${courseId}`);
  };

  // Loading state
  if (courseLoading || enrollmentLoading) {
    return (
      <div className="min-h-screen bg-primary-blue flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  // Error state
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
          <Button
            onClick={() => router.push("/courses")}
            className="bg-main-blue hover:bg-main-blue/80 text-white"
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-white">
      {/* Progress Banner (for enrolled students) */}
      {isEnrolled && progress && (
        <ProgressBanner
          courseId={courseId}
          progressPercentage={progress.progressPercentage}
          completedChapters={progress.completedChapters}
          totalChapters={progress.totalChapters}
        />
      )}

      {/* Hero Section */}
      <div className="bg-secondry-blue rounded-lg p-8 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Course Hero */}
          <div className="lg:col-span-2">
            <CourseHero
              course={course}
              isEnrolled={isEnrolled}
              totalChapters={totalChapters}
            />
          </div>

          {/* Right Sidebar - Course Info & Actions */}
          <div className="lg:col-span-1">
            <CourseSidebar
              course={course}
              isEnrolled={isEnrolled}
              enrolling={enrolling}
              progressPercentage={progress?.progressPercentage}
              totalChapters={totalChapters}
              onEnroll={handleEnroll}
              onCheckout={handleCheckout}
              onContinueLearning={handleContinueLearning}
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="my-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-transparent max-w-max justify-start overflow-x-auto gap-4">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
            >
              What You'll Learn
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
            >
              Lectures{" "}
              {isEnrolled &&
                progress &&
                `• ${Math.round(progress.progressPercentage)}%`}
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:text-white px-4 text-white/50 py-1 border border-white/50 data-[state=active]:border-white rounded-full"
            >
              Reviews ({course.reviewsCount})
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <CourseOverviewTab course={course} />
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="mt-6">
            <CourseContentTab
              course={course}
              courseId={courseId}
              isEnrolled={isEnrolled}
              chapterProgress={progress?.chapterProgress}
              totalChapters={totalChapters}
            />
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <CourseReviewsTab
              reviewsData={reviewsData}
              isLoading={reviewsLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursePage;
