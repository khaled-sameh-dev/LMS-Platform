// lib/mockData.ts
export const mockCategories = [
  { id: "1", name: "UI/UX Design", slug: "ui-ux-design" },
  { id: "2", name: "Development", slug: "development" },
  { id: "3", name: "Data Science", slug: "data-science" },
  { id: "4", name: "Business", slug: "business" },
  { id: "5", name: "Financial", slug: "financial" },
  { id: "6", name: "Marketing", slug: "marketing" },
  { id: "7", name: "Photography", slug: "photography" },
  { id: "8", name: "Music", slug: "music" },
];

export const mockCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 10+ real-world projects and become a full-stack developer.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    price: 89.99,
    level: "BEGINNER",
    isPublished: true,
    isFree: false,
    category: { id: "2", name: "Development", slug: "development" },
    categoryId: "2",
    teacher: {
      id: "t1",
      name: "Sarah Johnson",
      bio: "Full-stack developer with 15 years of experience",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    teacherId: "t1",
    enrollments: Array(1234).fill({}),
    sections: [
      {
        id: "s1",
        title: "Introduction",
        chapters: [
          { id: "c1", title: "Welcome", duration: 5 },
          { id: "c2", title: "Setup", duration: 15 },
        ],
      },
      {
        id: "s2",
        title: "HTML & CSS",
        chapters: [
          { id: "c3", title: "HTML Basics", duration: 30 },
          { id: "c4", title: "CSS Styling", duration: 45 },
        ],
      },
    ],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass - Figma to Reality",
    description:
      "Learn user interface and user experience design principles. Master Figma, prototyping, wireframing, and design systems.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    price: 0,
    level: "BEGINNER",
    isPublished: true,
    isFree: true,
    category: { id: "1", name: "UI/UX Design", slug: "ui-ux-design" },
    categoryId: "1",
    teacher: {
      id: "t2",
      name: "Emily Rodriguez",
      bio: "Senior UX designer at Google",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    teacherId: "t2",
    enrollments: Array(3456).fill({}),
    sections: [
      {
        id: "s3",
        title: "Design Fundamentals",
        chapters: [
          { id: "c5", title: "Introduction to UX", duration: 20 },
          { id: "c6", title: "Color Theory", duration: 35 },
        ],
      },
    ],
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "Data Science & Machine Learning with Python",
    description:
      "Master Python, NumPy, Pandas, Matplotlib, Scikit-Learn, and TensorFlow. Build real ML models and deploy them.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    price: 129.99,
    level: "INTERMEDIATE",
    isPublished: true,
    isFree: false,
    category: { id: "3", name: "Data Science", slug: "data-science" },
    categoryId: "3",
    teacher: {
      id: "t3",
      name: "Michael Chen",
      bio: "Data scientist and AI researcher",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
    },
    teacherId: "t3",
    enrollments: Array(2890).fill({}),
    sections: [
      {
        id: "s4",
        title: "Python Basics",
        chapters: [
          { id: "c7", title: "Python Introduction", duration: 25 },
          { id: "c8", title: "Data Types", duration: 40 },
        ],
      },
    ],
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "4",
    title: "Digital Marketing Mastery 2024",
    description:
      "Learn SEO, social media marketing, content marketing, email marketing, and analytics. Grow your business online.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    price: 79.99,
    level: "BEGINNER",
    isPublished: true,
    isFree: false,
    category: { id: "6", name: "Marketing", slug: "marketing" },
    categoryId: "6",
    teacher: {
      id: "t4",
      name: "David Kim",
      bio: "Marketing consultant and strategist",
      avatarUrl: "https://i.pravatar.cc/150?img=13",
    },
    teacherId: "t4",
    enrollments: Array(1567).fill({}),
    sections: [
      {
        id: "s5",
        title: "Marketing Fundamentals",
        chapters: [
          { id: "c9", title: "What is Digital Marketing", duration: 15 },
          { id: "c10", title: "SEO Basics", duration: 50 },
        ],
      },
    ],
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-25"),
  },
  {
    id: "5",
    title: "Photography Essentials - From Beginner to Pro",
    description:
      "Master your camera, composition, lighting, editing, and post-processing. Take stunning photos like a professional.",
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
    price: 59.99,
    level: "BEGINNER",
    isPublished: true,
    isFree: false,
    category: { id: "7", name: "Photography", slug: "photography" },
    categoryId: "7",
    teacher: {
      id: "t5",
      name: "Jessica Taylor",
      bio: "Professional photographer for 10+ years",
      avatarUrl: "https://i.pravatar.cc/150?img=47",
    },
    teacherId: "t5",
    enrollments: Array(987).fill({}),
    sections: [
      {
        id: "s6",
        title: "Camera Basics",
        chapters: [
          { id: "c11", title: "Understanding Your Camera", duration: 30 },
          { id: "c12", title: "Exposure Triangle", duration: 25 },
        ],
      },
    ],
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2024-02-05"),
  },
  {
    id: "6",
    title: "Financial Planning & Investment Strategies",
    description:
      "Learn personal finance, budgeting, investing, retirement planning, and wealth building strategies.",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    price: 99.99,
    level: "INTERMEDIATE",
    isPublished: true,
    isFree: false,
    category: { id: "5", name: "Financial", slug: "financial" },
    categoryId: "5",
    teacher: {
      id: "t6",
      name: "Robert Williams",
      bio: "Certified financial planner",
      avatarUrl: "https://i.pravatar.cc/150?img=52",
    },
    teacherId: "t6",
    enrollments: Array(2345).fill({}),
    sections: [
      {
        id: "s7",
        title: "Finance Fundamentals",
        chapters: [
          { id: "c13", title: "Introduction to Finance", duration: 20 },
          { id: "c14", title: "Budgeting Basics", duration: 35 },
        ],
      },
    ],
    createdAt: new Date("2024-01-30"),
    updatedAt: new Date("2024-01-30"),
  },
  {
    id: "7",
    title: "Business Strategy & Entrepreneurship",
    description:
      "Learn how to start, grow, and scale your business. Master strategy, leadership, and management skills.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    price: 109.99,
    level: "ADVANCED",
    isPublished: true,
    isFree: false,
    category: { id: "4", name: "Business", slug: "business" },
    categoryId: "4",
    teacher: {
      id: "t7",
      name: "Amanda Zhang",
      bio: "Serial entrepreneur and business coach",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
    },
    teacherId: "t7",
    enrollments: Array(1789).fill({}),
    sections: [
      {
        id: "s8",
        title: "Business Basics",
        chapters: [
          { id: "c15", title: "What is a Business", duration: 18 },
          { id: "c16", title: "Market Research", duration: 42 },
        ],
      },
    ],
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "8",
    title: "Music Production with Ableton Live",
    description:
      "Learn music production, sound design, mixing, mastering, and how to create professional tracks.",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    price: 0,
    level: "BEGINNER",
    isPublished: true,
    isFree: true,
    category: { id: "8", name: "Music", slug: "music" },
    categoryId: "8",
    teacher: {
      id: "t8",
      name: "Alex Martinez",
      bio: "Music producer and sound engineer",
      avatarUrl: "https://i.pravatar.cc/150?img=33",
    },
    teacherId: "t8",
    enrollments: Array(4567).fill({}),
    sections: [
      {
        id: "s9",
        title: "Getting Started",
        chapters: [
          { id: "c17", title: "Ableton Interface", duration: 22 },
          { id: "c18", title: "First Track", duration: 38 },
        ],
      },
    ],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: "9",
    title: "React Native - Build Mobile Apps",
    description:
      "Create iOS and Android apps with React Native. Learn navigation, state management, and deployment.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    price: 94.99,
    level: "INTERMEDIATE",
    isPublished: true,
    isFree: false,
    category: { id: "2", name: "Development", slug: "development" },
    categoryId: "2",
    teacher: {
      id: "t1",
      name: "Sarah Johnson",
      bio: "Full-stack developer with 15 years of experience",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    teacherId: "t1",
    enrollments: Array(2156).fill({}),
    sections: [
      {
        id: "s10",
        title: "React Native Basics",
        chapters: [
          { id: "c19", title: "Setup Environment", duration: 28 },
          { id: "c20", title: "First App", duration: 45 },
        ],
      },
    ],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "10",
    title: "Advanced UI Design Patterns",
    description:
      "Master advanced design patterns, component libraries, design systems, and accessibility in modern UI design.",
    imageUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
    price: 74.99,
    level: "ADVANCED",
    isPublished: true,
    isFree: false,
    category: { id: "1", name: "UI/UX Design", slug: "ui-ux-design" },
    categoryId: "1",
    teacher: {
      id: "t2",
      name: "Emily Rodriguez",
      bio: "Senior UX designer at Google",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    teacherId: "t2",
    enrollments: Array(1432).fill({}),
    sections: [
      {
        id: "s11",
        title: "Advanced Patterns",
        chapters: [
          { id: "c21", title: "Design Systems", duration: 50 },
          { id: "c22", title: "Component Architecture", duration: 60 },
        ],
      },
    ],
    createdAt: new Date("2024-02-25"),
    updatedAt: new Date("2024-02-25"),
  },
  {
    id: "11",
    title: "Python for Data Analysis",
    description:
      "Learn data manipulation, visualization, and analysis using Python, Pandas, NumPy, and Matplotlib.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    price: 84.99,
    level: "INTERMEDIATE",
    isPublished: true,
    isFree: false,
    category: { id: "3", name: "Data Science", slug: "data-science" },
    categoryId: "3",
    teacher: {
      id: "t3",
      name: "Michael Chen",
      bio: "Data scientist and AI researcher",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
    },
    teacherId: "t3",
    enrollments: Array(3201).fill({}),
    sections: [
      {
        id: "s12",
        title: "Data Analysis Fundamentals",
        chapters: [
          { id: "c23", title: "Pandas Basics", duration: 40 },
          { id: "c24", title: "Data Visualization", duration: 55 },
        ],
      },
    ],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "12",
    title: "Social Media Marketing Strategy",
    description:
      "Master Facebook, Instagram, Twitter, LinkedIn, and TikTok marketing. Create viral content and grow your audience.",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    price: 69.99,
    level: "BEGINNER",
    isPublished: true,
    isFree: false,
    category: { id: "6", name: "Marketing", slug: "marketing" },
    categoryId: "6",
    teacher: {
      id: "t4",
      name: "David Kim",
      bio: "Marketing consultant and strategist",
      avatarUrl: "https://i.pravatar.cc/150?img=13",
    },
    teacherId: "t4",
    enrollments: Array(2789).fill({}),
    sections: [
      {
        id: "s13",
        title: "Social Media Basics",
        chapters: [
          { id: "c25", title: "Platform Overview", duration: 25 },
          { id: "c26", title: "Content Strategy", duration: 48 },
        ],
      },
    ],
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
  },
];

// Filter courses by category
export function getCoursesByCategory(categoryId: string | null) {
  if (!categoryId) return mockCourses;
  return mockCourses.filter((course) => course.category.id === categoryId);
}