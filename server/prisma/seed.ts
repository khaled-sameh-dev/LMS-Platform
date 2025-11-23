import "dotenv/config";
import {
  ChapterType,
  CourseLevel,
  CourseStatus,
  NotificationType,
  PaymentStatus,
  PaymentType,
  PrismaClient,
  UserRole,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data (optional - comment out if you want to keep existing data)
  await prisma.notification.deleteMany();
  await prisma.paymentHistory.deleteMany();
  await prisma.paymentMethod.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.chapterProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.courseReview.deleteMany();
  await prisma.chapterResource.deleteMany();
  await prisma.chapter.deleteMany();
  await prisma.section.deleteMany();
  await prisma.course.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log("🗑️  Cleaned existing data");

  // ===========================================
  // USERS
  // ===========================================

  const admin = await prisma.user.create({
    data: {
      clerkId: "user_admin_clerk_001",
      email: "admin@lms.com",
      firstName: "Admin",
      lastName: "User",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
      role: UserRole.ADMIN,
      bio: "Platform administrator with full access",
      title: "System Administrator",
      emailVerified: true,
    },
  });

  const instructor1 = await prisma.user.create({
    data: {
      clerkId: "user_clerk_instructor_001",
      email: "john.doe@lms.com",
      firstName: "John",
      lastName: "Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      role: UserRole.INSTRUCTOR,
      bio: "Full-stack developer with 10+ years of experience. Passionate about teaching web development and software engineering best practices.",
      title: "Senior Software Engineer",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
      },
      emailVerified: true,
    },
  });

  const instructor2 = await prisma.user.create({
    data: {
      clerkId: "user_clerk_instructor_002",
      email: "sarah.smith@lms.com",
      firstName: "Sarah",
      lastName: "Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      role: UserRole.INSTRUCTOR,
      bio: "UI/UX designer and frontend specialist. Love creating beautiful and accessible user interfaces.",
      title: "Lead UI/UX Designer",
      socialLinks: {
        twitter: "https://twitter.com/sarahsmith",
        linkedin: "https://linkedin.com/in/sarahsmith",
        website: "https://sarahsmith.design",
      },
      emailVerified: true,
    },
  });

  const instructor3 = await prisma.user.create({
    data: {
      clerkId: "user_clerk_instructor_003",
      email: "mike.johnson@lms.com",
      firstName: "Mike",
      lastName: "Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      role: UserRole.INSTRUCTOR,
      bio: "Data scientist and machine learning expert. Teaching AI and data analysis for 5+ years.",
      title: "Data Science Lead",
      emailVerified: true,
    },
  });

  const students = await Promise.all([
    prisma.user.create({
      data: {
        clerkId: "user_clerk_student_001",
        email: "alice.wonder@student.com",
        firstName: "Alice",
        lastName: "Wonder",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
        role: UserRole.STUDENT,
        bio: "Aspiring full-stack developer",
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        clerkId: "user_clerk_student_002",
        email: "bob.builder@student.com",
        firstName: "Bob",
        lastName: "Builder",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
        role: UserRole.STUDENT,
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        clerkId: "user_clerk_student_003",
        email: "charlie.brown@student.com",
        firstName: "Charlie",
        lastName: "Brown",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
        role: UserRole.STUDENT,
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        clerkId: "user_clerk_student_004",
        email: "diana.prince@student.com",
        firstName: "Diana",
        lastName: "Prince",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
        role: UserRole.STUDENT,
        emailVerified: true,
      },
    }),
    prisma.user.create({
      data: {
        clerkId: "user_clerk_student_005",
        email: "evan.thomas@student.com",
        firstName: "Evan",
        lastName: "Thomas",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Evan",
        role: UserRole.STUDENT,
        emailVerified: false,
      },
    }),
  ]);

  console.log("✅ Created users");

  // ===========================================
  // CATEGORIES
  // ===========================================

  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Web Development",
        slug: "web-development",
        icon: "💻",
        description: "Learn modern web development technologies and frameworks",
        order: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: "Mobile Development",
        slug: "mobile-development",
        icon: "📱",
        description: "Build native and cross-platform mobile applications",
        order: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: "Data Science",
        slug: "data-science",
        icon: "📊",
        description: "Master data analysis, machine learning, and AI",
        order: 3,
      },
    }),
    prisma.category.create({
      data: {
        name: "Design",
        slug: "design",
        icon: "🎨",
        description: "UI/UX design, graphic design, and visual creativity",
        order: 4,
      },
    }),
    prisma.category.create({
      data: {
        name: "Business",
        slug: "business",
        icon: "💼",
        description: "Business strategy, marketing, and entrepreneurship",
        order: 5,
      },
    }),
  ]);

  console.log("✅ Created categories");

  // ===========================================
  // COURSES
  // ===========================================

  const course1 = await prisma.course.create({
    data: {
      title: "Complete React & Next.js Development Course",
      slug: "complete-react-nextjs-course",
      description:
        "Master modern React and Next.js development from scratch. Build real-world applications with the latest features including Server Components, App Router, and more.",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      previewVideo: "https://example.com/preview1.mp4",
      level: CourseLevel.INTERMEDIATE,
      price: 79.99,
      currency: "USD",
      language: "English",
      rating: 4.8,
      reviewsCount: 0,
      studentsCount: 0,
      status: CourseStatus.PUBLISHED,
      isFeatured: true,
      isBestseller: true,
      requirements: [
        "Basic JavaScript knowledge",
        "Understanding of HTML and CSS",
        "Familiarity with ES6+ syntax",
      ],
      learningOutcomes: [
        "Build modern React applications with hooks",
        "Master Next.js 14 App Router",
        "Implement server-side rendering",
        "Create full-stack applications",
        "Deploy to production",
      ],
      tags: ["React", "Next.js", "JavaScript", "Web Development"],
      duration: 1200,
      publishedAt: new Date("2024-01-15"),
      instructorId: instructor1.id,
      categoryId: categories[0].id,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: "UI/UX Design Masterclass: Figma to Production",
      slug: "uiux-design-masterclass",
      description:
        "Learn professional UI/UX design from concept to implementation. Master Figma, design systems, and modern design principles.",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      previewVideo: "https://example.com/preview2.mp4",
      level: CourseLevel.BEGINNER,
      price: 59.99,
      currency: "USD",
      language: "English",
      rating: 4.9,
      reviewsCount: 0,
      studentsCount: 0,
      status: CourseStatus.PUBLISHED,
      isFeatured: true,
      requirements: [
        "No prior design experience needed",
        "Computer with internet connection",
        "Figma account (free)",
      ],
      learningOutcomes: [
        "Master Figma design tools",
        "Create professional mockups",
        "Build design systems",
        "Understand UX principles",
        "Prototype interactions",
      ],
      tags: ["UI/UX", "Figma", "Design", "Prototyping"],
      duration: 900,
      publishedAt: new Date("2024-02-01"),
      instructorId: instructor2.id,
      categoryId: categories[3].id,
    },
  });

  const course3 = await prisma.course.create({
    data: {
      title: "Python for Data Science & Machine Learning",
      slug: "python-data-science-ml",
      description:
        "Complete guide to data science and machine learning with Python. Learn pandas, NumPy, scikit-learn, and TensorFlow.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      level: CourseLevel.ADVANCED,
      price: 99.99,
      currency: "USD",
      language: "English",
      rating: 4.7,
      reviewsCount: 0,
      studentsCount: 0,
      status: CourseStatus.PUBLISHED,
      isBestseller: true,
      requirements: [
        "Python programming basics",
        "Understanding of mathematics",
        "Basic statistics knowledge",
      ],
      learningOutcomes: [
        "Analyze data with pandas and NumPy",
        "Build ML models with scikit-learn",
        "Create neural networks with TensorFlow",
        "Visualize data effectively",
        "Deploy ML models",
      ],
      tags: ["Python", "Machine Learning", "Data Science", "AI"],
      duration: 1800,
      publishedAt: new Date("2024-01-20"),
      instructorId: instructor3.id,
      categoryId: categories[2].id,
    },
  });

  const course4 = await prisma.course.create({
    data: {
      title: "Mobile App Development with React Native",
      slug: "react-native-mobile-dev",
      description:
        "Build cross-platform mobile apps for iOS and Android using React Native and Expo.",
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      level: CourseLevel.INTERMEDIATE,
      price: 69.99,
      currency: "USD",
      language: "English",
      rating: 4.6,
      reviewsCount: 0,
      studentsCount: 0,
      status: CourseStatus.PUBLISHED,
      requirements: [
        "React fundamentals",
        "JavaScript ES6+",
        "Basic mobile app concepts",
      ],
      learningOutcomes: [
        "Build native mobile apps",
        "Use React Native components",
        "Integrate native features",
        "Publish to App Stores",
        "Implement navigation",
      ],
      tags: ["React Native", "Mobile", "iOS", "Android"],
      duration: 1000,
      publishedAt: new Date("2024-02-10"),
      instructorId: instructor1.id,
      categoryId: categories[1].id,
    },
  });

  const course5 = await prisma.course.create({
    data: {
      title: "TypeScript: From Beginner to Expert",
      slug: "typescript-beginner-to-expert",
      description:
        "Master TypeScript and write type-safe JavaScript applications. Perfect for developers wanting to level up their skills.",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800",
      level: CourseLevel.BEGINNER,
      price: 49.99,
      currency: "USD",
      language: "English",
      rating: 4.5,
      reviewsCount: 0,
      studentsCount: 0,
      status: CourseStatus.DRAFT,
      requirements: [
        "Basic JavaScript knowledge",
        "Understanding of programming concepts",
      ],
      learningOutcomes: [
        "Understand TypeScript syntax",
        "Use advanced types",
        "Configure TypeScript projects",
        "Integrate with React and Node.js",
      ],
      tags: ["TypeScript", "JavaScript", "Web Development"],
      duration: 600,
      instructorId: instructor1.id,
      categoryId: categories[0].id,
    },
  });

  console.log("✅ Created courses");

  // ===========================================
  // SECTIONS & CHAPTERS
  // ===========================================

  // Course 1 Sections
  const course1Section1 = await prisma.section.create({
    data: {
      title: "Getting Started with React",
      description: "Introduction to React and modern JavaScript",
      order: 1,
      courseId: course1.id,
    },
  });

  await Promise.all([
    prisma.chapter.create({
      data: {
        title: "Course Introduction",
        description: "Welcome to the course! Let's get started.",
        order: 1,
        type: ChapterType.VIDEO,
        duration: 10,
        isFree: true,
        videoUrl: "https://example.com/videos/intro.mp4",
        sectionId: course1Section1.id,
      },
    }),
    prisma.chapter.create({
      data: {
        title: "Setting Up Your Development Environment",
        description: "Install Node.js, VS Code, and necessary extensions",
        order: 2,
        type: ChapterType.VIDEO,
        duration: 25,
        isFree: true,
        videoUrl: "https://example.com/videos/setup.mp4",
        sectionId: course1Section1.id,
      },
    }),
    prisma.chapter.create({
      data: {
        title: "React Fundamentals Quiz",
        description: "Test your knowledge of React basics",
        order: 3,
        type: ChapterType.QUIZ,
        duration: 15,
        quizQuestions: {
          questions: [
            {
              question: "What is JSX?",
              options: [
                "JavaScript XML",
                "Just XML",
                "Java Syntax Extension",
                "None",
              ],
              correctAnswer: 0,
            },
            {
              question: "Which hook is used for state management?",
              options: ["useEffect", "useState", "useContext", "useReducer"],
              correctAnswer: 1,
            },
          ],
        },
        sectionId: course1Section1.id,
      },
    }),
  ]);

  const course1Section2 = await prisma.section.create({
    data: {
      title: "React Hooks Deep Dive",
      description: "Master React hooks and state management",
      order: 2,
      courseId: course1.id,
    },
  });

  const chapter1 = await prisma.chapter.create({
    data: {
      title: "Understanding useState Hook",
      description: "Learn how to manage component state with useState",
      order: 1,
      type: ChapterType.VIDEO,
      duration: 35,
      videoUrl: "https://example.com/videos/usestate.mp4",
      sectionId: course1Section2.id,
    },
  });

  await prisma.chapterResource.createMany({
    data: [
      {
        name: "useState Cheat Sheet",
        type: "pdf",
        url: "https://example.com/resources/usestate-cheatsheet.pdf",
        size: 1024000,
        chapterId: chapter1.id,
      },
      {
        name: "Code Examples",
        type: "file",
        url: "https://example.com/resources/usestate-examples.zip",
        size: 2048000,
        chapterId: chapter1.id,
      },
    ],
  });

  await prisma.chapter.create({
    data: {
      title: "useEffect and Side Effects",
      description: "Manage side effects in your React components",
      order: 2,
      type: ChapterType.VIDEO,
      duration: 40,
      videoUrl: "https://example.com/videos/useeffect.mp4",
      sectionId: course1Section2.id,
    },
  });

  await prisma.chapter.create({
    data: {
      title: "Build a Todo App",
      description: "Apply what you've learned by building a todo application",
      order: 3,
      type: ChapterType.ASSIGNMENT,
      duration: 60,
      assignmentDetails: {
        instructions:
          "Build a todo app with add, delete, and complete functionality",
        dueDate: null,
        maxScore: 100,
      },
      sectionId: course1Section2.id,
    },
  });

  // Course 2 Sections
  const course2Section1 = await prisma.section.create({
    data: {
      title: "Introduction to UI/UX Design",
      description: "Learn the fundamentals of design",
      order: 1,
      courseId: course2.id,
    },
  });

  await Promise.all([
    prisma.chapter.create({
      data: {
        title: "What is UI/UX Design?",
        description: "Understanding the difference between UI and UX",
        order: 1,
        type: ChapterType.VIDEO,
        duration: 15,
        isFree: true,
        videoUrl: "https://example.com/videos/uiux-intro.mp4",
        sectionId: course2Section1.id,
      },
    }),
    prisma.chapter.create({
      data: {
        title: "Design Principles",
        description: "Core principles every designer should know",
        order: 2,
        type: ChapterType.ARTICLE,
        duration: 20,
        articleContent:
          "# Design Principles\n\n## 1. Balance\nBalance creates visual stability...",
        sectionId: course2Section1.id,
      },
    }),
  ]);

  console.log("✅ Created sections and chapters");

  // ===========================================
  // ENROLLMENTS & PROGRESS
  // ===========================================

  const enrollment1 = await prisma.enrollment.create({
    data: {
      userId: students[0].id,
      courseId: course1.id,
      progressPercentage: 35,
      totalTimeSpent: 180,
      lastAccessedAt: new Date(),
    },
  });

  const enrollment2 = await prisma.enrollment.create({
    data: {
      userId: students[1].id,
      courseId: course1.id,
      progressPercentage: 60,
      totalTimeSpent: 420,
      lastAccessedAt: new Date(Date.now() - 86400000), // 1 day ago
    },
  });

  await prisma.enrollment.create({
    data: {
      userId: students[2].id,
      courseId: course2.id,
      progressPercentage: 100,
      totalTimeSpent: 900,
      isCompleted: true,
      completedAt: new Date("2024-03-01"),
      lastAccessedAt: new Date("2024-03-01"),
    },
  });

  await prisma.enrollment.create({
    data: {
      userId: students[0].id,
      courseId: course3.id,
      progressPercentage: 15,
      totalTimeSpent: 120,
      lastAccessedAt: new Date(Date.now() - 172800000), // 2 days ago
    },
  });

  // Chapter Progress
  await prisma.chapterProgress.create({
    data: {
      userId: students[0].id,
      chapterId: chapter1.id,
      enrollmentId: enrollment1.id,
      isCompleted: true,
      watchedDuration: 35,
      completedAt: new Date(),
      lastWatchedAt: new Date(),
    },
  });

  await prisma.chapterProgress.create({
    data: {
      userId: students[1].id,
      chapterId: chapter1.id,
      enrollmentId: enrollment2.id,
      isCompleted: true,
      watchedDuration: 35,
      completedAt: new Date(Date.now() - 86400000),
      lastWatchedAt: new Date(Date.now() - 86400000),
    },
  });

  // Update course student counts
  await prisma.course.update({
    where: { id: course1.id },
    data: { studentsCount: 2 },
  });

  await prisma.course.update({
    where: { id: course2.id },
    data: { studentsCount: 1 },
  });

  await prisma.course.update({
    where: { id: course3.id },
    data: { studentsCount: 1 },
  });

  console.log("✅ Created enrollments and progress");

  // ===========================================
  // REVIEWS
  // ===========================================

  await prisma.courseReview.create({
    data: {
      userId: students[0].id,
      courseId: course1.id,
      rating: 5,
      comment:
        "Excellent course! The instructor explains everything clearly and the projects are very practical. Highly recommended!",
    },
  });

  await prisma.courseReview.create({
    data: {
      userId: students[1].id,
      courseId: course1.id,
      rating: 4,
      comment:
        "Great content and well-structured. Would have liked more advanced topics, but overall very satisfied.",
    },
  });

  await prisma.courseReview.create({
    data: {
      userId: students[2].id,
      courseId: course2.id,
      rating: 5,
      comment:
        "Best design course I've taken! The Figma tutorials are top-notch and the design principles are explained beautifully.",
    },
  });

  // Update course ratings
  await prisma.course.update({
    where: { id: course1.id },
    data: { rating: 4.5, reviewsCount: 2 },
  });

  await prisma.course.update({
    where: { id: course2.id },
    data: { rating: 5.0, reviewsCount: 1 },
  });

  console.log("✅ Created reviews");

  // ===========================================
  // CERTIFICATES
  // ===========================================

  await prisma.certificate.create({
    data: {
      userId: students[2].id,
      courseId: course2.id,
      certificateNumber: "CERT-2024-001",
      issuedAt: new Date("2024-03-01"),
      certificateUrl: "https://example.com/certificates/cert-001.pdf",
    },
  });

  console.log("✅ Created certificates");

  // ===========================================
  // PAYMENT METHODS
  // ===========================================

  await prisma.paymentMethod.create({
    data: {
      userId: students[0].id,
      type: PaymentType.CARD,
      last4: "4242",
      brand: "Visa",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
  });

  await prisma.paymentMethod.create({
    data: {
      userId: students[1].id,
      type: PaymentType.PAYPAL,
      isDefault: true,
    },
  });

  console.log("✅ Created payment methods");

  // ===========================================
  // PAYMENT HISTORY
  // ===========================================

  await prisma.paymentHistory.create({
    data: {
      userId: students[0].id,
      courseId: course1.id,
      amount: 79.99,
      currency: "USD",
      status: PaymentStatus.COMPLETED,
      transactionId: "txn_1234567890",
      paymentMethod: "Visa ending in 4242",
      paidAt: new Date("2024-01-20"),
    },
  });

  await prisma.paymentHistory.create({
    data: {
      userId: students[1].id,
      courseId: course1.id,
      amount: 79.99,
      currency: "USD",
      status: PaymentStatus.COMPLETED,
      transactionId: "txn_0987654321",
      paymentMethod: "PayPal",
      paidAt: new Date("2024-01-25"),
    },
  });

  await prisma.paymentHistory.create({
    data: {
      userId: students[2].id,
      courseId: course2.id,
      amount: 59.99,
      currency: "USD",
      status: PaymentStatus.COMPLETED,
      transactionId: "txn_1122334455",
      paymentMethod: "Credit Card",
      paidAt: new Date("2024-02-05"),
    },
  });

  await prisma.paymentHistory.create({
    data: {
      userId: students[0].id,
      courseId: course3.id,
      amount: 99.99,
      currency: "USD",
      status: PaymentStatus.COMPLETED,
      transactionId: "txn_5544332211",
      paymentMethod: "Visa ending in 4242",
      paidAt: new Date("2024-02-15"),
    },
  });

  console.log("✅ Created payment history");

  // ===========================================
  // NOTIFICATIONS
  // ===========================================

  await prisma.notification.createMany({
    data: [
      {
        userId: students[0].id,
        type: NotificationType.COURSE_ENROLLMENT,
        title: "Welcome to React & Next.js Course!",
        message:
          "You've successfully enrolled in Complete React & Next.js Development Course. Start learning now!",
        isRead: true,
        createdAt: new Date("2024-01-20"),
      },
      {
        userId: students[0].id,
        type: NotificationType.CHAPTER_COMPLETED,
        title: "Chapter Completed!",
        message: "Great job! You've completed 'Understanding useState Hook'",
        isRead: true,
        createdAt: new Date(),
      },
      {
        userId: students[0].id,
        type: NotificationType.COURSE_ENROLLMENT,
        title: "Enrolled in Data Science Course",
        message:
          "You've enrolled in Python for Data Science & Machine Learning",
        isRead: false,
        createdAt: new Date("2024-02-15"),
      },
      {
        userId: students[1].id,
        type: NotificationType.PAYMENT_SUCCESS,
        title: "Payment Successful",
        message:
          "Your payment of $79.99 for React & Next.js Course has been processed",
        isRead: true,
        createdAt: new Date("2024-01-25"),
      },
      {
        userId: students[2].id,
        type: NotificationType.CERTIFICATE_EARNED,
        title: "🎉 Certificate Earned!",
        message:
          "Congratulations! You've earned a certificate for completing UI/UX Design Masterclass",
        isRead: false,
        createdAt: new Date("2024-03-01"),
      },
      {
        userId: instructor1.id,
        type: NotificationType.NEW_STUDENT,
        title: "New Student Enrolled",
        message:
          "Alice Wonder has enrolled in your Complete React & Next.js Development Course",
        isRead: false,
        createdAt: new Date("2024-01-20"),
      },
      {
        userId: instructor1.id,
        type: NotificationType.NEW_REVIEW,
        title: "New Review Received",
        message: "Alice Wonder left a 5-star review on your course!",
        isRead: false,
        createdAt: new Date(),
      },
      {
        userId: instructor2.id,
        type: NotificationType.COURSE_PUBLISHED,
        title: "Course Published Successfully",
        message: "Your course 'UI/UX Design Masterclass' is now live!",
        isRead: true,
        createdAt: new Date("2024-02-01"),
      },
    ],
  });

  console.log("✅ Created notifications");

  // ===========================================
  // SUMMARY
  // ===========================================

  const userCount = await prisma.user.count();
  const courseCount = await prisma.course.count();
  const enrollmentCount = await prisma.enrollment.count();
  const reviewCount = await prisma.courseReview.count();

  console.log("\n🎉 Seed completed successfully!");
  console.log("========================");
  console.log(`👥 Users: ${userCount}`);
  console.log(`📚 Courses: ${courseCount}`);
  console.log(`📝 Enrollments: ${enrollmentCount}`);
  console.log(`⭐ Reviews: ${reviewCount}`);
  console.log("========================\n");

  console.log("📧 Test User Credentials (Clerk IDs):");
  console.log("------------------------");
  console.log("Admin: user_admin_clerk_001");
  console.log("Instructor 1: user_clerk_instructor_001");
  console.log("Instructor 2: user_clerk_instructor_002");
  console.log("Instructor 3: user_clerk_instructor_003");
  console.log("Student 1: user_clerk_student_001");
  console.log("Student 2: user_clerk_student_002");
  console.log("------------------------\n");
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:");
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
