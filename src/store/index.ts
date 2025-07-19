import { configureStore } from '@reduxjs/toolkit';
import LessonReducer from '../features/lessons/redux/LessonReducer';

export const store = configureStore({
  reducer: {
    lesson: LessonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
