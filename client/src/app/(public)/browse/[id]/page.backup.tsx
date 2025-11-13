"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   Clock,
//   Users,
//   Star,
//   Award,
//   BookOpen,
//   Play,
//   CheckCircle2,
//   Lock,
//   Download,
//   Share2,
//   Heart,
//   Globe,
//   BarChart,
// } from "lucide-react";
// import { Button } from "@/app/_components/ui/button";
// import { Badge } from "@/app/_components/ui/badge";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/app/_components/ui/accordion";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/app/_components/ui/tabs";

interface CoursePreviewPageProps {
  params: { id: string };
}

export default function CoursePreviewPage({ params }: CoursePreviewPageProps) {
  const id = params?.id;
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
//   const course = {
//     id: params.id,
//     title: "Complete Web Development Bootcamp 2024",
//     description:
//       "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 10+ real-world projects and become a full-stack developer.",
//     imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     videoPreviewUrl: "https://example.com/preview.mp4",
//     price: 89.99,
//     originalPrice: 149.99,
//     level: "Beginner",
//     rating: 4.8,
//     reviewsCount: 3456,
//     studentsCount: 15234,
//     language: "English",
//     lastUpdated: "November 2024",
//     instructor: {
//       id: "1",
//       name: "Dr. Sarah Johnson",
//       bio: "Full-stack developer with 15+ years of experience",
//       avatar: "https://i.pravatar.cc/150?img=1",
//       students: 50000,
//       courses: 12,
//       rating: 4.9,
//     },
//     stats: {
//       duration: "108.2 hours",
//       lectures: 285,
//       articles: 15,
//       downloadableResources: 42,
//       certificates: true,
//       lifetimeAccess: true,
//       mobileAccess: true,
//     },
//     learningPoints: [
//       "Build full-stack web applications from scratch",
//       "Master React, Node.js, Express, and MongoDB",
//       "Deploy applications to production environments",
//       "Implement authentication and authorization",
//       "Work with RESTful APIs and databases",
//       "Apply modern JavaScript ES6+ features",
//       "Use Git and GitHub for version control",
//       "Understand responsive design principles",
//     ],
//     requirements: [
//       "Basic computer skills",
//       "A computer with internet connection",
//       "No prior programming experience needed",
//       "Willingness to learn and practice",
//     ],
//     sections: [
//       {
//         id: "1",
//         title: "Introduction & Setup",
//         duration: "45 min",
//         lectures: 7,
//         chapters: [
//           {
//             id: "1",
//             title: "Welcome to the Course",
//             duration: "5:30",
//             isFree: true,
//           },
//           { id: "2", title: "Course Overview", duration: "8:15", isFree: true },
//           {
//             id: "3",
//             title: "Setting Up Your Environment",
//             duration: "12:20",
//             isFree: false,
//           },
//           {
//             id: "4",
//             title: "Installing VS Code",
//             duration: "6:45",
//             isFree: false,
//           },
//           {
//             id: "5",
//             title: "Git & GitHub Setup",
//             duration: "10:30",
//             isFree: false,
//           },
//         ],
//       },
//       {
//         id: "2",
//         title: "HTML & CSS Fundamentals",
//         duration: "5.5 hours",
//         lectures: 32,
//         chapters: [
//           {
//             id: "6",
//             title: "HTML Document Structure",
//             duration: "15:30",
//             isFree: false,
//           },
//           {
//             id: "7",
//             title: "HTML Elements and Tags",
//             duration: "20:45",
//             isFree: false,
//           },
//           // Add more chapters...
//         ],
//       },
//       {
//         id: "3",
//         title: "JavaScript Essentials",
//         duration: "8.5 hours",
//         lectures: 45,
//         chapters: [],
//       },
//       {
//         id: "4",
//         title: "React Development",
//         duration: "12 hours",
//         lectures: 58,
//         chapters: [],
//       },
//       {
//         id: "5",
//         title: "Backend with Node.js",
//         duration: "10 hours",
//         lectures: 48,
//         chapters: [],
//       },
//     ],
//   };

//   const handleEnroll = () => {
//     router.push(`/checkout/${course.id}`);
//   };

//   const totalLectures = course.sections.reduce(
//     (acc, section) => acc + section.lectures,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-primary-blue">
//       {/* Hero Section */}
//       <div className="bg-secondry-blue border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left - Course Info */}
//             <div className="lg:col-span-2 space-y-6">
//               <div>
//                 <div className="flex items-center gap-2 mb-3">
//                   <Badge className="bg-accent/20 text-accent border-accent/30">
//                     Bestseller
//                   </Badge>
//                   <Badge className="bg-primary-blue text-white border-white/10">
//                     {course.level}
//                   </Badge>
//                 </div>
//                 <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
//                   {course.title}
//                 </h1>
//                 <p className="text-dirty-grey text-lg leading-relaxed">
//                   {course.description}
//                 </p>
//               </div>

//               {/* Stats Bar */}
//               <div className="flex flex-wrap items-center gap-4 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   <span className="text-white font-semibold">
//                     {course.rating}
//                   </span>
//                   <span className="text-dirty-grey">
//                     ({course.reviewsCount.toLocaleString()} ratings)
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-dirty-grey">
//                   <Users className="w-5 h-5" />
//                   <span>{course.studentsCount.toLocaleString()} students</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-dirty-grey">
//                   <Globe className="w-5 h-5" />
//                   <span>{course.language}</span>
//                 </div>
//               </div>

//               {/* Instructor */}
//               <div className="flex items-center gap-4 p-4 bg-primary-blue rounded-lg border border-white/10">
//                 <img
//                   src={course.instructor.avatar}
//                   alt={course.instructor.name}
//                   className="w-16 h-16 rounded-full border-2 border-accent"
//                 />
//                 <div>
//                   <p className="text-dirty-grey text-sm">Created by</p>
//                   <h3 className="text-white font-semibold text-lg">
//                     {course.instructor.name}
//                   </h3>
//                   <p className="text-dirty-grey text-sm">
//                     {course.instructor.students.toLocaleString()} students •{" "}
//                     {course.instructor.courses} courses
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Enrollment Card */}
//             <div className="lg:col-span-1">
//               <div className="bg-primary-blue rounded-xl overflow-hidden border border-white/10 sticky top-4">
//                 {/* Preview Video */}
//                 <div className="relative aspect-video bg-secondry-blue">
//                   <img
//                     src={course.imageUrl}
//                     alt={course.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                     <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
//                       <Play className="w-8 h-8 text-secondry-blue ml-1" />
//                     </button>
//                   </div>
//                   <span className="absolute top-4 left-4 px-3 py-1 bg-white text-secondry-blue rounded-full text-sm font-semibold">
//                     Preview this course
//                   </span>
//                 </div>

