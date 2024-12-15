import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/route2",
        element: <h1>Route2 Page</h1>,
      },
      {
        path: "/route3",
        element: <h1>Route3 Page</h1>,
      },
      {
        path: "/route4",
        element: <h1>Route4 Page</h1>,
      },
      {
        path: "/route5",
        element: <h1>Route5 Page</h1>,
      },
    ],
  },
]);

export default Routes;
