import * as z from "zod";

export const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  categoryId: z.string().min(1, "Please select a category"),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  price: z.number().min(0, "Price must be positive"),
  isFree: z.boolean(),
  imageUrl: z.string().url("Please provide a valid image URL").optional(),
});

export const sectionSchema = z.object({
  title: z.string().min(3, "Section title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  order: z.number().int().positive(),
});

export const chapterSchema = z.object({
  title: z.string().min(3, "Chapter title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  order: z.number().int().positive(),
  videoUrl: z.string().url("Please provide a valid video URL").optional(),
  duration: z.number().min(0).optional(),
  content: z.string().optional(),
});

export type CourseFormData = z.infer<typeof courseSchema>;
export type SectionFormData = z.infer<typeof sectionSchema>;
export type ChapterFormData = z.infer<typeof chapterSchema>;
