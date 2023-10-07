import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";
import EventDetails from "../pages/EventDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        {
            path: "/:name",
            loader: () => fetch('./services.json'),
            element: <EventDetails></EventDetails>
        }
      ]
    },
  ]);

export default routes;