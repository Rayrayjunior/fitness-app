import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx";
import Addfood from "./pages/addfood.jsx";
import Workouttracker from "./pages/workouttracker.jsx"
import WeightTracker from "./pages/weighttracker.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                index: true,
                element: <Addfood />
            },
            {
                path: "workout-tracker",
                element: <Workouttracker />
            },
            {
                path: "weight-tracker", //This is what goes into the navbarlink
                element: <WeightTracker />
            }
            
        ]
    }
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);