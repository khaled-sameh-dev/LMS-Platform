// "use client";

// import { Badge } from "@/app/_components/ui/badge";
// import { Button } from "@/app/_components/ui/button";
// import { useGetCourseByIdQuery } from "@/store/api";
// import {
//   Award,
//   BookOpen,
//   Calendar,
//   CheckCircle2,
//   Heart,
//   Loader2,
//   PlayCircle,
//   PlaySquare,
//   Share2,
//   Tag,
//   User,
//   Users,
// } from "lucide-react";
// import { Play } from "next/font/google";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { use } from "react";

// interface CoursePreviewPageProps {
//   params: Promise<{ courseId: string }>;
// }

// const page = ({ params }: CoursePreviewPageProps) => {
//   const { courseId } = use(params);
//   const router = useRouter();

//   const {
//     data: course,
//     isFetching,
//     isLoading,
//     error,
//     isError,
//   } = useGetCourseByIdQuery(courseId);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto mb-4" />
//           <p className="text-dirty-grey text-lg">Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (isError || !course) {
//     return (
//       <div className="min-h-screen bg-primary-blue flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-4">
//           <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-red-400 text-2xl">✕</span>
//           </div>
//           <h2 className="text-2xl font-bold text-white mb-2">
//             Course Not Found
//           </h2>
//           <p className="text-dirty-grey mb-6">
//             {error
//               ? "Failed to load course details. Please try again."
//               : "The course you're looking for doesn't exist."}
//           </p>
//           <Button
//             onClick={() => router.push("/courses")}
//             className="bg-accent hover:bg-accent/80 text-white"
//           >
//             Browse All Courses
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full text-white my-10">
//       <div className="bg-secondry-blue rounded-lg p-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-2 space-y-8">
//             <div>
//               <div className="flex items-center gap-4 mb-4">
//                 <Badge
//                   className={`px-2 py-1  border ${
//                     course.status === "PUBLISHED"
//                       ? "border-green-200/50 text-green-200"
//                       : "border-dirty-grey text-white/50"
//                   }`}
//                 >
//                   {course.status}
//                 </Badge>
//                 <Badge className="bg-primary-blue text-white border border-white/50 px-2 py-1">
//                   {course.level}
//                 </Badge>

//                 <Badge className="bg-primary-blue text-white border border-white/50 py-1 px-2">
//                   <Tag className="w-3 h-3 mr-1" />
//                   {course.category.name}
//                 </Badge>
//               </div>
//               <div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//                   {course.title}
//                 </h2>
//                 <p className="text-dirty-grey text-lg leading-relaxed">
//                   {course.description}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
//               <div className="flex items-center gap-2 text-dirty-grey">
//                 <Users className="w-5 h-5" />
//                 <p className="font-semibold">{course.studentsCount}</p>
//               </div>

//               {course.totalChapters! < 1 ? (
//                 <p className="text-dirty-grey font-semibold">No Lectures yet</p>
//               ) : (
//                 <div className="flex items-center gap-2 text-dirty-grey">
//                   <BookOpen className="w-5 h-5" />
//                   <span>{course.totalChapters} lectures</span>
//                 </div>
//               )}

//               {course.updatedAt && (
//                 <div className="flex items-center gap-2 text-dirty-grey">
//                   <Calendar className="w-5 h-5" />
//                   <span>
//                     Updated{" "}
//                     {new Date(course.updatedAt).toLocaleDateString("en-US", {
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </span>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center gap-4 my-6">
//               <img
//                 src={course.instructor.avatar || "https://i.pravatar.cc/150"}
//                 alt={
//                   course.instructor.firstName + " " + course.instructor.lastName
//                 }
//                 className="w-16 h-16 rounded-full"
//               />
//               <div>
//                 <p className="text-dirty-grey text-sm">Created by</p>
//                 <h3 className="text-white font-semibold text-lg">
//                   {course.instructor.firstName +
//                     " " +
//                     course.instructor.lastName}
//                 </h3>
//                 {course.instructor.bio && (
//                   <p className="text-dirty-grey text-sm line-clamp-1">
//                     {course.instructor.bio}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-primary-blue rounded-xl overflow-hidden border border-white/10 sticky top-4">
//               {/* Preview Image */}
//               <div className="relative aspect-video bg-secondry-blue">
//                 <img
//                   src={
//                     course.thumbnail ||
//                     "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
//                   }
//                   alt={course.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                   <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                     <PlayCircle className="w-8 h-8 text-secondry-blue ml-1" />
//                   </button>
//                 </div>
//                 <span className="absolute top-4 left-4 px-3 py-1 bg-white text-secondry-blue rounded-full text-sm font-semibold">
//                   Preview this course
//                 </span>
//               </div>

