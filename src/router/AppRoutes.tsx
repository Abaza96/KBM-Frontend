import { RouterProvider } from "react-router-dom";
import { router } from "../features";

export function AppRoutes() {
    return <RouterProvider router={router} />;    
}