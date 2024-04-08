import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/pages/home/Home";
import AllProperties from "../components/pages/properties/AllProperties";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <AllProperties></AllProperties>,
                        loader: () => fetch('/estate-data.json')
                    }
                ]
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);