//                 {/* Pricing */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <div className="flex items-baseline gap-3 mb-2">
//                       <span className="text-4xl font-bold text-white">
//                         ${course.price}
//                       </span>
//                       <span className="text-lg text-dirty-grey line-through">
//                         ${course.originalPrice}
//                       </span>
//                       <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
//                         40% OFF
//                       </Badge>
//                     </div>
//                     <p className="text-red-400 text-sm font-medium">
//                       🔥 2 days left at this price!
//                     </p>
//                   </div>

//                   <Button
//                     onClick={handleEnroll}
//                     className="w-full bg-accent hover:bg-accent/80 text-white py-6 text-lg font-semibold"
//                   >
//                     Enroll Now
//                   </Button>

//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       onClick={() => setIsWishlisted(!isWishlisted)}
//                       className={`flex-1 border-white/10 ${
//                         isWishlisted
//                           ? "bg-accent/20 text-accent border-accent/30"
//                           : "bg-primary-blue text-white hover:bg-accent/20"
//                       }`}
//                     >
//                       <Heart
//                         className={`w-4 h-4 mr-2 ${
//                           isWishlisted ? "fill-accent" : ""
//                         }`}
//                       />
//                       Wishlist
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="flex-1 bg-primary-blue border-white/10 text-white hover:bg-accent/20"
//                     >
//                       <Share2 className="w-4 h-4 mr-2" />
//                       Share
//                     </Button>
//                   </div>

