import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Media from "../Components/Media/Media";
import Profile from "../Components/Profile/Profile";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <Profile></Profile>,
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
    path: "/media",
    element: (
      <PrivateRoute>
        <Media></Media>
      </PrivateRoute>
    ),
  },
]);