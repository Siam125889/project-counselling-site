import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Register from "./Pages/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
