// // // ===========================================
// // // Common Types
// // // ===========================================

// // export type UserRole = "STUDENT" | "INSTRUCTOR" | "ADMIN";
// // export type CourseLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
// // export type CourseStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
// // export type ChapterType = "VIDEO" | "ARTICLE" | "QUIZ" | "ASSIGNMENT";
// // export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
// // export type PaymentType = "CARD" | "PAYPAL" | "BANK_TRANSFER";
// // export type NotificationType =
// //   | "COURSE_ENROLLMENT"
// //   | "COURSE_UPDATE"
// //   | "CHAPTER_COMPLETED"
// //   | "CERTIFICATE_EARNED"
// //   | "PAYMENT_SUCCESS"
// //   | "NEW_REVIEW"
// //   | "COURSE_PUBLISHED"
// //   | "NEW_STUDENT"
// //   | "MESSAGE"
// //   | "SYSTEM";

// // export interface PaginationParams {
// //   page: number;
// //   limit: number;
// // }

// // export interface PaginatedResponse<T> {
// //   data: T[];
// //   meta: {
// //     total: number;
// //     page: number;
// //     limit: number;
// //     totalPages: number;
// //     hasMore: boolean;
// //   };
// // }

// // export interface ApiResponse<T> {
// //   success: boolean;
// //   data: T;
// //   message?: string;
// // }

// // export interface ApiError {
// //   message: string;
// //   code: string;
// //   status: number;
// //   errors?: Record<string, string[]>;
// // }

// // // ===========================================
// // // User Types
// // // ===========================================

// // export interface User {
// //   id: string;
// //   email: string;
// //   firstName: string;
// //   lastName: string;
// //   fullName: string;
// //   avatar?: string;
// //   role: UserRole;
// //   bio?: string;
// //   title?: string;
// //   socialLinks?: SocialLinks;
// //   isActive: boolean;
// //   emailVerified: boolean;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface SocialLinks {
// //   website?: string;
// //   linkedin?: string;
// //   twitter?: string;
// //   github?: string;
// //   youtube?: string;
// //   facebook?: string;
// // }

// // export interface UpdateProfileDto {
// //   firstName?: string;
// //   lastName?: string;
// //   bio?: string;
// //   title?: string;
// //   avatar?: string;
// //   socialLinks?: SocialLinks;
// // }

// // export interface StudentProfile extends User {
// //   enrolledCourses: number;
// //   completedCourses: number;
// //   inProgressCourses: number;
// //   certificates: number;
// //   totalLearningHours: number;
// //   learningStreak: number;
// //   averageProgress: number;
// // }

// // export interface InstructorProfile extends User {
// //   publishedCourses: number;
// //   totalStudents: number;
// //   totalRevenue: number;
// //   averageRating: number;
// //   expertise: string[];
// //   totalReviews: number;
// // }

// // // ===========================================
// // // Auth Types
// // // ===========================================

// // export interface LoginDto {
// //   email: string;
// //   password: string;
// //   rememberMe?: boolean;
// // }

// // export interface RegisterDto {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   password: string;
// //   role: UserRole;
// // }

// // export interface AuthResponse {
// //   user: User;
// //   accessToken: string;
// //   refreshToken: string;
// // }

// // export interface ForgotPasswordDto {
// //   email: string;
// // }

// // export interface ResetPasswordDto {
// //   token: string;
// //   password: string;
// //   confirmPassword: string;
// // }

// // export interface ChangePasswordDto {
// //   currentPassword: string;
// //   newPassword: string;
// //   confirmPassword: string;
// // }

// // // ===========================================
// // // Category Types
// // // ===========================================

// // export interface Category {
// //   id: string;
// //   name: string;
// //   slug: string;
// //   icon?: string;
// //   description?: string;
// //   order: number;
// //   coursesCount: number;
// //   isActive: boolean;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface CreateCategoryDto {
// //   name: string;
// //   slug: string;
// //   icon?: string;
// //   description?: string;
// //   order?: number;
// // }

// // // ===========================================
// // // Course Types
// // // ===========================================

// // export interface Course {
// //   id: string;
// //   title: string;
// //   slug: string;
// //   description: string;
// //   thumbnail: string;
// //   previewVideo?: string;
// //   instructor: Instructor;
// //   category: Category;
// //   level: CourseLevel;
// //   price: number;
// //   currency: string;
// //   language: string;
// //   rating: number;
// //   reviewsCount: number;
// //   studentsCount: number;
// //   status: CourseStatus;
// //   isFeatured: boolean;
// //   isBestseller: boolean;
// //   requirements: string[];
// //   learningOutcomes: string[];
// //   tags: string[];
// //   duration: number;
// //   totalChapters?: number;
// //   totalSections?: number;
// //   isEnrolled?: boolean;
// //   sections: Section[];
// //   createdAt: string;
// //   updatedAt: string;
// //   publishedAt?: string;
// // }

