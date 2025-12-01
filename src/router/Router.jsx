import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import SkillDetails from "../pages/SkillDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "skills/:skillId",
        element: (
          <PrivateRoutes>
            <SkillDetails></SkillDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/*",
        element: <h2>Error404</h2>,
      },
    ],
  },
]);

export default router;
