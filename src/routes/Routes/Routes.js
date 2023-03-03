import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import { Home, About, Courses } from '../../pages'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/courses",
                element: <Courses />
            }
        ]
    }
]);