// // export interface CourseWithSections extends Course {
// //   sections: Section[];
// // }

// // export interface CreateCourseDto {
// //   title: string;
// //   description: string;
// //   thumbnail: string;
// //   previewVideo?: string;
// //   categoryId: string;
// //   level: CourseLevel;
// //   price: number;
// //   currency?: string;
// //   language?: string;
// //   requirements: string[];
// //   learningOutcomes: string[];
// //   tags: string[];
// // }

// // export interface UpdateCourseDto extends Partial<CreateCourseDto> {
// //   status?: CourseStatus;
// //   isFeatured?: boolean;
// //   isBestseller?: boolean;
// // }

// // export interface CourseFilters {
// //   search?: string;
// //   category?: string;
// //   level?: CourseLevel;
// //   price?: "free" | "paid" | "all";
// //   rating?: number;
// //   language?: string;
// //   duration?: string;
// //   instructor?: string;
// //   tags?: string[];
// //   sort?: "popular" | "newest" | "rating" | "price-low" | "price-high" | "title";
// // }

// // export interface Instructor {
// //   id: string;
// //   firstName: string;
// //   lastName: string;
// //   fullName: string;
// //   avatar?: string;
// //   title?: string;
// //   bio?: string;
// //   totalCourses: number;
// //   totalStudents: number;
// //   averageRating: number;
// // }

// // // ===========================================
// // // Section Types
// // // ===========================================