//                   <div className="pt-4 border-t border-white/10 space-y-2 text-sm">
//                     <p className="text-white font-semibold mb-3">
//                       This course includes:
//                     </p>
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <Clock className="w-4 h-4" />
//                       <span>{course.stats.duration} on-demand video</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <BookOpen className="w-4 h-4" />
//                       <span>{course.stats.articles} articles</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <Download className="w-4 h-4" />
//                       <span>
//                         {course.stats.downloadableResources} resources
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <Award className="w-4 h-4" />
//                       <span>Certificate of completion</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-dirty-grey">
//                       <CheckCircle2 className="w-4 h-4" />
//                       <span>Lifetime access</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Course Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             {/* What You'll Learn */}
//             <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 What you'll learn
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {course.learningPoints.map((point, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
//                     <span className="text-dirty-grey">{point}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Course Content */}
//             <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-white">
//                   Course content
//                 </h2>
//                 <div className="text-dirty-grey text-sm">
//                   {course.sections.length} sections • {totalLectures} lectures •{" "}
//                   {course.stats.duration} total
//                 </div>
//               </div>

//               <Accordion type="single" collapsible className="space-y-2">
//                 {course.sections.map((section, index) => (
//                   <AccordionItem
//                     key={section.id}
//                     value={section.id}
//                     className="bg-primary-blue rounded-lg border border-white/10 overflow-hidden"
//                   >
//                     <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary-blue/80">
//                       <div className="flex items-center justify-between w-full text-left">
//                         <span className="text-white font-medium">
//                           {index + 1}. {section.title}
//                         </span>
//                         <span className="text-dirty-grey text-sm mr-2">
//                           {section.lectures} lectures • {section.duration}
//                         </span>
//                       </div>
//                     </AccordionTrigger>
//                     <AccordionContent className="px-4 pb-2">
//                       <div className="space-y-1">
//                         {section.chapters.map((chapter) => (
//                           <div
//                             key={chapter.id}
//                             className="flex items-center justify-between py-2 text-sm hover:bg-white/5 px-2 rounded"
//                           >
//                             <div className="flex items-center gap-3">
//                               {chapter.isFree ? (
//                                 <Play className="w-4 h-4 text-accent" />
//                               ) : (
//                                 <Lock className="w-4 h-4 text-dirty-grey" />
//                               )}
//                               <span className="text-dirty-grey">
//                                 {chapter.title}
//                               </span>
//                               {chapter.isFree && (
//                                 <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
//                                   Preview
//                                 </Badge>
//                               )}
//                             </div>
//                             <span className="text-dirty-grey">
//                               {chapter.duration}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>

//             {/* Requirements */}
//             <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
//               <h2 className="text-2xl font-bold text-white mb-4">
//                 Requirements
//               </h2>
//               <ul className="space-y-2">
//                 {course.requirements.map((req, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-3 text-dirty-grey"
//                   >
//                     <span className="text-accent mt-1">•</span>
//                     {req}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Sidebar - Instructor */}
//           <div className="lg:col-span-1">
//             <div className="bg-secondry-blue rounded-xl p-6 border border-white/10 sticky top-4">
//               <h3 className="text-xl font-bold text-white mb-4">Instructor</h3>
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={course.instructor.avatar}
//                   alt={course.instructor.name}
//                   className="w-20 h-20 rounded-full border-2 border-accent"
//                 />
//                 <div>
//                   <h4 className="text-white font-semibold text-lg">
//                     {course.instructor.name}
//                   </h4>
//                   <p className="text-dirty-grey text-sm">
//                     {course.instructor.bio}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                     <span className="text-white font-semibold">
//                       {course.instructor.rating}
//                     </span>
//                   </div>
//                   <p className="text-dirty-grey text-sm">Instructor rating</p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <Users className="w-4 h-4 text-accent" />
//                     <span className="text-white font-semibold">
//                       {course.instructor.students.toLocaleString()}
//                     </span>
//                   </div>
//                   <p className="text-dirty-grey text-sm">Students</p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <BookOpen className="w-4 h-4 text-accent" />
//                     <span className="text-white font-semibold">
//                       {course.instructor.courses}
//                     </span>
//                   </div>
//                   <p className="text-dirty-grey text-sm">Courses</p>
//                 </div>
//               </div>

//               <Button
//                 variant="outline"
//                 className="w-full mt-4 bg-primary-blue border-white/10 hover:bg-accent/20 text-white"
//               >
//                 View Profile
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Play,
  CheckCircle2,
  Lock,
  Download,
  Share2,
  Heart,
  Globe,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { useGetCourseByIdQuery } from "@/store/api";

interface CoursePreviewPageProps {
  params: Promise<{ id: string }>;
}

export default function CoursePreviewPage({ params }: CoursePreviewPageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams?.id;
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Handle missing ID - this will trigger the error boundary
  if (!id) {
    throw new Error("Course ID is required");
  }

  // Fetch course data from API
  const { data: courseRaw, isLoading, isError, error } = useGetCourseByIdQuery(id);
  const course: any = courseRaw as any; // loosen type here to avoid many type mismatches in this page

  // Calculate course statistics
  const courseStats = useMemo(() => {
    if (!course?.sections) return { totalLectures: 0, totalDuration: 0 };

    let totalLectures = 0;
    let totalDuration = 0;

    course.sections.forEach((section) => {
      if (section.chapters) {
        totalLectures += section.chapters.length;
        section.chapters.forEach((chapter) => {
            if (chapter.duration) {
            // Parse duration (assuming format like "5:30" or "1:05:30")
            const parts = String(chapter.duration).split(":").map(Number);
            if (parts.length === 2) {
              totalDuration += parts[0] * 60 + parts[1]; // minutes
            } else if (parts.length === 3) {
              totalDuration += parts[0] * 3600 + parts[1] * 60 + parts[2]; // hours
            }
          }
        });
      }
    });

    return { totalLectures, totalDuration };
  }, [course?.sections]);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const handleEnroll = () => {
    router.push(`/checkout/${id}`);
  };

  // Show loading state - this will be handled by loading.tsx
  if (isLoading) {
    return null; // Let the loading.tsx handle this
  }

  // Show error state - this will be handled by error.tsx or not-found.tsx
  if (isError || !course) {
    // error can be various shapes; normalize message
    const msg = (error as any)?.message || JSON.stringify(error) || "Course not found";
    throw new Error(msg);
  }

  // Check if user is enrolled in this course
  useEffect(() => {
    if (course && user) {
      const userEnrolled = (course.enrollments || []).some(
        (enrollment: any) => enrollment.userId === user.id
      );
      setIsEnrolled(userEnrolled || false);
    }
  }, [course, user]);

  // If course is not found or doesn't exist
  if (!course) {
    throw new Error("Course not found");
  }

  const enrollmentCount = course.enrollments?.length || 0;
  const hasPrice = course.price !== undefined && course.price !== null;
  const isFree = !hasPrice || course.price === 0;

  return (
    <div className="min-h-screen bg-primary-blue">
      {/* Hero Section */}
      <div className="bg-secondry-blue border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Course Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {course.status === "Published" && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Published
                    </Badge>
                  )}
                  {course.level && (
                    <Badge className="bg-primary-blue text-white border-white/10">
                      {course.level}
                    </Badge>
                  )}
                  {course.category && (
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      <Tag className="w-3 h-3 mr-1" />
                      {course.category.name}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {course.title}
                </h1>
                {course.description && (
                  <p className="text-dirty-grey text-lg leading-relaxed">
                    {course.description}
                  </p>
                )}
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-dirty-grey">
                  <Users className="w-5 h-5" />
                  <span>
                    {enrollmentCount.toLocaleString()} students enrolled
                  </span>
                </div>
                {courseStats.totalLectures > 0 && (
                  <div className="flex items-center gap-2 text-dirty-grey">
                    <BookOpen className="w-5 h-5" />
                    <span>{courseStats.totalLectures} lectures</span>
                  </div>
                )}
                {courseStats.totalDuration > 0 && (
                  <div className="flex items-center gap-2 text-dirty-grey">
                    <Clock className="w-5 h-5" />
                    <span>
                      {formatDuration(courseStats.totalDuration)} total
                    </span>
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
              {course.teacher && (
                <div className="flex items-center gap-4 p-4 bg-primary-blue rounded-lg border border-white/10">
                  <img
                    src={
                      course.teacher.profilePictureUrl ||
                      "https://i.pravatar.cc/150"
                    }
                    alt={course.teacher.name}
                    className="w-16 h-16 rounded-full border-2 border-accent object-cover"
                  />
                  <div>
                    <p className="text-dirty-grey text-sm">Created by</p>
                    <h3 className="text-white font-semibold text-lg">
                      {course.teacher.name}
                    </h3>
                    {course.teacher.bio && (
                      <p className="text-dirty-grey text-sm line-clamp-1">
                        {course.teacher.bio}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-primary-blue rounded-xl overflow-hidden border border-white/10 sticky top-4">
                {/* Preview Image */}
                <div className="relative aspect-video bg-secondry-blue">
                  <img
                    src={
                      course.imageUrl ||
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    }
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-secondry-blue ml-1" />
                    </button>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white text-secondry-blue rounded-full text-sm font-semibold">
                    Preview this course
                  </span>
                </div>

                {/* Pricing */}
                <div className="p-6 space-y-4">
                  <div>
                    {isFree ? (
                      <div className="text-4xl font-bold text-accent">FREE</div>
                    ) : (
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-4xl font-bold text-white">
                          {course.currency === "EGP" ? "EGP" : "$"}
                          {course.price}
                        </span>
                        {course.currency && (
                          <Badge className="bg-primary-blue text-white border-white/10">
                            {course.currency}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handleEnroll}
                    className="w-full bg-accent hover:bg-accent/80 text-white py-6 text-lg font-semibold"
                    disabled={course.status !== "Published"}
                  >
                    {course.status === "Published"
                      ? "Enroll Now"
                      : "Coming Soon"}
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`flex-1 border-white/10 ${
                        isWishlisted
                          ? "bg-accent/20 text-accent border-accent/30"
                          : "bg-primary-blue text-white hover:bg-accent/20"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 mr-2 ${
                          isWishlisted ? "fill-accent" : ""
                        }`}
                      />
                      Wishlist
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-primary-blue border-white/10 text-white hover:bg-accent/20"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2 text-sm">
                    <p className="text-white font-semibold mb-3">
                      This course includes:
                    </p>
                    {courseStats.totalDuration > 0 && (
                      <div className="flex items-center gap-3 text-dirty-grey">
                        <Clock className="w-4 h-4" />
                        <span>
                          {formatDuration(courseStats.totalDuration)} on-demand
                          video
                        </span>
                      </div>
                    )}
                    {course.sections && course.sections.length > 0 && (
                      <div className="flex items-center gap-3 text-dirty-grey">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.sections.length} sections</span>
                      </div>
                    )}
                    {courseStats.totalLectures > 0 && (
                      <div className="flex items-center gap-3 text-dirty-grey">
                        <Play className="w-4 h-4" />
                        <span>{courseStats.totalLectures} lectures</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-dirty-grey">
                      <Award className="w-4 h-4" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-dirty-grey">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Course Description */}
            {course.description && (
              <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About this course
                </h2>
                <p className="text-dirty-grey leading-relaxed whitespace-pre-line">
                  {course.description}
                </p>
              </div>
            )}

            {/* Course Content */}
            {course.sections && course.sections.length > 0 && (
              <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Course content
                  </h2>
                  <div className="text-dirty-grey text-sm">
                    {course.sections.length} sections •{" "}
                    {courseStats.totalLectures} lectures
                    {courseStats.totalDuration > 0 &&
                      ` • ${formatDuration(courseStats.totalDuration)} total`}
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {course.sections.map((section, index) => {
                    const sectionLectures = section.chapters?.length || 0;
                    const sectionDuration =
                      section.chapters?.reduce((acc, chapter) => {
                        if (chapter.duration) {
                          const parts = chapter.duration.split(":").map(Number);
                          if (parts.length === 2) {
                            return acc + parts[0] * 60 + parts[1];
                          } else if (parts.length === 3) {
                            return (
                              acc + parts[0] * 3600 + parts[1] * 60 + parts[2]
                            );
                          }
                        }
                        return acc;
                      }, 0) || 0;

                    return (
                      <AccordionItem
                        key={section.id}
                        value={section.id}
                        className="bg-primary-blue rounded-lg border border-white/10 overflow-hidden"
                      >
                        <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary-blue/80">
                          <div className="flex items-center justify-between w-full text-left">
                            <span className="text-white font-medium">
                              {index + 1}. {section.title}
                            </span>
                            <span className="text-dirty-grey text-sm mr-2">
                              {sectionLectures} lectures
                              {sectionDuration > 0 &&
                                ` • ${formatDuration(sectionDuration)}`}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          {section.chapters && section.chapters.length > 0 ? (
                            <div className="space-y-1">
                              {section.chapters.map((chapter) => (
                                <button
                                  key={chapter.id}
                                  onClick={() => {
                                    // Navigate to chapter page - free chapters are accessible to all
                                    // Locked chapters require enrollment
                                    if (chapter.isFree || isEnrolled) {
                                      router.push(
                                        `/browse/${id}/chapter/${chapter.id}`
                                      );
                                    } else {
                                      // Show enrollment prompt for locked content
                                      router.push(`/checkout/${id}`);
                                    }
                                  }}
                                  className="flex items-center justify-between py-2 text-sm hover:bg-white/5 px-2 rounded w-full text-left transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    {chapter.isFree ? (
                                      <Play className="w-4 h-4 text-accent" />
                                    ) : (
                                      <Lock className="w-4 h-4 text-dirty-grey" />
                                    )}
                                    <span className="text-dirty-grey hover:text-white">
                                      {chapter.title}
                                    </span>
                                    {chapter.isFree && (
                                      <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                                        Preview
                                      </Badge>
                                    )}
                                  </div>
                                  {chapter.duration && (
                                    <span className="text-dirty-grey">
                                      {chapter.duration}
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="text-dirty-grey text-sm py-2">
                              No chapters available yet
                            </p>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            )}

            {/* Category Info */}
            {course.category && (
              <div className="bg-secondry-blue rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Category</h2>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Tag className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      {course.category.name}
                    </h3>
                    {course.category.description && (
                      <p className="text-dirty-grey text-sm">
                        {course.category.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Instructor */}
          {course.teacher && (
            <div className="lg:col-span-1">
              <div className="bg-secondry-blue rounded-xl p-6 border border-white/10 sticky top-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Instructor
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={
                      course.teacher.profilePictureUrl ||
                      "https://i.pravatar.cc/150"
                    }
                    alt={course.teacher.name}
                    className="w-20 h-20 rounded-full border-2 border-accent object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {course.teacher.name}
                    </h4>
                    {course.teacher.bio && (
                      <p className="text-dirty-grey text-sm line-clamp-2">
                        {course.teacher.bio}
                      </p>
                    )}
                  </div>
                </div>

                {course.teacher.email && (
                  <div className="py-4 border-t border-white/10">
                    <p className="text-dirty-grey text-sm mb-1">Email</p>
                    <p className="text-white text-sm">{course.teacher.email}</p>
                  </div>
                )}

                <Button
                  variant="outline"
                  onClick={() => router.push(`/instructor/${course.teacherId}`)}
                  className="w-full mt-4 bg-primary-blue border-white/10 hover:bg-accent/20 text-white"
                >
                  View Profile
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
