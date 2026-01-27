import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Banner from "../pages/Banner";
import PrivateRouter from "./PrivateRouter";
import AddTouristSpot from "../pages/AddTouristSpot";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            // Define child routes here
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

            // Private Routes
            {
                path: "/add-spot",
                element: (
                    <PrivateRouter>
                        <AddTouristSpot></AddTouristSpot>
                    </PrivateRouter>
                )
            }
            
        ]
    }
]);

export default router;