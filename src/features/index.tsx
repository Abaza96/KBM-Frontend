// src/router/index.ts
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../core/pages/ErrorPage";

// Feature routes:
import { lessonsRouter } from "../features/lessons/routes/LessonsRoutes";
// import { adminRouter } from "./admin/routes/AdminRoutes"; // Similar structure
// import { libsRouter } from "./libraries/routes/LibsRoutes";
// import { proceduresRouter } from "./procedures/routes/ProceduresRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Default redirect or landing:
      { path: "", element: <Navigate to="lessons" replace /> },

      lessonsRouter,
      // adminRouter,
      // libsRouter,
      // proceduresRouter,

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
