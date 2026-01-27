import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";
import AddTouristSpot from "../pages/AddTouristSpot";

import MyList from "../pages/MyList";
import AllTouristSpots from "../pages/AllTouristSpots";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            // Define child routes here
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/tourist-spots')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            
            {
                path: "/all-tourist-spots",
                element: <AllTouristSpots>  </AllTouristSpots>,
                loader: () => fetch('http://localhost:3000/tourist-spots')
            },

            // Private Routes
            {
                path: "/add-spot",
                element: (
                    <PrivateRouter>
                        <AddTouristSpot></AddTouristSpot>
                    </PrivateRouter>
                )
            },
            {
                path: "/my-list",
                element: (
                    <PrivateRouter>
                        <MyList></MyList>
                    </PrivateRouter>
                )
            },
            
        ]
    }
]);

export default router;