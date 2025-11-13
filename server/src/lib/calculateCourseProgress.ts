// // First, update your Prisma schema with progress tracking models
// // Add these models to your schema.prisma file:

// import { prisma } from "../config/db";

// /*
// model ChapterProgress {
//   id String @id @default(uuid()) @map("_id")
//   isCompleted Boolean @default(false)
//   watchedDuration Float @default(0.0) // in minutes
//   lastWatchedAt DateTime?
//   completedAt DateTime?

//   student Student @relation(fields: [studentId], references: [id], onDelete: Cascade)
//   studentId String

//   chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)
//   chapterId String

//   enrollment Enrollment @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
//   enrollmentId String

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   @@unique([studentId, chapterId])
//   @@index([studentId])
//   @@index([chapterId])
//   @@index([enrollmentId])
// }

// // Update existing models to add relations:
// // In Student model, add:
//   chapterProgress ChapterProgress[]

// // In Chapter model, add:
//   progress ChapterProgress[]

// // In Enrollment model, add:
//   chapterProgress ChapterProgress[]
// */

// // lib/progress.ts

// export interface ProgressStats {
//   totalChapters: number;
//   completedChapters: number;
//   progressPercentage: number;
//   totalDuration: number;
//   watchedDuration: number;
//   timeRemaining: number;
//   sectionsProgress: {
//     sectionId: string;
//     sectionTitle: string;
//     totalChapters: number;
//     completedChapters: number;
//     percentage: number;
//   }[];
// }