//               {/* Pricing */}
//               <div className="p-6 space-y-4">
//                 <div>
//                   {course.price === 0 ? (
//                     <div className="text-4xl font-bold text-accent">FREE</div>
//                   ) : (
//                     <div className="flex items-baseline gap-3 mb-2">
//                       <span className="text-4xl font-bold text-white">
//                         {course.currency === "EGP" ? "EGP" : "$"}
//                         {course.price}
//                       </span>
//                       {course.currency && (
//                         <Badge className="bg-primary-blue text-white border-white/10">
//                           {course.currency}
//                         </Badge>
//                       )}
//                     </div>
//                   )}
//                 </div>

//                 <Button
//                   // onClick={handleEnroll}
//                   className="w-full bg-accent hover:bg-accent/80 text-white py-6 text-lg font-semibold"
//                   disabled={course.status !== "PUBLISHED"}
//                 >
//                   {course.status === "PUBLISHED" ? "Enroll Now" : "Coming Soon"}
//                 </Button>

//                 <div className="flex gap-2">
//                   {/* <Button
//                     variant="outline"
//                     //   onClick={() => setIsWishlisted(!isWishlisted)}
//                     className={`flex-1 border-white/10 ${
//                       isWishlisted
//                         ? "bg-accent/20 text-accent border-accent/30"
//                         : "bg-primary-blue text-white hover:bg-accent/20"
//                     }`}
//                   >
//                     <Heart
//                       className={`w-4 h-4 mr-2 ${
//                         isWishlisted ? "fill-accent" : ""
//                       }`}
//                     />
//                     Wishlist
//                   </Button> */}
//                   <Button
//                     variant="outline"
//                     className="flex-1 bg-primary-blue border-white/10 text-white hover:bg-accent/20"
//                   >
//                     <Share2 className="w-4 h-4 mr-2" />
//                     Share
//                   </Button>
//                 </div>

//                 <div className="pt-4 border-t border-white/10 space-y-2 text-sm">
//                   <p className="text-white font-semibold mb-3">
//                     This course includes:
//                   </p>
//                   {/* {courseStats.totalDuration > 0 && (
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <Clock className="w-4 h-4" />
//                       <span>
//                         {formatDuration(courseStats.totalDuration)} on-demand
//                         video
//                       </span>
//                     </div>
//                   )} */}
//                   {course.sections && course.sections.length > 0 && (
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <BookOpen className="w-4 h-4" />
//                       <span>{course.sections.length} sections</span>
//                     </div>
//                   )}
//                   {course.totalChapters! > 0 && (
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <PlaySquare className="w-4 h-4" />
//                       <span>{course.totalChapters} lectures</span>
//                     </div>
//                   )}
//                   <div className="flex items-center gap-3 text-dirty-grey">
//                     <Award className="w-4 h-4" />
//                     <span>Certificate of completion</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-dirty-grey">
//                     <CheckCircle2 className="w-4 h-4" />
//                     <span>Lifetime access</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Progress } from "@/app/_components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import {
  useGetCourseByIdQuery,
  useGetEnrollmentStatusQuery,
  useGetCourseProgressQuery,
  useEnrollInCourseMutation,
  useGetCourseReviewsQuery,
} from "@/store/api";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Loader2,
  PlayCircle,
  PlaySquare,
  Share2,
  Tag,
  Users,
  Lock,
  FileText,
  Star,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { Chapter, ChapterType } from "@/types";

interface CoursePreviewPageProps {
  params: Promise<{ courseId: string }>;
}

