import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../core/pages/ErrorPage";
import { adminRouter } from "./admin/routes/AdminRoutes";
import { lessonsRouter } from "./lessons/routes/LessonsRoutes";
import { libsRouter } from "./libraries/routes/LibsRoutes";
import { proceduresRouter } from "./procedures/routes/ProceduresRoutes";

export const router = createBrowserRouter([
    ...adminRouter,
    ...lessonsRouter,
    ...libsRouter,
    ...proceduresRouter,
    { path: '*', element: <ErrorPage /> }
]);