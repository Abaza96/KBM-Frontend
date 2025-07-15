import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from "../common/pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
           { path: '', element: <Navigate to="/lessons" /> },
        //    { path: 'lessons', element: <LessonLayout /> },
        //    { path: 'lessons-learned', element: <LearnedLessonsLayout /> },
        //    { path: 'procedures', element: <ProceduresLayout /> },
        ],
    },
    { path: '*', element: <ErrorPage /> },
])

export function AppRoutes() {
    return <RouterProvider router={router} />;    
}