import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import { Home, About, Courses, Contact, Login, Register } from '../../pages'

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
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    }
]);