// /**
//  * Calculate student progress for a specific course
//  */
// export async function calculateCourseProgress(
//   studentId: string,
//   courseId: string
// ): Promise<ProgressStats> {
//   // Get all chapters in the course with their progress
//   const course = await prisma.course.findUnique({
//     where: { id: courseId },
//     include: {
//       sections: {
//         orderBy: { order: "asc" },
//         include: {
//           chapters: {
//             orderBy: { order: "asc" },
//             include: {
//               progress: {
//                 where: { studentId },
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   if (!course) {
//     throw new Error("Course not found");
//   }

//   let totalChapters = 0;
//   let completedChapters = 0;
//   let totalDuration = 0;
//   let watchedDuration = 0;

//   const sectionsProgress = course.sections.map((section) => {
//     const sectionTotalChapters = section.chapters.length;
//     const sectionCompletedChapters = section.chapters.filter(
//       (chapter) => chapter.progress[0]?.isCompleted
//     ).length;

//     section.chapters.forEach((chapter) => {
//       totalChapters++;
//       totalDuration += chapter.duration || 0;

//       if (chapter.progress[0]) {
//         watchedDuration += chapter.progress[0].watchedDuration;
//         if (chapter.progress[0].isCompleted) {
//           completedChapters++;
//         }
//       }
//     });

//     return {
//       sectionId: section.id,
//       sectionTitle: section.title,
//       totalChapters: sectionTotalChapters,
//       completedChapters: sectionCompletedChapters,
//       percentage:
//         sectionTotalChapters > 0
//           ? Math.round((sectionCompletedChapters / sectionTotalChapters) * 100)
//           : 0,
//     };
//   });

//   const progressPercentage =
//     totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

//   return {
//     totalChapters,
//     completedChapters,
//     progressPercentage: Math.round(progressPercentage * 100) / 100,
//     totalDuration,
//     watchedDuration,
//     timeRemaining: Math.max(0, totalDuration - watchedDuration),
//     sectionsProgress,
//   };
// }

// /**
//  * Update chapter progress for a student
//  */
// export async function updateChapterProgress(
//   studentId: string,
//   chapterId: string,
//   enrollmentId: string,
//   data: {
//     watchedDuration?: number;
//     isCompleted?: boolean;
//   }
// ) {
//   const { watchedDuration, isCompleted } = data;

//   // Upsert chapter progress
//   const progress = await prisma.chapterProgress.upsert({
//     where: {
//       studentId_chapterId: {
//         studentId,
//         chapterId,
//       },
//     },
//     update: {
//       watchedDuration: watchedDuration ?? undefined,
//       isCompleted: isCompleted ?? undefined,
//       lastWatchedAt: new Date(),
//       completedAt: isCompleted ? new Date() : undefined,
//     },
//     create: {
//       studentId,
//       chapterId,
//       enrollmentId,
//       watchedDuration: watchedDuration || 0,
//       isCompleted: isCompleted || false,
//       lastWatchedAt: new Date(),
//       completedAt: isCompleted ? new Date() : undefined,
//     },
//   });

//   // Get the chapter to find course
//   const chapter = await prisma.chapter.findUnique({
//     where: { id: chapterId },
//     include: {
//       section: {
//         include: {
//           course: true,
//         },
//       },
//     },
//   });

//   if (chapter) {
//     // Recalculate course progress
//     const courseProgress = await calculateCourseProgress(
//       studentId,
//       chapter.section.courseId
//     );

//     // Update enrollment progress
//     await prisma.enrollment.update({
//       where: { id: enrollmentId },
//       data: {
//         progress: courseProgress.progressPercentage,
//         completed: courseProgress.progressPercentage === 100,
//       },
//     });
//   }

//   return progress;
// }

// /**
//  * Mark chapter as completed
//  */
// export async function markChapterComplete(
//   studentId: string,
//   chapterId: string,
//   enrollmentId: string
// ) {
//   return updateChapterProgress(studentId, chapterId, enrollmentId, {
//     isCompleted: true,
//   });
// }

// /**
//  * Get student's overall progress across all courses
//  */
// export async function getStudentOverallProgress(studentId: string) {
//   const enrollments = await prisma.enrollment.findMany({
//     where: { studentId },
//     include: {
//       course: {
//         include: {
//           sections: {
//             include: {
//               chapters: {
//                 include: {
//                   progress: {
//                     where: { studentId },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   return enrollments.map((enrollment) => ({
//     enrollmentId: enrollment.id,
//     courseId: enrollment.course!.id,
//     courseTitle: enrollment.course!.title,
//     progress: enrollment.progress,
//     completed: enrollment.completed,
//     enrolledAt: enrollment.enrolledAt,
//   }));
// }

// /**
//  * Get next chapter for student to watch
//  */
// export async function getNextChapter(studentId: string, courseId: string) {
//   const course = await prisma.course.findUnique({
//     where: { id: courseId },
//     include: {
//       sections: {
//         orderBy: { order: "asc" },
//         include: {
//           chapters: {
//             orderBy: { order: "asc" },
//             include: {
//               progress: {
//                 where: { studentId },
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   if (!course) return null;

//   // Find first incomplete chapter
//   for (const section of course.sections) {
//     for (const chapter of section.chapters) {
//       if (!chapter.progress[0]?.isCompleted) {
//         return {
//           chapter,
//           section,
//         };
//       }
//     }
//   }

//   return null; // All chapters completed
// }

// /**
//  * Get recently watched chapters
//  */
// export async function getRecentlyWatchedChapters(
//   studentId: string,
//   limit: number = 5
// ) {
//   const recentProgress = await prisma.chapterProgress.findMany({
//     where: {
//       studentId,
//       lastWatchedAt: {
//         not: null,
//       },
//     },
//     orderBy: {
//       lastWatchedAt: "desc",
//     },
//     take: limit,
//     include: {
//       chapter: {
//         include: {
//           section: {
//             include: {
//               course: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   return recentProgress.map((progress) => ({
//     chapterId: progress.chapterId,
//     chapterTitle: progress.chapter.title,
//     sectionTitle: progress.chapter.section.title,
//     courseId: progress.chapter.section.courseId,
//     courseTitle: progress.chapter.section.course.title,
//     lastWatchedAt: progress.lastWatchedAt,
//     watchedDuration: progress.watchedDuration,
//     isCompleted: progress.isCompleted,
//   }));
// }
