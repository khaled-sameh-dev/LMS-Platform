import dotenv from "dotenv";
dotenv.config();



import { PrismaClient}  from "../src/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create Teachers
  const teachers = await prisma.teacher.createMany({
    data: [
      {
        id: "f03e27a2-2cf1-41a4-8b2b-0f1210d9d6e1",
        name: "John Doe",
        bio: "Full-stack web developer with 10 years of experience in JavaScript and TypeScript.",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: "9f29a181-4f3f-4b8e-bb3f-f7a450fa4b54",
        name: "Sarah Lee",
        bio: "UI/UX designer passionate about creating beautiful and intuitive learning experiences.",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  });

  // Create Categories
  await prisma.category.createMany({
    data: [
      {
        id: "4f3a1f34-75b9-4a84-9f2f-403bd0d2fcd1",
        name: "Web Development",
        slug: "web-development",
      },
      {
        id: "c9fcd23f-32c9-4b82-a5d7-70e39a0e119e",
        name: "UI/UX Design",
        slug: "ui-ux-design",
      },
      {
        id: "05f53190-b084-4a1d-b00e-4315a33d8b6c",
        name: "Data Science",
        slug: "data-science",
      },
    ],
  });

  // Create Courses
  await prisma.course.createMany({
    data: [
      {
        id: "8f41b5ac-94cd-4b2e-bd28-2e67df1d0b23",
        title: "Mastering React with Next.js",
        description:
          "Learn to build high-performance web apps using Next.js, React, and modern web tooling.",
        imageUrl:
          "https://images.unsplash.com/photo-1581276879432-15a19d654956?w=1200&q=80",
        price: 49.99,
        level: "INTERMEDIATE",
        isPublished: true,
        isFree: false,
        teacherId: "f03e27a2-2cf1-41a4-8b2b-0f1210d9d6e1",
        categoryId: "4f3a1f34-75b9-4a84-9f2f-403bd0d2fcd1",
      },
      {
        id: "d9e7b1d2-8f11-41ad-a012-28f1a4dfb1dc",
        title: "Intro to UI/UX Design",
        description:
          "Start your design career by understanding the principles of UX and UI using Figma.",
        imageUrl:
          "https://images.unsplash.com/photo-1603575448363-29a3b12a36b9?w=1200&q=80",
        price: 0,
        level: "BEGINNER",
        isPublished: true,
        isFree: true,
        teacherId: "9f29a181-4f3f-4b8e-bb3f-f7a450fa4b54",
        categoryId: "c9fcd23f-32c9-4b82-a5d7-70e39a0e119e",
      },
      {
        id: "ff26e764-5a3c-4b27-b512-d8e2c7ef832e",
        title: "Data Analysis with Python",
        description:
          "Learn to analyze data efficiently with Python, NumPy, and Pandas for real-world projects.",
        imageUrl:
          "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
        price: 59.99,
        level: "ADVANCED",
        isPublished: true,
        isFree: false,
        teacherId: "f03e27a2-2cf1-41a4-8b2b-0f1210d9d6e1",
        categoryId: "05f53190-b084-4a1d-b00e-4315a33d8b6c",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Seed data inserted successfully!");
  })
  .catch((e) => {
    console.error(e);
    return ;
  })
  .finally(() => prisma.$disconnect());
