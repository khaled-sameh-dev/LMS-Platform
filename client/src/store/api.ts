import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import {
  Course,
  SearchSuggestion,
  Category,
  Enrollment,
  ChapterProgress,
  Chapter,
  EnrollmentWithProgress,
} from "@/types";

// Normalization helper
const normalizeResponse = (rawData: any) => {
  if (!rawData || typeof rawData !== "object") return rawData;

  let data = rawData;
  while (data?.data && typeof data.data === "object") {
    data = data.data;
  }

  if (Array.isArray(data.results)) return data.results;
  if (Array.isArray(data.items)) return data.items;
  if (Array.isArray(data.courses)) return data.courses;
  if (Array.isArray(data.suggestions)) return data.suggestions;
  if (Array.isArray(data.categories)) return data.categories;

  if (Array.isArray(data) || typeof data === "object") return data;

  return rawData;
};

// Custom base query with Clerk auth token
const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let token: string | undefined;
  try {
    if (typeof window !== "undefined" && (window as any).Clerk) {
      token = await (window as any).Clerk.session?.getToken();
    }
  } catch (error) {
    console.error("Error getting Clerk token:", error);
  }

  const rawBaseQuery = fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      if (token) headers.set("Authorization", `Bearer ${token}`);
      console.log("token" , token)

      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const err: any = result.error;
    const details = err?.data || err;
    console.error("❌ API Error:", details);
    return result;
  }

  if (result.data) {
    result.data = normalizeResponse(result.data);
  }

  return result;
};

