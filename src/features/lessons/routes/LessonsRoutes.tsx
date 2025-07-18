import { Navigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";

export const lessonsRouter = [
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
]