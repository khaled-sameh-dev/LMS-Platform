import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Section {
  id: string;
  title: string;
  description: string;
  order: number;
  chapters: Chapter[];
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  order: number;
  videoUrl?: string;
  duration?: number;
  content?: string;
}

interface CourseCreationState {
  currentStep: number;
  courseData: any;
  sections: Section[];
  isDraft: boolean;
}

const initialState: CourseCreationState = {
  currentStep: 0,
  courseData: null,
  sections: [],
  isDraft: true,
};

const courseCreationSlice = createSlice({
  name: "courseCreation",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setCourseData: (state, action: PayloadAction<any>) => {
      state.courseData = action.payload;
    },
    addSection: (state, action: PayloadAction<Section>) => {
      state.sections.push(action.payload);
    },
    updateSection: (
      state,
      action: PayloadAction<{ id: string; data: Partial<Section> }>
    ) => {
      const index = state.sections.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.sections[index] = {
          ...state.sections[index],
          ...action.payload.data,
        };
      }
    },
    deleteSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter((s) => s.id !== action.payload);
    },
    addChapter: (
      state,
      action: PayloadAction<{ sectionId: string; chapter: Chapter }>
    ) => {
      const section = state.sections.find(
        (s) => s.id === action.payload.sectionId
      );
      if (section) {
        section.chapters.push(action.payload.chapter);
      }
    },
    updateChapter: (
      state,
      action: PayloadAction<{
        sectionId: string;
        chapterId: string;
        data: Partial<Chapter>;
      }>
    ) => {
      const section = state.sections.find(
        (s) => s.id === action.payload.sectionId
      );
      if (section) {
        const chapterIndex = section.chapters.findIndex(
          (c) => c.id === action.payload.chapterId
        );
        if (chapterIndex !== -1) {
          section.chapters[chapterIndex] = {
            ...section.chapters[chapterIndex],
            ...action.payload.data,
          };
        }
      }
    },
    deleteChapter: (
      state,
      action: PayloadAction<{ sectionId: string; chapterId: string }>
    ) => {
      const section = state.sections.find(
        (s) => s.id === action.payload.sectionId
      );
      if (section) {
        section.chapters = section.chapters.filter(
          (c) => c.id !== action.payload.chapterId
        );
      }
    },
    resetCourseCreation: () => initialState,
  },
});

export const {
  setCurrentStep,
  setCourseData,
  addSection,
  updateSection,
  deleteSection,
  addChapter,
  updateChapter,
  deleteChapter,
  resetCourseCreation,
} = courseCreationSlice.actions;

export default courseCreationSlice.reducer;