const CoursePage = ({ params }: CoursePreviewPageProps) => {
  const { courseId } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Queries
  const {
    data: course,
    isLoading: courseLoading,
    isError: courseError,
  } = useGetCourseByIdQuery(courseId);

  const { data: enrollmentStatus, isLoading: enrollmentLoading } =
    useGetEnrollmentStatusQuery(courseId);

  const { data: progress, isLoading: progressLoading } =
    useGetCourseProgressQuery(courseId, {
      skip: !enrollmentStatus?.isEnrolled,
    });

  const { data: reviewsData, isLoading: reviewsLoading } =
    useGetCourseReviewsQuery(courseId);

  // Mutations
  const [enrollInCourse, { isLoading: enrolling }] =
    useEnrollInCourseMutation();

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

  const isEnrolled = enrollmentStatus?.isEnrolled || false;
  const totalChapters =
    course.sections?.reduce(
      (acc, section) => acc + section.chapters.length,
      0
    ) || 0;

  const handleEnroll = async () => {
    try {
      await enrollInCourse({ courseId }).unwrap();
      // Optionally show success message
    } catch (error) {
      console.error("Enrollment failed:", error);
      // Optionally show error message
    }
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

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)}m`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="min-h-screen w-full text-white">
      {/* Hero Section */}
      <div className="bg-secondry-blue rounded-lg p-8 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge
                className={`px-3 py-1 border ${
                  course.status === "PUBLISHED"
                    ? "border-success/50 text-success"
                    : "border-dirty-grey text-dirty-grey"
                }`}
              >
                {course.status}
              </Badge>
              <Badge className="bg-primary-blue text-white border border-white/20 px-3 py-1">
                {course.level}
              </Badge>
              <Badge className="bg-primary-blue text-white border border-white/20 py-1 px-3">
                <Tag className="w-3 h-3 mr-1" />
                {course.category.name}
              </Badge>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-dirty-grey text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-dirty-grey">
                <Users className="w-5 h-5" />
                <span className="font-semibold">
                  {course.studentsCount} students
                </span>
              </div>

              {totalChapters > 0 && (
                <div className="flex items-center gap-2 text-dirty-grey">
                  <BookOpen className="w-5 h-5" />
                  <span>{totalChapters} lectures</span>
                </div>
              )}

              {course.duration > 0 && (
                <div className="flex items-center gap-2 text-dirty-grey">
                  <Clock className="w-5 h-5" />
                  <span>{formatDuration(course.duration)}</span>
                </div>
              )}

              {course.rating > 0 && (
                <div className="flex items-center gap-2 text-dirty-grey">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-semibold">
                    {course.rating.toFixed(1)}
                  </span>
                  <span>({course.reviewsCount})</span>
                </div>
              )}

              {course.updatedAt && (
                <div className="flex items-center gap-2 text-dirty-grey">
                  <Calendar className="w-5 h-5" />
                  <span>
                    Updated{" "}
                    {new Date(course.updatedAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-4 pt-4">
              <img
                src={course.instructor.avatar || "https://i.pravatar.cc/150"}
                alt={`${course.instructor.firstName} ${course.instructor.lastName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-dirty-grey text-sm">Created by</p>
                <h3 className="text-white font-semibold text-lg">
                  {course.instructor.firstName} {course.instructor.lastName}
                </h3>
                {course.instructor.bio && (
                  <p className="text-dirty-grey text-sm line-clamp-1">
                    {course.instructor.bio}
                  </p>
                )}
              </div>
            </div>

            {/* Progress Bar (if enrolled) */}
            {isEnrolled && progress && (
              <div className="bg-primary-blue rounded-lg p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-main-blue" />
                    <span className="font-semibold">Your Progress</span>
                  </div>
                  <span className="text-main-blue font-bold">
                    {Math.round(progress.progressPercentage)}%
                  </span>
                </div>
                <Progress
                  value={progress.progressPercentage}
                  className="h-3 mb-2"
                />
                <p className="text-dirty-grey text-sm">
                  {progress.completedChapters} of {progress.totalChapters}{" "}
                  lessons completed
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar - Sticky Card */}
          <div className="lg:col-span-1">
            <div className="bg-primary-blue rounded-xl overflow-hidden border border-white/10 sticky top-4">
              {/* Preview Image */}
              <div className="relative aspect-video bg-secondary-blue">
                <img
                  src={
                    course.thumbnail ||
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  }
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <button className="w-15 h-15 bg-primary-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-secondary-blue" />
                  </button>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-secondry-blue rounded-full text-sm font-semibold">
                  Preview
                </span>
              </div>

              {/* Pricing & Actions */}
              <div className="p-6 space-y-4">
                <div>
                  {course.price === 0 ? (
                    <div className="text-4xl font-bold text-success">FREE</div>
                  ) : (
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-white">
                        {course.currency === "EGP" ? "EGP" : "$"} {course.price}
                      </span>
                      <Badge className="bg-secondary-blue text-white border-white/10">
                        {course.currency}
                      </Badge>
                    </div>
                  )}
                </div>

                {isEnrolled ? (
                  <Button
                    onClick={() => router.push(`/learn/course/${courseId}`)}
                    className="w-full bg-success hover:bg-success/80 text-white py-6 text-lg font-semibold"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Continue Learning
                  </Button>
                ) : course.price > 0 ? (
                  <Button
                    onClick={() => router.push(`/checkout/${courseId}`)}
                    disabled={course.status !== "PUBLISHED"}
                    className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold disabled:opacity-50"
                  >
                    Proceed to Checkout
                  </Button>
                ) : (
                  <Button
                    onClick={handleEnroll}
                    disabled={course.status !== "PUBLISHED" || enrolling}
                    className="w-full bg-main-blue hover:bg-main-blue/80 text-white py-6 text-lg font-semibold disabled:opacity-50"
                  >
                    {enrolling ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enrolling...
                      </>
                    ) : (
                      "Enroll Now"
                    )}
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full bg-primary-blue border-white/10 text-white hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Course
                </Button>

                {/* Course Includes */}
                <div className="pt-4 border-t border-white/10 space-y-3 text-sm">
                  <p className="text-white font-semibold mb-3">
                    This course includes:
                  </p>

                  {course.duration > 0 && (
                    <div className="flex items-center gap-3 text-dirty-grey">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {formatDuration(course.duration)} on-demand content
                      </span>
                    </div>
                  )}

                  {course.sections && course.sections.length > 0 && (
                    <div className="flex items-center gap-3 text-dirty-grey">
                      <BookOpen className="w-4 h-4 flex-shrink-0" />
                      <span>{course.sections.length} sections</span>
                    </div>
                  )}

                  {totalChapters > 0 && (
                    <div className="flex items-center gap-3 text-dirty-grey">
                      <PlaySquare className="w-4 h-4 flex-shrink-0" />
                      <span>{totalChapters} lectures</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-dirty-grey">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span>Certificate of completion</span>
                  </div>

                  <div className="flex items-center gap-3 text-dirty-grey">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
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
              Leactures
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
            <div className="bg-secondry-blue rounded-lg p-8 space-y-8">
              {/* Learning Outcomes */}
              {course.learningOutcomes &&
                course.learningOutcomes.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      What you'll learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-dirty-grey">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Requirements */}
              {course.requirements && course.requirements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-dirty-grey"
                      >
                        <span className="text-main-blue mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-dirty-grey leading-relaxed whitespace-pre-line">
                  {course.description}
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="mt-6">
            <div className="bg-secondry-blue rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <p className="text-dirty-grey">
                  {course.sections?.length || 0} sections • {totalChapters}{" "}
                  lectures • {formatDuration(course.duration)}
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
                      progress?.chapterProgress?.filter(
                        (cp) =>
                          section.chapters.some(
                            (ch) => ch.id === cp.chapterId
                          ) && cp.isCompleted
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
                              <h3 className="font-semibold text-lg">
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
                              const chapterProgress =
                                progress?.chapterProgress?.find(
                                  (cp) => cp.chapterId === chapter.id
                                );
                              const isCompleted =
                                chapterProgress?.isCompleted || false;
                              const canAccess = chapter.isFree || isEnrolled;

                              return (
                                <div
                                  key={chapter.id}
                                  onClick={() =>
                                    router.push(
                                      `/learn/course/${courseId}?chapterId=${chapter.id}`
                                    )
                                  }
                                  className={`flex items-center justify-between p-4 rounded-lg border border-white/5 ${
                                    canAccess
                                      ? "hover:bg-white/5 cursor-pointer"
                                      : "opacity-60"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {isCompleted ? (
                                      <CheckCircle className="w-5 h-5 text-success" />
                                    ) : (
                                      <Icon className="w-5 h-5 text-dirty-grey" />
                                    )}
                                    <div>
                                      <p className="font-medium">
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
                                      <span>
                                        {formatDuration(chapter.duration)}
                                      </span>
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
                  <p className="text-dirty-grey text-lg">
                    No content available yet
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-secondary-blue rounded-lg p-8">
              {reviewsLoading ? (
                <div className="text-center py-12">
                  <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
                  <p className="text-dirty-grey">Loading reviews...</p>
                </div>
              ) : reviewsData && reviewsData.reviews.length > 0 ? (
                <div className="space-y-6">
                  {/* Average Rating */}
                  <div className="flex items-center gap-8 pb-6 border-b border-white/10">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">
                        {reviewsData.averageRating.toFixed(1)}
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.round(reviewsData.averageRating)
                                ? "fill-warning text-warning"
                                : "text-dirty-grey"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-dirty-grey text-sm">
                        {reviewsData.totalReviews} ratings
                      </p>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviewsData.reviews.map((review) => (
                      <div key={review.id} className="space-y-3">
                        <div className="flex items-start gap-4">
                          <img
                            src={
                              review.user.avatar || "https://i.pravatar.cc/150"
                            }
                            alt={`${review.user.firstName} ${review.user.lastName}`}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold">
                                  {review.user.firstName} {review.user.lastName}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < review.rating
                                            ? "fill-warning text-warning"
                                            : "text-dirty-grey"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-dirty-grey text-sm">
                                    {new Date(
                                      review.createdAt
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-dirty-grey leading-relaxed">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Star className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
                  <p className="text-dirty-grey text-lg">No reviews yet</p>
                  <p className="text-dirty-grey text-sm mt-2">
                    Be the first to review this course
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursePage;
