import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import Order from "../components/Order/Order";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/Register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;