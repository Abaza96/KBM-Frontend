import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Lesson } from '../models/Lesson';

interface LessonsState {
  lessons: Lesson[];
  selectedLessonId?: string;
}

const initialState: LessonsState = {
  lessons: [],
  selectedLessonId: undefined,
};

const LessonReducer = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setLessons(state, action: PayloadAction<Lesson[]>) {
      state.lessons = action.payload;
    },
    addLesson(state, action: PayloadAction<Lesson>) {
      state.lessons.push(action.payload);
    },
    updateLesson(state, action: PayloadAction<Lesson>) {
      const idx = state.lessons.findIndex(lesson => lesson.id === action.payload.id);
      if (idx !== -1) {
        state.lessons[idx] = action.payload;
      }
    },
    removeLesson(state, action: PayloadAction<string>) {
      state.lessons = state.lessons.filter(lesson => lesson.id !== action.payload);
    },
    selectLesson(state, action: PayloadAction<string | undefined>) {
      state.selectedLessonId = action.payload;
    },
  },
});

export const {
  setLessons,
  addLesson,
  updateLesson,
  removeLesson,
  selectLesson,
} = LessonReducer.actions;

export default LessonReducer.reducer;