// API Slice
export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [
    "Courses",
    "Categories",
    "Search",
    "Enrollments",
    "Progress",
    "Reviews",
  ],

  endpoints: (builder) => ({
    // ============================================
    // COURSES
    // ============================================
    getCourses: builder.query<
      Course[],
      {
        category?: string;
        q?: string;
        level?: string;
        status?: string;
        page?: number;
        limit?: number;
      } | void
    >({
      query: (params) => {
        if (!params) return "/courses";

        const query = new URLSearchParams();
        if (params.category) query.set("category", params.category);
        if (params.q) query.set("q", params.q);
        if (params.level) query.set("level", params.level);
        if (params.status) query.set("status", params.status);
        if (params.page) query.set("page", String(params.page));
        if (params.limit) query.set("limit", String(params.limit));

        return `/courses?${query.toString()}`;
      },
      providesTags: ["Courses"],
    }),

    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Courses", id }],
    }),

    // ============================================
    // SEARCH & CATEGORIES
    // ============================================
    getSearchSuggestions: builder.query<SearchSuggestion[], string>({
      query: (q) => `/search/get-suggestions?q=${encodeURIComponent(q)}`,
      providesTags: ["Search"],
    }),

    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),

    // ============================================
    // ENROLLMENTS
    // ============================================
    enrollInCourse: builder.mutation<
      { enrollment: Enrollment; message: string },
      { courseId: string }
    >({
      query: ({ courseId }) => ({
        url: `/enrollments`,
        method: "POST",
        body: { courseId },
      }),
      invalidatesTags: (result, error, { courseId }) => [
        { type: "Enrollments", id: courseId },
        { type: "Courses", id: courseId },
      ],
    }),

    getEnrollmentStatus: builder.query<
      { isEnrolled: boolean; enrollment?: Enrollment },
      string
    >({
      query: (courseId) => `/enrollments/status/${courseId}`,
      providesTags: (result, error, courseId) => [
        { type: "Enrollments", id: courseId },
      ],
    }),

    // getUserEnrollments: builder.query<Enrollment[], void>({
    //   query: () => `/enrollments/my-enrollments`,
    //   providesTags: ["Enrollments"],
    // }),

    getUserEnrollments: builder.query<EnrollmentWithProgress[], void>({
      query: () => `/enrollments/my-enrollments`,
      providesTags: ["Enrollments"],
      transformResponse: (response: any[]) => {
        // Backend already calculates progress, just return it
        return response;
      },
    }),

    // ============================================
    // PROGRESS
    // ============================================
    getCourseProgress: builder.query<
      {
        progressPercentage: number;
        completedChapters: number;
        totalChapters: number;
        chapterProgress: ChapterProgress[];
      },
      string
    >({
      query: (courseId) => `/progress/course/${courseId}`,
      providesTags: (result, error, courseId) => [
        { type: "Progress", id: courseId },
      ],
    }),

    updateChapterProgress: builder.mutation<
      ChapterProgress,
      {
        chapterId: string;
        enrollmentId: string;
        watchedDuration: number;
        isCompleted?: boolean;
      }
    >({
      query: (body) => ({
        url: `/progress/chapter`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { chapterId }) => [
        { type: "Progress", id: "LIST" },
      ],
    }),

    // ============================================
    // REVIEWS
    // ============================================
    getCourseReviews: builder.query<
      {
        reviews: Array<{
          id: string;
          rating: number;
          comment: string;
          user: { firstName: string; lastName: string; avatar?: string };
          createdAt: string;
        }>;
        averageRating: number;
        totalReviews: number;
      },
      string
    >({
      query: (courseId) => `/reviews/course/${courseId}`,
      providesTags: (result, error, courseId) => [
        { type: "Reviews", id: courseId },
      ],
    }),

    createReview: builder.mutation<
      { review: any; message: string },
      { courseId: string; rating: number; comment: string }
    >({
      query: (body) => ({
        url: `/reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { courseId }) => [
        { type: "Reviews", id: courseId },
        { type: "Courses", id: courseId },
      ],
    }),

    // ============================================
    // PAYMENT & CHECKOUT
    // ============================================
    createCheckoutSession: builder.mutation<
      { sessionId: string; url: string },
      { courseId: string }
    >({
      query: (body) => ({
        // server mounts payment routes under /payments
        url: `/payment/create-checkout-session`,
        method: "POST",
        body,
      }),
    }),

    verifyPayment: builder.mutation<
      { success: boolean; enrollment?: any },
      { sessionId: string }
    >({
      query: (body) => ({
        // server mounts payment routes under /payments
        url: `/payment/verify`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Enrollments"],
    }),

    // Get a single chapter by id by fetching the parent course and extracting
    // the chapter. Server doesn't expose chapter-by-id endpoint, so do this
    // client-side to satisfy pages that import useGetChapterByIdQuery.
    getChapterById: builder.query<
      Chapter,
      { courseId: string; chapterId: string }
    >({
      async queryFn(arg, _queryApi, _extraOptions, fetchWithBQ) {
        if (!arg?.courseId || !arg?.chapterId) {
          return {
            error: {
              status: 400,
              error: "Missing courseId or chapterId",
            } as any,
          };
        }
        const res: any = await fetchWithBQ({ url: `courses/${arg.courseId}` });
        if (res.error) return { error: res.error };
        const course = res.data;
        const allChapters =
          course?.sections?.flatMap((s: any) => s.chapters || []) || [];
        const found = allChapters.find((c: any) => c.id === arg.chapterId);
        if (!found)
          return { error: { status: 404, error: "Chapter not found" } as any };
        return { data: found };
      },
    }),
  }),
});

// Hooks
export const {
  // Courses
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
  useGetCourseByIdQuery,
  useLazyGetCourseByIdQuery,

  // Search & Categories
  useGetSearchSuggestionsQuery,
  useLazyGetSearchSuggestionsQuery,
  useGetCategoriesQuery,

  // Enrollments
  useEnrollInCourseMutation,
  useGetEnrollmentStatusQuery,
  useLazyGetEnrollmentStatusQuery,
  useGetUserEnrollmentsQuery,

  // Progress
  useGetCourseProgressQuery,
  useLazyGetCourseProgressQuery,
  useUpdateChapterProgressMutation,

  // Reviews
  useGetCourseReviewsQuery,
  useCreateReviewMutation,

  // Chapters
  useGetChapterByIdQuery,

  // Payment & Checkout - ADDED THESE MISSING EXPORTS
  useCreateCheckoutSessionMutation,
  useVerifyPaymentMutation,
} = api;
