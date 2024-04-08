import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/pages/home/Home";
import AllProperties from "../components/pages/properties/AllProperties";

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
            }
        ]
    },
]);
