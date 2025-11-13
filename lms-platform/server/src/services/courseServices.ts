import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

export async function getCourseDetails(id: string, userId?: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      instructor: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
          title: true,
          bio: true,
        },
      },
      category: {
        select: { id: true, name: true, slug: true, icon: true },
      },
      
      sections: {
        orderBy: { order: 'asc' },
        include: {
          chapters: {
            orderBy: { order: 'asc' },
            select: {
              id: true,
              title: true,
              duration: true,
              isFree: true,
              type: true,
              order: true,
            },
          },
        },
      },
      reviews: {
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          user: { select: { firstName: true, avatar: true } },
        },
      },
    },
  });

  if (!course) return null;

  // Optional: attach computed fields
  let isEnrolled = false;
  if (userId) {
    const enrollment = await prisma.enrollment.findFirst({
      where: { courseId: course.id, userId },
    });
    isEnrolled = !!enrollment;
  }

  return {
    ...course,
    isEnrolled,
    totalSections: course.sections.length,
    totalChapters: course.sections.reduce(
      (sum, s) => sum + s.chapters.length,
      0
    ),
  };
}