// // export interface Section {
// //   id: string;
// //   title: string;
// //   description?: string;
// //   order: number;
// //   courseId: string;
// //   chapters: Chapter[];
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface CreateSectionDto {
// //   title: string;
// //   description?: string;
// //   order: number;
// //   courseId: string;
// // }

// // export interface UpdateSectionDto extends Partial<CreateSectionDto> {}

// // // ===========================================
// // // Chapter Types
// // // ===========================================

// // export interface Chapter {
// //   id: string;
// //   title: string;
// //   description?: string;
// //   order: number;
// //   type: ChapterType;
// //   duration: number;
// //   isFree: boolean;
// //   content: ChapterContent;
// //   resources: ChapterResource[];
// //   isCompleted?: boolean;
// //   watchedDuration?: number;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface ChapterContent {
// //   videoUrl?: string;
// //   articleContent?: string;
// //   quizQuestions?: QuizQuestion[];
// //   assignmentDetails?: AssignmentDetails;
// // }

// // export interface ChapterResource {
// //   id: string;
// //   name: string;
// //   type: "pdf" | "video" | "link" | "file";
// //   url: string;
// //   size?: number;
// // }

// // export interface QuizQuestion {
// //   id: string;
// //   question: string;
// //   options: string[];
// //   correctAnswer: number;
// //   explanation?: string;
// // }

// // export interface AssignmentDetails {
// //   instructions: string;
// //   dueDate?: string;
// //   maxScore: number;
// //   submissionFormat?: string;
// // }

// // export interface CreateChapterDto {
// //   title: string;
// //   description?: string;
// //   order: number;
// //   type: ChapterType;
// //   duration: number;
// //   isFree: boolean;
// //   content: ChapterContent;
// //   sectionId: string;
// //   resources?: Omit<ChapterResource, "id">[];
// // }

// // export interface UpdateChapterDto extends Partial<CreateChapterDto> {}

// // // ===========================================
// // // Progress Types
// // // ===========================================

// // export interface ChapterProgress {
// //   id: string;
// //   chapterId: string;
// //   userId: string;
// //   isCompleted: boolean;
// //   watchedDuration: number;
// //   lastWatchedAt?: string;
// //   completedAt?: string;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface CourseProgress {
// //   courseId: string;
// //   userId: string;
// //   enrollmentId: string;
// //   progressPercentage: number;
// //   totalTimeSpent: number;
// //   completedChaptersCount: number;
// //   totalChaptersCount: number;
// //   lastAccessedAt: string;
// //   isCompleted: boolean;
// //   completedAt?: string;
// //   enrolledAt: string;
// //   sections: SectionProgress[];
// // }

// // export interface SectionProgress {
// //   sectionId: string;
// //   sectionTitle: string;
// //   completedChapters: number;
// //   totalChapters: number;
// //   chapters: ChapterProgressDetails[];
// // }

// // export interface ChapterProgressDetails {
// //   chapterId: string;
// //   chapterTitle: string;
// //   isCompleted: boolean;
// //   watchedDuration: number;
// //   totalDuration: number;
// // }

// // export interface UpdateProgressDto {
// //   chapterId: string;
// //   watchedDuration: number;
// //   isCompleted?: boolean;
// // }

// // // ===========================================
// // // Enrollment Types
// // // ===========================================

// // export interface Enrollment {
// //   id: string;
// //   userId: string;
// //   courseId: string;
// //   progressPercentage: number;
// //   totalTimeSpent: number;
// //   isCompleted: boolean;
// //   lastAccessedAt: string;
// //   completedAt?: string;
// //   enrolledAt: string;
// //   course?: Course;
// // }

// // export interface EnrollmentWithProgress extends Enrollment {
// //   progress: CourseProgress;
// // }

// // // ===========================================
// // // Review Types
// // // ===========================================

// // export interface CourseReview {
// //   id: string;
// //   courseId: string;
// //   userId: string;
// //   user: {
// //     id: string;
// //     fullName: string;
// //     avatar?: string;
// //   };
// //   rating: number;
// //   comment: string;
// //   isApproved: boolean;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface CreateReviewDto {
// //   courseId: string;
// //   rating: number;
// //   comment: string;
// // }

// // export interface UpdateReviewDto {
// //   rating?: number;
// //   comment?: string;
// // }

// // // ===========================================
// // // Certificate Types
// // // ===========================================

// // export interface Certificate {
// //   id: string;
// //   certificateNumber: string;
// //   userId: string;
// //   courseId: string;
// //   courseName?: string;
// //   instructorName?: string;
// //   issuedAt: string;
// //   expiresAt?: string;
// //   certificateUrl?: string;
// // }

// // // ===========================================
// // // Payment Types
// // // ===========================================

// // export interface PaymentMethod {
// //   id: string;
// //   type: PaymentType;
// //   last4?: string;
// //   brand?: string;
// //   expiryMonth?: number;
// //   expiryYear?: number;
// //   isDefault: boolean;
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // export interface PaymentHistory {
// //   id: string;
// //   courseId: string;
// //   courseName?: string;
// //   amount: number;
// //   currency: string;
// //   status: PaymentStatus;
// //   paymentMethod: string;
// //   transactionId: string;
// //   paidAt: string;
// //   createdAt: string;
// // }

// // export interface CheckoutDto {
// //   courseId: string;
// //   paymentMethodId: string;
// //   couponCode?: string;
// // }

// // export interface CreatePaymentMethodDto {
// //   type: PaymentType;
// //   token: string; // Payment gateway token
// //   isDefault?: boolean;
// // }

// // // ===========================================
// // // Notification Types
// // // ===========================================

// // export interface Notification {
// //   id: string;
// //   userId: string;
// //   type: NotificationType;
// //   title: string;
// //   message: string;
// //   data?: Record<string, any>;
// //   isRead: boolean;
// //   createdAt: string;
// // }

// // export interface NotificationPreferences {
// //   courseEnrollment: boolean;
// //   courseUpdate: boolean;
// //   chapterCompleted: boolean;
// //   certificateEarned: boolean;
// //   paymentSuccess: boolean;
// //   newReview: boolean;
// //   coursePublished: boolean;
// //   newStudent: boolean;
// //   messages: boolean;
// //   system: boolean;
// // }

// // // ===========================================
// // // Search Types
// // // ===========================================

// // export interface SearchSuggestion {
// //   type: "course" | "category" | "instructor" | "tag";
// //   id: string;
// //   title: string;
// //   subtitle?: string;
// //   thumbnail?: string;
// //   url: string;
// // }

// // export interface SearchResult {
// //   courses: Course[];
// //   categories: Category[];
// //   instructors: Instructor[];
// //   total: number;
// // }

// // // ===========================================
// // // Analytics Types
// // // ===========================================

// // export interface InstructorAnalytics {
// //   totalRevenue: number;
// //   totalStudents: number;
// //   totalCourses: number;
// //   averageRating: number;
// //   totalReviews: number;
// //   revenueByMonth: MonthlyRevenue[];
// //   studentsByMonth: MonthlyStudents[];
// //   topCourses: TopCourse[];
// //   recentReviews: CourseReview[];
// //   enrollmentsByMonth: MonthlyEnrollments[];
// // }

// // export interface MonthlyRevenue {
// //   month: string;
// //   year: number;
// //   revenue: number;
// // }

// // export interface MonthlyStudents {
// //   month: string;
// //   year: number;
// //   students: number;
// // }

// // export interface MonthlyEnrollments {
// //   month: string;
// //   year: number;
// //   enrollments: number;
// // }

// // export interface TopCourse {
// //   id: string;
// //   title: string;
// //   students: number;
// //   revenue: number;
// //   rating: number;
// //   thumbnail?: string;
// // }

// // export interface StudentAnalytics {
// //   totalCourses: number;
// //   completedCourses: number;
// //   inProgressCourses: number;
// //   totalLearningHours: number;
// //   certificates: number;
// //   averageProgress: number;
// //   learningStreak: number;
// //   totalTimeSpentByMonth: MonthlyTimeSpent[];
// //   recentActivity: RecentActivity[];
// //   coursesByCategory: CategoryDistribution[];
// // }

// // export interface MonthlyTimeSpent {
// //   month: string;
// //   year: number;
// //   hours: number;
// // }

// // export interface CategoryDistribution {
// //   categoryName: string;
// //   coursesCount: number;
// // }

// // export interface RecentActivity {
// //   id: string;
// //   type:
// //     | "enrolled"
// //     | "completed_chapter"
// //     | "completed_course"
// //     | "earned_certificate";
// //   courseId: string;
// //   courseTitle: string;
// //   courseThumbnail?: string;
// //   chapterId?: string;
// //   chapterTitle?: string;
// //   timestamp: string;
// // }

// // // ===========================================
// // // Dashboard Types
// // // ===========================================

// // export interface StudentDashboard {
// //   user: StudentProfile;
// //   enrolledCourses: EnrollmentWithProgress[];
// //   recentActivity: RecentActivity[];
// //   recommendations: Course[];
// //   analytics: StudentAnalytics;
// // }

// // export interface InstructorDashboard {
// //   user: InstructorProfile;
// //   courses: Course[];
// //   analytics: InstructorAnalytics;
// //   recentEnrollments: Enrollment[];
// //   recentReviews: CourseReview[];
// // }

// // types/index.ts

// export enum UserRole {
//   STUDENT = "STUDENT",
//   INSTRUCTOR = "INSTRUCTOR",
//   ADMIN = "ADMIN",
// }

// export enum CourseLevel {
//   BEGINNER = "BEGINNER",
//   INTERMEDIATE = "INTERMEDIATE",
//   ADVANCED = "ADVANCED",
// }

// export enum CourseStatus {
//   DRAFT = "DRAFT",
//   PUBLISHED = "PUBLISHED",
//   ARCHIVED = "ARCHIVED",
// }

// export enum ChapterType {
//   VIDEO = "VIDEO",
//   ARTICLE = "ARTICLE",
//   QUIZ = "QUIZ",
//   ASSIGNMENT = "ASSIGNMENT",
// }

// export enum NotificationType {
//   COURSE_ENROLLMENT = "COURSE_ENROLLMENT",
//   COURSE_UPDATE = "COURSE_UPDATE",
//   CHAPTER_COMPLETED = "CHAPTER_COMPLETED",
//   CERTIFICATE_EARNED = "CERTIFICATE_EARNED",
//   PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
//   NEW_REVIEW = "NEW_REVIEW",
//   COURSE_PUBLISHED = "COURSE_PUBLISHED",
//   NEW_STUDENT = "NEW_STUDENT",
//   MESSAGE = "MESSAGE",
//   SYSTEM = "SYSTEM",
// }

// export interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   avatar?: string;
//   role: UserRole;
//   bio?: string;
//   title?: string;
//   socialLinks?: Record<string, string>;
//   isActive: boolean;
//   emailVerified: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   icon?: string;
//   description?: string;
//   order: number;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface ChapterResource {
//   id: string;
//   name: string;
//   type: string;
//   url: string;
//   size?: number;
//   createdAt: string;
// }

// export interface Chapter {
//   id: string;
//   title: string;
//   description?: string;
//   order: number;
//   type: ChapterType;
//   duration: number;
//   isFree: boolean;
//   videoUrl?: string;
//   articleContent?: string;
//   quizQuestions?: any;
//   assignmentDetails?: any;
//   createdAt: string;
//   updatedAt: string;
//   sectionId: string;
//   resources?: ChapterResource[];
// }

// export interface Section {
//   id: string;
//   title: string;
//   description?: string;
//   order: number;
//   createdAt: string;
//   updatedAt: string;
//   courseId: string;
//   chapters: Chapter[];
// }

// export interface Course {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   thumbnail: string;
//   previewVideo?: string;
//   level: CourseLevel;
//   price: number;
//   currency: string;
//   language: string;
//   rating: number;
//   reviewsCount: number;
//   studentsCount: number;
//   status: CourseStatus;
//   isFeatured: boolean;
//   isBestseller: boolean;
//   requirements: string[];
//   learningOutcomes: string[];
//   tags: string[];
//   duration: number;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt?: string;
//   instructorId: string;
//   instructor: User;
//   categoryId: string;
//   category: Category;
//   sections?: Section[];
//   totalChapters?: number;
// }

// export interface ChapterProgress {
//   id: string;
//   isCompleted: boolean;
//   watchedDuration: number;
//   lastWatchedAt?: string;
//   completedAt?: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
//   chapterId: string;
//   enrollmentId: string;
// }

// export interface Enrollment {
//   id: string;
//   progressPercentage: number;
//   totalTimeSpent: number;
//   isCompleted: boolean;
//   lastAccessedAt: string;
//   completedAt?: string;
//   enrolledAt: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
//   courseId: string;
//   course?: Course;
//   chapterProgress?: ChapterProgress[];
// }

// export interface SearchSuggestion {
//   type: "course" | "category" | "instructor";
//   id: string;
//   title: string;
//   subtitle?: string;
//   thumbnail?: string;
// }

// types/index.ts

export enum CURRENCY {
  USD = "USD",
  EGP = "EGP",
}

export enum UserRole {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR",
  ADMIN = "ADMIN",
}

export enum CourseLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export enum CourseStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

export enum ChapterType {
  VIDEO = "VIDEO",
  ARTICLE = "ARTICLE",
  QUIZ = "QUIZ",
  ASSIGNMENT = "ASSIGNMENT",
}

export enum NotificationType {
  COURSE_ENROLLMENT = "COURSE_ENROLLMENT",
  COURSE_UPDATE = "COURSE_UPDATE",
  CHAPTER_COMPLETED = "CHAPTER_COMPLETED",
  CERTIFICATE_EARNED = "CERTIFICATE_EARNED",
  PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
  NEW_REVIEW = "NEW_REVIEW",
  COURSE_PUBLISHED = "COURSE_PUBLISHED",
  NEW_STUDENT = "NEW_STUDENT",
  MESSAGE = "MESSAGE",
  SYSTEM = "SYSTEM",
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  bio?: string;
  title?: string;
  socialLinks?: Record<string, string>;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChapterResource {
  id: string;
  name: string;
  type: string;
  url: string;
  size?: number;
  createdAt: string;
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  order: number;
  type: ChapterType;
  duration: number;
  isFree: boolean;
  videoUrl?: string;
  articleContent?: string;
  quizQuestions?: any;
  assignmentDetails?: any;
  createdAt: string;
  updatedAt: string;
  sectionId: string;
  resources?: ChapterResource[];
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  courseId: string;
  chapters: Chapter[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  previewVideo?: string;
  level: CourseLevel;
  price: number;
  currency: CURRENCY;
  language: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  status: CourseStatus;
  isFeatured: boolean;
  isBestseller: boolean;
  requirements: string[];
  learningOutcomes: string[];
  tags: string[];
  duration: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  instructorId: string;
  instructor: User;
  categoryId: string;
  category: Category;
  sections?: Section[];
  totalChapters?: number;
  totalDuration?: number;
  enrollments: Enrollment[];
}

export interface ChapterProgress {
  id: string;
  isCompleted: boolean;
  watchedDuration: number;
  lastWatchedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  chapterId: string;
  enrollmentId: string;
}

export interface Enrollment {
  id: string;
  progressPercentage: number;
  totalTimeSpent: number;
  isCompleted: boolean;
  lastAccessedAt: string;
  completedAt?: string;
  enrolledAt: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  courseId: string;
  course?: Course;
  chapterProgress?: ChapterProgress[];
}

export interface EnrollmentWithProgress extends Enrollment {
  totalChapters?: number;
  completedChapters?: number;
  progressPercentage?: number;
}

export interface SearchSuggestion {
  type: "Course" | "Category" | "Instructor";
  id: string;
  value: Category | Course | User;
}
