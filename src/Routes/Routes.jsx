import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home> ,
            },
            {
                path:"/menu",
                element:<Menu></Menu>
            }
        ]
    }
])

export default router;