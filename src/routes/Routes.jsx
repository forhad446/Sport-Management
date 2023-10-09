import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";
import EventDetails from "../pages/EventDetails";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/:name",
        loader: () => fetch('./services.json'),
        element: <PrivateRoute><EventDetails /></PrivateRoute>
      }
    ]
  },
]);

export default routes;