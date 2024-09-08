import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Home/Home.jsx";
import Register from "./Pages/Register/register.jsx";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard.jsx";
import AdminLogin from "./Pages/AdminLogin/AdminLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
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
