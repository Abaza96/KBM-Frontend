import { Navigate } from "react-router-dom";
import LessonsLayout from "../layouts/LessonsLayout";

// import LessonsListPage from "../pages/LessonsListPage";
// import LessonDetailPage from "../pages/LessonDetailPage";

export const lessonsRouter = {
  path: "/",
  element: <LessonsLayout />,
  children: [
    { path: "", element: <Navigate to="lessons" replace /> },
    //   { path: 'lessons', element: <LessonsListPage /> },
    //   { path: 'lessons/:id', element: <LessonDetailPage /> },
  ],
};
